import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { MobileCourseCard } from '@/components/mobile-course-card';
import { useLearning } from '@/context/learning-context';
import { CourseItem, fetchCourses } from '@/services/api';

export default function MyLearningScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const { savedCourseIds, isLoading: isStorageLoading } = useLearning();

  const [allCourses, setAllCourses] = useState<CourseItem[]>([]);
  const [isCoursesLoading, setIsCoursesLoading] = useState(true);

  // Pure monochromatic black and white palette (Zero blue)
  const bgColor = isDark ? '#09090B' : '#FFFFFF';
  const cardBg = isDark ? '#121214' : '#FFFFFF';
  const textColor = isDark ? '#FFFFFF' : '#09090B';
  const mutedText = isDark ? '#A1A1AA' : '#71717A';
  const borderColor = isDark ? '#27272A' : '#E4E4E7';
  const activeColor = isDark ? '#FFFFFF' : '#09090B';
  const activeTextColor = isDark ? '#09090B' : '#FFFFFF';

  useEffect(() => {
    let isMounted = true;
    fetchCourses()
      .then((data) => {
        if (isMounted) {
          setAllCourses(data);
          setIsCoursesLoading(false);
        }
      })
      .catch((e) => {
        console.warn('Error loading courses:', e);
        if (isMounted) {
          setIsCoursesLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  // Map savedCourseIds in order (latest saved is at index 0)
  const savedCourses: CourseItem[] = savedCourseIds
    .map((id) => allCourses.find((c) => c.id === id))
    .filter((c): c is CourseItem => Boolean(c));

  const isLoading = isStorageLoading || isCoursesLoading;

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: bgColor }]} edges={['top']}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Top Header - Borderless and shadowless */}
        <View style={styles.header}>
          <Text style={[styles.headerTitle, { color: textColor }]}>My Learning</Text>
          <Text style={[styles.headerSubtitle, { color: mutedText }]}>
            {savedCourses.length} {savedCourses.length === 1 ? 'saved course' : 'saved courses'}
          </Text>
        </View>

        {/* Saved Courses List */}
        {isLoading ? (
          <View style={styles.loadingBox}>
            <ActivityIndicator size="large" color={activeColor} />
            <Text style={[styles.loadingText, { color: mutedText }]}>
              Loading saved courses...
            </Text>
          </View>
        ) : savedCourses.length === 0 ? (
          <View style={[styles.emptyBox, { backgroundColor: cardBg, borderColor }]}>
            <Ionicons
              name="bookmark-outline"
              size={40}
              color={mutedText}
              style={{ marginBottom: 12 }}
            />
            <Text style={[styles.emptyTitle, { color: textColor }]}>
              No saved courses yet
            </Text>
            <Text style={[styles.emptySub, { color: mutedText }]}>
              Bookmark any course from Home to save it here for quick access.
            </Text>

            <Pressable
              onPress={() => router.push('/')}
              style={({ pressed }) => [
                styles.browseBtn,
                { backgroundColor: activeColor },
                pressed && styles.pressed,
              ]}
            >
              <Text
                style={[
                  styles.browseBtnText,
                  { color: activeTextColor },
                ]}
              >
                Browse Courses
              </Text>
            </Pressable>
          </View>
        ) : (
          savedCourses.map((course) => (
            <MobileCourseCard key={course.id} course={course} />
          ))
        )}

        <View style={{ height: 28 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 24,
  },
  header: {
    marginBottom: 20,
    borderBottomWidth: 0, // Borderless top bar
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '800',
    letterSpacing: -0.3,
  },
  headerSubtitle: {
    fontSize: 13,
    marginTop: 2,
  },
  loadingBox: {
    paddingVertical: 40,
    alignItems: 'center',
    gap: 12,
  },
  loadingText: {
    fontSize: 13,
  },
  emptyBox: {
    padding: 32,
    borderRadius: 18,
    borderWidth: 1,
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 20,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 6,
  },
  emptySub: {
    fontSize: 13,
    lineHeight: 18,
    textAlign: 'center',
    marginBottom: 18,
  },
  browseBtn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
  },
  browseBtnText: {
    fontSize: 13,
    fontWeight: '700',
  },
  pressed: {
    opacity: 0.75,
  },
});
