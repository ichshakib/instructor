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
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { MobileCourseCard } from '@/components/mobile-course-card';
import { useOnboarding } from '@/context/onboarding-context';
import { CourseItem, fetchCourses } from '@/services/api';

const CATEGORIES = [
  'All Courses',
  'Language',
  'Development',
  'Design',
  'AI & Data',
  'Business',
];

export default function HomeScreen() {
  const router = useRouter();
  const { userName } = useOnboarding();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const [courses, setCourses] = useState<CourseItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All Courses');
  const [searchQuery, setSearchQuery] = useState('');

  // Pure monochromatic black and white palette (Zero blue)
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
      setCourses(data);
    } catch (e) {
      console.warn('Error loading courses:', e);
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    let isMounted = true;
    fetchCourses()
      .then((data) => {
        if (isMounted) {
          setCourses(data);
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

  const onRefresh = () => {
    setIsRefreshing(true);
    loadCourses();
  };

  // Filter courses by category and search
  const filteredCourses = useMemo(() => {
    return courses.filter((c) => {
      const matchesCategory =
        selectedCategory === 'All Courses' ||
        c.category.toLowerCase() === selectedCategory.toLowerCase();

      const term = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !term ||
        c.title.toLowerCase().includes(term) ||
        c.tag1?.toLowerCase().includes(term) ||
        c.tag2?.toLowerCase().includes(term) ||
        (c.description && c.description.toLowerCase().includes(term));

      return matchesCategory && matchesSearch;
    });
  }, [courses, selectedCategory, searchQuery]);

  // Horizontal row courses (featured or first slice of courses)
  const horizontalCourses = useMemo(() => {
    if (filteredCourses.length <= 3) {
      return filteredCourses;
    }
    const featured = filteredCourses.filter((c) => c.featured);
    return featured.length >= 2 ? featured : filteredCourses.slice(0, 5);
  }, [filteredCourses]);

  // Popular courses (vertical list)
  const popularCourses = useMemo(() => {
    return filteredCourses;
  }, [filteredCourses]);

  const handleViewAll = () => {
    if (selectedCategory !== 'All Courses') {
      setSelectedCategory('All Courses');
    }
    setSearchQuery('');
  };

  const isSearching = searchQuery.trim().length > 0;

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
        {/* HEADER */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={[styles.welcomeLabel, { color: mutedText }]}>Welcome back,</Text>
            <Text style={[styles.userNameTitle, { color: textColor }]}>
              {userName || 'Learner'}
            </Text>
          </View>

          <View style={styles.headerRight}>
            <Pressable
              style={({ pressed }) => [
                styles.notificationBtn,
                { backgroundColor: cardBg, borderColor },
                pressed && styles.pressed,
              ]}
              hitSlop={8}
            >
              <Ionicons name="notifications-outline" size={19} color={textColor} />
            </Pressable>
          </View>
        </View>

        {/* SEARCH BAR ROW */}
        <View style={styles.searchRow}>
          <View style={[styles.searchBox, { backgroundColor: cardBg, borderColor }]}>
            <Ionicons name="search-outline" size={18} color={mutedText} style={styles.searchIcon} />
            <TextInput
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder="Search courses, skills, or tags..."
              placeholderTextColor={mutedText}
              style={[styles.searchInput, { color: textColor }]}
            />
            {searchQuery.length > 0 ? (
              <Pressable onPress={() => setSearchQuery('')} hitSlop={8}>
                <Ionicons name="close-circle" size={18} color={mutedText} />
              </Pressable>
            ) : null}
          </View>
        </View>

        {/* CATEGORY CHIPS */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryScroll}
        >
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <Pressable
                key={cat}
                onPress={() => setSelectedCategory(cat)}
                style={({ pressed }) => [
                  styles.categoryPill,
                  isSelected
                    ? [
                        styles.selectedCategoryPill,
                        { backgroundColor: activeColor, borderColor: activeColor },
                      ]
                    : [
                        styles.unselectedCategoryPill,
                        { backgroundColor: cardBg, borderColor },
                      ],
                  pressed && styles.pressed,
                ]}
              >
                <Text
                  style={[
                    styles.categoryPillText,
                    {
                      color: isSelected ? activeTextColor : mutedText,
                      fontWeight: isSelected ? '700' : '500',
                    },
                  ]}
                >
                  {cat}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>

        {/* LOADING STATE */}
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={activeColor} />
            <Text style={[styles.loadingText, { color: mutedText }]}>
              Loading courses...
            </Text>
          </View>
        ) : filteredCourses.length === 0 ? (
          /* EMPTY STATE */
          <View style={[styles.emptyContainer, { backgroundColor: cardBg, borderColor }]}>
            <Ionicons name="book-outline" size={36} color={mutedText} style={{ marginBottom: 8 }} />
            <Text style={[styles.emptyTitle, { color: textColor }]}>No courses found</Text>
            <Text style={[styles.emptySub, { color: mutedText }]}>
              Try adjusting your search query or choosing another category.
            </Text>
          </View>
        ) : isSearching ? (
          /* SEARCH RESULTS VERTICAL LIST */
          <View style={styles.popularSection}>
            <View style={styles.sectionHeaderRow}>
              <Text style={[styles.sectionHeading, { color: textColor }]}>
                Search Results
              </Text>
              <Text style={[styles.countBadge, { color: mutedText }]}>
                {filteredCourses.length} {filteredCourses.length === 1 ? 'course' : 'courses'}
              </Text>
            </View>

            {filteredCourses.map((course) => (
              <MobileCourseCard key={`search-${course.id}`} course={course} variant="compact" />
            ))}
          </View>
        ) : (
          /* DUAL LAYOUT: 1) HORIZONTAL SCROLL ROW + 2) POPULAR COURSES VERTICAL AREA */
          <>
            {/* 1. FIRST ROW: HORIZONTAL SCROLLABLE COURSES */}
            <View style={styles.horizontalSection}>
              <View style={styles.horizontalHeaderRow}>
                <Text style={[styles.sectionHeading, { color: textColor }]}>
                  {selectedCategory === 'All Courses' ? 'Featured Tracks' : `${selectedCategory} Tracks`}
                </Text>
                <Text style={[styles.countBadge, { color: mutedText }]}>
                  Swipe to browse
                </Text>
              </View>

              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.horizontalScrollContent}
              >
                {horizontalCourses.map((course) => (
                  <MobileCourseCard
                    key={`carousel-${course.id}`}
                    course={course}
                    variant="carousel"
                  />
                ))}
              </ScrollView>
            </View>

            {/* 2. SECOND SECTION: POPULAR COURSES VERTICAL AREA */}
            <View style={styles.popularSection}>
              <View style={styles.sectionHeaderRow}>
                <Text style={[styles.sectionHeading, { color: textColor }]}>
                  Popular Courses
                </Text>
                <Pressable
                  onPress={handleViewAll}
                  hitSlop={8}
                  style={({ pressed }) => [pressed && styles.pressed]}
                >
                  <Text style={[styles.viewAllText, { color: textColor }]}>
                    View All
                  </Text>
                </Pressable>
              </View>

              {/* Vertical list using compact side-by-side cards */}
              {popularCourses.map((course) => (
                <MobileCourseCard
                  key={`pop-${course.id}`}
                  course={course}
                  variant="compact"
                />
              ))}
            </View>
          </>
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
    paddingTop: 8,
    paddingBottom: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  headerLeft: {
    flex: 1,
  },
  welcomeLabel: {
    fontSize: 13,
    fontWeight: '500',
    marginBottom: 2,
  },
  userNameTitle: {
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: -0.3,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  notificationBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchRow: {
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    height: 48,
    borderRadius: 14,
    borderWidth: 1,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    height: '100%',
  },
  categoryScroll: {
    paddingHorizontal: 20,
    gap: 8,
    marginBottom: 22,
  },
  categoryPill: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
  },
  selectedCategoryPill: {},
  unselectedCategoryPill: {},
  categoryPillText: {
    fontSize: 13,
  },

  // 1. Horizontal Scroll Row Styles
  horizontalSection: {
    marginBottom: 26,
  },
  horizontalHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  horizontalScrollContent: {
    paddingHorizontal: 20,
    gap: 14,
  },

  // 2. Popular Courses Vertical Section Styles
  popularSection: {
    paddingHorizontal: 20,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: -0.2,
  },
  viewAllText: {
    fontSize: 13,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
  countBadge: {
    fontSize: 12,
    fontWeight: '500',
  },

  // Loading & Empty States
  loadingContainer: {
    paddingVertical: 40,
    alignItems: 'center',
    gap: 12,
  },
  loadingText: {
    fontSize: 13,
  },
  emptyContainer: {
    marginHorizontal: 20,
    padding: 32,
    borderRadius: 16,
    borderWidth: 1,
    alignItems: 'center',
    textAlign: 'center',
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  emptySub: {
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 18,
  },
  pressed: {
    opacity: 0.75,
  },
});
