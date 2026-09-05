import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';

const SAVED_COURSES_STORAGE_KEY = 'instructor_saved_courses_v1';
const ENROLLED_COURSES_STORAGE_KEY = 'instructor_enrolled_courses_v1';

interface LearningContextType {
  savedCourseIds: string[];
  enrolledCourseIds: string[];
  isSaved: (courseId: string) => boolean;
  toggleSaveCourse: (courseId: string) => Promise<void>;
  isEnrolled: (courseId: string) => boolean;
  enrollInCourse: (courseId: string) => Promise<void>;
  isLoading: boolean;
}

const LearningContext = createContext<LearningContextType>({
  savedCourseIds: [],
  enrolledCourseIds: ['german-language-course'],
  isSaved: () => false,
  toggleSaveCourse: async () => {},
  isEnrolled: () => false,
  enrollInCourse: async () => {},
  isLoading: true,
});

export function LearningProvider({ children }: { children: React.ReactNode }) {
  const [savedCourseIds, setSavedCourseIds] = useState<string[]>([]);
  const [enrolledCourseIds, setEnrolledCourseIds] = useState<string[]>(['german-language-course']);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    async function loadStoredData() {
      try {
        const [savedJson, enrolledJson] = await Promise.all([
          AsyncStorage.getItem(SAVED_COURSES_STORAGE_KEY),
          AsyncStorage.getItem(ENROLLED_COURSES_STORAGE_KEY),
        ]);

        if (isMounted) {
          if (savedJson) {
            setSavedCourseIds(JSON.parse(savedJson));
          }
          if (enrolledJson) {
            setEnrolledCourseIds(JSON.parse(enrolledJson));
          }
        }
      } catch (e) {
        console.warn('Failed to load saved learning courses from storage', e);
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

  const isSaved = (courseId: string) => {
    return savedCourseIds.includes(courseId);
  };

  const toggleSaveCourse = async (courseId: string) => {
    const nextSaved = savedCourseIds.includes(courseId)
      ? savedCourseIds.filter((id) => id !== courseId)
      : [...savedCourseIds, courseId];

    setSavedCourseIds(nextSaved);
    try {
      await AsyncStorage.setItem(SAVED_COURSES_STORAGE_KEY, JSON.stringify(nextSaved));
    } catch (e) {
      console.warn('Failed to save course to storage', e);
    }
  };

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
        savedCourseIds,
        enrolledCourseIds,
        isSaved,
        toggleSaveCourse,
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
