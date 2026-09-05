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
  useWindowDimensions,
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
  instructorRole: string;
  thumbnail: string;
  duration: string;
  lessonsCount: number;
  price: string;
  bookmarksCount?: number;
}

const CATEGORIES = [
  'All',
  'Artificial Intelligence',
  'Business',
  'Development',
  'Design',
  'Languages',
  'Cloud Computing',
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
    title: 'UX Design Fundamentals & Prototyping',
    category: 'Design',
    instructor: 'Fannie DuBuque',
    instructorAvatar:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80',
    instructorRole: 'Top Rated Instructor',
    thumbnail:
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&auto=format&fit=crop&q=80',
    duration: '1h 20 mins',
    lessonsCount: 30,
    price: '$249',
    bookmarksCount: 4120,
  },
  {
    id: 'c3',
    title: 'German A1: Foundations & Daily Dialogue',
    category: 'Languages',
    instructor: 'Dr. Klaus Weber',
    instructorAvatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80',
    instructorRole: 'Certified Language Coach',
    thumbnail:
      'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&auto=format&fit=crop&q=80',
    duration: '4h 30 mins',
    lessonsCount: 48,
    price: 'Enrolled',
    bookmarksCount: 8932,
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
    instructorRole: 'Lead Architect',
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
    instructorRole: 'Cloud Solutions Specialist',
    thumbnail:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&auto=format&fit=crop&q=80',
    duration: '1h 20 mins',
    lessonsCount: 30,
    price: '$399',
  },
  {
    id: 'p3',
    title: 'German A2: Elementary Fluency & Speaking',
    category: 'Languages',
    instructor: 'Greta Fischer',
    instructorAvatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80',
    instructorRole: 'German Native Tutor',
    thumbnail:
      'https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?w=300&auto=format&fit=crop&q=80',
    duration: '5h 15 mins',
    lessonsCount: 60,
    price: '$179',
  },
];

