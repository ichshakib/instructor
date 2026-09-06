import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState, useMemo, useRef, useCallback } from 'react';
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Drawer } from 'react-native-drawer-layout';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useLearning } from '@/context/learning-context';
import {
  Chapter,
  CourseItem,
  fetchLessonById,
  getCachedLesson,
  Lesson,
} from '@/services/api';

export default function LessonDetailsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const { isWishlisted, toggleWishlist } = useLearning();

  const courseId = (params.courseId as string) || '';
  const initialLessonId = (params.lessonId as string) || '';
  const initialLessonTitle = (params.lessonTitle as string) || 'Lesson Details';
  const initialDescription = (params.description as string) || '';

  // Synchronous retrieval from memory cache for instant transitions
  const initialCached = courseId && initialLessonId ? getCachedLesson(courseId, initialLessonId) : null;

  const [currentLessonId, setCurrentLessonId] = useState(initialLessonId);
  const [lesson, setLesson] = useState<Lesson | null>(initialCached?.lesson || null);
  const [chapter, setChapter] = useState<Chapter | null>(initialCached?.chapter || null);
  const [course, setCourse] = useState<CourseItem | null>(initialCached?.course || null);
  const [isLoading, setIsLoading] = useState(!initialCached?.lesson?.content);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const mainScrollRef = useRef<ScrollView>(null);

  // Synchronize when route params change
  useEffect(() => {
    if (initialLessonId && initialLessonId !== currentLessonId) {
      setCurrentLessonId(initialLessonId);
      const cached = getCachedLesson(courseId, initialLessonId);
      if (cached) {
        setLesson(cached.lesson);
        if (cached.chapter) setChapter(cached.chapter);
        if (cached.course) setCourse(cached.course);
        if (cached.lesson?.content) {
          setIsLoading(false);
        }
      }
    }
  }, [initialLessonId, courseId]);

  // Design system styling tokens
  const bgColor = isDark ? '#09090B' : '#FFFFFF';
  const cardBg = isDark ? '#121214' : '#FFFFFF';
  const innerCardBg = isDark ? '#18181B' : '#F4F4F5';
  const textColor = isDark ? '#FFFFFF' : '#09090B';
  const mutedText = isDark ? '#A1A1AA' : '#71717A';
  const borderColor = isDark ? '#27272A' : '#E4E4E7';
  const activeColor = isDark ? '#FFFFFF' : '#09090B';
  const activeTextColor = isDark ? '#09090B' : '#FFFFFF';

  const isSaved = courseId ? isWishlisted(courseId) : false;

  const loadLessonData = useCallback(async () => {
    if (!courseId || !currentLessonId) return;

    const cached = getCachedLesson(courseId, currentLessonId);
    if (cached && cached.lesson?.content) {
      setLesson(cached.lesson);
      if (cached.chapter) setChapter(cached.chapter);
      if (cached.course) setCourse(cached.course);
      setIsLoading(false);
      setErrorMessage(null);
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);

    try {
      const res = await fetchLessonById(courseId, currentLessonId);
      if (res) {
        setLesson(res.lesson);
        if (res.chapter) setChapter(res.chapter);
        if (res.course) setCourse(res.course);
      } else {
        setErrorMessage(`Lesson "${currentLessonId}" not found on server.`);
      }
    } catch (err: any) {
      const msg = err?.message || 'Failed to connect to API server.';
      setErrorMessage(msg);
    } finally {
      setIsLoading(false);
    }
  }, [courseId, currentLessonId]);

  useEffect(() => {
    loadLessonData();
  }, [loadLessonData]);

  // Extract all chapters for the drawer table of contents
  const allChapters: Chapter[] = useMemo(() => {
    if (!course) {
      return chapter ? [chapter] : [];
    }
    if (Array.isArray(course.curriculum)) {
      return course.curriculum.flatMap((lvl) => lvl.chapters || []);
    }
    return course.chapters || (chapter ? [chapter] : []);
  }, [course, chapter]);

  // Flatten all lessons across chapters for next/prev navigation
  const allLessonsFlat = useMemo(() => {
    return allChapters.flatMap((ch) =>
      (ch.lessons || []).map((l) => ({ ...l, chapterId: ch.id }))
    );
  }, [allChapters]);

  const currentIndex = allLessonsFlat.findIndex((l) => l.id === currentLessonId);
  const prevLesson = currentIndex > 0 ? allLessonsFlat[currentIndex - 1] : null;
  const nextLesson =
    currentIndex >= 0 && currentIndex < allLessonsFlat.length - 1
      ? allLessonsFlat[currentIndex + 1]
      : null;

  const handleSelectLesson = useCallback((chId: string, lId: string) => {
    setIsDrawerOpen(false);
    if (lId === currentLessonId) return;

    setCurrentLessonId(lId);
    setIsCompleted(false);

    const cached = getCachedLesson(courseId, lId);
    if (cached) {
      setLesson(cached.lesson);
      if (cached.chapter) setChapter(cached.chapter);
      if (cached.course) setCourse(cached.course);
      if (cached.lesson?.content) {
        setIsLoading(false);
      }
    }

    if (mainScrollRef.current) {
      mainScrollRef.current.scrollTo({ y: 0, animated: false });
    }
  }, [currentLessonId, courseId]);

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Studying "${lesson?.title || initialLessonTitle}" on Instructor!`,
      });
    } catch (e) {
      console.warn('Share error', e);
    }
  };

  const currentLessonTitle = lesson?.title || initialLessonTitle;
  const currentDescription = lesson?.description || initialDescription;
  const content = lesson?.content;

  // Drawer Content: Table of contents listing all chapters and lessons
  const renderDrawerContent = useCallback(() => (
    <SafeAreaView style={[styles.drawerContainer, { backgroundColor: bgColor }]} edges={['top', 'bottom']}>
      <View style={[styles.drawerHeader, { borderBottomColor: borderColor }]}>
        <View style={styles.drawerHeaderTitleCol}>
          <Text style={[styles.drawerSubtitle, { color: mutedText }]}>Course Curriculum</Text>
          <Text style={[styles.drawerCourseTitle, { color: textColor }]} numberOfLines={1}>
            {course?.title || 'Curriculum'}
          </Text>
        </View>

        <Pressable
          onPress={() => setIsDrawerOpen(false)}
          style={({ pressed }) => [styles.drawerCloseBtn, pressed && styles.pressed]}
          hitSlop={10}
          accessibilityLabel="Close Drawer"
        >
          <Ionicons name="close" size={22} color={textColor} />
        </Pressable>
      </View>

      <ScrollView
        style={styles.drawerScroll}
        contentContainerStyle={styles.drawerScrollContent}
        showsVerticalScrollIndicator={false}
      >
        {allChapters.map((ch, chIdx) => (
          <View key={ch.id || `ch-${chIdx}`} style={[styles.drawerChapterBlock, { borderColor }]}>
            <View style={[styles.drawerChapterHeader, { backgroundColor: innerCardBg }]}>
              <Text style={[styles.drawerChapterTitle, { color: textColor }]} numberOfLines={2}>
                {ch.title}
              </Text>
              <Text style={[styles.drawerLessonCount, { color: mutedText }]}>
                {ch.lessons?.length || 0} {ch.lessons?.length === 1 ? 'lesson' : 'lessons'}
              </Text>
            </View>

            <View style={styles.drawerLessonsList}>
              {ch.lessons?.map((l) => {
                const isActive = l.id === currentLessonId;
                return (
                  <Pressable
                    key={l.id}
                    onPress={() => handleSelectLesson(ch.id, l.id)}
                    style={({ pressed }) => [
                      styles.drawerLessonItem,
                      isActive
                        ? [styles.drawerActiveLessonItem, { backgroundColor: activeColor }]
                        : { backgroundColor: 'transparent' },
                      pressed && styles.pressed,
                    ]}
                  >
                    <Ionicons
                      name={isActive ? 'play-circle' : 'ellipse-outline'}
                      size={15}
                      color={isActive ? activeTextColor : mutedText}
                      style={{ marginRight: 8, marginTop: 2 }}
                    />
                    <Text
                      style={[
                        styles.drawerLessonItemTitle,
                        {
                          color: isActive ? activeTextColor : textColor,
                          fontWeight: isActive ? '700' : '500',
                        },
                      ]}
                      numberOfLines={2}
                    >
                      {l.title}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  ), [allChapters, currentLessonId, handleSelectLesson, bgColor, borderColor, mutedText, textColor, course?.title, innerCardBg, activeColor, activeTextColor]);

  return (
    <Drawer
      open={isDrawerOpen}
      onOpen={() => setIsDrawerOpen(true)}
      onClose={() => setIsDrawerOpen(false)}
      drawerPosition="right"
      drawerType="front"
      drawerStyle={{
        width: 310,
        backgroundColor: bgColor,
      }}
      renderDrawerContent={renderDrawerContent}
    >
      <SafeAreaView style={[styles.safeArea, { backgroundColor: bgColor }]} edges={['top']}>
        {/* Top Header Bar */}
        <View style={[styles.headerBar, { borderBottomColor: borderColor }]}>
          <View style={styles.headerLeftWithTitle}>
            <Pressable
              onPress={() => router.back()}
              style={({ pressed }) => [styles.backBtn, pressed && styles.pressed]}
              hitSlop={10}
              accessibilityLabel="Back"
            >
              <Ionicons name="arrow-back" size={24} color={textColor} />
            </Pressable>

            <Text style={[styles.headerLessonTitle, { color: textColor }]} numberOfLines={1}>
              {currentLessonTitle}
            </Text>
          </View>

          <View style={styles.headerRightActions}>
            <Pressable
              onPress={() => setIsDrawerOpen(true)}
              style={({ pressed }) => [
                styles.drawerToggleBtn,
                { backgroundColor: innerCardBg, borderColor },
                pressed && styles.pressed,
              ]}
              hitSlop={8}
              accessibilityLabel="Open Course Drawer"
            >
              <Ionicons name="list-outline" size={19} color={textColor} />
            </Pressable>

            {courseId ? (
              <Pressable
                onPress={() => toggleWishlist(courseId)}
                style={({ pressed }) => [styles.iconBtn, pressed && styles.pressed]}
                hitSlop={8}
                accessibilityLabel="Add to Wishlist"
              >
                <Ionicons
                  name={isSaved ? 'heart' : 'heart-outline'}
                  size={21}
                  color={isSaved ? '#EF4444' : textColor}
                />
              </Pressable>
            ) : null}

            <Pressable
              onPress={handleShare}
              style={({ pressed }) => [styles.iconBtn, pressed && styles.pressed]}
              hitSlop={8}
              accessibilityLabel="Share Lesson"
            >
              <Ionicons name="share-social-outline" size={19} color={textColor} />
            </Pressable>
          </View>
        </View>

        {isLoading ? (
          <View style={styles.centerContainer}>
            <ActivityIndicator size="large" color={activeColor} />
            <Text style={[styles.statusText, { color: mutedText }]}>
              Loading lesson content from API...
            </Text>
          </View>
        ) : errorMessage ? (
          <View style={styles.centerContainer}>
            <Ionicons name="alert-circle-outline" size={48} color="#EF4444" />
            <Text style={[styles.errorTitle, { color: textColor }]}>Unable to Load Lesson</Text>
            <Text style={[styles.errorMessage, { color: mutedText }]}>{errorMessage}</Text>
            <Pressable
              onPress={loadLessonData}
              style={({ pressed }) => [
                styles.retryBtn,
                { backgroundColor: activeColor },
                pressed && styles.pressed,
              ]}
            >
              <Ionicons name="refresh-outline" size={16} color={activeTextColor} />
              <Text style={[styles.retryBtnText, { color: activeTextColor }]}>Retry</Text>
            </Pressable>
          </View>
        ) : (
          <ScrollView
            ref={mainScrollRef}
            style={styles.scrollView}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            {/* 1. LESSON HEADER */}
            <View style={styles.editorialHeader}>
              <View style={styles.metaRow}>
                <View style={[styles.metaBadge, { backgroundColor: innerCardBg }]}>
                  <Text style={[styles.metaBadgeText, { color: mutedText }]}>
                    {chapter?.title ? chapter.title.split(':')[0] : 'Chapter'}
                  </Text>
                </View>
                <Text style={[styles.metaDot, { color: mutedText }]}>•</Text>
                <Text style={[styles.metaText, { color: mutedText }]}>
                  {lesson?.duration || '15 mins'}
                </Text>
              </View>

              <Text style={[styles.editorialHeading, { color: textColor }]}>
                {currentLessonTitle}
              </Text>

              {currentDescription ? (
                <Text style={[styles.editorialLeadText, { color: mutedText }]}>
                  {currentDescription}
                </Text>
              ) : null}
            </View>

            {/* 2. "WHAT YOU WILL ACHIEVE" */}
            {content?.canDo ? (
              <View style={[styles.sectionBlock, { borderTopColor: borderColor }]}>
                <View style={styles.sectionHeaderRow}>
                  <View style={[styles.sectionIconCircle, { backgroundColor: innerCardBg }]}>
                    <Ionicons name="checkmark-circle-outline" size={18} color={textColor} />
                  </View>
                  <Text style={[styles.sectionMainTitle, { color: textColor }]}>
                    What You Will Achieve
                  </Text>
                </View>

                <View style={[styles.achieveCard, { backgroundColor: innerCardBg, borderColor }]}>
                  <View style={[styles.checkCircle, { backgroundColor: activeColor }]}>
                    <Ionicons name="checkmark" size={13} color={activeTextColor} />
                  </View>
                  <Text style={[styles.achieveText, { color: textColor }]}>
                    {content.canDo}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* 3. OVERVIEW & TEACHER NOTE */}
            {content?.overview ? (
              <View style={[styles.sectionBlock, { borderTopColor: borderColor }]}>
                <View style={styles.sectionHeaderRow}>
                  <View style={[styles.sectionIconCircle, { backgroundColor: innerCardBg }]}>
                    <Ionicons name="book-outline" size={18} color={textColor} />
                  </View>
                  <Text style={[styles.sectionMainTitle, { color: textColor }]}>
                    Overview & Concepts
                  </Text>
                </View>

                <Text style={[styles.paragraphText, { color: textColor }]}>
                  {content.overview}
                </Text>

                {content.teacherNote ? (
                  <View style={[styles.teacherCallout, { borderLeftColor: textColor, backgroundColor: innerCardBg }]}>
                    <Text style={[styles.teacherCalloutLead, { color: mutedText }]}>
                      INSTRUCTOR ADVICE
                    </Text>
                    <Text style={[styles.teacherCalloutText, { color: textColor }]}>
                      {content.teacherNote}
                    </Text>
                  </View>
                ) : null}
              </View>
            ) : null}

            {/* 4. DYNAMIC SECTIONS */}
            {content?.sections && content.sections.length > 0 ? (
              content.sections.map((sec, secIdx) => (
                <View key={secIdx} style={[styles.sectionBlock, { borderTopColor: borderColor }]}>
                  <View style={styles.sectionHeaderRow}>
                    <View style={[styles.sectionIconCircle, { backgroundColor: innerCardBg }]}>
                      <Ionicons name="layers-outline" size={18} color={textColor} />
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text style={[styles.sectionMainTitle, { color: textColor }]}>
                        {sec.title}
                      </Text>
                      {sec.description ? (
                        <Text style={[styles.sectionSubDesc, { color: mutedText }]}>
                          {sec.description}
                        </Text>
                      ) : null}
                    </View>
                  </View>

                  {/* Table Component */}
                  {sec.table && sec.table.headers && sec.table.rows ? (
                    <View style={[styles.tableContainer, { borderColor, backgroundColor: innerCardBg }]}>
                      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View>
                          {/* Table Header */}
                          <View style={[styles.tableHeaderRow, { borderBottomColor: borderColor }]}>
                            {sec.table.headers.map((h, hIdx) => (
                              <View key={hIdx} style={styles.tableColHeader}>
                                <Text style={[styles.tableColHeaderText, { color: textColor }]}>
                                  {h}
                                </Text>
                              </View>
                            ))}
                          </View>

                          {/* Table Rows */}
                          {sec.table.rows.map((row, rIdx) => (
                            <View
                              key={rIdx}
                              style={[
                                styles.tableDataRow,
                                {
                                  borderBottomColor: borderColor,
                                  backgroundColor: rIdx % 2 === 1 ? cardBg : 'transparent',
                                },
                              ]}
                            >
                              {row.map((cell, cIdx) => (
                                <View key={cIdx} style={styles.tableColCell}>
                                  <Text style={[styles.tableColCellText, { color: textColor }]}>
                                    {cell}
                                  </Text>
                                </View>
                              ))}
                            </View>
                          ))}
                        </View>
                      </ScrollView>
                    </View>
                  ) : null}

                  {/* Concept Items */}
                  {sec.items && sec.items.length > 0 ? (
                    <View style={styles.conceptItemsList}>
                      {sec.items.map((item, iIdx) => (
                        <View
                          key={iIdx}
                          style={[styles.conceptItemCard, { backgroundColor: innerCardBg, borderColor }]}
                        >
                          <View style={styles.conceptItemTopRow}>
                            <Text style={[styles.conceptTerm, { color: textColor }]}>
                              {item.term}
                            </Text>
                            {item.pronunciation ? (
                              <View style={[styles.pronounceBadge, { backgroundColor: cardBg, borderColor }]}>
                                <Text style={[styles.pronounceText, { color: mutedText }]}>
                                  {item.pronunciation}
                                </Text>
                              </View>
                            ) : null}
                          </View>

                          <Text style={[styles.conceptMeaning, { color: textColor }]}>
                            {item.meaning}
                          </Text>

                          {item.example ? (
                            <View style={[styles.conceptExampleBox, { backgroundColor: cardBg, borderColor }]}>
                              <Text style={[styles.conceptExampleLabel, { color: mutedText }]}>
                                EXAMPLE:
                              </Text>
                              <Text style={[styles.conceptExampleText, { color: textColor }]}>
                                {item.example}
                              </Text>
                            </View>
                          ) : null}
                        </View>
                      ))}
                    </View>
                  ) : null}

                  {/* Notes */}
                  {sec.notes && sec.notes.length > 0 ? (
                    <View style={styles.notesContainer}>
                      {sec.notes.map((note, nIdx) => (
                        <View key={nIdx} style={styles.noteRow}>
                          <Ionicons name="information-circle-outline" size={15} color={mutedText} style={{ marginTop: 2 }} />
                          <Text style={[styles.noteText, { color: mutedText }]}>
                            {note}
                          </Text>
                        </View>
                      ))}
                    </View>
                  ) : null}
                </View>
              ))
            ) : null}

            {/* 5. PRACTICAL DIALOGUE (With English translations directly underneath) */}
            {content?.dialogue && content.dialogue.lines && content.dialogue.lines.length > 0 ? (
              <View style={[styles.sectionBlock, { borderTopColor: borderColor }]}>
                <View style={styles.sectionHeaderRow}>
                  <View style={[styles.sectionIconCircle, { backgroundColor: innerCardBg }]}>
                    <Ionicons name="chatbubbles-outline" size={18} color={textColor} />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={[styles.sectionMainTitle, { color: textColor }]}>
                      Practical Dialogue
                    </Text>
                    {content.dialogue.context ? (
                      <Text style={[styles.sectionSubDesc, { color: mutedText }]}>
                        {content.dialogue.context}
                      </Text>
                    ) : null}
                  </View>
                </View>

                <View style={styles.dialogueChatList}>
                  {content.dialogue.lines.map((line, dIdx) => (
                    <View key={dIdx} style={styles.dialogueRow}>
                      <View style={[styles.dialogueAvatar, { backgroundColor: innerCardBg, borderColor }]}>
                        <Text style={[styles.dialogueAvatarText, { color: textColor }]}>
                          {line.speaker.slice(0, 2).toUpperCase()}
                        </Text>
                      </View>

                      <View style={[styles.dialogueCard, { backgroundColor: innerCardBg, borderColor }]}>
                        <Text style={[styles.dialogueSpeakerName, { color: mutedText }]}>
                          {line.speaker}
                        </Text>
                        <Text style={[styles.dialogueGermanText, { color: textColor }]}>
                          {line.text || line.german}
                        </Text>
                        {(line.notes || (line.english && line.english !== (line.text || line.german))) ? (
                          <Text style={[styles.dialogueEnglishText, { color: mutedText }]}>
                            {line.notes || line.english}
                          </Text>
                        ) : null}
                      </View>
                    </View>
                  ))}
                </View>
              </View>
            ) : null}

            {/* 6. CULTURAL / LINGUISTIC INSIGHT */}
            {content?.funFact ? (
              <View style={[styles.sectionBlock, { borderTopColor: borderColor }]}>
                <View style={[styles.insightCard, { backgroundColor: innerCardBg, borderColor }]}>
                  <View style={styles.insightHeaderRow}>
                    <Ionicons name="bulb-outline" size={20} color={textColor} />
                    <Text style={[styles.insightTitle, { color: textColor }]}>
                      {content.funFact.title || 'Linguistic Insight'}
                    </Text>
                  </View>
                  <Text style={[styles.insightContent, { color: textColor }]}>
                    {content.funFact.content}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* 7. SEQUENTIAL NAVIGATION */}
            <View style={styles.actionContainer}>
              {nextLesson ? (
                <Pressable
                  onPress={() => handleSelectLesson(nextLesson.chapterId, nextLesson.id)}
                  style={({ pressed }) => [
                    styles.primaryBtn,
                    { backgroundColor: activeColor, borderColor: activeColor },
                    pressed && styles.pressed,
                  ]}
                >
                  <Text style={[styles.primaryBtnText, { color: activeTextColor }]} numberOfLines={1}>
                    Next: {nextLesson.title}
                  </Text>
                  <Ionicons name="arrow-forward" size={17} color={activeTextColor} />
                </Pressable>
              ) : null}

              {prevLesson ? (
                <Pressable
                  onPress={() => handleSelectLesson(prevLesson.chapterId, prevLesson.id)}
                  style={({ pressed }) => [
                    styles.secondaryBtn,
                    { backgroundColor: cardBg, borderColor },
                    pressed && styles.pressed,
                  ]}
                >
                  <Ionicons name="arrow-back" size={16} color={textColor} />
                  <Text style={[styles.secondaryBtnText, { color: textColor }]} numberOfLines={1}>
                    Previous: {prevLesson.title}
                  </Text>
                </Pressable>
              ) : null}

              <Pressable
                onPress={() => setIsCompleted(!isCompleted)}
                style={({ pressed }) => [
                  styles.secondaryBtn,
                  {
                    backgroundColor: isCompleted ? innerCardBg : cardBg,
                    borderColor: isCompleted ? activeColor : borderColor,
                  },
                  pressed && styles.pressed,
                ]}
              >
                <Ionicons
                  name={isCompleted ? 'checkmark-circle' : 'checkmark-circle-outline'}
                  size={18}
                  color={isCompleted ? '#10B981' : textColor}
                />
                <Text
                  style={[
                    styles.secondaryBtnText,
                    { color: textColor, fontWeight: isCompleted ? '700' : '600' },
                  ]}
                >
                  {isCompleted ? 'Lesson Completed!' : 'Mark as Completed'}
                </Text>
              </Pressable>
            </View>

            <View style={{ height: 48 }} />
          </ScrollView>
        )}
      </SafeAreaView>
    </Drawer>
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
    borderBottomWidth: 1,
  },
  headerLeftWithTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 10,
  },
  backBtn: {
    width: 38,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  headerLessonTitle: {
    fontSize: 16,
    fontWeight: '700',
    flex: 1,
    letterSpacing: -0.2,
  },
  headerRightActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  drawerToggleBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Drawer
  drawerContainer: {
    flex: 1,
  },
  drawerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
  },
  drawerHeaderTitleCol: {
    flex: 1,
    marginRight: 8,
  },
  drawerSubtitle: {
    fontSize: 11,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  drawerCourseTitle: {
    fontSize: 14,
    fontWeight: '700',
  },
  drawerCloseBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerScroll: {
    flex: 1,
  },
  drawerScrollContent: {
    padding: 14,
    gap: 14,
  },
  drawerChapterBlock: {
    borderRadius: 14,
    overflow: 'hidden',
    borderWidth: 1,
  },
  drawerChapterHeader: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 2,
  },
  drawerChapterTitle: {
    fontSize: 13,
    fontWeight: '700',
    lineHeight: 18,
  },
  drawerLessonCount: {
    fontSize: 11,
    fontWeight: '500',
  },
  drawerLessonsList: {
    padding: 6,
    gap: 4,
  },
  drawerLessonItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
  },
  drawerActiveLessonItem: {
    borderRadius: 8,
  },
  drawerLessonItemTitle: {
    fontSize: 12,
    flex: 1,
    lineHeight: 17,
  },

  // Scroll View & Editorial
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 18,
    paddingTop: 16,
    paddingBottom: 32,
    gap: 24,
  },
  centerContainer: {
    flex: 1,
    paddingVertical: 80,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  statusText: {
    fontSize: 13,
  },
  errorTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 8,
  },
  errorMessage: {
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 19,
  },
  retryBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 8,
  },
  retryBtnText: {
    fontSize: 13,
    fontWeight: '700',
  },

  // Editorial Header
  editorialHeader: {
    gap: 8,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  metaBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  metaBadgeText: {
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  metaDot: {
    fontSize: 12,
  },
  metaText: {
    fontSize: 12,
    fontWeight: '500',
  },
  editorialHeading: {
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: -0.4,
    lineHeight: 28,
    marginTop: 2,
  },
  editorialLeadText: {
    fontSize: 13.5,
    lineHeight: 21,
    marginTop: 2,
  },

  // Section Block
  sectionBlock: {
    borderTopWidth: 1,
    paddingTop: 20,
    gap: 14,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  sectionIconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionMainTitle: {
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: -0.2,
  },
  sectionSubDesc: {
    fontSize: 12,
    lineHeight: 17,
    marginTop: 2,
  },

  // Achieve Card
  achieveCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
  },
  checkCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 1,
  },
  achieveText: {
    fontSize: 13.5,
    lineHeight: 20,
    flex: 1,
  },

  // Overview Paragraph & Callout
  paragraphText: {
    fontSize: 13.5,
    lineHeight: 22,
  },
  teacherCallout: {
    borderLeftWidth: 3,
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 8,
    gap: 6,
    marginTop: 2,
  },
  teacherCalloutLead: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
  teacherCalloutText: {
    fontSize: 13,
    lineHeight: 19,
    fontStyle: 'italic',
  },

  // Tables
  tableContainer: {
    borderRadius: 12,
    borderWidth: 1,
    overflow: 'hidden',
  },
  tableHeaderRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 6,
  },
  tableColHeader: {
    minWidth: 130,
    paddingHorizontal: 8,
  },
  tableColHeaderText: {
    fontSize: 11.5,
    fontWeight: '800',
    letterSpacing: 0.4,
    textTransform: 'uppercase',
  },
  tableDataRow: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    paddingVertical: 10,
    paddingHorizontal: 6,
  },
  tableColCell: {
    minWidth: 130,
    paddingHorizontal: 8,
    justifyContent: 'center',
  },
  tableColCellText: {
    fontSize: 12.5,
    lineHeight: 18,
  },

  // Concept Items
  conceptItemsList: {
    gap: 10,
  },
  conceptItemCard: {
    borderRadius: 12,
    borderWidth: 1,
    padding: 14,
    gap: 8,
  },
  conceptItemTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  conceptTerm: {
    fontSize: 15,
    fontWeight: '800',
    flex: 1,
  },
  pronounceBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    borderWidth: 1,
  },
  pronounceText: {
    fontSize: 11,
    fontWeight: '600',
  },
  conceptMeaning: {
    fontSize: 13,
    lineHeight: 18,
  },
  conceptExampleBox: {
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    gap: 3,
    marginTop: 2,
  },
  conceptExampleLabel: {
    fontSize: 9.5,
    fontWeight: '800',
    letterSpacing: 0.6,
  },
  conceptExampleText: {
    fontSize: 12.5,
    lineHeight: 17,
  },

  // Notes
  notesContainer: {
    gap: 6,
    paddingTop: 4,
  },
  noteRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 6,
  },
  noteText: {
    fontSize: 12,
    lineHeight: 17,
    flex: 1,
  },

  // Dialogue
  dialogueChatList: {
    gap: 12,
  },
  dialogueRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  dialogueAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dialogueAvatarText: {
    fontSize: 11,
    fontWeight: '700',
  },
  dialogueCard: {
    flex: 1,
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    gap: 4,
  },
  dialogueSpeakerName: {
    fontSize: 10,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  dialogueGermanText: {
    fontSize: 13.5,
    fontWeight: '700',
    lineHeight: 19,
  },
  dialogueEnglishText: {
    fontSize: 12,
    lineHeight: 17,
  },

  // Insight Card
  insightCard: {
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    gap: 8,
  },
  insightHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  insightTitle: {
    fontSize: 14,
    fontWeight: '700',
  },
  insightContent: {
    fontSize: 13,
    lineHeight: 20,
  },

  // Actions
  actionContainer: {
    gap: 10,
    marginTop: 8,
  },
  primaryBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 14,
    borderWidth: 1,
  },
  primaryBtnText: {
    fontSize: 14,
    fontWeight: '700',
    flexShrink: 1,
  },
  secondaryBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 14,
    borderWidth: 1,
  },
  secondaryBtnText: {
    fontSize: 13,
    fontWeight: '600',
    flexShrink: 1,
  },
  pressed: {
    opacity: 0.8,
  },
});
