import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
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
import {
  Chapter,
  CourseItem,
  fetchLessonById,
  Lesson,
} from '@/services/api';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function LessonDetailsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const { isSaved, toggleSaveCourse } = useLearning();

  const courseId = (params.courseId as string) || '';
  const courseTitleParam = (params.courseTitle as string) || '';
  const chapterTitleParam = (params.chapterTitle as string) || '';
  const lessonId = (params.lessonId as string) || '';
  const initialLessonTitle = (params.lessonTitle as string) || 'Lesson Details';
  const initialDescription = (params.description as string) || '';

  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [chapter, setChapter] = useState<Chapter | null>(null);
  const [course, setCourse] = useState<CourseItem | null>(null);
  const [isLoading, setIsLoading] = useState(Boolean(courseId && lessonId));
  const [isCompleted, setIsCompleted] = useState(false);

  // Practice state
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [revealedAnswers, setRevealedAnswers] = useState<Record<number, boolean>>({});

  // Pure monochromatic black and white styling (Zero blue)
  const bgColor = isDark ? '#09090B' : '#FFFFFF';
  const cardBg = isDark ? '#121214' : '#FFFFFF';
  const innerCardBg = isDark ? '#18181B' : '#F4F4F5';
  const tableHeaderBg = isDark ? '#27272A' : '#E4E4E7';
  const textColor = isDark ? '#FFFFFF' : '#09090B';
  const mutedText = isDark ? '#A1A1AA' : '#71717A';
  const borderColor = isDark ? '#27272A' : '#E4E4E7';
  const activeColor = isDark ? '#FFFFFF' : '#09090B';
  const activeTextColor = isDark ? '#09090B' : '#FFFFFF';

  const saved = courseId ? isSaved(courseId) : false;

  useEffect(() => {
    let isMounted = true;
    if (!courseId || !lessonId) {
      return;
    }

    fetchLessonById(courseId, lessonId)
      .then((res) => {
        if (!isMounted) return;
        if (res) {
          setLesson(res.lesson);
          if (res.chapter) setChapter(res.chapter);
          if (res.course) setCourse(res.course);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.warn('Error fetching lesson:', err);
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [courseId, lessonId]);

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Studying "${lesson?.title || initialLessonTitle}" on Instructor!`,
      });
    } catch (e) {
      console.warn('Share error', e);
    }
  };

  const toggleAnswerReveal = (qIndex: number) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setRevealedAnswers((prev) => ({
      ...prev,
      [qIndex]: !prev[qIndex],
    }));
  };

  const handleSelectOption = (qIndex: number, optIndex: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [qIndex]: optIndex,
    }));
  };

  const currentLessonTitle = lesson?.title || initialLessonTitle;
  const currentDescription = lesson?.description || initialDescription;
  const currentChapterTitle = chapter?.title || chapterTitleParam;
  const currentCourseTitle = course?.title || courseTitleParam;

  const content = lesson?.content;

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: bgColor }]} edges={['top']}>
      {/* Top Header Bar - Borderless and shadowless */}
      <View style={styles.headerBar}>
        <Pressable
          onPress={() => router.back()}
          style={({ pressed }) => [styles.iconBtn, pressed && styles.pressed]}
          hitSlop={10}
        >
          <Ionicons name="chevron-back" size={24} color={textColor} />
        </Pressable>

        <View style={styles.headerCenter}>
          <Text style={[styles.headerBreadcrumb, { color: mutedText }]} numberOfLines={1}>
            {currentCourseTitle || 'Course Curriculum'}
          </Text>
        </View>

        <View style={styles.headerRightActions}>
          {courseId ? (
            <Pressable
              onPress={() => toggleSaveCourse(courseId)}
              style={({ pressed }) => [styles.iconBtn, pressed && styles.pressed]}
              hitSlop={10}
            >
              <Ionicons
                name={saved ? 'bookmark' : 'bookmark-outline'}
                size={22}
                color={textColor}
              />
            </Pressable>
          ) : null}

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
            Loading lesson content...
          </Text>
        </View>
      ) : (
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Lesson Hero Card */}
          <View style={[styles.heroCard, { backgroundColor: innerCardBg, borderColor }]}>
            {currentChapterTitle ? (
              <View style={styles.chapterBadgeRow}>
                <Ionicons name="book-outline" size={13} color={mutedText} />
                <Text style={[styles.chapterBadgeText, { color: mutedText }]} numberOfLines={1}>
                  {currentChapterTitle}
                </Text>
              </View>
            ) : null}

            <Text style={[styles.lessonHeading, { color: textColor }]}>
              {currentLessonTitle}
            </Text>

            {currentDescription ? (
              <Text style={[styles.lessonDescriptionText, { color: mutedText }]}>
                {currentDescription}
              </Text>
            ) : null}
          </View>

          {/* Overview Card */}
          {content?.overview ? (
            <View style={[styles.sectionCard, { backgroundColor: cardBg, borderColor }]}>
              <View style={styles.cardHeaderRow}>
                <Ionicons name="document-text-outline" size={18} color={textColor} />
                <Text style={[styles.cardHeaderTitle, { color: textColor }]}>Overview</Text>
              </View>
              <Text style={[styles.bodyText, { color: textColor }]}>
                {content.overview}
              </Text>
            </View>
          ) : null}

          {/* Can-Do Learning Goals */}
          {content?.canDo ? (
            <View style={[styles.sectionCard, { backgroundColor: cardBg, borderColor }]}>
              <View style={styles.cardHeaderRow}>
                <Ionicons name="checkmark-circle-outline" size={18} color={textColor} />
                <Text style={[styles.cardHeaderTitle, { color: textColor }]}>
                  Learning Goals (Can-Do)
                </Text>
              </View>
              <View style={[styles.canDoBox, { backgroundColor: innerCardBg, borderColor }]}>
                <Ionicons name="checkmark" size={16} color={textColor} style={{ marginTop: 2 }} />
                <Text style={[styles.canDoText, { color: textColor }]}>
                  {content.canDo}
                </Text>
              </View>
            </View>
          ) : null}

          {/* Teacher's Note */}
          {content?.teacherNote ? (
            <View style={[styles.sectionCard, { backgroundColor: cardBg, borderColor }]}>
              <View style={styles.cardHeaderRow}>
                <Ionicons name="bulb-outline" size={18} color={textColor} />
                <Text style={[styles.cardHeaderTitle, { color: textColor }]}>
                  {"Teacher's Note"}
                </Text>
              </View>
              <View style={[styles.teacherBox, { backgroundColor: innerCardBg, borderColor }]}>
                <Text style={[styles.teacherText, { color: mutedText }]}>
                  {content.teacherNote}
                </Text>
              </View>
            </View>
          ) : null}

          {/* Curriculum Sections with Tables & Vocabulary Items */}
          {content?.sections?.map((sec, sIdx) => (
            <View key={sIdx} style={[styles.sectionCard, { backgroundColor: cardBg, borderColor }]}>
              <Text style={[styles.sectionTitle, { color: textColor }]}>{sec.title}</Text>

              {sec.description ? (
                <Text style={[styles.sectionDesc, { color: mutedText }]}>
                  {sec.description}
                </Text>
              ) : null}

              {/* Data Table */}
              {sec.table && sec.table.headers && sec.table.rows ? (
                <View style={[styles.tableContainer, { borderColor }]}>
                  <ScrollView horizontal showsHorizontalScrollIndicator={true}>
                    <View>
                      {/* Table Header */}
                      <View style={[styles.tableRow, { backgroundColor: tableHeaderBg }]}>
                        {sec.table.headers.map((h, hIdx) => (
                          <View
                            key={hIdx}
                            style={[
                              styles.tableCell,
                              hIdx === 0 ? styles.firstColumnCell : styles.standardColumnCell,
                            ]}
                          >
                            <Text style={[styles.tableHeaderText, { color: textColor }]}>
                              {h}
                            </Text>
                          </View>
                        ))}
                      </View>

                      {/* Table Rows */}
                      {sec.table.rows.map((row, rIdx) => {
                        const isEven = rIdx % 2 === 0;
                        return (
                          <View
                            key={rIdx}
                            style={[
                              styles.tableRow,
                              {
                                backgroundColor: isEven ? cardBg : innerCardBg,
                                borderTopColor: borderColor,
                                borderTopWidth: 1,
                              },
                            ]}
                          >
                            {row.map((val, cIdx) => (
                              <View
                                key={cIdx}
                                style={[
                                  styles.tableCell,
                                  cIdx === 0 ? styles.firstColumnCell : styles.standardColumnCell,
                                ]}
                              >
                                <Text
                                  style={[
                                    styles.tableCellText,
                                    cIdx === 0 && styles.tableCellBold,
                                    { color: textColor },
                                  ]}
                                >
                                  {val}
                                </Text>
                              </View>
                            ))}
                          </View>
                        );
                      })}
                    </View>
                  </ScrollView>
                </View>
              ) : null}

              {/* Term Items */}
              {sec.items && sec.items.length > 0 ? (
                <View style={styles.itemsList}>
                  {sec.items.map((item, iIdx) => (
                    <View
                      key={iIdx}
                      style={[styles.itemCard, { backgroundColor: innerCardBg, borderColor }]}
                    >
                      <View style={styles.itemHeader}>
                        <Text style={[styles.itemTerm, { color: textColor }]}>{item.term}</Text>
                        {item.pronunciation ? (
                          <View style={[styles.pronounceBadge, { backgroundColor: cardBg, borderColor }]}>
                            <Text style={[styles.pronounceText, { color: mutedText }]}>
                              /{item.pronunciation}/
                            </Text>
                          </View>
                        ) : null}
                      </View>

                      <Text style={[styles.itemMeaning, { color: textColor }]}>
                        {item.meaning}
                      </Text>

                      {item.example ? (
                        <View style={[styles.exampleRow, { borderTopColor: borderColor }]}>
                          <Ionicons name="chatbox-ellipses-outline" size={13} color={mutedText} />
                          <Text style={[styles.exampleText, { color: mutedText }]}>
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
                <View style={styles.notesList}>
                  {sec.notes.map((note, nIdx) => (
                    <View key={nIdx} style={styles.noteItem}>
                      <Ionicons name="ellipse" size={5} color={mutedText} style={{ marginTop: 7 }} />
                      <Text style={[styles.noteText, { color: mutedText }]}>{note}</Text>
                    </View>
                  ))}
                </View>
              ) : null}
            </View>
          ))}

          {/* Practical Dialogue */}
          {content?.dialogue ? (
            <View style={[styles.sectionCard, { backgroundColor: cardBg, borderColor }]}>
              <View style={styles.cardHeaderRow}>
                <Ionicons name="chatbubbles-outline" size={18} color={textColor} />
                <Text style={[styles.cardHeaderTitle, { color: textColor }]}>
                  Practical Dialogue
                </Text>
              </View>

              {content.dialogue.context ? (
                <View style={[styles.dialogueContextBox, { backgroundColor: innerCardBg, borderColor }]}>
                  <Text style={[styles.dialogueContextText, { color: mutedText }]}>
                    Context: {content.dialogue.context}
                  </Text>
                </View>
              ) : null}

              <View style={styles.dialogueList}>
                {content.dialogue.lines.map((line, dIdx) => (
                  <View
                    key={dIdx}
                    style={[styles.dialogueCard, { backgroundColor: innerCardBg, borderColor }]}
                  >
                    <View style={styles.dialogueSpeakerRow}>
                      <View style={[styles.speakerPill, { backgroundColor: cardBg, borderColor }]}>
                        <Text style={[styles.speakerText, { color: textColor }]}>
                          {line.speaker}
                        </Text>
                      </View>
                    </View>
                    <Text style={[styles.dialogueGerman, { color: textColor }]}>
                      {line.german}
                    </Text>
                    <Text style={[styles.dialogueEnglish, { color: mutedText }]}>
                      {line.english}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          ) : null}

          {/* Fun Fact / Cultural Insight */}
          {content?.funFact ? (
            <View style={[styles.sectionCard, { backgroundColor: cardBg, borderColor }]}>
              <View style={styles.cardHeaderRow}>
                <Ionicons name="sparkles-outline" size={18} color={textColor} />
                <Text style={[styles.cardHeaderTitle, { color: textColor }]}>
                  {content.funFact.title || 'Did You Know?'}
                </Text>
              </View>
              <View style={[styles.funFactBox, { backgroundColor: innerCardBg, borderColor }]}>
                <Text style={[styles.funFactText, { color: textColor }]}>
                  {content.funFact.content}
                </Text>
              </View>
            </View>
          ) : null}

          {/* Practice & Quiz */}
          {content?.practice && content.practice.length > 0 ? (
            <View style={[styles.sectionCard, { backgroundColor: cardBg, borderColor }]}>
              <View style={styles.cardHeaderRow}>
                <Ionicons name="help-circle-outline" size={18} color={textColor} />
                <Text style={[styles.cardHeaderTitle, { color: textColor }]}>
                  Practice & Knowledge Check
                </Text>
              </View>

              {content.practice.map((q, qIdx) => {
                const isRevealed = !!revealedAnswers[qIdx];
                const selectedOpt = selectedAnswers[qIdx];

                return (
                  <View
                    key={qIdx}
                    style={[styles.practiceCard, { backgroundColor: innerCardBg, borderColor }]}
                  >
                    <View style={styles.practiceQuestionHeader}>
                      <View style={[styles.qNumBadge, { backgroundColor: cardBg, borderColor }]}>
                        <Text style={[styles.qNumText, { color: textColor }]}>Q{qIdx + 1}</Text>
                      </View>
                      <Text style={[styles.questionPrompt, { color: textColor }]}>
                        {q.question}
                      </Text>
                    </View>

                    {/* Options (if multiple choice) */}
                    {q.options && q.options.length > 0 ? (
                      <View style={styles.optionsList}>
                        {q.options.map((opt, optIdx) => {
                          const isSelected = selectedOpt === optIdx;
                          return (
                            <Pressable
                              key={optIdx}
                              onPress={() => handleSelectOption(qIdx, optIdx)}
                              style={({ pressed }) => [
                                styles.optionBtn,
                                {
                                  backgroundColor: isSelected ? activeColor : cardBg,
                                  borderColor: isSelected ? activeColor : borderColor,
                                },
                                pressed && styles.pressed,
                              ]}
                            >
                              <Text
                                style={[
                                  styles.optionText,
                                  { color: isSelected ? activeTextColor : textColor },
                                ]}
                              >
                                {opt}
                              </Text>
                            </Pressable>
                          );
                        })}
                      </View>
                    ) : null}

                    {/* Reveal Answer Toggle */}
                    <Pressable
                      onPress={() => toggleAnswerReveal(qIdx)}
                      style={({ pressed }) => [
                        styles.revealBtn,
                        { borderColor },
                        pressed && styles.pressed,
                      ]}
                    >
                      <Text style={[styles.revealBtnText, { color: textColor }]}>
                        {isRevealed ? 'Hide Answer' : 'Show Answer & Explanation'}
                      </Text>
                      <Ionicons
                        name={isRevealed ? 'chevron-up' : 'chevron-down'}
                        size={15}
                        color={textColor}
                      />
                    </Pressable>

                    {/* Answer Reveal Box */}
                    {isRevealed ? (
                      <View style={[styles.answerBox, { backgroundColor: cardBg, borderColor }]}>
                        <View style={styles.answerRow}>
                          <Text style={[styles.answerLabel, { color: mutedText }]}>Answer:</Text>
                          <Text style={[styles.answerValue, { color: textColor }]}>
                            {q.answer}
                          </Text>
                        </View>
                        {q.explanation ? (
                          <Text style={[styles.answerExplanation, { color: mutedText }]}>
                            {q.explanation}
                          </Text>
                        ) : null}
                      </View>
                    ) : null}
                  </View>
                );
              })}
            </View>
          ) : null}

          {/* Bottom Completion Action */}
          <View style={styles.actionContainer}>
            <Pressable
              onPress={() => setIsCompleted(!isCompleted)}
              style={({ pressed }) => [
                styles.primaryBtn,
                {
                  backgroundColor: isCompleted ? innerCardBg : activeColor,
                  borderColor: activeColor,
                },
                pressed && styles.pressed,
              ]}
            >
              <Ionicons
                name={isCompleted ? 'checkmark-circle' : 'checkmark-circle-outline'}
                size={18}
                color={isCompleted ? textColor : activeTextColor}
              />
              <Text
                style={[
                  styles.primaryBtnText,
                  { color: isCompleted ? textColor : activeTextColor },
                ]}
              >
                {isCompleted ? 'Lesson Completed ✓' : 'Mark Lesson as Completed'}
              </Text>
            </Pressable>

            <Pressable
              onPress={() => router.back()}
              style={({ pressed }) => [
                styles.secondaryBtn,
                { backgroundColor: innerCardBg, borderColor },
                pressed && styles.pressed,
              ]}
            >
              <Text style={[styles.secondaryBtnText, { color: textColor }]}>
                Return to Course Curriculum
              </Text>
            </Pressable>
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
  headerCenter: {
    flex: 1,
    paddingHorizontal: 8,
    alignItems: 'center',
  },
  headerBreadcrumb: {
    fontSize: 13,
    fontWeight: '600',
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
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 32,
    gap: 16,
  },
  heroCard: {
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
  },
  chapterBadgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 8,
  },
  chapterBadgeText: {
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
  lessonHeading: {
    fontSize: 22,
    fontWeight: '800',
    lineHeight: 28,
    marginBottom: 10,
  },
  durationBadge: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 10,
  },
  durationText: {
    fontSize: 11,
    fontWeight: '700',
  },
  lessonDescriptionText: {
    fontSize: 13,
    lineHeight: 19,
  },
  sectionCard: {
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  cardHeaderTitle: {
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: -0.2,
  },
  bodyText: {
    fontSize: 13,
    lineHeight: 20,
  },
  canDoBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
  },
  canDoText: {
    flex: 1,
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '500',
  },
  teacherBox: {
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
  },
  teacherText: {
    fontSize: 13,
    lineHeight: 19,
    fontStyle: 'italic',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 6,
  },
  sectionDesc: {
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 14,
  },
  tableContainer: {
    borderRadius: 10,
    borderWidth: 1,
    overflow: 'hidden',
    marginBottom: 14,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCell: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    justifyContent: 'center',
  },
  firstColumnCell: {
    width: 85,
  },
  standardColumnCell: {
    width: 140,
  },
  tableHeaderText: {
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  tableCellText: {
    fontSize: 12,
    lineHeight: 16,
  },
  tableCellBold: {
    fontWeight: '700',
  },
  itemsList: {
    gap: 10,
    marginBottom: 10,
  },
  itemCard: {
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    gap: 6,
  },
  itemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemTerm: {
    fontSize: 15,
    fontWeight: '700',
  },
  pronounceBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    borderWidth: 1,
  },
  pronounceText: {
    fontSize: 11,
    fontWeight: '600',
  },
  itemMeaning: {
    fontSize: 13,
    lineHeight: 18,
  },
  exampleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingTop: 6,
    borderTopWidth: 1,
  },
  exampleText: {
    fontSize: 12,
    fontStyle: 'italic',
  },
  notesList: {
    gap: 6,
    marginTop: 4,
  },
  noteItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  noteText: {
    flex: 1,
    fontSize: 12,
    lineHeight: 17,
  },
  dialogueContextBox: {
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 12,
  },
  dialogueContextText: {
    fontSize: 12,
    fontStyle: 'italic',
  },
  dialogueList: {
    gap: 10,
  },
  dialogueCard: {
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    gap: 4,
  },
  dialogueSpeakerRow: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  speakerPill: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    borderWidth: 1,
  },
  speakerText: {
    fontSize: 11,
    fontWeight: '700',
  },
  dialogueGerman: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
  },
  dialogueEnglish: {
    fontSize: 12,
    lineHeight: 17,
  },
  funFactBox: {
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
  },
  funFactText: {
    fontSize: 13,
    lineHeight: 19,
  },
  practiceCard: {
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    gap: 12,
    marginBottom: 12,
  },
  practiceQuestionHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  qNumBadge: {
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 6,
    borderWidth: 1,
  },
  qNumText: {
    fontSize: 11,
    fontWeight: '800',
  },
  questionPrompt: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
  },
  optionsList: {
    gap: 8,
  },
  optionBtn: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    borderWidth: 1,
  },
  optionText: {
    fontSize: 13,
    fontWeight: '600',
  },
  revealBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
  },
  revealBtnText: {
    fontSize: 12,
    fontWeight: '600',
  },
  answerBox: {
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    gap: 6,
  },
  answerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  answerLabel: {
    fontSize: 12,
    fontWeight: '600',
  },
  answerValue: {
    fontSize: 13,
    fontWeight: '700',
  },
  answerExplanation: {
    fontSize: 12,
    lineHeight: 17,
  },
  actionContainer: {
    gap: 10,
    marginTop: 8,
  },
  primaryBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    height: 48,
    borderRadius: 12,
    borderWidth: 1,
  },
  primaryBtnText: {
    fontSize: 14,
    fontWeight: '700',
  },
  secondaryBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    borderRadius: 12,
    borderWidth: 1,
  },
  secondaryBtnText: {
    fontSize: 13,
    fontWeight: '600',
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
  pressed: {
    opacity: 0.75,
  },
});
