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
  const { savedCourseIds, enrolledCourseIds } = useLearning();

  const [allCourses, setAllCourses] = useState<CourseItem[]>([]);
  const [filter, setFilter] = useState<'all' | 'saved' | 'enrolled'>('all');
  const [isLoading, setIsLoading] = useState(true);

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
          setIsLoading(false);
        }
      })
      .catch((e) => {
        console.warn('Error loading courses:', e);
        if (isMounted) {
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const savedCourses = allCourses.filter((c) => savedCourseIds.includes(c.id));
  const enrolledCourses = allCourses.filter(
    (c) => enrolledCourseIds.includes(c.id) || c.id === 'german-language-course'
  );

  let displayedCourses: CourseItem[] = [];
  if (filter === 'saved') {
    displayedCourses = savedCourses;
  } else if (filter === 'enrolled') {
    displayedCourses = enrolledCourses;
  } else {
    const set = new Set<string>();
    displayedCourses = [...enrolledCourses, ...savedCourses].filter((c) => {
      if (set.has(c.id)) return false;
      set.add(c.id);
      return true;
    });
  }

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: bgColor }]} edges={['top']}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={[styles.headerTitle, { color: textColor }]}>My Learning</Text>
          <Text style={[styles.headerSubtitle, { color: mutedText }]}>
            Your enrolled tracks and saved courses
          </Text>
        </View>

        {/* Filter Pills */}
        <View style={styles.filterRow}>
          {[
            { id: 'all', label: `All (${savedCourses.length + enrolledCourses.length})` },
            { id: 'saved', label: `Saved (${savedCourses.length})` },
            { id: 'enrolled', label: `Enrolled (${enrolledCourses.length})` },
          ].map((item) => {
            const active = filter === item.id;
            return (
              <Pressable
                key={item.id}
                onPress={() => setFilter(item.id as any)}
                style={({ pressed }) => [
                  styles.filterChip,
                  active
                    ? [
                        styles.activeFilterChip,
                        { backgroundColor: activeColor },
                      ]
                    : [
                        styles.inactiveFilterChip,
                        { backgroundColor: cardBg, borderColor },
                      ],
                  pressed && styles.pressed,
                ]}
              >
                <Text
                  style={[
                    styles.filterChipText,
                    {
                      color: active ? activeTextColor : mutedText,
                      fontWeight: active ? '700' : '500',
                    },
                  ]}
                >
                  {item.label}
                </Text>
              </Pressable>
            );
          })}
        </View>

        {/* Courses List */}
        {isLoading ? (
          <View style={styles.loadingBox}>
            <ActivityIndicator size="large" color={activeColor} />
            <Text style={[styles.loadingText, { color: mutedText }]}>Loading your learning list...</Text>
          </View>
        ) : displayedCourses.length === 0 ? (
          <View style={[styles.emptyBox, { backgroundColor: cardBg, borderColor }]}>
            <Ionicons
              name={filter === 'saved' ? 'bookmark-outline' : 'book-outline'}
              size={40}
              color={mutedText}
              style={{ marginBottom: 10 }}
            />
            <Text style={[styles.emptyTitle, { color: textColor }]}>
              {filter === 'saved' ? 'No saved courses yet' : 'No courses in this list'}
            </Text>
            <Text style={[styles.emptySub, { color: mutedText }]}>
              {filter === 'saved'
                ? 'Tap the bookmark icon on any course in Home to save it here for quick access.'
                : 'Explore available courses on the Home tab to start learning.'}
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
          displayedCourses.map((course) => (
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
    paddingTop: 16,
    paddingBottom: 24,
  },
  header: {
    marginBottom: 16,
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
  filterRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 20,
  },
  filterChip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
  },
  activeFilterChip: {},
  inactiveFilterChip: {
    borderWidth: 1,
  },
  filterChipText: {
    fontSize: 12,
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
    marginTop: 10,
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
