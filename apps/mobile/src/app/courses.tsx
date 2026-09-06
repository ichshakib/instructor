import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState, useMemo, useCallback } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  RefreshControl,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { MobileCourseCard } from '@/components/mobile-course-card';
import { CourseItem, fetchCourses } from '@/services/api';

const CATEGORIES = [
  'All Courses',
  'Development',
  'Language',
  'AI & Data',
  'Design',
  'Business',
];

const INITIAL_BATCH_SIZE = 4;
const BATCH_SIZE = 4;

export default function CoursesScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const [allCourses, setAllCourses] = useState<CourseItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState('All Courses');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(INITIAL_BATCH_SIZE);

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
      console.warn('Error fetching courses for Courses screen:', e);
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
          setAllCourses(data);
          setIsLoading(false);
        }
      })
      .catch((e) => {
        console.warn('Error fetching courses:', e);
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const onRefresh = () => {
    setIsRefreshing(true);
    setVisibleCount(INITIAL_BATCH_SIZE);
    loadCourses();
  };

  // Filter courses by category and search term
  const filteredCourses = useMemo(() => {
    return allCourses.filter((c) => {
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
  }, [allCourses, selectedCategory, searchQuery]);

  // Reset pagination on filter or search change
  useEffect(() => {
    setVisibleCount(INITIAL_BATCH_SIZE);
  }, [selectedCategory, searchQuery]);

  // Sliced data for on-scroll pagination (Infinite Scroll)
  const paginatedCourses = useMemo(() => {
    return filteredCourses.slice(0, visibleCount);
  }, [filteredCourses, visibleCount]);

  const hasMore = visibleCount < filteredCourses.length;

  // Infinite Scroll Trigger
  const handleLoadMore = useCallback(() => {
    if (isLoadingMore || !hasMore || isLoading) return;

    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + BATCH_SIZE, filteredCourses.length));
      setIsLoadingMore(false);
    }, 350);
  }, [isLoadingMore, hasMore, isLoading, filteredCourses.length]);

  const renderHeader = () => (
    <View>
      {/* Top Header */}
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: textColor }]}>Courses</Text>
        <Text style={[styles.headerSubtitle, { color: mutedText }]}>
          {filteredCourses.length} {filteredCourses.length === 1 ? 'course available' : 'courses available'}
        </Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchRow}>
        <View style={[styles.searchBox, { backgroundColor: cardBg, borderColor }]}>
          <Ionicons name="search-outline" size={18} color={mutedText} style={styles.searchIcon} />
          <TextInput
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Search all courses and topics..."
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

      {/* Category Pills */}
      <FlatList
        horizontal
        data={CATEGORIES}
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryScroll}
        renderItem={({ item: cat }) => {
          const isSelected = selectedCategory === cat;
          return (
            <Pressable
              onPress={() => setSelectedCategory(cat)}
              style={({ pressed }) => [
                styles.categoryPill,
                isSelected
                  ? [styles.selectedCategoryPill, { backgroundColor: activeColor, borderColor: activeColor }]
                  : [styles.unselectedCategoryPill, { backgroundColor: cardBg, borderColor }],
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
        }}
        style={styles.categoryList}
      />
    </View>
  );

  const renderFooter = () => {
    if (isLoadingMore) {
      return (
        <View style={styles.footerLoader}>
          <ActivityIndicator size="small" color={activeColor} />
          <Text style={[styles.footerText, { color: mutedText }]}>
            Loading more courses...
          </Text>
        </View>
      );
    }

    if (!hasMore && filteredCourses.length > INITIAL_BATCH_SIZE) {
      return (
        <View style={styles.footerEnd}>
          <Text style={[styles.footerText, { color: mutedText }]}>
            All {filteredCourses.length} courses loaded
          </Text>
        </View>
      );
    }

    return <View style={{ height: 24 }} />;
  };

  const renderEmpty = () => {
    if (isLoading) {
      return (
        <View style={styles.loadingBox}>
          <ActivityIndicator size="large" color={activeColor} />
          <Text style={[styles.loadingText, { color: mutedText }]}>
            Loading courses...
          </Text>
        </View>
      );
    }

    return (
      <View style={[styles.emptyBox, { backgroundColor: cardBg, borderColor }]}>
        <Ionicons name="book-outline" size={40} color={mutedText} style={{ marginBottom: 12 }} />
        <Text style={[styles.emptyTitle, { color: textColor }]}>No courses found</Text>
        <Text style={[styles.emptySub, { color: mutedText }]}>
          Try adjusting your search query or selecting a different category.
        </Text>
        <Pressable
          onPress={() => {
            setSearchQuery('');
            setSelectedCategory('All Courses');
          }}
          style={({ pressed }) => [
            styles.resetBtn,
            { backgroundColor: activeColor },
            pressed && styles.pressed,
          ]}
        >
          <Text style={[styles.resetBtnText, { color: activeTextColor }]}>Reset Filters</Text>
        </Pressable>
      </View>
    );
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: bgColor }]} edges={['top']}>
      <FlatList
        data={paginatedCourses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MobileCourseCard course={item} variant="compact" />
        )}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        ListEmptyComponent={renderEmpty}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.4}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={onRefresh}
            tintColor={activeColor}
          />
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 24,
  },
  header: {
    marginBottom: 16,
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
  searchRow: {
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
  categoryList: {
    marginBottom: 18,
    marginHorizontal: -20,
  },
  categoryScroll: {
    paddingHorizontal: 20,
    gap: 8,
  },
  categoryPill: {
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 18,
    borderWidth: 1,
  },
  selectedCategoryPill: {},
  unselectedCategoryPill: {},
  categoryPillText: {
    fontSize: 12,
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
    padding: 32,
    borderRadius: 18,
    borderWidth: 1,
    alignItems: 'center',
    marginTop: 24,
  },
  emptyTitle: {
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 4,
  },
  emptySub: {
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 20,
  },
  resetBtn: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 12,
  },
  resetBtnText: {
    fontSize: 12,
    fontWeight: '700',
  },
  footerLoader: {
    paddingVertical: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  footerEnd: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    fontWeight: '500',
  },
  pressed: {
    opacity: 0.8,
  },
});