export default function HomeScreen() {
  const router = useRouter();
  const { userName } = useOnboarding();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const { width } = useWindowDimensions();

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarkedIds, setBookmarkedIds] = useState<Record<string, boolean>>({});

  // Palette tokens
  const bgColor = isDark ? '#090D16' : '#FAFAFC';
  const cardBg = isDark ? '#131D2E' : '#FFFFFF';
  const textColor = isDark ? '#F8FAFC' : '#0F172A';
  const mutedText = isDark ? '#94A3B8' : '#64748B';
  const borderColor = isDark ? '#24344D' : '#E2E8F0';
  const primaryColor = '#2563EB';

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

  // Filter courses based on category and search
  const filteredFeatured = FEATURED_COURSES.filter((c) => {
    const matchesCat = selectedCategory === 'All' || c.category === selectedCategory;
    const matchesSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const filteredPopular = POPULAR_COURSES.filter((c) => {
    const matchesCat = selectedCategory === 'All' || c.category === selectedCategory;
    const matchesSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: bgColor }]} edges={['top']}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* TOP HEADER (MATCHING REFERENCE IMAGE 1) */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={[styles.welcomeLabel, { color: mutedText }]}>Welcome,</Text>
            <Text style={[styles.userNameTitle, { color: textColor }]}>
              {userName || 'Maria Waelchi'}
            </Text>
          </View>

          <View style={styles.headerRight}>
            {/* Notification Bell with Red Dot */}
            <Pressable style={({ pressed }) => [styles.iconBtn, pressed && styles.pressed]}>
              <Ionicons name="notifications-outline" size={22} color={textColor} />
              <View style={styles.unreadDot} />
            </Pressable>

            {/* Circular Profile Avatar */}
            <Pressable
              onPress={() => router.push('/settings')}
              style={({ pressed }) => [styles.avatarWrap, pressed && styles.pressed]}
            >
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80',
                }}
                style={styles.avatarImage}
              />
            </Pressable>
          </View>
        </View>

        {/* SEARCH BAR ROW */}
        <View style={styles.searchRow}>
          <View
            style={[
              styles.searchBar,
              { backgroundColor: cardBg, borderColor },
            ]}
          >
            <Ionicons name="search-outline" size={20} color="#94A3B8" style={styles.searchIcon} />
            <TextInput
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder="Search For Courses"
              placeholderTextColor="#94A3B8"
              style={[styles.searchInput, { color: textColor }]}
            />
            <Pressable style={styles.searchArrowBtn}>
              <Ionicons name="arrow-forward" size={18} color="#64748B" />
            </Pressable>
          </View>

          {/* Filter button */}
          <Pressable
            style={({ pressed }) => [
              styles.filterButton,
              { backgroundColor: cardBg, borderColor },
              pressed && styles.pressed,
            ]}
          >
            <Ionicons name="options-outline" size={20} color={textColor} />
          </Pressable>
        </View>

        {/* CATEGORY FILTER CHIPS (HORIZONTAL SCROLL) */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesScroll}
        >
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <Pressable
                key={cat}
                onPress={() => setSelectedCategory(cat)}
                style={({ pressed }) => [
                  styles.categoryChip,
                  isSelected
                    ? [styles.selectedChip, { borderColor: primaryColor }]
                    : [styles.unselectedChip, { borderColor }],
                  pressed && styles.pressed,
                ]}
              >
                <Text
                  style={[
                    styles.categoryText,
                    {
                      color: isSelected ? primaryColor : mutedText,
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

        {/* FEATURED / RECOMMENDED COURSES CAROUSEL (HORIZONTAL) */}
        <View style={styles.featuredSection}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.featuredCarousel}
          >
            {filteredFeatured.map((course) => {
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
                  {/* Card Image Banner */}
                  <View style={styles.thumbnailWrap}>
                    <Image
                      source={{ uri: course.thumbnail }}
                      style={styles.thumbnailImage}
                      resizeMode="cover"
                    />

                    {/* Bookmark Badge on Image */}
                    {course.bookmarksCount && (
                      <View style={styles.imageBookmarkBadge}>
                        <Ionicons name="bookmark" size={12} color="#FFFFFF" />
                        <Text style={styles.imageBookmarkText}>{course.bookmarksCount}</Text>
                      </View>
                    )}
                  </View>

                  {/* Card Body */}
                  <View style={styles.featuredBody}>
                    <View style={styles.cardCatRow}>
                      <View
                        style={[
                          styles.catPill,
                          { backgroundColor: isDark ? '#1E293B' : '#EFF6FF' },
                        ]}
                      >
                        <Text style={[styles.catPillText, { color: primaryColor }]}>
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
                          color={primaryColor}
                        />
                      </Pressable>
                    </View>

                    {/* Course Title */}
                    <Text
                      style={[styles.featuredTitle, { color: textColor }]}
                      numberOfLines={2}
                    >
                      {course.title}
                    </Text>

                    {/* Instructor Row */}
                    <View style={styles.instructorRow}>
                      <Image
                        source={{ uri: course.instructorAvatar }}
                        style={styles.instructorSmallAvatar}
                      />
                      <View style={styles.instructorTextWrap}>
                        <Text
                          style={[styles.instructorName, { color: textColor }]}
                          numberOfLines={1}
                        >
                          {course.instructor}
                        </Text>
                        <Text style={[styles.instructorRole, { color: mutedText }]}>
                          {course.instructorRole}
                        </Text>
                      </View>
                    </View>

                    {/* Meta Stats & Price */}
                    <View style={styles.featuredFooter}>
                      <Text style={[styles.metaText, { color: mutedText }]}>
                        {course.duration} • {course.lessonsCount} lessons
                      </Text>
                      <Text style={[styles.priceText, { color: textColor }]}>
                        {course.price}
                      </Text>
                    </View>
                  </View>
                </Pressable>
              );
            })}
          </ScrollView>
        </View>

        {/* POPULAR COURSES SECTION (VERTICAL LIST) */}
        <View style={styles.popularSection}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: textColor }]}>Popular Courses</Text>
            <Pressable onPress={() => router.push('/courses')} hitSlop={8}>
              <Text style={[styles.viewAllText, { color: primaryColor }]}>View All</Text>
            </Pressable>
          </View>

          <View style={styles.popularList}>
            {filteredPopular.map((course) => {
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
                    style={styles.popularThumbnail}
                    resizeMode="cover"
                  />

                  {/* Right Content */}
                  <View style={styles.popularInfo}>
                    <View style={styles.popularTopRow}>
                      <View
                        style={[
                          styles.catPill,
                          { backgroundColor: isDark ? '#1E293B' : '#EFF6FF' },
                        ]}
                      >
                        <Text style={[styles.catPillText, { color: primaryColor }]}>
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
                          color={primaryColor}
                        />
                      </Pressable>
                    </View>

                    <Text
                      style={[styles.popularTitle, { color: textColor }]}
                      numberOfLines={2}
                    >
                      {course.title}
                    </Text>

                    <View style={styles.popularInstructorRow}>
                      <Image
                        source={{ uri: course.instructorAvatar }}
                        style={styles.popularInstructorAvatar}
                      />
                      <Text
                        style={[styles.popularInstructorName, { color: mutedText }]}
                        numberOfLines={1}
                      >
                        {course.instructor}
                      </Text>
                    </View>

                    <View style={styles.popularFooter}>
                      <Text style={[styles.metaText, { color: mutedText }]}>
                        {course.duration} • {course.lessonsCount} lessons
                      </Text>
                      <Text style={[styles.popularPrice, { color: textColor }]}>
                        {course.price}
                      </Text>
                    </View>
                  </View>
                </Pressable>
              );
            })}
          </View>
        </View>

        <View style={{ height: 24 }} />
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
    paddingTop: 12,
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
    fontWeight: '500',
  },
  userNameTitle: {
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: -0.3,
    marginTop: 2,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  unreadDot: {
    position: 'absolute',
    top: 9,
    right: 9,
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: '#EF4444',
  },
  avatarWrap: {
    width: 42,
    height: 42,
    borderRadius: 21,
    overflow: 'hidden',
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
  },
  avatarImage: {
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
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    height: 48,
    borderRadius: 14,
    borderWidth: 1,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    height: '100%',
  },
  searchArrowBtn: {
    padding: 4,
  },
  filterButton: {
    width: 48,
    height: 48,
    borderRadius: 14,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoriesScroll: {
    paddingHorizontal: 20,
    gap: 8,
    marginBottom: 18,
  },
  categoryChip: {
    paddingVertical: 7,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1.5,
  },
  selectedChip: {
    backgroundColor: 'transparent',
  },
  unselectedChip: {
    backgroundColor: 'transparent',
  },
  categoryText: {
    fontSize: 13,
  },
  featuredSection: {
    marginBottom: 24,
  },
  featuredCarousel: {
    paddingHorizontal: 20,
    gap: 14,
  },
  featuredCard: {
    width: 260,
    borderRadius: 20,
    borderWidth: 1,
    overflow: 'hidden',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  thumbnailWrap: {
    position: 'relative',
    width: '100%',
    height: 150,
    backgroundColor: '#0F172A',
  },
  thumbnailImage: {
    width: '100%',
    height: '100%',
  },
  imageBookmarkBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 4,
  },
  imageBookmarkText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },
  featuredBody: {
    padding: 14,
  },
  cardCatRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  catPill: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  catPillText: {
    fontSize: 11,
    fontWeight: '700',
  },
  featuredTitle: {
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 20,
    marginBottom: 10,
    height: 40,
  },
  instructorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  instructorSmallAvatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    marginRight: 8,
  },
  instructorTextWrap: {
    flex: 1,
  },
  instructorName: {
    fontSize: 12,
    fontWeight: '700',
  },
  instructorRole: {
    fontSize: 10,
  },
  featuredFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
  },
  metaText: {
    fontSize: 11,
    fontWeight: '500',
  },
  priceText: {
    fontSize: 15,
    fontWeight: '800',
  },
  popularSection: {
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: -0.2,
  },
  viewAllText: {
    fontSize: 13,
    fontWeight: '700',
  },
  popularList: {
    gap: 12,
  },
  popularCard: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 16,
    borderWidth: 1,
    gap: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },
  popularThumbnail: {
    width: 90,
    height: 90,
    borderRadius: 12,
    backgroundColor: '#0F172A',
  },
  popularInfo: {
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
    lineHeight: 18,
    marginTop: 2,
  },
  popularInstructorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  popularInstructorAvatar: {
    width: 18,
    height: 18,
    borderRadius: 9,
  },
  popularInstructorName: {
    fontSize: 11,
  },
  popularFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  popularPrice: {
    fontSize: 14,
    fontWeight: '800',
  },
  pressed: {
    opacity: 0.7,
  },
  pressedCard: {
    opacity: 0.95,
    transform: [{ scale: 0.99 }],
  },
});
