import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useOnboarding } from '@/context/onboarding-context';

interface Course {
  id: string;
  title: string;
  category: string;
  instructor: string;
  instructorAvatar: string;
  instructorRole?: string;
  thumbnail: string;
  duration: string;
  lessonsCount: number;
  price?: string;
  bookmarksCount?: number;
}

const CATEGORIES = [
  'All',
  'Artificial Intelligence',
  'Business',
  'Development',
  'Design',
];

const FEATURED_COURSES: Course[] = [
  {
    id: 'c1',
    title: 'Advanced Machine Learning Algorithms',
    category: 'Artificial Intelligence',
    instructor: 'Stanley Mante',
    instructorAvatar:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
    instructorRole: 'Top Rated Instructor',
    thumbnail:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80',
    duration: '1h 20 mins',
    lessonsCount: 30,
    price: '$299',
    bookmarksCount: 6473,
  },
  {
    id: 'c2',
    title: 'UX Design Fundamentals',
    category: 'Design',
    instructor: 'Fannie DuBuque',
    instructorAvatar:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80',
    instructorRole: 'Top Rated Instructor',
    thumbnail:
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&auto=format&fit=crop&q=80',
    duration: '1h 20 mins',
    lessonsCount: 30,
  },
];

const POPULAR_COURSES: Course[] = [
  {
    id: 'p1',
    title: 'Full Stack Web Development Bootcamp',
    category: 'Web Development',
    instructor: 'Dawn Corwin',
    instructorAvatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    thumbnail:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&auto=format&fit=crop&q=80',
    duration: '1h 20 mins',
    lessonsCount: 30,
    price: '$399',
  },
  {
    id: 'p2',
    title: 'Cloud Computing Fundamentals',
    category: 'Cloud Computing',
    instructor: 'Pat Daugherty',
    instructorAvatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    thumbnail:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&auto=format&fit=crop&q=80',
    duration: '1h 20 mins',
    lessonsCount: 30,
    price: '$399',
  },
];

