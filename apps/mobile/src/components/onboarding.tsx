import { Ionicons } from '@expo/vector-icons';
import React, { useRef, useState } from 'react';
import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  useWindowDimensions,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface OnboardingProps {
  onComplete: () => void;
  canDismiss?: boolean;
  onDismiss?: () => void;
}

interface SlideData {
  id: string;
  badge: string;
  icon: keyof typeof Ionicons.glyphMap;
  iconBg: string;
  iconColor: string;
  title: string;
  subtitle: string;
  features: {
    icon: keyof typeof Ionicons.glyphMap;
    text: string;
  }[];
}

const SLIDES: SlideData[] = [
  {
    id: 'slide-1',
    badge: '🇩🇪 A1–B2 GERMAN CURRICULUM',
    icon: 'school',
    iconBg: '#FEF3C7',
    iconColor: '#D97706',
    title: 'Master German with Confidence',
    subtitle:
      'Structured roadmaps crafted for real-world speaking, daily conversations, and Goethe & Telc exam success.',
    features: [
      { icon: 'checkmark-circle', text: 'Step-by-step chapters from beginner to fluent' },
      { icon: 'chatbubbles', text: 'Interactive dialogues for everyday scenarios' },
      { icon: 'book', text: 'Clear grammar simplified with practical examples' },
    ],
  },
  {
    id: 'slide-2',
    badge: '🎧 IMMERSIVE AUDIO DRILLS',
    icon: 'headset',
    iconBg: '#DBEAFE',
    iconColor: '#2563EB',
    title: 'Listen & Pronounce Clearly',
    subtitle:
      'Every word, phrase, and dialogue is paired with native German pronunciations and speed controls.',
    features: [
      { icon: 'volume-high', text: 'Authentic German native speaker audio' },
      { icon: 'play-forward', text: 'Slow (0.8x) and Normal (1.0x) playback modes' },
      { icon: 'mic', text: 'Phonetic guides to perfect your accent' },
    ],
  },
  {
    id: 'slide-3',
    badge: '🚀 HABIT & RETENTION',
    icon: 'trophy',
    iconBg: '#DCFCE7',
    iconColor: '#16A34A',
    title: 'Track Milestones & Grow',
    subtitle:
      'Build a powerful daily habit with streak tracking, chapter milestone quizzes, and verifiable progress.',
    features: [
      { icon: 'flame', text: 'Daily learning streak & practice reminders' },
      { icon: 'ribbon', text: 'Interactive chapter evaluations & quizzes' },
      { icon: 'medal', text: 'Milestone badges and completion certificates' },
    ],
  },
];

