import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
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

export default function HomeScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const [isPlayingWordAudio, setIsPlayingWordAudio] = useState(false);

  // Styling tokens
  const bgColor = isDark ? '#090D16' : '#F8FAFC';
  const cardBg = isDark ? '#131D2E' : '#FFFFFF';
  const innerCardBg = isDark ? '#1C293D' : '#F1F5F9';
  const textColor = isDark ? '#F8FAFC' : '#0F172A';
  const mutedText = isDark ? '#94A3B8' : '#64748B';
  const borderColor = isDark ? '#24344D' : '#E2E8F0';
  const primaryColor = '#F59E0B';
  const primaryBadgeBg = isDark ? '#3D2808' : '#FEF3C7';

  const handleToggleWordAudio = () => {
    setIsPlayingWordAudio(true);
    setTimeout(() => {
      setIsPlayingWordAudio(false);
    }, 1500);
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: bgColor }]} edges={['top']}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Top Header Bar */}
        <View style={styles.header}>
          <View>
            <Text style={[styles.greetingText, { color: textColor }]}>
              Hallo, Lernende! 👋
            </Text>
            <Text style={[styles.subGreetingText, { color: mutedText }]}>
              Welcome back to Instructor
            </Text>
          </View>

          <View style={[styles.streakBadge, { backgroundColor: primaryBadgeBg, borderColor }]}>
            <Ionicons name="flame" size={18} color="#D97706" />
            <Text style={styles.streakText}>5 Days</Text>
          </View>
        </View>

        {/* Hero: Continue Learning Card */}
        <View
          style={[
            styles.heroCard,
            {
              backgroundColor: cardBg,
              borderColor,
            },
          ]}
        >
          <View style={styles.heroTopRow}>
            <View style={[styles.courseTag, { backgroundColor: primaryBadgeBg }]}>
              <Text style={styles.courseTagText}>GERMAN A1 · IN PROGRESS</Text>
            </View>
            <Text style={[styles.lessonCounter, { color: mutedText }]}>20 / 48 Lessons</Text>
          </View>

          <Text style={[styles.heroCourseTitle, { color: textColor }]}>
            German A1: Foundations & Daily Dialogue
          </Text>
          <Text style={[styles.heroCurrentLesson, { color: mutedText }]}>
            Chapter 3: Familie & Freunde • Lektion 3.2: Wer ist das?
          </Text>

          {/* Progress Bar */}
          <View style={styles.progressContainer}>
            <View style={[styles.progressTrack, { backgroundColor: innerCardBg }]}>
              <View
                style={[
                  styles.progressBar,
                  { width: '42%', backgroundColor: primaryColor },
                ]}
              />
            </View>
            <View style={styles.progressLabelRow}>
              <Text style={[styles.progressLabel, { color: mutedText }]}>Overall Progress</Text>
              <Text style={[styles.progressPercent, { color: primaryColor }]}>42%</Text>
            </View>
          </View>

          {/* Action Button */}
          <Pressable
            onPress={() => router.push('/courses')}
            style={({ pressed }) => [
              styles.resumeBtn,
              { backgroundColor: primaryColor },
              pressed && styles.pressedBtn,
            ]}
          >
            <Ionicons name="play" size={18} color="#FFFFFF" style={styles.btnIcon} />
            <Text style={styles.resumeBtnText}>Continue Lesson</Text>
          </Pressable>
        </View>

        {/* Weekly Streak Bar */}
        <View style={[styles.streakCard, { backgroundColor: cardBg, borderColor }]}>
          <View style={styles.streakHeader}>
            <Text style={[styles.sectionTitle, { color: textColor }]}>This Week's Habit</Text>
            <Text style={[styles.sectionSubtitle, { color: mutedText }]}>5 of 7 days completed</Text>
          </View>
          <View style={styles.daysRow}>
            {[
              { day: 'Mon', done: true },
              { day: 'Tue', done: true },
              { day: 'Wed', done: true },
              { day: 'Thu', done: true },
              { day: 'Fri', done: true },
              { day: 'Sat', done: false, today: true },
              { day: 'Sun', done: false },
            ].map((item, idx) => (
              <View key={idx} style={styles.dayCol}>
                <View
                  style={[
                    styles.dayCircle,
                    item.done
                      ? { backgroundColor: '#10B981' }
                      : item.today
                      ? { backgroundColor: primaryColor }
                      : { backgroundColor: innerCardBg, borderWidth: 1, borderColor },
                  ]}
                >
                  {item.done ? (
                    <Ionicons name="checkmark" size={14} color="#FFFFFF" />
                  ) : item.today ? (
                    <Ionicons name="ellipse" size={10} color="#FFFFFF" />
                  ) : null}
                </View>
                <Text
                  style={[
                    styles.dayLabel,
                    {
                      color: item.today ? primaryColor : mutedText,
                      fontWeight: item.today ? '700' : '500',
                    },
                  ]}
                >
                  {item.day}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Word of the Day */}
        <View style={[styles.wordCard, { backgroundColor: cardBg, borderColor }]}>
          <View style={styles.wordHeader}>
            <View style={[styles.wordBadge, { backgroundColor: isDark ? '#1E293B' : '#EFF6FF' }]}>
              <Text style={[styles.wordBadgeText, { color: '#2563EB' }]}>WORT DES TAGES</Text>
            </View>
            <Pressable
              onPress={handleToggleWordAudio}
              style={({ pressed }) => [
                styles.audioBtn,
                { backgroundColor: innerCardBg },
                pressed && styles.pressed,
              ]}
              hitSlop={8}
            >
              <Ionicons
                name={isPlayingWordAudio ? 'volume-high' : 'volume-medium'}
                size={18}
                color={primaryColor}
              />
              <Text style={[styles.audioBtnText, { color: primaryColor }]}>
                {isPlayingWordAudio ? 'Playing...' : 'Audio'}
              </Text>
            </Pressable>
          </View>

          <Text style={[styles.germanWord, { color: textColor }]}>die Gemütlichkeit</Text>
          <Text style={[styles.wordPhonetic, { color: mutedText }]}>[dˈiː gəˈmyːtlɪçkaɪt] · Noun, fem.</Text>
          <Text style={[styles.wordDefinition, { color: textColor }]}>
            A feeling of warmth, friendliness, coziness, and good cheer.
          </Text>

          <View style={[styles.exampleBox, { backgroundColor: innerCardBg }]}>
            <Text style={[styles.exampleDe, { color: textColor }]}>
              „Wir trinken heißen Tee und genießen die Gemütlichkeit.“
            </Text>
            <Text style={[styles.exampleEn, { color: mutedText }]}>
              “We drink hot tea and enjoy the coziness.”
            </Text>
          </View>
        </View>

        {/* Quick Practice Grid */}
        <View style={styles.quickPracticeSection}>
          <Text style={[styles.sectionTitle, { color: textColor, marginBottom: 12 }]}>
            Quick Practice
          </Text>

          <View style={styles.gridRow}>
            {/* Audio Drills */}
            <Pressable
              onPress={() => router.push('/courses')}
              style={({ pressed }) => [
                styles.gridCard,
                { backgroundColor: cardBg, borderColor },
                pressed && styles.pressed,
              ]}
            >
              <View style={[styles.gridIconCircle, { backgroundColor: '#DBEAFE' }]}>
                <Ionicons name="headset" size={24} color="#2563EB" />
              </View>
              <Text style={[styles.gridTitle, { color: textColor }]}>Audio Drills</Text>
              <Text style={[styles.gridDesc, { color: mutedText }]}>Native German listening</Text>
            </Pressable>

            {/* Speaking Practice */}
            <Pressable
              onPress={() => router.push('/courses')}
              style={({ pressed }) => [
                styles.gridCard,
                { backgroundColor: cardBg, borderColor },
                pressed && styles.pressed,
              ]}
            >
              <View style={[styles.gridIconCircle, { backgroundColor: '#DCFCE7' }]}>
                <Ionicons name="mic" size={24} color="#16A34A" />
              </View>
              <Text style={[styles.gridTitle, { color: textColor }]}>Pronunciation</Text>
              <Text style={[styles.gridDesc, { color: mutedText }]}>Accent & pitch training</Text>
            </Pressable>
          </View>

          <View style={styles.gridRow}>
            {/* Flashcards */}
            <Pressable
              onPress={() => router.push('/courses')}
              style={({ pressed }) => [
                styles.gridCard,
                { backgroundColor: cardBg, borderColor },
                pressed && styles.pressed,
              ]}
            >
              <View style={[styles.gridIconCircle, { backgroundColor: '#FEF3C7' }]}>
                <Ionicons name="albums" size={24} color="#D97706" />
              </View>
              <Text style={[styles.gridTitle, { color: textColor }]}>Flashcards</Text>
              <Text style={[styles.gridDesc, { color: mutedText }]}>500+ A1 core words</Text>
            </Pressable>

            {/* Grammar */}
            <Pressable
              onPress={() => router.push('/courses')}
              style={({ pressed }) => [
                styles.gridCard,
                { backgroundColor: cardBg, borderColor },
                pressed && styles.pressed,
              ]}
            >
              <View style={[styles.gridIconCircle, { backgroundColor: '#F3E8FF' }]}>
                <Ionicons name="book" size={24} color="#9333EA" />
              </View>
              <Text style={[styles.gridTitle, { color: textColor }]}>Grammar Rules</Text>
              <Text style={[styles.gridDesc, { color: mutedText }]}>Articles & simple cases</Text>
            </Pressable>
          </View>
        </View>

        {/* Bottom padding for tab bar */}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greetingText: {
    fontSize: 24,
    fontWeight: '800',
    letterSpacing: -0.3,
  },
  subGreetingText: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 2,
  },
  streakBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    gap: 5,
  },
  streakText: {
    color: '#D97706',
    fontWeight: '700',
    fontSize: 13,
  },
  heroCard: {
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
  heroTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  courseTag: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  courseTagText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#D97706',
    letterSpacing: 0.5,
  },
  lessonCounter: {
    fontSize: 12,
    fontWeight: '600',
  },
  heroCourseTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  heroCurrentLesson: {
    fontSize: 13,
    marginBottom: 16,
  },
  progressContainer: {
    marginBottom: 16,
  },
  progressTrack: {
    height: 8,
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 6,
  },
  progressBar: {
    height: '100%',
    borderRadius: 4,
  },
  progressLabelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressLabel: {
    fontSize: 12,
    fontWeight: '500',
  },
  progressPercent: {
    fontSize: 12,
    fontWeight: '700',
  },
  resumeBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 13,
    borderRadius: 12,
  },
  btnIcon: {
    marginRight: 6,
  },
  resumeBtnText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 15,
  },
  streakCard: {
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    marginBottom: 16,
  },
  streakHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  sectionSubtitle: {
    fontSize: 12,
    fontWeight: '500',
  },
  daysRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dayCol: {
    alignItems: 'center',
    gap: 6,
  },
  dayCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayLabel: {
    fontSize: 11,
  },
  wordCard: {
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    marginBottom: 16,
  },
  wordHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  wordBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  wordBadgeText: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.6,
  },
  audioBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 4,
  },
  audioBtnText: {
    fontSize: 12,
    fontWeight: '700',
  },
  germanWord: {
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 2,
  },
  wordPhonetic: {
    fontSize: 13,
    marginBottom: 8,
    fontStyle: 'italic',
  },
  wordDefinition: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12,
  },
  exampleBox: {
    padding: 12,
    borderRadius: 10,
    gap: 4,
  },
  exampleDe: {
    fontSize: 13,
    fontWeight: '600',
    fontStyle: 'italic',
  },
  exampleEn: {
    fontSize: 12,
  },
  quickPracticeSection: {
    marginTop: 4,
  },
  gridRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  gridCard: {
    flex: 1,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    gap: 6,
  },
  gridIconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  gridTitle: {
    fontSize: 15,
    fontWeight: '700',
  },
  gridDesc: {
    fontSize: 12,
  },
  pressed: {
    opacity: 0.7,
  },
  pressedBtn: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
});
