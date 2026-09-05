import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Chapter {
  id: number;
  title: string;
  sub: string;
  totalLessons: number;
  completedLessons: number;
  isCompleted: boolean;
  isInProgress: boolean;
}

const CHAPTERS: Chapter[] = [
  {
    id: 1,
    title: 'Das Alphabet & Aussprache',
    sub: 'Letters, diphthongs (ei, eu, au), umlauts (ä, ö, ü) & ch-sounds',
    totalLessons: 5,
    completedLessons: 5,
    isCompleted: true,
    isInProgress: false,
  },
  {
    id: 2,
    title: 'Begrüßungen & Vorstellen',
    sub: 'Formal & informal greetings, asking origin & names',
    totalLessons: 5,
    completedLessons: 5,
    isCompleted: true,
    isInProgress: false,
  },
  {
    id: 3,
    title: 'Familie, Freunde & Berufe',
    sub: 'Describing relationships, occupations, and possessive pronouns',
    totalLessons: 5,
    completedLessons: 3,
    isCompleted: false,
    isInProgress: true,
  },
  {
    id: 4,
    title: 'Zahlen, Preise & Einkaufen',
    sub: 'Numbers up to 1,000, grocery vocabulary, and Euro currency',
    totalLessons: 5,
    completedLessons: 0,
    isCompleted: false,
    isInProgress: false,
  },
  {
    id: 5,
    title: 'Im Restaurant & Essen',
    sub: 'Ordering food, table etiquette, asking for the bill & tipping',
    totalLessons: 5,
    completedLessons: 0,
    isCompleted: false,
    isInProgress: false,
  },
  {
    id: 6,
    title: 'Wohnen & Umgebung',
    sub: 'Rooms, furniture, colors, and locating objects with prepositions',
    totalLessons: 5,
    completedLessons: 0,
    isCompleted: false,
    isInProgress: false,
  },
  {
    id: 7,
    title: 'Tagesablauf & Uhrzeit',
    sub: 'Telling time (offiziell & umgangssprachlich), separable verbs',
    totalLessons: 5,
    completedLessons: 0,
    isCompleted: false,
    isInProgress: false,
  },
  {
    id: 8,
    title: 'Freizeit & Hobbys',
    sub: 'Sports, weekends, likes & dislikes (gern / lieber / am liebsten)',
    totalLessons: 4,
    completedLessons: 0,
    isCompleted: false,
    isInProgress: false,
  },
  {
    id: 9,
    title: 'Reisen & Verkehr',
    sub: 'Train stations, directions, buying tickets, and hotel check-in',
    totalLessons: 5,
    completedLessons: 0,
    isCompleted: false,
    isInProgress: false,
  },
  {
    id: 10,
    title: 'Goethe A1 Prüfungstraining',
    sub: 'Reading, writing, listening simulation, and oral exam prompts',
    totalLessons: 4,
    completedLessons: 0,
    isCompleted: false,
    isInProgress: false,
  },
];