export default function HomeScreen() {
  const router = useRouter();
  const { userName } = useOnboarding();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarkedIds, setBookmarkedIds] = useState<Record<string, boolean>>({});

  // Clean, minimal tokens matching the reference image
  const bgColor = isDark ? '#0F141C' : '#FAFBFD';
  const cardBg = isDark ? '#161F2C' : '#FFFFFF';
  const textColor = isDark ? '#F9FAFB' : '#1E2433';
  const mutedText = isDark ? '#9CA3AF' : '#8A92A6';
  const borderColor = isDark ? '#263345' : '#E8ECF2';
  const primaryBlue = '#2563EB';

  const toggleBookmark = (id: string) => {
    setBookmarkedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const openCourse = (course: Course) => {
    router.push({
      pathname: '/course-details' as any,
      params: {
        id: course.id,
        title: course.title,
        category: course.category,
        instructor: course.instructor,
        image: course.thumbnail,
      },
    });
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: bgColor }]} edges={['top']}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* HEADER: Welcome, Maria Waelchi + Bell + Profile Avatar */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={[styles.welcomeLabel, { color: mutedText }]}>Welcome,</Text>
            <Text style={[styles.userNameTitle, { color: textColor }]}>
              {userName || 'Maria Waelchi'}
            </Text>
          </View>

          <View style={styles.headerRight}>
            {/* Notification Bell */}
            <Pressable
              style={({ pressed }) => [
                styles.bellBtn,
                { backgroundColor: isDark ? '#1F2937' : '#F3F4F6' },
                pressed && styles.pressed,
              ]}
            >
              <Ionicons name="notifications-outline" size={20} color={textColor} />
              <View style={styles.redDot} />
            </Pressable>

            {/* Profile Avatar */}
            <Pressable
              onPress={() => router.push('/settings')}
              style={({ pressed }) => [styles.avatarContainer, pressed && styles.pressed]}
            >
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80',
                }}
                style={styles.avatarImg}
              />
            </Pressable>
          </View>
        </View>

        {/* SEARCH BAR ROW */}
        <View style={styles.searchRow}>
          <View style={[styles.searchBox, { backgroundColor: cardBg, borderColor }]}>
            <Ionicons name="search-outline" size={18} color="#9CA3AF" style={styles.searchIcon} />
            <TextInput
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder="Search For Courses"
              placeholderTextColor="#9CA3AF"
              style={[styles.searchInput, { color: textColor }]}
            />
            <Ionicons name="arrow-forward" size={18} color="#9CA3AF" style={{ marginRight: 4 }} />
          </View>

          {/* Filter button */}
          <Pressable
            style={({ pressed }) => [
              styles.filterBtn,
              { backgroundColor: cardBg, borderColor },
              pressed && styles.pressed,
            ]}
          >
            <Ionicons name="options-outline" size={20} color={textColor} />
          </Pressable>
        </View>

        {/* CATEGORY CHIPS (HORIZONTAL SCROLL) */}
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
                    ? [styles.selectedCategoryPill, { borderColor: primaryBlue }]
                    : [styles.unselectedCategoryPill, { borderColor }],
                  pressed && styles.pressed,
                ]}
              >
                <Text
                  style={[
                    styles.categoryPillText,
                    {
                      color: isSelected ? primaryBlue : mutedText,
                      fontWeight: isSelected ? '600' : '400',
                    },
                  ]}
                >
                  {cat}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>

        {/* FEATURED COURSES CAROUSEL (HORIZONTAL SCROLL) */}
        <View style={styles.featuredSection}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.featuredScroll}
          >
            {FEATURED_COURSES.map((course) => {
              const isBookmarked = bookmarkedIds[course.id];
              return (
                <Pressable
                  key={course.id}
                  onPress={() => openCourse(course)}
                  style={({ pressed }) => [
                    styles.featuredCard,
                    { backgroundColor: cardBg, borderColor },
                    pressed && styles.pressedCard,
                  ]}
                >
                  {/* Thumbnail Image */}
                  <View style={styles.featuredImageWrap}>
                    <Image
                      source={{ uri: course.thumbnail }}
                      style={styles.featuredImage}
                      resizeMode="cover"
                    />

                    {/* Bookmark Badge */}
                    {course.bookmarksCount && (
                      <View style={styles.bookmarkCountBadge}>
                        <Ionicons name="bookmark" size={11} color="#FFFFFF" />
                        <Text style={styles.bookmarkCountText}>{course.bookmarksCount}</Text>
                      </View>
                    )}
                  </View>

                  {/* Card Content */}
                  <View style={styles.featuredContent}>
                    {/* Category Pill & Bookmark Icon */}
                    <View style={styles.cardHeaderRow}>
                      <View
                        style={[
                          styles.catBadge,
                          { backgroundColor: isDark ? '#1E293B' : '#EFF6FF' },
                        ]}
                      >
                        <Text style={[styles.catBadgeText, { color: primaryBlue }]}>
                          {course.category}
                        </Text>
                      </View>

                      <Pressable
                        onPress={() => toggleBookmark(course.id)}
                        hitSlop={8}
                      >
                        <Ionicons
                          name={isBookmarked ? 'bookmark' : 'bookmark-outline'}
                          size={18}
                          color={mutedText}
                        />
                      </Pressable>
                    </View>

                    {/* Course Title */}
                    <Text
                      style={[styles.featuredCourseTitle, { color: textColor }]}
                      numberOfLines={1}
                    >
                      {course.title}...
                    </Text>

                    {/* Instructor Row */}
                    <View style={styles.featuredInstructorRow}>
                      <Image
                        source={{ uri: course.instructorAvatar }}
                        style={styles.instructorImg}
                      />
                      <View>
                        <Text style={[styles.instructorName, { color: textColor }]}>
                          {course.instructor}
                        </Text>
                        <Text style={[styles.instructorRole, { color: mutedText }]}>
                          {course.instructorRole}
                        </Text>
                      </View>
                    </View>

                    {/* Meta Row (Duration & Price) */}
                    <View style={styles.featuredFooterRow}>
                      <Text style={[styles.metaDurationText, { color: mutedText }]}>
                        {course.duration} • {course.lessonsCount} lessons
                      </Text>
                      {course.price ? (
                        <Text style={[styles.metaPriceText, { color: textColor }]}>
                          {course.price}
                        </Text>
                      ) : null}
                    </View>
                  </View>
                </Pressable>
              );
            })}
          </ScrollView>
        </View>

        {/* POPULAR COURSES SECTION (VERTICAL LIST) */}
        <View style={styles.popularSection}>
          <View style={styles.popularHeaderRow}>
            <Text style={[styles.sectionHeading, { color: textColor }]}>Popular Courses</Text>
            <Pressable onPress={() => router.push('/courses')} hitSlop={8}>
              <Text style={[styles.viewAllBtn, { color: primaryBlue }]}>View All</Text>
            </Pressable>
          </View>

          <View style={styles.popularList}>
            {POPULAR_COURSES.map((course) => {
              const isBookmarked = bookmarkedIds[course.id];
              return (
                <Pressable
                  key={course.id}
                  onPress={() => openCourse(course)}
                  style={({ pressed }) => [
                    styles.popularCard,
                    { backgroundColor: cardBg, borderColor },
                    pressed && styles.pressedCard,
                  ]}
                >
                  {/* Left Thumbnail */}
                  <Image
                    source={{ uri: course.thumbnail }}
                    style={styles.popularThumb}
                    resizeMode="cover"
                  />

                  {/* Right Details */}
                  <View style={styles.popularDetails}>
                    <View style={styles.popularTopRow}>
                      <View
                        style={[
                          styles.catBadge,
                          { backgroundColor: isDark ? '#1E293B' : '#EFF6FF' },
                        ]}
                      >
                        <Text style={[styles.catBadgeText, { color: primaryBlue }]}>
                          {course.category}
                        </Text>
                      </View>

                      <Pressable
                        onPress={() => toggleBookmark(course.id)}
                        hitSlop={8}
                      >
                        <Ionicons
                          name={isBookmarked ? 'bookmark' : 'bookmark-outline'}
                          size={16}
                          color={mutedText}
                        />
                      </Pressable>
                    </View>

                    <Text style={[styles.popularTitle, { color: textColor }]} numberOfLines={1}>
                      {course.title}
                    </Text>

                    <View style={styles.popularInstructor}>
                      <Image
                        source={{ uri: course.instructorAvatar }}
                        style={styles.popularInstructorAvatar}
                      />
                      <Text style={[styles.popularInstructorName, { color: mutedText }]}>
                        {course.instructor}
                      </Text>
                    </View>

                    <View style={styles.popularFooter}>
                      <Text style={[styles.metaDurationText, { color: mutedText }]}>
                        {course.duration} • {course.lessonsCount} lessons
                      </Text>
                      <Text style={[styles.metaPriceText, { color: textColor }]}>
                        {course.price}
                      </Text>
                    </View>
                  </View>
                </Pressable>
              );
            })}
          </View>
        </View>

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
    fontSize: 14,
    marginBottom: 2,
  },
  userNameTitle: {
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: -0.2,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  bellBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  redDot: {
    position: 'absolute',
    top: 9,
    right: 9,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#EF4444',
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },
  avatarImg: {
    width: '100%',
    height: '100%',
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 10,
    marginBottom: 16,
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    height: 46,
    borderRadius: 12,
    borderWidth: 1,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    height: '100%',
  },
  filterBtn: {
    width: 46,
    height: 46,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryScroll: {
    paddingHorizontal: 20,
    gap: 8,
    marginBottom: 18,
  },
  categoryPill: {
    paddingVertical: 7,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
  },
  selectedCategoryPill: {
    backgroundColor: 'transparent',
  },
  unselectedCategoryPill: {
    backgroundColor: 'transparent',
  },
  categoryPillText: {
    fontSize: 13,
  },
  featuredSection: {
    marginBottom: 22,
  },
  featuredScroll: {
    paddingHorizontal: 20,
    gap: 14,
  },
  featuredCard: {
    width: 250,
    borderRadius: 16,
    borderWidth: 1,
    overflow: 'hidden',
  },
  featuredImageWrap: {
    position: 'relative',
    width: '100%',
    height: 140,
    backgroundColor: '#0F172A',
  },
  featuredImage: {
    width: '100%',
    height: '100%',
  },
  bookmarkCountBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 10,
    gap: 3,
  },
  bookmarkCountText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '600',
  },
  featuredContent: {
    padding: 12,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  catBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  catBadgeText: {
    fontSize: 11,
    fontWeight: '600',
  },
  featuredCourseTitle: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 8,
  },
  featuredInstructorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 8,
  },
  instructorImg: {
    width: 26,
    height: 26,
    borderRadius: 13,
  },
  instructorName: {
    fontSize: 12,
    fontWeight: '600',
  },
  instructorRole: {
    fontSize: 10,
  },
  featuredFooterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  metaDurationText: {
    fontSize: 11,
  },
  metaPriceText: {
    fontSize: 15,
    fontWeight: '700',
  },
  popularSection: {
    paddingHorizontal: 20,
  },
  popularHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionHeading: {
    fontSize: 17,
    fontWeight: '700',
  },
  viewAllBtn: {
    fontSize: 13,
    fontWeight: '600',
  },
  popularList: {
    gap: 12,
  },
  popularCard: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 14,
    borderWidth: 1,
    gap: 12,
  },
  popularThumb: {
    width: 80,
    height: 80,
    borderRadius: 10,
    backgroundColor: '#0F172A',
  },
  popularDetails: {
    flex: 1,
    justifyContent: 'space-between',
  },
  popularTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  popularTitle: {
    fontSize: 13,
    fontWeight: '700',
  },
  popularInstructor: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  popularInstructorAvatar: {
    width: 16,
    height: 16,
    borderRadius: 8,
  },
  popularInstructorName: {
    fontSize: 11,
  },
  popularFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.7,
  },
  pressedCard: {
    opacity: 0.95,
  },
});
