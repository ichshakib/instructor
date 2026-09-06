import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';

const WISHLIST_STORAGE_KEY = 'instructor_wishlist_courses_v1';
const SAVED_COURSES_STORAGE_KEY = 'instructor_saved_courses_v1';
const ENROLLED_COURSES_STORAGE_KEY = 'instructor_enrolled_courses_v1';

interface LearningContextType {
  savedCourseIds: string[];
  wishlistCourseIds: string[];
  enrolledCourseIds: string[];
  isSaved: (courseId: string) => boolean;
  isWishlisted: (courseId: string) => boolean;
  toggleSaveCourse: (courseId: string) => Promise<void>;
  toggleWishlist: (courseId: string) => Promise<void>;
  isEnrolled: (courseId: string) => boolean;
  enrollInCourse: (courseId: string) => Promise<void>;
  isLoading: boolean;
}

const LearningContext = createContext<LearningContextType>({
  savedCourseIds: [],
  wishlistCourseIds: [],
  enrolledCourseIds: ['german-language-course'],
  isSaved: () => false,
  isWishlisted: () => false,
  toggleSaveCourse: async () => {},
  toggleWishlist: async () => {},
  isEnrolled: () => false,
  enrollInCourse: async () => {},
  isLoading: true,
});

export function LearningProvider({ children }: { children: React.ReactNode }) {
  const [wishlistCourseIds, setWishlistCourseIds] = useState<string[]>([]);
  const [enrolledCourseIds, setEnrolledCourseIds] = useState<string[]>(['german-language-course']);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    async function loadStoredData() {
      try {
        const [wishlistJson, savedJson, enrolledJson] = await Promise.all([
          AsyncStorage.getItem(WISHLIST_STORAGE_KEY),
          AsyncStorage.getItem(SAVED_COURSES_STORAGE_KEY),
          AsyncStorage.getItem(ENROLLED_COURSES_STORAGE_KEY),
        ]);

        if (isMounted) {
          const loadedWishlist = wishlistJson || savedJson;
          if (loadedWishlist) {
            setWishlistCourseIds(JSON.parse(loadedWishlist));
          }
          if (enrolledJson) {
            setEnrolledCourseIds(JSON.parse(enrolledJson));
          }
        }
      } catch (e) {
        console.warn('Failed to load wishlist/courses from storage', e);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadStoredData();
    return () => {
      isMounted = false;
    };
  }, []);

  const isWishlisted = (courseId: string) => {
    return wishlistCourseIds.includes(courseId);
  };

  const isSaved = isWishlisted;

  const toggleWishlist = async (courseId: string) => {
    const nextWishlist = wishlistCourseIds.includes(courseId)
      ? wishlistCourseIds.filter((id) => id !== courseId)
      : [courseId, ...wishlistCourseIds];

    setWishlistCourseIds(nextWishlist);
    try {
      await Promise.all([
        AsyncStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(nextWishlist)),
        AsyncStorage.setItem(SAVED_COURSES_STORAGE_KEY, JSON.stringify(nextWishlist)),
      ]);
    } catch (e) {
      console.warn('Failed to save wishlist to storage', e);
    }
  };

  const toggleSaveCourse = toggleWishlist;

  const isEnrolled = (courseId: string) => {
    return enrolledCourseIds.includes(courseId);
  };

  const enrollInCourse = async (courseId: string) => {
    if (enrolledCourseIds.includes(courseId)) return;
    const nextEnrolled = [...enrolledCourseIds, courseId];
    setEnrolledCourseIds(nextEnrolled);
    try {
      await AsyncStorage.setItem(ENROLLED_COURSES_STORAGE_KEY, JSON.stringify(nextEnrolled));
    } catch (e) {
      console.warn('Failed to save enrollment to storage', e);
    }
  };

  return (
    <LearningContext.Provider
      value={{
        savedCourseIds: wishlistCourseIds,
        wishlistCourseIds,
        enrolledCourseIds,
        isSaved,
        isWishlisted,
        toggleSaveCourse,
        toggleWishlist,
        isEnrolled,
        enrollInCourse,
        isLoading,
      }}
    >
      {children}
    </LearningContext.Provider>
  );
}

export function useLearning() {
  const context = useContext(LearningContext);
  if (!context) {
    throw new Error('useLearning must be used within a LearningProvider');
  }
  return context;
}
