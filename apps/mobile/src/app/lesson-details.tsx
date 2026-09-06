import { Ionicons } from '@expo/vector-icons';
import * as Speech from 'expo-speech';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState, useMemo, useRef, useCallback } from 'react';
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  TextInput,
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

interface AlphabetLetter {
  char: string;
  letter: string;
  name: string;
  sound: string;
  example: string;
  meaning: string;
  isShift?: boolean;
  isVowel?: boolean;
  dinName: string;
  mouthTip: string;
}

const GERMAN_ALPHABET: AlphabetLetter[] = [
  { char: 'A', letter: 'A a', name: 'aah', sound: "Open 'a' like in father", example: 'der Abend', meaning: 'evening', isVowel: true, dinName: 'Anton', mouthTip: 'Drop jaw naturally; relaxed open mouth.' },
  { char: 'B', letter: 'B b', name: 'beh', sound: "Like 'b' in bed", example: 'das Buch', meaning: 'book', isVowel: false, dinName: 'Berta', mouthTip: 'Both lips together with slight vocal release.' },
  { char: 'C', letter: 'C c', name: 'tseh', sound: "Crisp 'ts' before e/i; 'k' before a/o/u", example: 'das Café', meaning: 'café', isVowel: false, dinName: 'Cäsar', mouthTip: 'Tongue tip behind lower front teeth.' },
  { char: 'D', letter: 'D d', name: 'deh', sound: "Like 'd' in door", example: 'der Dank', meaning: 'thanks', isVowel: false, dinName: 'Dora', mouthTip: 'Tongue tip touches upper gums.' },
  { char: 'E', letter: 'E e', name: 'eeh', sound: "Open like 'pet' (short) or 'ay' (long)", example: 'das Essen', meaning: 'food', isVowel: true, dinName: 'Emil', mouthTip: 'Smile slightly; tongue arched forward.' },
  { char: 'F', letter: 'F f', name: 'eff', sound: "Like 'f' in find", example: 'der Freund', meaning: 'friend', isVowel: false, dinName: 'Friedrich', mouthTip: 'Upper teeth lightly press lower lip.' },
  { char: 'G', letter: 'G g', name: 'geh', sound: "Always hard 'g' like in go (never 'j')", example: 'gut', meaning: 'good', isVowel: false, dinName: 'Gustav', mouthTip: 'Back of tongue against soft palate.' },
  { char: 'H', letter: 'H h', name: 'hah', sound: "Breathed 'h' initially; silent lengthener after vowel", example: 'Hallo', meaning: 'hello', isVowel: false, dinName: 'Heinrich', mouthTip: 'Open breath from throat.' },
  { char: 'I', letter: 'I i', name: 'iih', sound: "Like 'ee' in see (long) or 'i' in sit", example: 'die Idee', meaning: 'idea', isVowel: true, dinName: 'Ida', mouthTip: 'Wide smile; tongue high near roof.' },
  { char: 'J', letter: 'J j', name: 'yott', sound: "Always like English 'y' in yes!", example: 'ja', meaning: 'yes', isShift: true, isVowel: false, dinName: 'Julius', mouthTip: "Middle tongue arches up, never 'dj'!" },
  { char: 'K', letter: 'K k', name: 'kah', sound: "Crisp aspirated 'k' like in kite", example: 'der Kaffee', meaning: 'coffee', isVowel: false, dinName: 'Kaufmann', mouthTip: 'Sharp burst of air from soft palate.' },
  { char: 'L', letter: 'L l', name: 'ell', sound: "Clear European 'l' on upper gums", example: 'die Lampe', meaning: 'lamp', isVowel: false, dinName: 'Ludwig', mouthTip: 'Tongue tip firmly against upper front teeth.' },
  { char: 'M', letter: 'M m', name: 'emm', sound: "Like 'm' in mother", example: 'die Musik', meaning: 'music', isVowel: false, dinName: 'Martha', mouthTip: 'Lips sealed, nasal resonance.' },
  { char: 'N', letter: 'N n', name: 'enn', sound: "Like 'n' in no", example: 'der Name', meaning: 'name', isVowel: false, dinName: 'Nordpol', mouthTip: 'Tongue touches upper ridge.' },
  { char: 'O', letter: 'O o', name: 'ohh', sound: "Pure round 'o' like in so", example: 'die Oper', meaning: 'opera', isVowel: true, dinName: 'Otto', mouthTip: "Round lips into an 'O' circle." },
  { char: 'P', letter: 'P p', name: 'peh', sound: "Crisp 'p' like in park", example: 'die Post', meaning: 'post office', isVowel: false, dinName: 'Paula', mouthTip: 'Lips press together with gentle pop.' },
  { char: 'Q', letter: 'Q q', name: 'kuh', sound: "Always followed by u: sounds like 'kv'", example: 'bequem', meaning: 'comfortable', isVowel: false, dinName: 'Quelle', mouthTip: "Pronounce as 'k' immediately followed by 'v'." },
  { char: 'R', letter: 'R r', name: 'err', sound: "Throat-trilled (uvular) or gently tapped", example: 'das Radio', meaning: 'radio', isVowel: false, dinName: 'Richard', mouthTip: 'Gargle lightly at back of throat.' },
  { char: 'S', letter: 'S s', name: 'ess', sound: "Voiced 'z' before vowels; unvoiced at end", example: 'die Sonne', meaning: 'sun', isVowel: false, dinName: 'Samuel', mouthTip: "Buzz like 'z' when followed by vowel." },
  { char: 'T', letter: 'T t', name: 'teh', sound: "Sharp dental 't' like in tea", example: 'der Tag', meaning: 'day', isVowel: false, dinName: 'Theodor', mouthTip: 'Tongue strikes upper front teeth.' },
  { char: 'U', letter: 'U u', name: 'uuh', sound: "Deep 'oo' like in moon", example: 'die Uhr', meaning: 'clock', isVowel: true, dinName: 'Ulrich', mouthTip: 'Pucker lips forward tightly.' },
  { char: 'V', letter: 'V v', name: 'fau', sound: "Sounds like English 'f' in native German words!", example: 'der Vater', meaning: 'father', isShift: true, isVowel: false, dinName: 'Viktor', mouthTip: "Upper teeth on lower lip; blow like 'f'." },
  { char: 'W', letter: 'W w', name: 'veh', sound: "Always like English 'v' in victory! No English 'w'", example: 'das Wasser', meaning: 'water', isShift: true, isVowel: false, dinName: 'Wilhelm', mouthTip: "Never round lips like English 'w'; use teeth on lower lip." },
  { char: 'X', letter: 'X x', name: 'iks', sound: "Like 'ks' in taxi", example: 'das Taxi', meaning: 'taxi', isVowel: false, dinName: 'Xanthippe', mouthTip: "Quick blend of 'k' and 's'." },
  { char: 'Y', letter: 'Y y', name: 'üpsilon', sound: "Sounds like 'ü' in native words or 'y'", example: 'das Yoga', meaning: 'yoga', isVowel: false, dinName: 'Ypsilon', mouthTip: "Lips like 'oo', say 'ee'." },
  { char: 'Z', letter: 'Z z', name: 'tsett', sound: "Always sharp 'ts' like in cats! Never buzz 'z'", example: 'die Zeit', meaning: 'time', isShift: true, isVowel: false, dinName: 'Zacharias', mouthTip: "Sharp burst: 't' followed directly by 's'." },
];