export function Onboarding({ onComplete, canDismiss, onDismiss }: OnboardingProps) {
  const { width: windowWidth } = useWindowDimensions();
  const screenWidth = Math.min(windowWidth, 600); // keep nicely bounded on tablets/web
  const scrollRef = useRef<ScrollView>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / screenWidth);
    if (index >= 0 && index < SLIDES.length && index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  const goToSlide = (index: number) => {
    scrollRef.current?.scrollTo({
      x: index * screenWidth,
      animated: true,
    });
    setActiveIndex(index);
  };

  const handleNext = () => {
    if (activeIndex < SLIDES.length - 1) {
      goToSlide(activeIndex + 1);
    } else {
      onComplete();
    }
  };

  const handleBack = () => {
    if (activeIndex > 0) {
      goToSlide(activeIndex - 1);
    }
  };

  const isLastSlide = activeIndex === SLIDES.length - 1;

  // Theme palettes
  const bgColor = isDark ? '#0F172A' : '#F8FAFC';
  const cardBg = isDark ? '#1E293B' : '#FFFFFF';
  const textColor = isDark ? '#F8FAFC' : '#0F172A';
  const mutedText = isDark ? '#94A3B8' : '#64748B';
  const borderColor = isDark ? '#334155' : '#E2E8F0';
  const primaryColor = '#F59E0B'; // Warm amber

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: bgColor }]}>
      <View style={[styles.container, { maxWidth: screenWidth }]}>
        {/* Header bar */}
        <View style={styles.header}>
          <View style={[styles.stepPill, { backgroundColor: isDark ? '#334155' : '#F1F5F9' }]}>
            <Text style={[styles.stepText, { color: isDark ? '#CBD5E1' : '#475569' }]}>
              {activeIndex + 1} of {SLIDES.length}
            </Text>
          </View>

          <View style={styles.headerRight}>
            {canDismiss && onDismiss ? (
              <Pressable
                onPress={onDismiss}
                style={({ pressed }) => [styles.closeBtn, pressed && styles.pressed]}
                hitSlop={12}
              >
                <Ionicons name="close" size={22} color={mutedText} />
              </Pressable>
            ) : !isLastSlide ? (
              <Pressable
                onPress={onComplete}
                style={({ pressed }) => [styles.skipBtn, pressed && styles.pressed]}
                hitSlop={12}
              >
                <Text style={[styles.skipText, { color: mutedText }]}>Skip</Text>
              </Pressable>
            ) : null}
          </View>
        </View>

        {/* Carousel ScrollView */}
        <ScrollView
          ref={scrollRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
        >
          {SLIDES.map((slide) => (
            <View key={slide.id} style={[styles.slide, { width: screenWidth }]}>
              <View
                style={[
                  styles.card,
                  {
                    backgroundColor: cardBg,
                    borderColor,
                  },
                ]}
              >
                {/* Visual Icon Badge */}
                <View style={[styles.iconContainer, { backgroundColor: slide.iconBg }]}>
                  <Ionicons name={slide.icon} size={42} color={slide.iconColor} />
                </View>

                {/* Badge */}
                <View
                  style={[
                    styles.badgeContainer,
                    { backgroundColor: isDark ? '#1E293B' : '#FEF3C7' },
                  ]}
                >
                  <Text style={[styles.badgeText, { color: slide.iconColor }]}>
                    {slide.badge}
                  </Text>
                </View>

                {/* Title & Subtitle */}
                <Text style={[styles.title, { color: textColor }]}>{slide.title}</Text>
                <Text style={[styles.subtitle, { color: mutedText }]}>{slide.subtitle}</Text>

                {/* Feature highlights */}
                <View style={styles.featuresContainer}>
                  {slide.features.map((item, idx) => (
                    <View
                      key={idx}
                      style={[
                        styles.featureRow,
                        {
                          backgroundColor: isDark ? '#0F172A' : '#F8FAFC',
                          borderColor: isDark ? '#334155' : '#E2E8F0',
                        },
                      ]}
                    >
                      <Ionicons
                        name={item.icon}
                        size={18}
                        color={slide.iconColor}
                        style={styles.featureIcon}
                      />
                      <Text style={[styles.featureText, { color: textColor }]}>
                        {item.text}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* Bottom Navigation & Controls */}
        <View style={styles.footer}>
          {/* Pagination Indicators (dots) */}
          <View style={styles.paginationDots}>
            {SLIDES.map((_, i) => {
              const isActive = i === activeIndex;
              return (
                <Pressable
                  key={i}
                  onPress={() => goToSlide(i)}
                  hitSlop={8}
                  style={({ pressed }) => [
                    styles.dot,
                    isActive
                      ? [styles.activeDot, { backgroundColor: primaryColor }]
                      : {
                          backgroundColor: isDark ? '#334155' : '#CBD5E1',
                        },
                    pressed && styles.pressed,
                  ]}
                />
              );
            })}
          </View>

          {/* Action Buttons */}
          <View style={styles.actionRow}>
            {activeIndex > 0 && !isLastSlide ? (
              <Pressable
                onPress={handleBack}
                style={({ pressed }) => [
                  styles.backBtn,
                  { borderColor },
                  pressed && styles.pressed,
                ]}
              >
                <Ionicons name="arrow-back" size={18} color={textColor} />
                <Text style={[styles.backBtnText, { color: textColor }]}>Back</Text>
              </Pressable>
            ) : null}

            {isLastSlide ? (
              <Pressable
                onPress={onComplete}
                style={({ pressed }) => [
                  styles.getStartedBtn,
                  { backgroundColor: primaryColor },
                  pressed && styles.pressedBtn,
                ]}
              >
                <Text style={styles.getStartedText}>Get Started</Text>
                <Ionicons name="arrow-forward" size={20} color="#FFFFFF" style={styles.btnIcon} />
              </Pressable>
            ) : (
              <Pressable
                onPress={handleNext}
                style={({ pressed }) => [
                  styles.nextBtn,
                  { backgroundColor: primaryColor },
                  activeIndex === 0 && styles.fullWidthNext,
                  pressed && styles.pressedBtn,
                ]}
              >
                <Text style={styles.nextBtnText}>Next</Text>
                <Ionicons name="arrow-forward" size={18} color="#FFFFFF" style={styles.btnIcon} />
              </Pressable>
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignSelf: 'center',
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  stepPill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  stepText: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  skipBtn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  skipText: {
    fontSize: 14,
    fontWeight: '600',
  },
  closeBtn: {
    padding: 6,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    alignItems: 'center',
  },
  slide: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  card: {
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 3,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  badgeContainer: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 12,
    marginBottom: 12,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 20,
  },
  featuresContainer: {
    width: '100%',
    gap: 10,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 12,
    borderWidth: 1,
  },
  featureIcon: {
    marginRight: 10,
  },
  featureText: {
    fontSize: 13,
    fontWeight: '600',
    flex: 1,
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: Platform.OS === 'ios' ? 16 : 24,
    paddingTop: 12,
    gap: 16,
  },
  paginationDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  activeDot: {
    width: 28,
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 14,
    borderWidth: 1,
    gap: 6,
  },
  backBtnText: {
    fontSize: 15,
    fontWeight: '600',
  },
  nextBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 14,
    shadowColor: '#F59E0B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
  },
  fullWidthNext: {
    flex: 1,
  },
  nextBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  getStartedBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 14,
    shadowColor: '#F59E0B',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 5,
  },
  getStartedText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '800',
    letterSpacing: 0.3,
  },
  btnIcon: {
    marginLeft: 8,
  },
  pressed: {
    opacity: 0.7,
  },
  pressedBtn: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
});