export default function CoursesScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const [filter, setFilter] = useState<'all' | 'in_progress' | 'roadmap'>('all');
  const [expandedCourse, setExpandedCourse] = useState(true);

  // Palette tokens
  const bgColor = isDark ? '#090D16' : '#F8FAFC';
  const cardBg = isDark ? '#131D2E' : '#FFFFFF';
  const innerCardBg = isDark ? '#1C293D' : '#F1F5F9';
  const textColor = isDark ? '#F8FAFC' : '#0F172A';
  const mutedText = isDark ? '#94A3B8' : '#64748B';
  const borderColor = isDark ? '#24344D' : '#E2E8F0';
  const primaryColor = '#F59E0B';
  const primaryBadgeBg = isDark ? '#3D2808' : '#FEF3C7';

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: bgColor }]} edges={['top']}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Top Header */}
        <View style={styles.header}>
          <Text style={[styles.headerTitle, { color: textColor }]}>My Courses</Text>
          <Text style={[styles.headerSubtitle, { color: mutedText }]}>
            German Language Roadmaps & Chapters
          </Text>
        </View>

        {/* Filter Chips */}
        <View style={styles.filterRow}>
          {[
            { id: 'all', label: 'All Courses' },
            { id: 'in_progress', label: 'In Progress (1)' },
            { id: 'roadmap', label: 'Curriculum (3)' },
          ].map((item) => {
            const active = filter === item.id;
            return (
              <Pressable
                key={item.id}
                onPress={() => setFilter(item.id as any)}
                style={({ pressed }) => [
                  styles.filterChip,
                  active
                    ? [styles.activeFilterChip, { backgroundColor: primaryColor }]
                    : [
                        styles.inactiveFilterChip,
                        { backgroundColor: cardBg, borderColor },
                      ],
                  pressed && styles.pressed,
                ]}
              >
                <Text
                  style={[
                    styles.filterChipText,
                    { color: active ? '#FFFFFF' : mutedText, fontWeight: active ? '700' : '500' },
                  ]}
                >
                  {item.label}
                </Text>
              </Pressable>
            );
          })}
        </View>

        {/* Main Enrolled Course Card */}
        <View style={[styles.courseCard, { backgroundColor: cardBg, borderColor }]}>
          <View style={styles.courseCardHeader}>
            <View style={[styles.badge, { backgroundColor: primaryBadgeBg }]}>
              <Text style={styles.badgeText}>ENROLLED · A1 LEVEL</Text>
            </View>
            <View style={styles.audioSupportBadge}>
              <Ionicons name="headset" size={14} color="#2563EB" />
              <Text style={styles.audioSupportText}>Native Audio</Text>
            </View>
          </View>

          <Text style={[styles.courseTitle, { color: textColor }]}>
            German A1: Absolute Beginner to Confident Speaker
          </Text>
          <Text style={[styles.courseDesc, { color: mutedText }]}>
            Master essential daily vocabulary, greetings, grammar cases, numbers, food ordering, and Goethe A1 exam skills.
          </Text>

          {/* Progress Breakdown */}
          <View style={[styles.progressBox, { backgroundColor: innerCardBg }]}>
            <View style={styles.progressRow}>
              <Text style={[styles.progressLabel, { color: mutedText }]}>Course Completion</Text>
              <Text style={[styles.progressValue, { color: primaryColor }]}>42% (20/48 Lessons)</Text>
            </View>
            <View style={[styles.track, { backgroundColor: isDark ? '#2D3748' : '#CBD5E1' }]}>
              <View style={[styles.fill, { width: '42%', backgroundColor: primaryColor }]} />
            </View>
          </View>

          {/* Chapter Accordion Toggle */}
          <Pressable
            onPress={() => setExpandedCourse(!expandedCourse)}
            style={({ pressed }) => [
              styles.expandToggle,
              { borderTopColor: borderColor },
              pressed && styles.pressed,
            ]}
          >
            <Text style={[styles.expandToggleText, { color: textColor }]}>
              {expandedCourse ? 'Hide Syllabus (10 Chapters)' : 'View Syllabus (10 Chapters)'}
            </Text>
            <Ionicons
              name={expandedCourse ? 'chevron-up' : 'chevron-down'}
              size={18}
              color={mutedText}
            />
          </Pressable>

          {/* Chapter List */}
          {expandedCourse && (
            <View style={styles.chapterList}>
              {CHAPTERS.map((ch) => (
                <View
                  key={ch.id}
                  style={[
                    styles.chapterItem,
                    {
                      backgroundColor: innerCardBg,
                      borderColor: ch.isInProgress ? primaryColor : borderColor,
                    },
                  ]}
                >
                  <View style={styles.chapterLeft}>
                    <View
                      style={[
                        styles.chapterStatusCircle,
                        ch.isCompleted
                          ? { backgroundColor: '#10B981' }
                          : ch.isInProgress
                          ? { backgroundColor: primaryColor }
                          : { backgroundColor: isDark ? '#2D3748' : '#E2E8F0' },
                      ]}
                    >
                      {ch.isCompleted ? (
                        <Ionicons name="checkmark" size={14} color="#FFFFFF" />
                      ) : ch.isInProgress ? (
                        <Ionicons name="play" size={12} color="#FFFFFF" />
                      ) : (
                        <Text
                          style={[
                            styles.chapterNum,
                            { color: isDark ? '#94A3B8' : '#64748B' },
                          ]}
                        >
                          {ch.id}
                        </Text>
                      )}
                    </View>

                    <View style={styles.chapterTextContent}>
                      <Text style={[styles.chapterTitle, { color: textColor }]}>
                        Kapitel {ch.id}: {ch.title}
                      </Text>
                      <Text style={[styles.chapterSub, { color: mutedText }]}>{ch.sub}</Text>
                    </View>
                  </View>

                  <View style={styles.chapterRight}>
                    <Text
                      style={[
                        styles.lessonStat,
                        {
                          color: ch.isCompleted
                            ? '#10B981'
                            : ch.isInProgress
                            ? primaryColor
                            : mutedText,
                        },
                      ]}
                    >
                      {ch.completedLessons}/{ch.totalLessons}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          )}

          {/* Action button */}
          <Pressable
            style={({ pressed }) => [
              styles.continueBtn,
              { backgroundColor: primaryColor },
              pressed && styles.pressedBtn,
            ]}
          >
            <Ionicons name="play-circle" size={20} color="#FFFFFF" style={{ marginRight: 8 }} />
            <Text style={styles.continueBtnText}>Resume Chapter 3: Lektion 3.2</Text>
          </Pressable>
        </View>

        {/* Roadmap Next Levels */}
        {filter !== 'in_progress' && (
          <View style={styles.nextLevelsSection}>
            <Text style={[styles.sectionTitle, { color: textColor, marginBottom: 12 }]}>
              Upcoming Syllabi
            </Text>

            {/* German A2 */}
            <View style={[styles.courseCard, { backgroundColor: cardBg, borderColor, marginBottom: 14 }]}>
              <View style={styles.courseCardHeader}>
                <View style={[styles.badge, { backgroundColor: isDark ? '#1E293B' : '#E0E7FF' }]}>
                  <Text style={[styles.badgeText, { color: '#4338CA' }]}>A2 LEVEL · ELEMENTARY</Text>
                </View>
                <Text style={[styles.lockedText, { color: mutedText }]}>12 Chapters · 60 Lessons</Text>
              </View>

              <Text style={[styles.courseTitle, { color: textColor }]}>
                German A2: Elementary Fluency & Real Conversations
              </Text>
              <Text style={[styles.courseDesc, { color: mutedText }]}>
                Past tense (Perfekt), narrative modal verbs, writing emails, doctor visits, and job discussions.
              </Text>

              <View style={[styles.roadmapActionRow, { borderTopColor: borderColor }]}>
                <View style={styles.statusPill}>
                  <Ionicons name="time-outline" size={14} color="#6366F1" />
                  <Text style={[styles.statusPillText, { color: '#6366F1' }]}>Ready to Unlock</Text>
                </View>
                <Pressable style={({ pressed }) => [styles.exploreBtn, pressed && styles.pressed]}>
                  <Text style={[styles.exploreBtnText, { color: primaryColor }]}>View Syllabus</Text>
                  <Ionicons name="arrow-forward" size={14} color={primaryColor} />
                </Pressable>
              </View>
            </View>

            {/* German B1 */}
            <View style={[styles.courseCard, { backgroundColor: cardBg, borderColor }]}>
              <View style={styles.courseCardHeader}>
                <View style={[styles.badge, { backgroundColor: isDark ? '#1E293B' : '#FCE7F3' }]}>
                  <Text style={[styles.badgeText, { color: '#BE185D' }]}>B1 LEVEL · INTERMEDIATE</Text>
                </View>
                <Text style={[styles.lockedText, { color: mutedText }]}>14 Chapters · 72 Lessons</Text>
              </View>

              <Text style={[styles.courseTitle, { color: textColor }]}>
                German B1: Professional Fluency & Complex Expression
              </Text>
              <Text style={[styles.courseDesc, { color: mutedText }]}>
                Subjunctive II (Konjunktiv II), passive voice, German workplace culture, and debate tactics.
              </Text>

              <View style={[styles.roadmapActionRow, { borderTopColor: borderColor }]}>
                <View style={styles.statusPill}>
                  <Ionicons name="lock-closed-outline" size={14} color={mutedText} />
                  <Text style={[styles.statusPillText, { color: mutedText }]}>Requires A2</Text>
                </View>
                <Pressable style={({ pressed }) => [styles.exploreBtn, pressed && styles.pressed]}>
                  <Text style={[styles.exploreBtnText, { color: primaryColor }]}>View Syllabus</Text>
                  <Ionicons name="arrow-forward" size={14} color={primaryColor} />
                </Pressable>
              </View>
            </View>
          </View>
        )}

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
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 24,
    maxWidth: 600,
    alignSelf: 'center',
    width: '100%',
  },
  header: {
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '800',
    letterSpacing: -0.3,
  },
  headerSubtitle: {
    fontSize: 14,
    marginTop: 2,
  },
  filterRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  filterChip: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 20,
  },
  activeFilterChip: {
    shadowColor: '#F59E0B',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  inactiveFilterChip: {
    borderWidth: 1,
  },
  filterChipText: {
    fontSize: 13,
  },
  courseCard: {
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  courseCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#D97706',
    letterSpacing: 0.5,
  },
  audioSupportBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  audioSupportText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#2563EB',
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
  },
  courseDesc: {
    fontSize: 13,
    lineHeight: 19,
    marginBottom: 16,
  },
  progressBox: {
    padding: 12,
    borderRadius: 12,
    marginBottom: 14,
  },
  progressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  progressLabel: {
    fontSize: 12,
    fontWeight: '500',
  },
  progressValue: {
    fontSize: 12,
    fontWeight: '700',
  },
  track: {
    height: 8,
    borderRadius: 4,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    borderRadius: 4,
  },
  expandToggle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderTopWidth: 1,
  },
  expandToggleText: {
    fontSize: 14,
    fontWeight: '600',
  },
  chapterList: {
    gap: 8,
    marginBottom: 16,
  },
  chapterItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
  },
  chapterLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 12,
  },
  chapterStatusCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chapterNum: {
    fontSize: 12,
    fontWeight: '700',
  },
  chapterTextContent: {
    flex: 1,
  },
  chapterTitle: {
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 2,
  },
  chapterSub: {
    fontSize: 11,
    lineHeight: 15,
  },
  chapterRight: {
    marginLeft: 8,
  },
  lessonStat: {
    fontSize: 12,
    fontWeight: '700',
  },
  continueBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 13,
    borderRadius: 12,
    shadowColor: '#F59E0B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
  },
  continueBtnText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 15,
  },
  nextLevelsSection: {
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
  },
  lockedText: {
    fontSize: 12,
  },
  roadmapActionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 12,
    marginTop: 4,
    borderTopWidth: 1,
  },
  statusPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statusPillText: {
    fontSize: 12,
    fontWeight: '600',
  },
  exploreBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  exploreBtnText: {
    fontSize: 13,
    fontWeight: '700',
  },
  pressed: {
    opacity: 0.7,
  },
  pressedBtn: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
});