const GERMAN_CONSONANT_SHIFTS = [
  {
    equation: 'W = [V]',
    germanName: 'veh',
    rule: "German has NO English 'W' sound. Always pronounce it like English 'V' as in victory!",
    examples: ['das Wasser', 'Wien', 'wer', 'wie', 'woher'],
    translation: 'water, Vienna, who, how, where from',
  },
  {
    equation: 'V = [F]',
    germanName: 'fau',
    rule: "In native German words, 'V' sounds like English 'F' as in father. (In loanwords like 'Vase', it sounds like 'V').",
    examples: ['der Vater', 'vier', 'viel', 'voll', 'von'],
    translation: 'father, four, much/many, full, of/from',
  },
  {
    equation: 'J = [Y]',
    germanName: 'yott',
    rule: "Always pronounced like the English consonant 'Y' as in 'yes' or 'yellow'. Never like English 'J' in judge!",
    examples: ['ja', 'das Jahr', 'jetzt', 'jung'],
    translation: 'yes, the year, now, young',
  },
  {
    equation: 'Z = [TS]',
    germanName: 'tsett',
    rule: "Always a crisp, explosive 'ts' sound, exactly like the end of English 'cats'. Never pronounce it with a buzzing English 'Z'!",
    examples: ['zehn', 'die Zeit', 'das Zimmer', 'zusammen'],
    translation: 'ten, time, room, together',
  },
];

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

  // Synchronous instant retrieval from shared memory cache (0ms instant frame!)
  const initialCached = courseId && initialLessonId ? getCachedLesson(courseId, initialLessonId) : null;

  const [currentLessonId, setCurrentLessonId] = useState(initialLessonId);
  const [lesson, setLesson] = useState<Lesson | null>(initialCached?.lesson || null);
  const [chapter, setChapter] = useState<Chapter | null>(initialCached?.chapter || null);
  const [course, setCourse] = useState<CourseItem | null>(initialCached?.course || null);
  const [isLoading, setIsLoading] = useState(!initialCached);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const mainScrollRef = useRef<ScrollView>(null);

  // Synchronize when route params change (e.g. Navigating to another lesson)
  useEffect(() => {
    if (initialLessonId && initialLessonId !== currentLessonId) {
      setCurrentLessonId(initialLessonId);
      const cached = getCachedLesson(courseId, initialLessonId);
      if (cached) {
        setLesson(cached.lesson);
        if (cached.chapter) setChapter(cached.chapter);
        if (cached.course) setCourse(cached.course);
        setIsLoading(false);
      }
    }
  }, [initialLessonId, courseId]);

  // Interactive German Lesson 1 states
  const [alphabetFilter, setAlphabetFilter] = useState<'all' | 'shifts' | 'vowels' | 'consonants'>('all');
  const [selectedLetter, setSelectedLetter] = useState<string>('W');
  const [playingAudioId, setPlayingAudioId] = useState<string | null>(null);
  const [customSpellingInput, setCustomSpellingInput] = useState<string>('GREGOR');
  const [showDialogueTranslations, setShowDialogueTranslations] = useState(true);

  // Stop speech when switching lessons or unmounting
  useEffect(() => {
    return () => {
      try {
        Speech.stop();
      } catch {}
    };
  }, [currentLessonId]);

  // Monochromatic black and white styling
  const bgColor = isDark ? '#09090B' : '#FFFFFF';
  const cardBg = isDark ? '#121214' : '#FFFFFF';
  const innerCardBg = isDark ? '#18181B' : '#F4F4F5';
  const textColor = isDark ? '#FFFFFF' : '#09090B';
  const mutedText = isDark ? '#A1A1AA' : '#71717A';
  const borderColor = isDark ? '#27272A' : '#E4E4E7';
  const activeColor = isDark ? '#FFFFFF' : '#09090B';
  const activeTextColor = isDark ? '#09090B' : '#FFFFFF';

  const isSaved = courseId ? isWishlisted(courseId) : false;

  const isGermanLesson1 =
    currentLessonId === 'a1-ch1-l1' ||
    (currentLessonId.includes('l1') && courseId.includes('german'));

  useEffect(() => {
    let isMounted = true;
    if (!courseId || !currentLessonId) {
      return;
    }

    const cached = getCachedLesson(courseId, currentLessonId);
    if (cached) {
      setLesson(cached.lesson);
      if (cached.chapter) setChapter(cached.chapter);
      if (cached.course) setCourse(cached.course);
      setIsLoading(false);
      if (cached.lesson?.content) {
        return;
      }
    }

    fetchLessonById(courseId, currentLessonId)
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
  }, [courseId, currentLessonId]);

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
    try {
      Speech.stop();
    } catch {}
    setIsDrawerOpen(false);
    if (lId === currentLessonId) return;

    setCurrentLessonId(lId);
    setIsCompleted(false);

    // Instant local state update from memory cache (0ms instant!)
    const cached = getCachedLesson(courseId, lId);
    if (cached) {
      setLesson(cached.lesson);
      if (cached.chapter) setChapter(cached.chapter);
      if (cached.course) setCourse(cached.course);
      setIsLoading(false);
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

  // Dedicated Granular German Audio Synthesizer (Instant, Targeted, Zero Lag)
  const speakAudio = useCallback((text: string, id?: string) => {
    try {
      Speech.stop();
      if (id) {
        setPlayingAudioId(id);
      }
      Speech.speak(text, {
        language: 'de-DE',
        pitch: 1.0,
        rate: 0.85,
        onDone: () => setPlayingAudioId(null),
        onError: () => setPlayingAudioId(null),
        onStopped: () => setPlayingAudioId(null),
      });
    } catch (err) {
      console.warn('Speech error:', err);
      setPlayingAudioId(null);
    }
  }, []);



  const currentLessonTitle = lesson?.title || initialLessonTitle;
  const currentDescription = lesson?.description || initialDescription;
  const content = lesson?.content;

  // Filtered letters for the interactive alphabet explorer
  const filteredAlphabet = useMemo(() => {
    if (alphabetFilter === 'shifts') {
      return GERMAN_ALPHABET.filter((l) => l.isShift);
    }
    if (alphabetFilter === 'vowels') {
      return GERMAN_ALPHABET.filter((l) => l.isVowel);
    }
    if (alphabetFilter === 'consonants') {
      return GERMAN_ALPHABET.filter((l) => !l.isVowel);
    }
    return GERMAN_ALPHABET;
  }, [alphabetFilter]);

  // Dynamic spelled characters for the DIN 5009 simulator
  const spelledTokens = useMemo(() => {
    const clean = customSpellingInput.toUpperCase().replace(/[^A-ZÄÖÜß]/g, '');
    return clean.split('').map((char) => {
      const match = GERMAN_ALPHABET.find((item) => item.char === char);
      if (match) {
        return { char, dinName: match.dinName, phrase: `${char} wie ${match.dinName}` };
      }
      if (char === 'Ä') return { char, dinName: 'Ärger', phrase: 'Ä wie Ärger' };
      if (char === 'Ö') return { char, dinName: 'Ökonom', phrase: 'Ö wie Ökonom' };
      if (char === 'Ü') return { char, dinName: 'Übermut', phrase: 'Ü wie Übermut' };
      if (char === 'ß') return { char, dinName: 'Eszett', phrase: 'scharfes S' };
      return { char, dinName: char, phrase: char };
    });
  }, [customSpellingInput]);

  // Drawer Content: Table of contents listing all chapters and lessons
  const renderDrawerContent = useCallback(() => (
    <SafeAreaView style={[styles.drawerContainer, { backgroundColor: bgColor }]} edges={['top', 'bottom']}>
      {/* Drawer Header */}
      <View style={[styles.drawerHeader, { borderBottomColor: borderColor }]}>
        <View style={styles.drawerHeaderTitleCol}>
          <Text style={[styles.drawerSubtitle, { color: mutedText }]}>Course Content</Text>
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

      {/* Chapters and Lessons Scrollable List */}
      <ScrollView
        style={styles.drawerScroll}
        contentContainerStyle={styles.drawerScrollContent}
        showsVerticalScrollIndicator={false}
      >
        {allChapters.map((ch, chIdx) => {
          return (
            <View key={ch.id || `ch-${chIdx}`} style={[styles.drawerChapterBlock, { borderColor }]}>
              {/* Chapter Header */}
              <View style={[styles.drawerChapterHeader, { backgroundColor: innerCardBg }]}>
                <Text style={[styles.drawerChapterTitle, { color: textColor }]} numberOfLines={2}>
                  {ch.title}
                </Text>
                <Text style={[styles.drawerLessonCount, { color: mutedText }]}>
                  {ch.lessons?.length || 0} {ch.lessons?.length === 1 ? 'lesson' : 'lessons'}
                </Text>
              </View>

              {/* Lessons under this Chapter */}
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
          );
        })}
      </ScrollView>
    </SafeAreaView>
  ), [allChapters, currentLessonId, handleSelectLesson, bgColor, borderColor, mutedText, textColor, course?.title, innerCardBg, activeColor, activeTextColor]);

  const activeLetterItem = GERMAN_ALPHABET.find((l) => l.char === selectedLetter) || GERMAN_ALPHABET[0];

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
        {/* Top Header Bar: Left Arrow, Lesson Title on Right of Arrow, and Right Actions */}
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

            {/* Lesson Title right next to left arrow */}
            <Text style={[styles.headerLessonTitle, { color: textColor }]} numberOfLines={1}>
              {currentLessonTitle}
            </Text>
          </View>

          {/* Right Header Actions */}
          <View style={styles.headerRightActions}>
            {/* Drawer Table of Contents Button */}
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

            {/* Wishlist Heart Button */}
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

            {/* Share Button */}
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
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={activeColor} />
            <Text style={[styles.loadingText, { color: mutedText }]}>
              Loading lesson content...
            </Text>
          </View>
        ) : (
          <ScrollView
            ref={mainScrollRef}
            style={styles.scrollView}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            {/* 1. LESSON TITLE & EDITORIAL HEADER (NO PER-PARAGRAPH BOXED CARDS) */}
            <View style={styles.editorialHeader}>
              <View style={styles.metaRow}>
                <View style={[styles.metaBadge, { backgroundColor: innerCardBg }]}>
                  <Text style={[styles.metaBadgeText, { color: mutedText }]}>
                    {chapter?.title ? chapter.title.split(':')[0] : 'Chapter 1'}
                  </Text>
                </View>
                <Text style={[styles.metaDot, { color: mutedText }]}>•</Text>
                <Text style={[styles.metaText, { color: mutedText }]}>15 mins</Text>
                <Text style={[styles.metaDot, { color: mutedText }]}>•</Text>
                <Text style={[styles.metaText, { color: mutedText }]}>CEFR A1</Text>
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

            {/* 2. "WHAT YOU WILL ACHIEVE" AS A CLEAN LIST */}
            <View style={[styles.achieveSection, { borderTopColor: borderColor }]}>
              <View style={styles.sectionHeaderRow}>
                <View style={[styles.sectionIconCircle, { backgroundColor: innerCardBg }]}>
                  <Ionicons name="checkmark-circle-outline" size={18} color={textColor} />
                </View>
                <Text style={[styles.sectionMainTitle, { color: textColor }]}>
                  What You Will Achieve
                </Text>
              </View>

              <View style={styles.achieveList}>
                <View style={styles.achieveItemRow}>
                  <View style={[styles.checkCircle, { backgroundColor: activeColor }]}>
                    <Ionicons name="checkmark" size={13} color={activeTextColor} />
                  </View>
                  <Text style={[styles.achieveItemText, { color: textColor }]}>
                    <Text style={{ fontWeight: '700' }}>Master authentic pronunciation</Text> for all 26 German alphabet letters (A bis Z) with standard phonetic rules.
                  </Text>
                </View>

                <View style={styles.achieveItemRow}>
                  <View style={[styles.checkCircle, { backgroundColor: activeColor }]}>
                    <Ionicons name="checkmark" size={13} color={activeTextColor} />
                  </View>
                  <Text style={[styles.achieveItemText, { color: textColor }]}>
                    <Text style={{ fontWeight: '700' }}>Eliminate beginner traps</Text> across the 4 key consonant shifts: <Text style={{ fontWeight: '700' }}>W</Text> = [V], <Text style={{ fontWeight: '700' }}>V</Text> = [F], <Text style={{ fontWeight: '700' }}>J</Text> = [Y], and <Text style={{ fontWeight: '700' }}>Z</Text> = [TS].
                  </Text>
                </View>

                <View style={styles.achieveItemRow}>
                  <View style={[styles.checkCircle, { backgroundColor: activeColor }]}>
                    <Ionicons name="checkmark" size={13} color={activeTextColor} />
                  </View>
                  <Text style={[styles.achieveItemText, { color: textColor }]}>
                    <Text style={{ fontWeight: '700' }}>Spell names & details aloud</Text> (<Text style={{ fontStyle: 'italic' }}>Buchstabieren</Text>) using the official German telephone spelling alphabet (DIN 5009).
                  </Text>
                </View>

                <View style={styles.achieveItemRow}>
                  <View style={[styles.checkCircle, { backgroundColor: activeColor }]}>
                    <Ionicons name="checkmark" size={13} color={activeTextColor} />
                  </View>
                  <Text style={[styles.achieveItemText, { color: textColor }]}>
                    <Text style={{ fontWeight: '700' }}>Conduct real-world inquiries</Text> such as hotel check-in and reception registrations in German-speaking countries.
                  </Text>
                </View>
              </View>
            </View>

            {/* 3. CORE CONCEPT & HISTORICAL FOUNDATION */}
            <View style={[styles.conceptSection, { borderTopColor: borderColor }]}>
              <View style={styles.sectionHeaderRow}>
                <View style={[styles.sectionIconCircle, { backgroundColor: innerCardBg }]}>
                  <Ionicons name="sparkles-outline" size={18} color={textColor} />
                </View>
                <Text style={[styles.sectionMainTitle, { color: textColor }]}>
                  The Phonetic Concept & History
                </Text>
              </View>

              <Text style={[styles.paragraphText, { color: textColor }]}>
                Welcome to German! German pronunciation is remarkably logical and phonetic. Unlike English, where vowels and consonants shift unpredictably (such as &quot;though&quot;, &quot;through&quot;, and &quot;tough&quot;), German letters correspond reliably to predetermined phonetic rules.
              </Text>

              <Text style={[styles.paragraphText, { color: textColor }]}>
                <Text style={{ fontWeight: '700' }}>How it came to be:</Text> Modern Standard German (<Text style={{ fontStyle: 'italic' }}>Hochdeutsch</Text>) was systematically codified through 19th-century orthographic conferences and Konrad Duden&apos;s linguistic works to unite diverse regional dialects under uniform spelling and pronunciation rules.
              </Text>

              {/* Editorial Blockquote for Teacher Note */}
              <View style={[styles.quoteCallout, { borderLeftColor: textColor, backgroundColor: innerCardBg }]}>
                <Text style={[styles.quoteLead, { color: mutedText }]}>INSTRUCTOR CORE ADVICE</Text>
                <Text style={[styles.quoteText, { color: textColor }]}>
                  &quot;Herzlich willkommen! When reading German, never guess—trust the letters. If you see &apos;W&apos;, make a crisp English &apos;V&apos; sound. If you see &apos;Z&apos;, pronounce a sharp &apos;ts&apos;. Master these rules today, and you will read 98% of German words accurately on sight.&quot;
                </Text>
              </View>
            </View>

            {/* 4. INTERACTIVE ALPHABET SOUND EXPLORER (GRANULAR SOUND CONTROLS) */}
            {isGermanLesson1 ? (
              <View style={[styles.interactiveSection, { borderTopColor: borderColor }]}>
                <View style={styles.sectionHeaderRow}>
                  <View style={[styles.sectionIconCircle, { backgroundColor: innerCardBg }]}>
                    <Ionicons name="volume-high-outline" size={18} color={textColor} />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={[styles.sectionMainTitle, { color: textColor }]}>
                      1. Das Deutsche Alphabet (A bis Z)
                    </Text>
                    <Text style={[styles.sectionSubDesc, { color: mutedText }]}>
                      Tap any letter, sound name, or example word to hear only that specific audio.
                    </Text>
                  </View>
                </View>

                {/* Filter Tabs */}
                <View style={styles.filterPillsRow}>
                  {[
                    { id: 'all', label: 'All Letters (26)' },
                    { id: 'shifts', label: 'Key Shifts (W,V,J,Z)' },
                    { id: 'vowels', label: 'Vowels (5)' },
                    { id: 'consonants', label: 'Consonants' },
                  ].map((tab) => {
                    const isTabActive = alphabetFilter === tab.id;
                    return (
                      <Pressable
                        key={tab.id}
                        onPress={() => setAlphabetFilter(tab.id as any)}
                        style={({ pressed }) => [
                          styles.filterPill,
                          {
                            backgroundColor: isTabActive ? activeColor : innerCardBg,
                            borderColor: isTabActive ? activeColor : borderColor,
                          },
                          pressed && styles.pressed,
                        ]}
                      >
                        <Text
                          style={[
                            styles.filterPillText,
                            { color: isTabActive ? activeTextColor : textColor },
                          ]}
                        >
                          {tab.label}
                        </Text>
                      </Pressable>
                    );
                  })}
                </View>

                {/* Horizontal Quick Alphabet Ribbon */}
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.ribbonContainer}
                >
                  {filteredAlphabet.map((l) => {
                    const isSelected = selectedLetter === l.char;
                    const isPlaying = playingAudioId === `ribbon-${l.char}`;
                    return (
                      <Pressable
                        key={l.char}
                        onPress={() => {
                          setSelectedLetter(l.char);
                          speakAudio(l.char, `ribbon-${l.char}`);
                        }}
                        style={({ pressed }) => [
                          styles.ribbonLetterBtn,
                          {
                            backgroundColor: isSelected ? activeColor : innerCardBg,
                            borderColor: isPlaying ? '#10B981' : isSelected ? activeColor : borderColor,
                          },
                          pressed && styles.pressed,
                        ]}
                      >
                        <Text
                          style={[
                            styles.ribbonLetterText,
                            { color: isSelected ? activeTextColor : textColor },
                          ]}
                        >
                          {l.char}
                        </Text>
                      </Pressable>
                    );
                  })}
                </ScrollView>

                {/* Targeted Active Letter Inspector Card */}
                {activeLetterItem ? (
                  <View style={[styles.activeInspectorCard, { backgroundColor: innerCardBg, borderColor }]}>
                    <View style={styles.inspectorTopRow}>
                      <Pressable
                        onPress={() => speakAudio(activeLetterItem.char, `inspect-letter-${activeLetterItem.char}`)}
                        style={({ pressed }) => [
                          styles.inspectorLetterBadge,
                          {
                            backgroundColor: playingAudioId === `inspect-letter-${activeLetterItem.char}` ? activeColor : cardBg,
                            borderColor,
                          },
                          pressed && styles.pressed,
                        ]}
                      >
                        <Text
                          style={[
                            styles.inspectorLetterBig,
                            { color: playingAudioId === `inspect-letter-${activeLetterItem.char}` ? activeTextColor : textColor },
                          ]}
                        >
                          {activeLetterItem.letter}
                        </Text>
                        <Text
                          style={[
                            styles.inspectorSoundPill,
                            { color: playingAudioId === `inspect-letter-${activeLetterItem.char}` ? activeTextColor : mutedText },
                          ]}
                        >
                          [{activeLetterItem.name}]
                        </Text>
                      </Pressable>

                      <View style={styles.inspectorInfoCol}>
                        <Text style={[styles.inspectorSoundRule, { color: textColor }]}>
                          {activeLetterItem.sound}
                        </Text>
                        <Text style={[styles.inspectorMouthTip, { color: mutedText }]}>
                          💡 {activeLetterItem.mouthTip}
                        </Text>
                      </View>
                    </View>

                    {/* Targeted Sound Buttons: Hear EXACTLY what you want! */}
                    <View style={[styles.inspectorActionsWrap, { borderTopColor: borderColor }]}>
                      <Text style={[styles.inspectorActionsHeader, { color: mutedText }]}>
                        TAP TO HEAR INDIVIDUAL SOUND:
                      </Text>

                      <View style={styles.audioTargetPillsRow}>
                        {/* 1. Only the Letter */}
                        <Pressable
                          onPress={() => speakAudio(activeLetterItem.char, `target-char-${activeLetterItem.char}`)}
                          style={({ pressed }) => [
                            styles.audioTargetPill,
                            {
                              backgroundColor: playingAudioId === `target-char-${activeLetterItem.char}` ? activeColor : cardBg,
                              borderColor: playingAudioId === `target-char-${activeLetterItem.char}` ? activeColor : borderColor,
                            },
                            pressed && styles.pressed,
                          ]}
                        >
                          <Ionicons
                            name="volume-medium-outline"
                            size={14}
                            color={playingAudioId === `target-char-${activeLetterItem.char}` ? activeTextColor : textColor}
                          />
                          <Text
                            style={[
                              styles.audioTargetText,
                              { color: playingAudioId === `target-char-${activeLetterItem.char}` ? activeTextColor : textColor },
                            ]}
                          >
                            Letter &quot;{activeLetterItem.char}&quot;
                          </Text>
                        </Pressable>

                        {/* 2. Only the German Sound Name */}
                        <Pressable
                          onPress={() => speakAudio(activeLetterItem.name, `target-name-${activeLetterItem.char}`)}
                          style={({ pressed }) => [
                            styles.audioTargetPill,
                            {
                              backgroundColor: playingAudioId === `target-name-${activeLetterItem.char}` ? activeColor : cardBg,
                              borderColor: playingAudioId === `target-name-${activeLetterItem.char}` ? activeColor : borderColor,
                            },
                            pressed && styles.pressed,
                          ]}
                        >
                          <Ionicons
                            name="volume-medium-outline"
                            size={14}
                            color={playingAudioId === `target-name-${activeLetterItem.char}` ? activeTextColor : textColor}
                          />
                          <Text
                            style={[
                              styles.audioTargetText,
                              { color: playingAudioId === `target-name-${activeLetterItem.char}` ? activeTextColor : textColor },
                            ]}
                          >
                            Sound [{activeLetterItem.name}]
                          </Text>
                        </Pressable>

                        {/* 3. Only the Vocabulary Example Word */}
                        <Pressable
                          onPress={() => speakAudio(activeLetterItem.example, `target-example-${activeLetterItem.char}`)}
                          style={({ pressed }) => [
                            styles.audioTargetPill,
                            {
                              backgroundColor: playingAudioId === `target-example-${activeLetterItem.char}` ? activeColor : cardBg,
                              borderColor: playingAudioId === `target-example-${activeLetterItem.char}` ? activeColor : borderColor,
                            },
                            pressed && styles.pressed,
                          ]}
                        >
                          <Ionicons
                            name="volume-medium-outline"
                            size={14}
                            color={playingAudioId === `target-example-${activeLetterItem.char}` ? activeTextColor : textColor}
                          />
                          <Text
                            style={[
                              styles.audioTargetText,
                              { color: playingAudioId === `target-example-${activeLetterItem.char}` ? activeTextColor : textColor },
                            ]}
                          >
                            Word &quot;{activeLetterItem.example}&quot;
                          </Text>
                        </Pressable>

                        {/* 4. Only the DIN Spelling Code Name */}
                        <Pressable
                          onPress={() => speakAudio(activeLetterItem.dinName, `target-din-${activeLetterItem.char}`)}
                          style={({ pressed }) => [
                            styles.audioTargetPill,
                            {
                              backgroundColor: playingAudioId === `target-din-${activeLetterItem.char}` ? activeColor : cardBg,
                              borderColor: playingAudioId === `target-din-${activeLetterItem.char}` ? activeColor : borderColor,
                            },
                            pressed && styles.pressed,
                          ]}
                        >
                          <Ionicons
                            name="volume-medium-outline"
                            size={14}
                            color={playingAudioId === `target-din-${activeLetterItem.char}` ? activeTextColor : textColor}
                          />
                          <Text
                            style={[
                              styles.audioTargetText,
                              { color: playingAudioId === `target-din-${activeLetterItem.char}` ? activeTextColor : textColor },
                            ]}
                          >
                            DIN &quot;{activeLetterItem.dinName}&quot;
                          </Text>
                        </Pressable>
                      </View>
                    </View>
                  </View>
                ) : null}

                {/* Interactive Letter Grid (2-column touchable sound tiles) */}
                <View style={styles.letterTilesGrid}>
                  {filteredAlphabet.map((item) => {
                    const isSelected = selectedLetter === item.char;
                    const isPlayingLetter = playingAudioId === `grid-char-${item.char}`;
                    const isPlayingExample = playingAudioId === `grid-word-${item.char}`;

                    return (
                      <View
                        key={item.char}
                        style={[
                          styles.letterTile,
                          {
                            backgroundColor: isSelected ? innerCardBg : cardBg,
                            borderColor: isSelected ? activeColor : borderColor,
                          },
                        ]}
                      >
                        {/* Tile Header: Tap Letter Badge to hear ONLY letter */}
                        <View style={styles.tileHeaderRow}>
                          <Pressable
                            onPress={() => {
                              setSelectedLetter(item.char);
                              speakAudio(item.char, `grid-char-${item.char}`);
                            }}
                            style={({ pressed }) => [
                              styles.tileBadge,
                              {
                                backgroundColor: isPlayingLetter ? '#10B981' : isSelected ? activeColor : innerCardBg,
                              },
                              pressed && styles.pressed,
                            ]}
                          >
                            <Text
                              style={[
                                styles.tileLetter,
                                { color: isPlayingLetter ? '#FFFFFF' : isSelected ? activeTextColor : textColor },
                              ]}
                            >
                              {item.char}
                            </Text>
                          </Pressable>

                          {/* Sound Name pill: Tap to hear ONLY sound name */}
                          <Pressable
                            onPress={() => {
                              setSelectedLetter(item.char);
                              speakAudio(item.name, `grid-name-${item.char}`);
                            }}
                            style={styles.tilePhoneticWrap}
                          >
                            <Text style={[styles.tileName, { color: textColor }]}>
                              [{item.name}]
                            </Text>
                            <Text style={[styles.tileDin, { color: mutedText }]}>
                              wie {item.dinName}
                            </Text>
                          </Pressable>

                          <Pressable
                            onPress={() => {
                              setSelectedLetter(item.char);
                              speakAudio(item.char, `grid-char-${item.char}`);
                            }}
                            hitSlop={8}
                          >
                            <Ionicons
                              name={isPlayingLetter ? 'volume-high' : 'volume-medium-outline'}
                              size={16}
                              color={isPlayingLetter ? '#10B981' : mutedText}
                            />
                          </Pressable>
                        </View>

                        <Text style={[styles.tileSound, { color: textColor }]} numberOfLines={2}>
                          {item.sound}
                        </Text>

                        {/* Example Word Pill: Tap to hear ONLY this word! */}
                        <Pressable
                          onPress={() => {
                            setSelectedLetter(item.char);
                            speakAudio(item.example, `grid-word-${item.char}`);
                          }}
                          style={({ pressed }) => [
                            styles.tileExamplePill,
                            {
                              backgroundColor: isPlayingExample ? activeColor : innerCardBg,
                              borderColor: isPlayingExample ? activeColor : borderColor,
                            },
                            pressed && styles.pressed,
                          ]}
                        >
                          <Ionicons
                            name="volume-medium-outline"
                            size={12}
                            color={isPlayingExample ? activeTextColor : mutedText}
                            style={{ marginRight: 4 }}
                          />
                          <Text
                            style={[
                              styles.tileExampleText,
                              { color: isPlayingExample ? activeTextColor : textColor },
                            ]}
                            numberOfLines={1}
                          >
                            <Text style={{ fontWeight: '700' }}>{item.example}</Text> ({item.meaning})
                          </Text>
                        </Pressable>
                      </View>
                    );
                  })}
                </View>
              </View>
            ) : null}

            {/* 5. THE 4 ESSENTIAL CONSONANT SHIFTS (INDIVIDUAL WORD SOUND PILLS) */}
            {isGermanLesson1 ? (
              <View style={[styles.interactiveSection, { borderTopColor: borderColor }]}>
                <View style={styles.sectionHeaderRow}>
                  <View style={[styles.sectionIconCircle, { backgroundColor: innerCardBg }]}>
                    <Ionicons name="swap-horizontal-outline" size={18} color={textColor} />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={[styles.sectionMainTitle, { color: textColor }]}>
                      2. The 4 Essential Consonant Shifts
                    </Text>
                    <Text style={[styles.sectionSubDesc, { color: mutedText }]}>
                      Tap any individual word pill to hear only that word pronounced.
                    </Text>
                  </View>
                </View>

                <View style={styles.shiftsGrid}>
                  {GERMAN_CONSONANT_SHIFTS.map((shift, idx) => (
                    <View
                      key={idx}
                      style={[styles.shiftCard, { backgroundColor: innerCardBg, borderColor }]}
                    >
                      <View style={styles.shiftCardHeader}>
                        <Pressable
                          onPress={() => speakAudio(shift.equation.split('=')[0].trim(), `shift-letter-${idx}`)}
                          style={({ pressed }) => [
                            styles.shiftEquationPill,
                            { backgroundColor: cardBg, borderColor },
                            pressed && styles.pressed,
                          ]}
                        >
                          <Ionicons name="volume-medium-outline" size={14} color={textColor} style={{ marginRight: 4 }} />
                          <Text style={[styles.shiftEquationText, { color: textColor }]}>
                            {shift.equation}
                          </Text>
                        </Pressable>

                        <Text style={[styles.shiftNamePill, { color: mutedText }]}>
                          German: [{shift.germanName}]
                        </Text>
                      </View>

                      <Text style={[styles.shiftRuleText, { color: textColor }]}>
                        {shift.rule}
                      </Text>

                      {/* Individual Interactive Word Sound Pills */}
                      <View style={[styles.shiftExamplesBox, { backgroundColor: cardBg, borderColor }]}>
                        <Text style={[styles.shiftExamplesLabel, { color: mutedText }]}>
                          TAP ANY WORD TO HEAR IT:
                        </Text>
                        <View style={styles.shiftWordsRow}>
                          {shift.examples.map((word) => {
                            const isPlayingWord = playingAudioId === `shift-word-${word}`;
                            return (
                              <Pressable
                                key={word}
                                onPress={() => speakAudio(word, `shift-word-${word}`)}
                                style={({ pressed }) => [
                                  styles.shiftWordChip,
                                  {
                                    backgroundColor: isPlayingWord ? activeColor : innerCardBg,
                                    borderColor: isPlayingWord ? activeColor : borderColor,
                                  },
                                  pressed && styles.pressed,
                                ]}
                              >
                                <Ionicons
                                  name={isPlayingWord ? 'volume-high' : 'volume-medium-outline'}
                                  size={13}
                                  color={isPlayingWord ? activeTextColor : textColor}
                                />
                                <Text
                                  style={[
                                    styles.shiftWordChipText,
                                    { color: isPlayingWord ? activeTextColor : textColor },
                                  ]}
                                >
                                  {word}
                                </Text>
                              </Pressable>
                            );
                          })}
                        </View>
                        <Text style={[styles.shiftExamplesTranslation, { color: mutedText }]}>
                          Meaning: {shift.translation}
                        </Text>
                      </View>
                    </View>
                  ))}
                </View>
              </View>
            ) : null}

            {/* 6. INTERACTIVE BUCHSTABIER-SIMULATOR (DIN 5009) */}
            {isGermanLesson1 ? (
              <View style={[styles.interactiveSection, { borderTopColor: borderColor }]}>
                <View style={styles.sectionHeaderRow}>
                  <View style={[styles.sectionIconCircle, { backgroundColor: innerCardBg }]}>
                    <Ionicons name="keypad-outline" size={18} color={textColor} />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={[styles.sectionMainTitle, { color: textColor }]}>
                      3. Buchstabieren (Spelling Names Aloud)
                    </Text>
                    <Text style={[styles.sectionSubDesc, { color: mutedText }]}>
                      Official DIN 5009 standard for phone calls & registrations.
                    </Text>
                  </View>
                </View>

                {/* Interactive Simulator Studio */}
                <View style={[styles.simulatorCard, { backgroundColor: innerCardBg, borderColor }]}>
                  <Text style={[styles.simulatorTitle, { color: textColor }]}>
                    Interactive &quot;Spell Your Name&quot; Studio
                  </Text>
                  <Text style={[styles.simulatorDesc, { color: mutedText }]}>
                    Type your name or select a preset. Tap any letter or code word to hear it spoken:
                  </Text>

                  {/* Input Box */}
                  <View style={[styles.inputRow, { backgroundColor: cardBg, borderColor }]}>
                    <Ionicons name="pencil-outline" size={18} color={mutedText} style={{ marginRight: 8 }} />
                    <TextInput
                      value={customSpellingInput}
                      onChangeText={setCustomSpellingInput}
                      placeholder="Type a name or word..."
                      placeholderTextColor={mutedText}
                      autoCapitalize="characters"
                      style={[styles.textInput, { color: textColor }]}
                    />
                    {customSpellingInput ? (
                      <Pressable onPress={() => setCustomSpellingInput('')} hitSlop={10}>
                        <Ionicons name="close-circle" size={18} color={mutedText} />
                      </Pressable>
                    ) : null}
                  </View>

                  {/* Quick Preset Names */}
                  <View style={styles.presetsRow}>
                    <Text style={[styles.presetLabel, { color: mutedText }]}>Presets:</Text>
                    {['GREGOR', 'NINA', 'LUKAS', 'ANNA', 'BERLIN'].map((sample) => (
                      <Pressable
                        key={sample}
                        onPress={() => setCustomSpellingInput(sample)}
                        style={({ pressed }) => [
                          styles.presetChip,
                          {
                            backgroundColor: customSpellingInput === sample ? activeColor : cardBg,
                            borderColor: customSpellingInput === sample ? activeColor : borderColor,
                          },
                          pressed && styles.pressed,
                        ]}
                      >
                        <Text
                          style={[
                            styles.presetChipText,
                            { color: customSpellingInput === sample ? activeTextColor : textColor },
                          ]}
                        >
                          {sample}
                        </Text>
                      </Pressable>
                    ))}
                  </View>

                  {/* Optional Full Spelling Sequence Audio Button */}
                  {spelledTokens.length > 0 ? (
                    <Pressable
                      onPress={() => {
                        const fullText = spelledTokens.map((t) => `${t.char} wie ${t.dinName}`).join('. ');
                        speakAudio(fullText, 'full-spelling');
                      }}
                      style={({ pressed }) => [
                        styles.speakSpellingBtn,
                        {
                          backgroundColor: playingAudioId === 'full-spelling' ? activeColor : cardBg,
                          borderColor: playingAudioId === 'full-spelling' ? activeColor : borderColor,
                        },
                        pressed && styles.pressed,
                      ]}
                    >
                      <Ionicons
                        name={playingAudioId === 'full-spelling' ? 'volume-high' : 'volume-medium-outline'}
                        size={16}
                        color={playingAudioId === 'full-spelling' ? activeTextColor : textColor}
                      />
                      <Text
                        style={[
                          styles.speakSpellingBtnText,
                          { color: playingAudioId === 'full-spelling' ? activeTextColor : textColor },
                        ]}
                      >
                        {playingAudioId === 'full-spelling' ? 'Speaking...' : 'Listen to Full Sequence (DIN 5009)'}
                      </Text>
                    </Pressable>
                  ) : null}

                  {/* Dynamic Spelled Tokens: Tap individual letters or names */}
                  <View style={styles.spelledCardsWrap}>
                    {spelledTokens.length > 0 ? (
                      spelledTokens.map((token, idx) => {
                        const isPlayingToken = playingAudioId === `token-${idx}`;
                        return (
                          <Pressable
                            key={`${token.char}-${idx}`}
                            onPress={() => speakAudio(token.phrase, `token-${idx}`)}
                            style={({ pressed }) => [
                              styles.spelledTokenBadge,
                              {
                                backgroundColor: isPlayingToken ? innerCardBg : cardBg,
                                borderColor: isPlayingToken ? activeColor : borderColor,
                              },
                              pressed && styles.pressed,
                            ]}
                          >
                            <View style={[styles.spelledCharCircle, { backgroundColor: activeColor }]}>
                              <Text style={[styles.spelledCharText, { color: activeTextColor }]}>
                                {token.char}
                              </Text>
                            </View>
                            <View style={styles.spelledTokenInfo}>
                              <Text style={[styles.spelledNameBold, { color: textColor }]}>
                                wie {token.dinName}
                              </Text>
                              <Text style={[styles.spelledFullPhrase, { color: mutedText }]}>
                                &quot;{token.phrase}&quot;
                              </Text>
                            </View>
                            <Ionicons
                              name="volume-medium-outline"
                              size={14}
                              color={isPlayingToken ? '#10B981' : mutedText}
                              style={{ marginLeft: 2 }}
                            />
                          </Pressable>
                        );
                      })
                    ) : (
                      <Text style={[styles.emptyPromptText, { color: mutedText }]}>
                        Enter any letter or name above to see the DIN 5009 spelling breakdown.
                      </Text>
                    )}
                  </View>
                </View>
              </View>
            ) : null}

            {/* 7. REAL-LIFE DIALOGUE (TARGETED SENTENCE SPEECH) */}
            {content?.dialogue ? (
              <View style={[styles.interactiveSection, { borderTopColor: borderColor }]}>
                <View style={styles.sectionHeaderRow}>
                  <View style={[styles.sectionIconCircle, { backgroundColor: innerCardBg }]}>
                    <Ionicons name="chatbubbles-outline" size={18} color={textColor} />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={[styles.sectionMainTitle, { color: textColor }]}>
                      4. Real-World Practical Dialogue
                    </Text>
                    <Text style={[styles.sectionSubDesc, { color: mutedText }]}>
                      Tap the speaker icon to hear that specific dialogue sentence.
                    </Text>
                  </View>
                </View>

                {/* Translation Toggle Pill */}
                <View style={styles.dialogueControlsRow}>
                  <Pressable
                    onPress={() => setShowDialogueTranslations(!showDialogueTranslations)}
                    style={({ pressed }) => [
                      styles.toggleTranslationBtn,
                      { backgroundColor: innerCardBg, borderColor },
                      pressed && styles.pressed,
                    ]}
                  >
                    <Ionicons
                      name={showDialogueTranslations ? 'eye-off-outline' : 'eye-outline'}
                      size={15}
                      color={textColor}
                    />
                    <Text style={[styles.toggleTranslationText, { color: textColor }]}>
                      {showDialogueTranslations ? 'Hide English Translation' : 'Show English Translation'}
                    </Text>
                  </Pressable>
                </View>

                {/* Conversational Chat Flow */}
                <View style={styles.dialogueChatList}>
                  {content.dialogue.lines.map((line, dIdx) => {
                    const isReceptionist = line.speaker.includes('Weber') || line.speaker.includes('Nina');
                    const isPlayingLine = playingAudioId === `dialogue-${dIdx}`;

                    return (
                      <View
                        key={dIdx}
                        style={[
                          styles.chatBubbleRow,
                          isReceptionist ? styles.chatBubbleLeft : styles.chatBubbleRight,
                        ]}
                      >
                        <View style={[styles.speakerAvatar, { backgroundColor: innerCardBg, borderColor }]}>
                          <Text style={[styles.speakerAvatarText, { color: textColor }]}>
                            {isReceptionist ? 'NW' : 'GS'}
                          </Text>
                        </View>

                        <View
                          style={[
                            styles.chatBubbleBody,
                            {
                              backgroundColor: isReceptionist ? innerCardBg : cardBg,
                              borderColor: isPlayingLine ? activeColor : borderColor,
                            },
                          ]}
                        >
                          <View style={styles.dialogueSpeakerRow}>
                            <Text style={[styles.speakerHeaderName, { color: mutedText }]}>
                              {line.speaker}
                            </Text>
                            <Pressable
                              onPress={() => speakAudio(line.german, `dialogue-${dIdx}`)}
                              style={({ pressed }) => [
                                styles.dialogueAudioBtn,
                                pressed && styles.pressed,
                              ]}
                              hitSlop={8}
                              accessibilityLabel="Listen Dialogue Line"
                            >
                              <Ionicons
                                name={isPlayingLine ? 'volume-high' : 'volume-medium-outline'}
                                size={16}
                                color={isPlayingLine ? '#10B981' : mutedText}
                              />
                            </Pressable>
                          </View>
                          <Text style={[styles.chatGermanText, { color: textColor }]}>
                            {line.german}
                          </Text>
                          {showDialogueTranslations && line.english ? (
                            <Text style={[styles.chatEnglishText, { color: mutedText }]}>
                              {line.english}
                            </Text>
                          ) : null}
                        </View>
                      </View>
                    );
                  })}
                </View>
              </View>
            ) : null}

            {/* 8. CULTURAL & LINGUISTIC INSIGHT */}
            {content?.funFact ? (
              <View style={[styles.interactiveSection, { borderTopColor: borderColor }]}>
                <View style={[styles.culturalInsightCard, { backgroundColor: innerCardBg, borderColor }]}>
                  <View style={styles.insightHeaderRow}>
                    <Ionicons name="book-outline" size={20} color={textColor} />
                    <Text style={[styles.insightTitle, { color: textColor }]}>
                      {content.funFact.title || 'German Linguistic Insight'}
                    </Text>
                  </View>
                  <Text style={[styles.insightText, { color: textColor }]}>
                    {content.funFact.content}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* 9. KNOWLEDGE CHECK & PRACTICE (FAST, SNAPPY, 0ms DELAY) */}
            {content?.practice && content.practice.length > 0 ? (
              <View style={[styles.interactiveSection, { borderTopColor: borderColor }]}>
                <View style={styles.sectionHeaderRow}>
                  <View style={[styles.sectionIconCircle, { backgroundColor: innerCardBg }]}>
                    <Ionicons name="school-outline" size={18} color={textColor} />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={[styles.sectionMainTitle, { color: textColor }]}>
                      Knowledge Check & Practice
                    </Text>
                    <Text style={[styles.sectionSubDesc, { color: mutedText }]}>
                      Instant selection without lag. Test your German phonetics knowledge.
                    </Text>
                  </View>
                </View>

                {content.practice.map((q, qIndex) => (
                  <KnowledgeCheckCard
                    key={`${currentLessonId}-q-${qIndex}`}
                    q={q}
                    qIndex={qIndex}
                    textColor={textColor}
                    mutedText={mutedText}
                    cardBg={cardBg}
                    innerCardBg={innerCardBg}
                    borderColor={borderColor}
                    activeColor={activeColor}
                    activeTextColor={activeTextColor}
                  />
                ))}
              </View>
            ) : null}

            {/* 10. SEQUENTIAL BOTTOM NAVIGATION & COMPLETION */}
            <View style={styles.actionContainer}>
              {nextLesson && (
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
              )}

              {prevLesson && (
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
              )}

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

  // Drawer Styles
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

  // Main Content Styles
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 18,
    paddingTop: 16,
    paddingBottom: 32,
    gap: 24,
  },
  loadingContainer: {
    paddingVertical: 80,
    alignItems: 'center',
    gap: 12,
  },
  loadingText: {
    fontSize: 13,
  },

  // 1. Editorial Header (No boxed cards!)
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
    fontSize: 23,
    fontWeight: '800',
    letterSpacing: -0.4,
    lineHeight: 30,
    marginTop: 2,
  },
  editorialLeadText: {
    fontSize: 14,
    lineHeight: 22,
    marginTop: 2,
  },

  // 2. What You Will Achieve Section
  achieveSection: {
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
  achieveList: {
    gap: 12,
    marginTop: 4,
  },
  achieveItemRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  checkCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 1,
  },
  achieveItemText: {
    fontSize: 13.5,
    lineHeight: 20,
    flex: 1,
  },

  // 3. Core Concept & Editorial Flowing Text
  conceptSection: {
    borderTopWidth: 1,
    paddingTop: 20,
    gap: 14,
  },
  paragraphText: {
    fontSize: 14,
    lineHeight: 23,
  },
  quoteCallout: {
    borderLeftWidth: 3,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 8,
    gap: 6,
    marginTop: 4,
  },
  quoteLead: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
  quoteText: {
    fontSize: 13,
    lineHeight: 20,
    fontStyle: 'italic',
  },

  // 4. Interactive Alphabet Section
  interactiveSection: {
    borderTopWidth: 1,
    paddingTop: 22,
    gap: 16,
  },
  filterPillsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  filterPill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
  },
  filterPillText: {
    fontSize: 12,
    fontWeight: '600',
  },
  ribbonContainer: {
    paddingVertical: 6,
    gap: 8,
  },
  ribbonLetterBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ribbonLetterText: {
    fontSize: 14,
    fontWeight: '700',
  },

  // Inspector Card
  activeInspectorCard: {
    borderRadius: 14,
    borderWidth: 1,
    padding: 16,
    gap: 14,
  },
  inspectorTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  inspectorLetterBadge: {
    width: 64,
    height: 64,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inspectorLetterBig: {
    fontSize: 22,
    fontWeight: '800',
  },
  inspectorSoundPill: {
    fontSize: 11,
    fontWeight: '600',
  },
  inspectorInfoCol: {
    flex: 1,
    gap: 4,
  },
  inspectorSoundRule: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '600',
  },
  inspectorMouthTip: {
    fontSize: 12,
    lineHeight: 16,
  },
  inspectorActionsWrap: {
    borderTopWidth: 1,
    paddingTop: 12,
    gap: 8,
  },
  inspectorActionsHeader: {
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.6,
  },
  audioTargetPillsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  audioTargetPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
  },
  audioTargetText: {
    fontSize: 11.5,
    fontWeight: '600',
  },

  // 2-Column Letter Tiles Grid
  letterTilesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  letterTile: {
    width: '48.5%',
    borderRadius: 12,
    borderWidth: 1,
    padding: 12,
    gap: 8,
  },
  tileHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tileBadge: {
    width: 32,
    height: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tileLetter: {
    fontSize: 14,
    fontWeight: '800',
  },
  tilePhoneticWrap: {
    flex: 1,
    marginLeft: 8,
  },
  tileName: {
    fontSize: 12,
    fontWeight: '700',
  },
  tileDin: {
    fontSize: 10,
  },
  tileSound: {
    fontSize: 12,
    lineHeight: 16,
  },
  tileExamplePill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 6,
    borderWidth: 1,
  },
  tileExampleText: {
    fontSize: 11,
    flex: 1,
  },

  // 5. Consonant Shifts Section
  shiftsGrid: {
    gap: 12,
  },
  shiftCard: {
    borderRadius: 12,
    borderWidth: 1,
    padding: 14,
    gap: 10,
  },
  shiftCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  shiftEquationPill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
  },
  shiftEquationText: {
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  shiftNamePill: {
    fontSize: 12,
    fontWeight: '600',
  },
  shiftRuleText: {
    fontSize: 13,
    lineHeight: 19,
  },
  shiftExamplesBox: {
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    gap: 8,
  },
  shiftExamplesLabel: {
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  shiftWordsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  shiftWordChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 7,
    borderWidth: 1,
  },
  shiftWordChipText: {
    fontSize: 12,
    fontWeight: '700',
  },
  shiftExamplesTranslation: {
    fontSize: 11,
    fontStyle: 'italic',
  },

  // 6. Buchstabier-Simulator Section
  simulatorCard: {
    borderRadius: 14,
    borderWidth: 1,
    padding: 16,
    gap: 12,
  },
  simulatorTitle: {
    fontSize: 15,
    fontWeight: '700',
  },
  simulatorDesc: {
    fontSize: 12,
    lineHeight: 17,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
  },
  textInput: {
    flex: 1,
    fontSize: 14,
    fontWeight: '700',
    padding: 0,
  },
  presetsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 6,
  },
  presetLabel: {
    fontSize: 11,
    fontWeight: '600',
  },
  presetChip: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    borderWidth: 1,
  },
  presetChipText: {
    fontSize: 11,
    fontWeight: '700',
  },
  speakSpellingBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 4,
  },
  speakSpellingBtnText: {
    fontSize: 12.5,
    fontWeight: '700',
  },
  spelledCardsWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 4,
  },
  spelledTokenBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    gap: 8,
  },
  spelledCharCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  spelledCharText: {
    fontSize: 12,
    fontWeight: '800',
  },
  spelledTokenInfo: {
    gap: 1,
  },
  spelledNameBold: {
    fontSize: 12,
    fontWeight: '700',
  },
  spelledFullPhrase: {
    fontSize: 10,
  },
  emptyPromptText: {
    fontSize: 12,
    fontStyle: 'italic',
    paddingVertical: 8,
  },

  // 7. Dialogue Section
  dialogueControlsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  toggleTranslationBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
  },
  toggleTranslationText: {
    fontSize: 11,
    fontWeight: '600',
  },
  dialogueChatList: {
    gap: 12,
    marginTop: 4,
  },
  chatBubbleRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  chatBubbleLeft: {
    justifyContent: 'flex-start',
  },
  chatBubbleRight: {
    justifyContent: 'flex-start',
  },
  speakerAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  speakerAvatarText: {
    fontSize: 11,
    fontWeight: '700',
  },
  chatBubbleBody: {
    flex: 1,
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    gap: 4,
  },
  dialogueSpeakerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  dialogueAudioBtn: {
    padding: 2,
  },
  speakerHeaderName: {
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  chatGermanText: {
    fontSize: 13.5,
    fontWeight: '700',
    lineHeight: 19,
  },
  chatEnglishText: {
    fontSize: 12,
    lineHeight: 17,
  },

  // 8. Cultural Insight Card
  culturalInsightCard: {
    padding: 16,
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
  insightText: {
    fontSize: 13,
    lineHeight: 20,
  },

  // 9. Practice Section
  practiceCard: {
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    gap: 12,
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
    paddingHorizontal: 12,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  optionText: {
    fontSize: 13,
    flex: 1,
  },
  revealBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 9,
    borderRadius: 8,
    borderWidth: 1,
  },
  revealBtnText: {
    fontSize: 12,
    fontWeight: '600',
  },
  answerContainer: {
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    gap: 4,
  },
  answerHeaderRow: {
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

  // 10. Sequential Navigation Buttons
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

interface KnowledgeCheckCardProps {
  q: {
    question: string;
    options?: string[];
    answer: string;
    explanation?: string;
  };
  qIndex: number;
  textColor: string;
  mutedText: string;
  cardBg: string;
  innerCardBg: string;
  borderColor: string;
  activeColor: string;
  activeTextColor: string;
}

const KnowledgeCheckCard = React.memo(function KnowledgeCheckCard({
  q,
  qIndex,
  textColor,
  mutedText,
  cardBg,
  innerCardBg,
  borderColor,
  activeColor,
  activeTextColor,
}: KnowledgeCheckCardProps) {
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [isRevealed, setIsRevealed] = useState<boolean>(false);

  return (
    <View style={[styles.practiceCard, { backgroundColor: innerCardBg, borderColor }]}>
      <View style={styles.practiceQuestionHeader}>
        <View style={[styles.qNumBadge, { backgroundColor: cardBg, borderColor }]}>
          <Text style={[styles.qNumText, { color: textColor }]}>
            Q{qIndex + 1}
          </Text>
        </View>
        <Text style={[styles.questionPrompt, { color: textColor }]}>
          {q.question}
        </Text>
      </View>

      {q.options && q.options.length > 0 ? (
        <View style={styles.optionsList}>
          {q.options.map((opt, optIndex) => {
            const isChosen = selectedOpt === optIndex;
            return (
              <Pressable
                key={optIndex}
                onPress={() => setSelectedOpt(optIndex)}
                style={({ pressed }) => [
                  styles.optionBtn,
                  {
                    backgroundColor: isChosen ? activeColor : cardBg,
                    borderColor: isChosen ? activeColor : borderColor,
                  },
                  pressed && styles.pressed,
                ]}
                hitSlop={4}
              >
                <Ionicons
                  name={
                    isChosen
                      ? 'radio-button-on-outline'
                      : 'radio-button-off-outline'
                  }
                  size={16}
                  color={isChosen ? activeTextColor : mutedText}
                />
                <Text
                  style={[
                    styles.optionText,
                    {
                      color: isChosen ? activeTextColor : textColor,
                      fontWeight: isChosen ? '700' : '500',
                    },
                  ]}
                >
                  {opt}
                </Text>
              </Pressable>
            );
          })}
        </View>
      ) : null}

      <Pressable
        onPress={() => setIsRevealed((prev) => !prev)}
        style={({ pressed }) => [
          styles.revealBtn,
          { backgroundColor: cardBg, borderColor },
          pressed && styles.pressed,
        ]}
        hitSlop={6}
      >
        <Ionicons
          name={isRevealed ? 'eye-off-outline' : 'eye-outline'}
          size={16}
          color={textColor}
        />
        <Text style={[styles.revealBtnText, { color: textColor }]}>
          {isRevealed ? 'Hide Explanation' : 'Verify Answer'}
        </Text>
      </Pressable>

      {isRevealed ? (
        <View
          style={[
            styles.answerContainer,
            { backgroundColor: cardBg, borderColor },
          ]}
        >
          <View style={styles.answerHeaderRow}>
            <Ionicons name="checkmark-circle" size={16} color="#10B981" />
            <Text style={[styles.answerLabel, { color: mutedText }]}>Correct:</Text>
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
});

