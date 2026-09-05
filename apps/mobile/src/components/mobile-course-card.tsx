import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { useLearning } from '@/context/learning-context';
import { CourseItem } from '@/services/api';

interface MobileCourseCardProps {
  course: CourseItem;
}

export function MobileCourseCard({ course }: MobileCourseCardProps) {
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

  return (
    <Pressable
      onPress={handleOpenCourse}
      style={({ pressed }) => [
        styles.card,
        { backgroundColor: cardBg, borderColor },
        pressed && styles.pressed,
      ]}
    >
      {/* Top Banner (Monochromatic) */}
      <View style={[styles.coverContainer, { backgroundColor: bannerBg }]}>
        <View style={[styles.coverTopBar, { backgroundColor: accentColor }]} />
        <View style={styles.coverInner}>
          <View
            style={[
              styles.coverLabelPill,
              { backgroundColor: isDark ? '#27272A' : '#E4E4E7' },
            ]}
          >
            <Text style={[styles.coverLabelText, { color: textColor }]}>
              {course.category ? course.category.toUpperCase() : 'COURSE'}
            </Text>
          </View>
          <Pressable
            onPress={(e) => {
              e.stopPropagation();
              toggleSaveCourse(course.id);
            }}
            hitSlop={12}
            style={[
              styles.bookmarkBtn,
              { backgroundColor: isDark ? '#27272A' : '#FFFFFF' },
            ]}
          >
            <Ionicons
              name={saved ? 'bookmark' : 'bookmark-outline'}
              size={18}
              color={textColor}
            />
          </Pressable>
        </View>

        {/* Subtle icon graphic watermark */}
        <View style={styles.bannerGraphic}>
          <Ionicons
            name={
              course.typeIcon === 'path'
                ? 'trail-sign-outline'
                : course.typeIcon === 'quiz'
                ? 'trophy-outline'
                : 'book-outline'
            }
            size={46}
            color={textColor}
            style={{ opacity: isDark ? 0.12 : 0.08 }}
          />
        </View>
      </View>

      {/* Card Content */}
      <View style={styles.content}>
        {/* Type Header Row */}
        {course.type ? (
          <View style={styles.typeRow}>
            <Ionicons
              name={
                course.typeIcon === 'quiz'
                  ? 'ribbon-outline'
                  : course.typeIcon === 'path'
                  ? 'layers-outline'
                  : 'document-text-outline'
              }
              size={13}
              color={mutedText}
            />
            <Text style={[styles.typeText, { color: mutedText }]}>{course.type}</Text>
          </View>
        ) : null}

        {/* Title */}
        <Text style={[styles.title, { color: textColor }]} numberOfLines={2}>
          {course.title}
        </Text>

        {/* Description */}
        {course.description ? (
          <Text style={[styles.description, { color: mutedText }]} numberOfLines={2}>
            {course.description}
          </Text>
        ) : null}

        {/* Stats Row (Chapters & Lessons) */}
        <View style={[styles.statsRow, { borderTopColor: isDark ? '#27272A' : '#F4F4F5' }]}>
          {totalChapters > 0 ? (
            <View style={styles.statItem}>
              <Ionicons name="layers-outline" size={13} color={textColor} />
              <Text style={[styles.statText, { color: textColor }]}>
                {totalChapters} {totalChapters === 1 ? 'Chapter' : 'Chapters'}
              </Text>
            </View>
          ) : null}

          {totalChapters > 0 && totalLessons > 0 ? (
            <Text style={{ color: mutedText, fontSize: 10 }}>•</Text>
          ) : null}

          {totalLessons > 0 ? (
            <View style={styles.statItem}>
              <Ionicons name="book-outline" size={13} color={textColor} />
              <Text style={[styles.statText, { color: textColor }]}>
                {totalLessons} Lessons
              </Text>
            </View>
          ) : null}
        </View>

        {/* Tags Row */}
        <View style={styles.tagsRow}>
          {course.tag1 ? (
            <View
              style={[
                styles.tagPill,
                { backgroundColor: isDark ? '#18181B' : '#F4F4F5' },
              ]}
            >
              <Text style={[styles.tagText, { color: mutedText }]}>{course.tag1}</Text>
            </View>
          ) : null}
          {course.tag2 ? (
            <View
              style={[
                styles.tagPill,
                { backgroundColor: isDark ? '#18181B' : '#F4F4F5' },
              ]}
            >
              <Text style={[styles.tagText, { color: mutedText }]}>{course.tag2}</Text>
            </View>
          ) : null}
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    borderWidth: 1,
    overflow: 'hidden',
    marginBottom: 14,
  },
  pressed: {
    opacity: 0.85,
    transform: [{ scale: 0.99 }],
  },
  coverContainer: {
    height: 96,
    position: 'relative',
    justifyContent: 'space-between',
    padding: 12,
    overflow: 'hidden',
  },
  coverTopBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 3,
  },
  coverInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 2,
  },
  coverLabelPill: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  coverLabelText: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.6,
  },
  bookmarkBtn: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerGraphic: {
    position: 'absolute',
    right: 14,
    bottom: -6,
    zIndex: 1,
  },
  content: {
    padding: 14,
  },
  typeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginBottom: 6,
  },
  typeText: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 21,
    marginBottom: 4,
  },
  description: {
    fontSize: 12,
    lineHeight: 17,
    marginBottom: 10,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingTop: 10,
    borderTopWidth: 1,
    marginBottom: 10,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statText: {
    fontSize: 11,
    fontWeight: '600',
  },
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  tagPill: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  tagText: {
    fontSize: 10,
    fontWeight: '600',
  },
});
