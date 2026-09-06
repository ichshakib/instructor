import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { useLearning } from '@/context/learning-context';
import { API_BASE_URL, CourseItem } from '@/services/api';

export interface MobileCourseCardProps {
  course: CourseItem;
  variant?: 'carousel' | 'compact' | 'standard';
}

export function MobileCourseCard({ course, variant = 'compact' }: MobileCourseCardProps) {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const { isSaved, toggleSaveCourse } = useLearning();

  const saved = isSaved(course.id);

  // Monochromatic palette tokens (Zero Blue)
  const cardBg = isDark ? '#121214' : '#FFFFFF';
  const borderColor = isDark ? '#27272A' : '#E4E4E7';
  const textColor = isDark ? '#FFFFFF' : '#09090B';
  const mutedText = isDark ? '#A1A1AA' : '#71717A';
  const accentColor = isDark ? '#FFFFFF' : '#09090B';
  const bannerBg = isDark ? '#18181B' : '#F4F4F5';
  const pillBg = isDark ? '#27272A' : '#F4F4F5';

  const resolvedImageUrl = course.imageUrl
    ? course.imageUrl.startsWith('http')
      ? course.imageUrl
      : `${API_BASE_URL}${course.imageUrl}`
    : null;

  const totalChapters =
    course.totalChapters ??
    (Array.isArray(course.curriculum)
      ? course.curriculum.reduce(
          (acc, lvl) => acc + (Array.isArray(lvl.chapters) ? lvl.chapters.length : 0),
          0
        )
      : course.chapters?.length ?? 0);

  const totalLessons =
    course.totalLessons ??
    (Array.isArray(course.curriculum)
      ? course.curriculum.reduce(
          (acc, lvl) =>
            acc +
            (Array.isArray(lvl.chapters)
              ? lvl.chapters.reduce(
                  (cAcc, ch) => cAcc + (Array.isArray(ch.lessons) ? ch.lessons.length : 0),
                  0
                )
              : 0),
          0
        )
      : 0);

  const handleOpenCourse = () => {
    router.push({
      pathname: '/course-details' as any,
      params: { id: course.id },
    });
  };

  const handleToggleBookmark = (e: any) => {
    e.stopPropagation();
    toggleSaveCourse(course.id);
  };

  // 1. CAROUSEL VARIANT (For Horizontal Scrolling Row)
  if (variant === 'carousel') {
    return (
      <Pressable
        onPress={handleOpenCourse}
        style={({ pressed }) => [
          styles.carouselCard,
          { backgroundColor: cardBg, borderColor },
          pressed && styles.pressed,
        ]}
      >
        {/* Cover Image Container */}
        <View style={[styles.carouselCover, { backgroundColor: bannerBg }]}>
          {resolvedImageUrl ? (
            <Image
              source={{ uri: resolvedImageUrl }}
              style={styles.coverImage}
              resizeMode="cover"
            />
          ) : (
            <View style={styles.fallbackContainer}>
              <View style={[styles.coverTopBar, { backgroundColor: accentColor }]} />
              <Ionicons
                name={
                  course.typeIcon === 'path'
                    ? 'trail-sign-outline'
                    : course.typeIcon === 'quiz'
                    ? 'trophy-outline'
                    : 'book-outline'
                }
                size={40}
                color={textColor}
                style={{ opacity: isDark ? 0.18 : 0.12 }}
              />
            </View>
          )}
        </View>

        {/* Content Section */}
        <View style={styles.carouselContent}>
          {/* Top Row: Category Pill + Bookmark Icon */}
          <View style={styles.metaRow}>
            <View style={[styles.categoryPill, { backgroundColor: pillBg }]}>
              <Text style={[styles.categoryText, { color: textColor }]} numberOfLines={1}>
                {course.category || course.tag1 || 'Course'}
              </Text>
            </View>

            <Pressable
              onPress={handleToggleBookmark}
              hitSlop={8}
              style={styles.bookmarkBtn}
              accessibilityLabel="Bookmark Course"
            >
              <Ionicons
                name={saved ? 'bookmark' : 'bookmark-outline'}
                size={18}
                color={textColor}
              />
            </Pressable>
          </View>

          {/* Title */}
          <Text style={[styles.carouselTitle, { color: textColor }]} numberOfLines={2}>
            {course.title}
          </Text>

          {/* Bottom Stats */}
          <View style={styles.statsRow}>
            {totalChapters > 0 && (
              <View style={styles.statItem}>
                <Ionicons name="layers-outline" size={12} color={mutedText} />
                <Text style={[styles.statText, { color: mutedText }]}>
                  {totalChapters} {totalChapters === 1 ? 'Ch' : 'Chs'}
                </Text>
              </View>
            )}

            {totalChapters > 0 && totalLessons > 0 && (
              <Text style={[styles.dotSep, { color: mutedText }]}>•</Text>
            )}

            {totalLessons > 0 && (
              <View style={styles.statItem}>
                <Ionicons name="book-outline" size={12} color={mutedText} />
                <Text style={[styles.statText, { color: mutedText }]}>
                  {totalLessons} Lessons
                </Text>
              </View>
            )}
          </View>
        </View>
      </Pressable>
    );
  }

  // 2. COMPACT VARIANT (For Popular Courses Vertical Area - Side-by-Side)
  if (variant === 'compact') {
    return (
      <Pressable
        onPress={handleOpenCourse}
        style={({ pressed }) => [
          styles.compactCard,
          { backgroundColor: cardBg, borderColor },
          pressed && styles.pressed,
        ]}
      >
        {/* Left Thumbnail */}
        <View style={[styles.thumbnailContainer, { backgroundColor: bannerBg }]}>
          {resolvedImageUrl ? (
            <Image
              source={{ uri: resolvedImageUrl }}
              style={styles.coverImage}
              resizeMode="cover"
            />
          ) : (
            <View style={styles.fallbackThumbnail}>
              <Ionicons
                name={
                  course.typeIcon === 'path'
                    ? 'trail-sign-outline'
                    : course.typeIcon === 'quiz'
                    ? 'trophy-outline'
                    : 'book-outline'
                }
                size={30}
                color={textColor}
                style={{ opacity: isDark ? 0.2 : 0.14 }}
              />
            </View>
          )}
        </View>

        {/* Right Info Column */}
        <View style={styles.compactContent}>
          {/* Header Row: Category Badge on left, Bookmark on right */}
          <View style={styles.metaRow}>
            <View style={[styles.categoryPill, { backgroundColor: pillBg }]}>
              <Text style={[styles.categoryText, { color: textColor }]} numberOfLines={1}>
                {course.category || course.tag1 || 'Course'}
              </Text>
            </View>

            <Pressable
              onPress={handleToggleBookmark}
              hitSlop={8}
              style={styles.bookmarkBtn}
              accessibilityLabel="Bookmark Course"
            >
              <Ionicons
                name={saved ? 'bookmark' : 'bookmark-outline'}
                size={18}
                color={textColor}
              />
            </Pressable>
          </View>

          {/* Title */}
          <Text style={[styles.compactTitle, { color: textColor }]} numberOfLines={2}>
            {course.title}
          </Text>

          {/* Stats / Metadata */}
          <View style={styles.statsRow}>
            {totalChapters > 0 && (
              <View style={styles.statItem}>
                <Ionicons name="layers-outline" size={12} color={mutedText} />
                <Text style={[styles.statText, { color: mutedText }]}>
                  {totalChapters} {totalChapters === 1 ? 'Ch' : 'Chs'}
                </Text>
              </View>
            )}

            {totalChapters > 0 && totalLessons > 0 && (
              <Text style={[styles.dotSep, { color: mutedText }]}>•</Text>
            )}

            {totalLessons > 0 && (
              <View style={styles.statItem}>
                <Ionicons name="book-outline" size={12} color={mutedText} />
                <Text style={[styles.statText, { color: mutedText }]}>
                  {totalLessons} Lessons
                </Text>
              </View>
            )}

            {course.tag1 && (
              <>
                <Text style={[styles.dotSep, { color: mutedText }]}>•</Text>
                <Text style={[styles.statText, { color: mutedText }]} numberOfLines={1}>
                  {course.tag1}
                </Text>
              </>
            )}
          </View>
        </View>
      </Pressable>
    );
  }

  // 3. STANDARD VARIANT (Full width with top cover image)
  return (
    <Pressable
      onPress={handleOpenCourse}
      style={({ pressed }) => [
        styles.standardCard,
        { backgroundColor: cardBg, borderColor },
        pressed && styles.pressed,
      ]}
    >
      <View style={[styles.standardCover, { backgroundColor: bannerBg }]}>
        {resolvedImageUrl ? (
          <Image
            source={{ uri: resolvedImageUrl }}
            style={styles.coverImage}
            resizeMode="cover"
          />
        ) : (
          <View style={styles.fallbackContainer}>
            <View style={[styles.coverTopBar, { backgroundColor: accentColor }]} />
            <Ionicons
              name={
                course.typeIcon === 'path'
                  ? 'trail-sign-outline'
                  : course.typeIcon === 'quiz'
                  ? 'trophy-outline'
                  : 'book-outline'
              }
              size={48}
              color={textColor}
              style={{ opacity: isDark ? 0.12 : 0.08 }}
            />
          </View>
        )}
      </View>

      <View style={styles.standardContent}>
        <View style={styles.metaRow}>
          <View style={[styles.categoryPill, { backgroundColor: pillBg }]}>
            <Text style={[styles.categoryText, { color: textColor }]}>
              {course.category || course.tag1}
            </Text>
          </View>
          <Pressable onPress={handleToggleBookmark} hitSlop={8}>
            <Ionicons
              name={saved ? 'bookmark' : 'bookmark-outline'}
              size={20}
              color={textColor}
            />
          </Pressable>
        </View>

        <Text style={[styles.standardTitle, { color: textColor }]} numberOfLines={2}>
          {course.title}
        </Text>

        {course.description ? (
          <Text style={[styles.standardDescription, { color: mutedText }]} numberOfLines={2}>
            {course.description}
          </Text>
        ) : null}

        <View style={[styles.statsRow, { borderTopWidth: 1, borderTopColor: borderColor, paddingTop: 10 }]}>
          <View style={styles.statsLeft}>
            {totalChapters > 0 && (
              <View style={styles.statItem}>
                <Ionicons name="layers-outline" size={13} color={textColor} />
                <Text style={[styles.statText, { color: textColor }]}>
                  {totalChapters} Chapters
                </Text>
              </View>
            )}
            {totalChapters > 0 && totalLessons > 0 && (
              <Text style={{ color: mutedText, fontSize: 10 }}>•</Text>
            )}
            {totalLessons > 0 && (
              <View style={styles.statItem}>
                <Ionicons name="book-outline" size={13} color={textColor} />
                <Text style={[styles.statText, { color: textColor }]}>
                  {totalLessons} Lessons
                </Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.88,
    transform: [{ scale: 0.985 }],
  },
  coverImage: {
    width: '100%',
    height: '100%',
  },
  coverTopBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 3,
  },
  fallbackContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fallbackThumbnail: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // 1. Carousel Styles (Horizontal row)
  carouselCard: {
    width: 236,
    borderRadius: 16,
    borderWidth: 1,
    overflow: 'hidden',
  },
  carouselCover: {
    height: 124,
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
  },
  carouselContent: {
    padding: 12,
  },
  carouselTitle: {
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 20,
    marginTop: 6,
    marginBottom: 8,
    minHeight: 40,
  },

  // 2. Compact Styles (Popular Courses Vertical List)
  compactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 12,
    gap: 12,
  },
  thumbnailContainer: {
    width: 84,
    height: 84,
    borderRadius: 12,
    overflow: 'hidden',
  },
  compactContent: {
    flex: 1,
    minHeight: 84,
    justifyContent: 'space-between',
  },
  compactTitle: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 19,
    marginVertical: 4,
  },

  // 3. Standard Styles
  standardCard: {
    borderRadius: 16,
    borderWidth: 1,
    overflow: 'hidden',
    marginBottom: 14,
  },
  standardCover: {
    height: 124,
    position: 'relative',
    overflow: 'hidden',
  },
  standardContent: {
    padding: 14,
  },
  standardTitle: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 22,
    marginVertical: 4,
  },
  standardDescription: {
    fontSize: 12,
    lineHeight: 17,
    marginBottom: 10,
  },

  // Shared Meta & Stats Styles
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 6,
  },
  categoryPill: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    maxWidth: '78%',
  },
  categoryText: {
    fontSize: 11,
    fontWeight: '600',
  },
  bookmarkBtn: {
    padding: 2,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  statsLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flex: 1,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statText: {
    fontSize: 11,
    fontWeight: '500',
  },
  dotSep: {
    fontSize: 10,
  },
});
