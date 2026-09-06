import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useEffect, useState, useMemo } from 'react';
import {
  ActivityIndicator,
  Pressable,
  RefreshControl,
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

export default function WishlistScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const { wishlistCourseIds, isLoading: isStorageLoading } = useLearning();

  const [allCourses, setAllCourses] = useState<CourseItem[]>([]);
  const [isCoursesLoading, setIsCoursesLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Monochromatic palette tokens
  const bgColor = isDark ? '#09090B' : '#FFFFFF';
  const cardBg = isDark ? '#121214' : '#FFFFFF';
  const textColor = isDark ? '#FFFFFF' : '#09090B';
  const mutedText = isDark ? '#A1A1AA' : '#71717A';
  const borderColor = isDark ? '#27272A' : '#E4E4E7';
  const activeColor = isDark ? '#FFFFFF' : '#09090B';
  const activeTextColor = isDark ? '#09090B' : '#FFFFFF';

  const loadCourses = async () => {
    try {
      const data = await fetchCourses();
      setAllCourses(data);
    } catch (e) {
      console.warn('Error loading courses for wishlist:', e);
    } finally {
      setIsCoursesLoading(false);
      setIsRefreshing(false);
    }
  };

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
        console.warn('Error loading courses for wishlist:', e);
        if (isMounted) {
          setIsCoursesLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const onRefresh = () => {
    setIsRefreshing(true);
    loadCourses();
  };

  // Map wishlistCourseIds in order of saving
  const wishlistedCourses: CourseItem[] = useMemo(() => {
    return wishlistCourseIds
      .map((id) => allCourses.find((c) => c.id === id))
      .filter((c): c is CourseItem => Boolean(c));
  }, [wishlistCourseIds, allCourses]);

  const isLoading = isStorageLoading || isCoursesLoading;

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: bgColor }]} edges={['top']}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={onRefresh}
            tintColor={activeColor}
          />
        }
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={[styles.headerTitle, { color: textColor }]}>Wishlist</Text>
            <Text style={[styles.headerSubtitle, { color: mutedText }]}>
              {wishlistedCourses.length} {wishlistedCourses.length === 1 ? 'course saved' : 'courses saved'}
            </Text>
          </View>
        </View>

        {/* Content */}
        {isLoading ? (
          <View style={styles.loadingBox}>
            <ActivityIndicator size="large" color={activeColor} />
            <Text style={[styles.loadingText, { color: mutedText }]}>
              Loading wishlist...
            </Text>
          </View>
        ) : wishlistedCourses.length === 0 ? (
          <View style={[styles.emptyBox, { backgroundColor: cardBg, borderColor }]}>
            <Ionicons
              name="heart-outline"
              size={44}
              color={mutedText}
              style={{ marginBottom: 14 }}
            />
            <Text style={[styles.emptyTitle, { color: textColor }]}>
              Your Wishlist is Empty
            </Text>
            <Text style={[styles.emptySub, { color: mutedText }]}>
              Explore courses and tap the heart icon to save the learning tracks you love for later.
            </Text>

            <Pressable
              onPress={() => router.push('/courses')}
              style={({ pressed }) => [
                styles.browseBtn,
                { backgroundColor: activeColor },
                pressed && styles.pressed,
              ]}
            >
              <Text style={[styles.browseBtnText, { color: activeTextColor }]}>
                Browse Courses
              </Text>
            </Pressable>
          </View>
        ) : (
          <View style={styles.listContainer}>
            {wishlistedCourses.map((course) => (
              <MobileCourseCard
                key={`wishlist-${course.id}`}
                course={course}
                variant="compact"
              />
            ))}
          </View>
        )}

        <View style={{ height: 36 }} />
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '800',
    letterSpacing: -0.4,
  },
  headerSubtitle: {
    fontSize: 13,
    fontWeight: '500',
    marginTop: 2,
  },
  listContainer: {
    marginTop: 4,
  },
  loadingBox: {
    paddingVertical: 50,
    alignItems: 'center',
    gap: 12,
  },
  loadingText: {
    fontSize: 13,
  },
  emptyBox: {
    padding: 36,
    borderRadius: 20,
    borderWidth: 1,
    alignItems: 'center',
    marginTop: 40,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
  },
  emptySub: {
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 19,
    marginBottom: 24,
    maxWidth: 260,
  },
  browseBtn: {
    paddingHorizontal: 22,
    paddingVertical: 12,
    borderRadius: 14,
  },
  browseBtnText: {
    fontSize: 13,
    fontWeight: '700',
  },
  pressed: {
    opacity: 0.8,
  },
});
