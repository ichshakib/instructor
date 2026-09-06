import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  LayoutAnimation,
  Platform,
  Pressable,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  UIManager,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useLearning } from '@/context/learning-context';
import { API_BASE_URL, Chapter, CourseItem, fetchCourseById } from '@/services/api';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function CourseDetailsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const { isSaved, toggleSaveCourse } = useLearning();

  const courseId = (params.id as string) || 'german-language-course';
  const saved = isSaved(courseId);

  const [course, setCourse] = useState<CourseItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeLevelIndex, setActiveLevelIndex] = useState(0);
  const [expandedChapters, setExpandedChapters] = useState<Record<string, boolean>>({});

  // Pure monochromatic black and white styling (Zero blue)
  const bgColor = isDark ? '#09090B' : '#FFFFFF';
  const cardBg = isDark ? '#121214' : '#FFFFFF';
  const innerCardBg = isDark ? '#18181B' : '#F4F4F5';
  const textColor = isDark ? '#FFFFFF' : '#09090B';
  const mutedText = isDark ? '#A1A1AA' : '#71717A';
  const borderColor = isDark ? '#27272A' : '#E4E4E7';
  const activeColor = isDark ? '#FFFFFF' : '#09090B';
  const activeTextColor = isDark ? '#09090B' : '#FFFFFF';

  useEffect(() => {
    let isMounted = true;
    fetchCourseById(courseId)
      .then((data) => {
        if (!isMounted) return;
        setCourse(data);
        if (data?.curriculum?.[0]?.chapters?.[0]?.id) {
          setExpandedChapters({ [data.curriculum[0].chapters[0].id]: true });
        } else if (data?.chapters?.[0]?.id) {
          setExpandedChapters({ [data.chapters[0].id]: true });
        }
        setIsLoading(false);
      })
      .catch((e) => {
        console.warn('Error loading course details:', e);
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [courseId]);

  const toggleChapter = (chapterId: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedChapters((prev) => ({
      ...prev,
      [chapterId]: !prev[chapterId],
    }));
  };

  const handleShare = async () => {
    if (!course) return;
    try {
      await Share.share({
        message: `Check out ${course.title} on Instructor!`,
      });
    } catch (e) {
      console.warn('Share error', e);
    }
  };

  const currentLevel = course?.curriculum?.[activeLevelIndex];
  const chapters: Chapter[] = currentLevel?.chapters || course?.chapters || [];

  const totalChapters =
    course?.totalChapters ??
    (Array.isArray(course?.curriculum)
      ? course.curriculum.reduce(
          (acc, lvl) => acc + (Array.isArray(lvl.chapters) ? lvl.chapters.length : 0),
          0
        )
      : chapters.length);

  const totalLessons =
    course?.totalLessons ??
    (Array.isArray(course?.curriculum)
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

  const resolvedImageUrl = course?.imageUrl
    ? course.imageUrl.startsWith('http')
      ? course.imageUrl
      : `${API_BASE_URL}${course.imageUrl}`
    : null;

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: bgColor }]} edges={['top']}>
      {/* Top Navigation Bar - Borderless and shadowless */}
      <View style={styles.headerBar}>
        <Pressable
          onPress={() => router.back()}
          style={({ pressed }) => [styles.iconBtn, pressed && styles.pressed]}
          hitSlop={10}
        >
          <Ionicons name="chevron-back" size={24} color={textColor} />
        </Pressable>

        <View style={styles.headerRightActions}>
          <Pressable
            onPress={() => toggleSaveCourse(courseId)}
            style={({ pressed }) => [styles.iconBtn, pressed && styles.pressed]}
            hitSlop={10}
            accessibilityLabel="Add to Wishlist"
          >
            <Ionicons
              name={saved ? 'heart' : 'heart-outline'}
              size={22}
              color={saved ? '#EF4444' : textColor}
            />
          </Pressable>

          <Pressable
            onPress={handleShare}
            style={({ pressed }) => [styles.iconBtn, pressed && styles.pressed]}
            hitSlop={10}
          >
            <Ionicons name="share-social-outline" size={20} color={textColor} />
          </Pressable>
        </View>
      </View>

      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={activeColor} />
          <Text style={[styles.loadingText, { color: mutedText }]}>
            Loading course curriculum...
          </Text>
        </View>
      ) : !course ? (
        <View style={styles.errorContainer}>
          <Text style={[styles.errorText, { color: textColor }]}>Course not found</Text>
        </View>
      ) : (
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Top Course Cover Image */}
          {resolvedImageUrl ? (
            <View style={[styles.coverImageContainer, { borderColor }]}>
              <Image
                source={{ uri: resolvedImageUrl }}
                style={styles.coverImage}
                resizeMode="cover"
              />
            </View>
          ) : null}

          {/* Direct On-Screen Course Header (No Card) */}
          <View style={styles.courseHeaderSection}>
            <Text style={[styles.courseTitle, { color: textColor }]}>{course.title}</Text>

            {course.description ? (
              <Text style={[styles.courseDesc, { color: mutedText }]}>
                {course.description}
              </Text>
            ) : null}

            {/* Metrics Row directly on screen */}
            <View style={styles.metricsBar}>
              {totalChapters > 0 && (
                <View style={styles.metricItem}>
                  <Ionicons name="layers-outline" size={14} color={textColor} />
                  <Text style={[styles.metricText, { color: textColor }]}>
                    {totalChapters} Chapters
                  </Text>
                </View>
              )}
              {totalLessons > 0 && (
                <View style={styles.metricItem}>
                  <Ionicons name="book-outline" size={14} color={textColor} />
                  <Text style={[styles.metricText, { color: textColor }]}>
                    {totalLessons} Lessons
                  </Text>
                </View>
              )}
              {course.tag1 ? (
                <View style={styles.metricItem}>
                  <Ionicons name="pricetag-outline" size={14} color={mutedText} />
                  <Text style={[styles.metricText, { color: mutedText }]}>{course.tag1}</Text>
                </View>
              ) : null}
            </View>
          </View>

          {/* Level Switcher (if course has multiple levels, e.g. A1, A2, B1...) */}
          {course.curriculum && course.curriculum.length > 1 ? (
            <View style={styles.levelSwitcherContainer}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.levelScroll}
              >
                {course.curriculum.map((lvl, idx) => {
                  const isActive = activeLevelIndex === idx;
                  return (
                    <Pressable
                      key={lvl.level || idx}
                      onPress={() => setActiveLevelIndex(idx)}
                      style={({ pressed }) => [
                        styles.levelPill,
                        isActive
                          ? [
                              styles.activeLevelPill,
                              { backgroundColor: activeColor, borderColor: activeColor },
                            ]
                          : [
                              styles.inactiveLevelPill,
                              { backgroundColor: cardBg, borderColor },
                            ],
                        pressed && styles.pressed,
                      ]}
                    >
                      <Text
                        style={[
                          styles.levelPillText,
                          {
                            color: isActive ? activeTextColor : mutedText,
                            fontWeight: isActive ? '700' : '500',
                          },
                        ]}
                      >
                        {lvl.level}
                      </Text>
                    </Pressable>
                  );
                })}
              </ScrollView>

              {currentLevel?.title ? (
                <View style={[styles.levelDescBox, { backgroundColor: innerCardBg, borderColor }]}>
                  <Text style={[styles.levelTitle, { color: textColor }]}>
                    {currentLevel.title}
                  </Text>
                  {currentLevel.description ? (
                    <Text style={[styles.levelDesc, { color: mutedText }]}>
                      {currentLevel.description}
                    </Text>
                  ) : null}
                </View>
              ) : null}
            </View>
          ) : null}

          {/* Chapters and Lessons Accordion */}
          <View style={styles.syllabusSection}>
            <View style={styles.syllabusHeader}>
              <Text style={[styles.sectionTitle, { color: textColor }]}>
                Course Curriculum
              </Text>
              <Text style={[styles.syllabusCount, { color: mutedText }]}>
                {chapters.length} {chapters.length === 1 ? 'Chapter' : 'Chapters'}
              </Text>
            </View>

            {chapters.map((chapter, chIdx) => {
              const isExpanded = !!expandedChapters[chapter.id];
              return (
                <View
                  key={chapter.id}
                  style={[
                    styles.chapterCard,
                    { backgroundColor: cardBg, borderColor },
                  ]}
                >
                  {/* Chapter Header Toggle */}
                  <Pressable
                    onPress={() => toggleChapter(chapter.id)}
                    style={({ pressed }) => [
                      styles.chapterHeader,
                      pressed && styles.pressed,
                    ]}
                  >
                    <View style={styles.chapterHeaderLeft}>
                      <View
                        style={[
                          styles.chapterIndexBadge,
                          { backgroundColor: innerCardBg, borderColor },
                        ]}
                      >
                        <Text style={[styles.chapterIndexText, { color: textColor }]}>
                          {chIdx + 1}
                        </Text>
                      </View>
                      <View style={styles.chapterHeaderTextWrap}>
                        <Text style={[styles.chapterTitle, { color: textColor }]}>
                          {chapter.title}
                        </Text>
                        <Text style={[styles.chapterLessonCount, { color: mutedText }]}>
                          {chapter.lessons.length} {chapter.lessons.length === 1 ? 'Lesson' : 'Lessons'}
                        </Text>
                      </View>
                    </View>
                    <Ionicons
                      name={isExpanded ? 'chevron-up' : 'chevron-down'}
                      size={18}
                      color={mutedText}
                    />
                  </Pressable>

                  {/* Lessons List inside Chapter */}
                  {isExpanded && (
                    <View style={[styles.lessonsList, { borderTopColor: borderColor }]}>
                      {chapter.lessons.map((lesson) => (
                        <Pressable
                          key={lesson.id}
                          onPress={() => {
                            router.push({
                              pathname: '/lesson-details' as any,
                              params: {
                                courseId: course?.id || courseId,
                                courseTitle: course?.title || '',
                                chapterId: chapter.id,
                                chapterTitle: chapter.title,
                                lessonId: lesson.id,
                                lessonTitle: lesson.title,
                                description: lesson.description || '',
                              },
                            });
                          }}
                          style={({ pressed }) => [
                            styles.lessonRow,
                            pressed && styles.pressed,
                          ]}
                        >
                          <View style={styles.lessonLeft}>
                            <View
                              style={[
                                styles.lessonPlayCircle,
                                { backgroundColor: innerCardBg },
                              ]}
                            >
                              <Ionicons
                                name="play"
                                size={11}
                                color={textColor}
                              />
                            </View>
                            <View style={styles.lessonInfo}>
                              <Text
                                style={[
                                  styles.lessonTitle,
                                  { color: textColor, fontWeight: '600' },
                                ]}
                              >
                                {lesson.title}
                              </Text>
                            </View>
                          </View>
                          <Ionicons name="chevron-forward" size={16} color={mutedText} />
                        </Pressable>
                      ))}
                    </View>
                  )}
                </View>
              );
            })}
          </View>

          <View style={{ height: 40 }} />
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  headerBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
  },
  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerRightActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 32,
  },
  coverImageContainer: {
    height: 180,
    borderRadius: 16,
    borderWidth: 1,
    overflow: 'hidden',
    marginBottom: 16,
  },
  coverImage: {
    width: '100%',
    height: '100%',
  },
  courseHeaderSection: {
    marginBottom: 20,
  },
  courseTitle: {
    fontSize: 22,
    fontWeight: '800',
    lineHeight: 28,
    marginBottom: 8,
  },
  courseDesc: {
    fontSize: 13,
    lineHeight: 19,
    marginBottom: 14,
  },
  metricsBar: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  metricItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  metricText: {
    fontSize: 12,
    fontWeight: '600',
  },
  levelSwitcherContainer: {
    marginBottom: 20,
  },
  levelScroll: {
    gap: 8,
    marginBottom: 12,
  },
  levelPill: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 14,
    borderWidth: 1,
  },
  activeLevelPill: {},
  inactiveLevelPill: {},
  levelPillText: {
    fontSize: 13,
  },
  levelDescBox: {
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
  },
  levelTitle: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 2,
  },
  levelDesc: {
    fontSize: 12,
    lineHeight: 16,
  },
  syllabusSection: {
    gap: 12,
  },
  syllabusHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '800',
    letterSpacing: -0.2,
  },
  syllabusCount: {
    fontSize: 12,
    fontWeight: '600',
  },
  chapterCard: {
    borderRadius: 14,
    borderWidth: 1,
    overflow: 'hidden',
  },
  chapterHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 14,
  },
  chapterHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 12,
  },
  chapterIndexBadge: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chapterIndexText: {
    fontSize: 12,
    fontWeight: '800',
  },
  chapterHeaderTextWrap: {
    flex: 1,
  },
  chapterTitle: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 18,
    marginBottom: 2,
  },
  chapterLessonCount: {
    fontSize: 11,
    fontWeight: '500',
  },
  lessonsList: {
    borderTopWidth: 1,
    paddingVertical: 4,
  },
  lessonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  lessonLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 12,
    marginRight: 8,
  },
  lessonPlayCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  lessonInfo: {
    flex: 1,
  },
  lessonTitle: {
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 2,
  },
  lessonDuration: {
    fontSize: 11,
  },
  lessonDescription: {
    fontSize: 11,
    lineHeight: 16,
    marginTop: 4,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  loadingText: {
    fontSize: 13,
  },
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    fontSize: 16,
    fontWeight: '600',
  },
  pressed: {
    opacity: 0.7,
  },
});
