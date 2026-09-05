import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  Image,
  Platform,
  Pressable,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  useColorScheme,
  useWindowDimensions,
  View,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

interface Lecture {
  id: string;
  title: string;
  duration: string;
  lectureNum: string;
  isLocked: boolean;
}

interface Module {
  id: string;
  title: string;
  lectures: Lecture[];
}

const MODULES: Module[] = [
  {
    id: 'mod-1',
    title: 'Module 1: Introduction and Review',
    lectures: [
      {
        id: 'lec-1',
        title: 'Supervised vs. Unsupervised Learning',
        duration: '08 min',
        lectureNum: 'Lecture 01',
        isLocked: false,
      },
      {
        id: 'lec-2',
        title: 'Common Algorithms (Linear Regression...)',
        duration: '10 min',
        lectureNum: 'Lecture 02',
        isLocked: true,
      },
      {
        id: 'lec-3',
        title: 'Bias-Variance Tradeoff & Evaluation Metrics',
        duration: '12 min',
        lectureNum: 'Lecture 03',
        isLocked: true,
      },
    ],
  },
  {
    id: 'mod-2',
    title: 'Module 2: Ensemble Methods',
    lectures: [
      {
        id: 'lec-4',
        title: 'Benefits of Ensemble Methods',
        duration: '10 min',
        lectureNum: 'Lecture 04',
        isLocked: true,
      },
      {
        id: 'lec-5',
        title: 'Random Forests & Bagging Principles',
        duration: '14 min',
        lectureNum: 'Lecture 05',
        isLocked: true,
      },
      {
        id: 'lec-6',
        title: 'Gradient Boosting (XGBoost & LightGBM)',
        duration: '16 min',
        lectureNum: 'Lecture 06',
        isLocked: true,
      },
    ],
  },
  {
    id: 'mod-3',
    title: 'Module 3: Neural Networks Foundations',
    lectures: [
      {
        id: 'lec-7',
        title: 'Multi-layer Perceptrons & Activations',
        duration: '15 min',
        lectureNum: 'Lecture 07',
        isLocked: true,
      },
      {
        id: 'lec-8',
        title: 'Backpropagation and Gradient Descent',
        duration: '18 min',
        lectureNum: 'Lecture 08',
        isLocked: true,
      },
    ],
  },
];

export default function CourseDetailsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const { width } = useWindowDimensions();

  const [activeTab, setActiveTab] = useState<'outline' | 'reviews'>('outline');
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [currentlyPlayingLecture, setCurrentlyPlayingLecture] = useState<string | null>(null);

  // Styling tokens
  const bgColor = isDark ? '#090D16' : '#FFFFFF';
  const cardBg = isDark ? '#131D2E' : '#F8FAFC';
  const textColor = isDark ? '#F8FAFC' : '#0F172A';
  const mutedText = isDark ? '#94A3B8' : '#64748B';
  const borderColor = isDark ? '#24344D' : '#E2E8F0';
  const primaryColor = '#2563EB';

  const title = (params.title as string) || 'Advanced Machine Learning Algorithms';
  const category = (params.category as string) || 'Artificial Intelligence';
  const instructor = (params.instructor as string) || 'Stanley Mante';
  const bannerUrl =
    (params.image as string) ||
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80';

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Check out this course: ${title} on Instructor!`,
      });
    } catch (error) {
      console.log('Error sharing:', error);
    }
  };

  const handleEnroll = () => {
    setIsEnrolled(true);
    if (Platform.OS === 'web') {
      window.alert(`Congratulations! You have enrolled in "${title}".`);
    } else {
      Alert.alert(
        'Enrolled Successfully! 🎉',
        `You have enrolled in "${title}". You can now start watching all lessons.`,
        [{ text: 'Start Learning', style: 'default' }]
      );
    }
  };

  const handleLecturePress = (lecture: Lecture) => {
    if (lecture.isLocked && !isEnrolled) {
      if (Platform.OS === 'web') {
        window.alert('Please enroll to unlock this lecture.');
      } else {
        Alert.alert('Lecture Locked', 'Enroll in the course to unlock all lectures and materials.');
      }
      return;
    }
    setCurrentlyPlayingLecture(lecture.id);
  };

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={[styles.scrollContent, { paddingBottom: 100 }]}
        showsVerticalScrollIndicator={false}
      >
        {/* Top Hero Banner with Back and Share buttons */}
        <View style={styles.heroContainer}>
          <Image
            source={{ uri: bannerUrl }}
            style={[styles.heroImage, { width }]}
            resizeMode="cover"
          />

          {/* Top action bar buttons */}
          <SafeAreaView style={styles.floatingHeader} edges={['top']}>
            <Pressable
              onPress={() => router.back()}
              style={({ pressed }) => [styles.glassBtn, pressed && styles.pressed]}
              hitSlop={10}
            >
              <Ionicons name="arrow-back" size={20} color="#FFFFFF" />
            </Pressable>

            <Pressable
              onPress={handleShare}
              style={({ pressed }) => [styles.glassBtn, pressed && styles.pressed]}
              hitSlop={10}
            >
              <Ionicons name="share-social" size={20} color="#FFFFFF" />
            </Pressable>
          </SafeAreaView>
        </View>

        {/* Course Info Card */}
        <View style={styles.body}>
          <View style={styles.categoryRow}>
            <View style={[styles.categoryBadge, { backgroundColor: isDark ? '#1E293B' : '#EFF6FF' }]}>
              <Text style={[styles.categoryBadgeText, { color: primaryColor }]}>{category}</Text>
            </View>

            <Pressable
              onPress={() => setIsBookmarked(!isBookmarked)}
              hitSlop={10}
              style={({ pressed }) => pressed && styles.pressed}
            >
              <Ionicons
                name={isBookmarked ? 'bookmark' : 'bookmark-outline'}
                size={22}
                color={primaryColor}
              />
            </Pressable>
          </View>

          {/* Title */}
          <Text style={[styles.courseTitle, { color: textColor }]}>{title}</Text>

          {/* Rating and Duration stats */}
          <View style={styles.metaStatsRow}>
            <View style={styles.starsRow}>
              {[1, 2, 3, 4].map((star) => (
                <Ionicons key={star} name="star" size={16} color="#FBBF24" />
              ))}
              <Ionicons name="star-half" size={16} color="#FBBF24" />
              <Text style={[styles.ratingNumber, { color: textColor }]}>4.7</Text>
              <Text style={[styles.reviewCount, { color: mutedText }]}>(3746)</Text>
            </View>

            <View style={styles.dotSeparator} />

            <View style={styles.durationRow}>
              <Ionicons name="time-outline" size={15} color={mutedText} style={{ marginRight: 4 }} />
              <Text style={[styles.durationText, { color: mutedText }]}>1h 20 mins • 30 lessons</Text>
            </View>
          </View>

          {/* Short Description */}
          <Text style={[styles.description, { color: mutedText }]} numberOfLines={3}>
            Dive deep into the world of machine learning with our comprehensive curriculum, from foundational statistics to state-of-the-art ensemble models and neural architectures.
          </Text>

          {/* Instructor Row */}
          <View style={[styles.instructorRow, { backgroundColor: cardBg, borderColor }]}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80',
              }}
              style={styles.instructorAvatar}
            />
            <View style={styles.instructorInfo}>
              <Text style={[styles.instructorName, { color: textColor }]}>{instructor}</Text>
              <Text style={[styles.instructorRole, { color: mutedText }]}>Top Rated Instructor</Text>
            </View>
            <Pressable style={styles.instructorContactBtn}>
              <Ionicons name="chatbubble-ellipses-outline" size={18} color={primaryColor} />
            </Pressable>
          </View>

          {/* Course Outline vs Reviews Tabs */}
          <View style={styles.tabsRow}>
            <Pressable
              onPress={() => setActiveTab('outline')}
              style={[
                styles.tabPill,
                activeTab === 'outline'
                  ? [styles.activeTabPill, { borderColor: primaryColor }]
                  : { borderColor: 'transparent' },
              ]}
            >
              <Text
                style={[
                  styles.tabPillText,
                  { color: activeTab === 'outline' ? primaryColor : mutedText },
                  activeTab === 'outline' && { fontWeight: '700' },
                ]}
              >
                Course Outline
              </Text>
            </Pressable>

            <Pressable
              onPress={() => setActiveTab('reviews')}
              style={[
                styles.tabPill,
                activeTab === 'reviews'
                  ? [styles.activeTabPill, { borderColor: primaryColor }]
                  : { borderColor: 'transparent' },
              ]}
            >
              <Text
                style={[
                  styles.tabPillText,
                  { color: activeTab === 'reviews' ? primaryColor : mutedText },
                  activeTab === 'reviews' && { fontWeight: '700' },
                ]}
              >
                Reviews (428)
              </Text>
            </Pressable>
          </View>

          {/* Modules and Lectures List */}
          {activeTab === 'outline' ? (
            <View style={styles.modulesContainer}>
              {MODULES.map((module) => (
                <View key={module.id} style={styles.moduleSection}>
                  <Text style={[styles.moduleTitle, { color: textColor }]}>{module.title}</Text>

                  <View style={styles.lecturesList}>
                    {module.lectures.map((lecture) => {
                      const isPlaying = currentlyPlayingLecture === lecture.id;
                      return (
                        <Pressable
                          key={lecture.id}
                          onPress={() => handleLecturePress(lecture)}
                          style={({ pressed }) => [
                            styles.lectureCard,
                            { backgroundColor: cardBg, borderColor },
                            isPlaying && { borderColor: primaryColor },
                            pressed && styles.pressed,
                          ]}
                        >
                          <View
                            style={[
                              styles.playIconContainer,
                              { backgroundColor: isPlaying ? primaryColor : isDark ? '#1E293B' : '#EFF6FF' },
                            ]}
                          >
                            <Ionicons
                              name={isPlaying ? 'pause' : 'play'}
                              size={16}
                              color={isPlaying ? '#FFFFFF' : primaryColor}
                            />
                          </View>

                          <View style={styles.lectureInfo}>
                            <Text style={[styles.lectureTitle, { color: textColor }]} numberOfLines={1}>
                              {lecture.title}
                            </Text>
                            <Text style={[styles.lectureMeta, { color: mutedText }]}>
                              {lecture.lectureNum} • {lecture.duration}
                            </Text>
                          </View>

                          {lecture.isLocked && !isEnrolled ? (
                            <Ionicons name="lock-closed" size={16} color={mutedText} />
                          ) : (
                            <Ionicons name="checkmark-circle" size={18} color="#10B981" />
                          )}
                        </Pressable>
                      );
                    })}
                  </View>
                </View>
              ))}
            </View>
          ) : (
            <View style={styles.reviewsContainer}>
              <Text style={[styles.emptyReviewsText, { color: mutedText }]}>
                ⭐ 4.7 out of 5 based on 3,746 student reviews worldwide.
              </Text>
            </View>
          )}
        </View>
      </ScrollView>

      {/* Sticky Bottom Action Bar with Enroll Button */}
      <View
        style={[
          styles.stickyBottomBar,
          {
            backgroundColor: bgColor,
            borderTopColor: borderColor,
            paddingBottom: Math.max(insets.bottom, 16),
          },
        ]}
      >
        <Pressable
          onPress={handleEnroll}
          style={({ pressed }) => [
            styles.enrollButton,
            { backgroundColor: isEnrolled ? '#10B981' : primaryColor },
            pressed && styles.pressedBtn,
          ]}
        >
          <Text style={styles.enrollButtonText}>
            {isEnrolled ? 'Enrolled • Continue Learning' : 'Enroll Now'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  heroContainer: {
    position: 'relative',
    height: 240,
    width: '100%',
    backgroundColor: '#0F172A',
  },
  heroImage: {
    height: '100%',
  },
  floatingHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  glassBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    paddingHorizontal: 20,
    paddingTop: 16,
    maxWidth: 600,
    alignSelf: 'center',
    width: '100%',
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  categoryBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  categoryBadgeText: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  courseTitle: {
    fontSize: 22,
    fontWeight: '800',
    lineHeight: 28,
    marginBottom: 10,
  },
  metaStatsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  starsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  ratingNumber: {
    fontSize: 13,
    fontWeight: '700',
    marginLeft: 4,
  },
  reviewCount: {
    fontSize: 13,
    marginLeft: 2,
  },
  dotSeparator: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#94A3B8',
    marginHorizontal: 10,
  },
  durationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  durationText: {
    fontSize: 13,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 16,
  },
  instructorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 14,
    borderWidth: 1,
    marginBottom: 16,
  },
  instructorAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 12,
  },
  instructorInfo: {
    flex: 1,
  },
  instructorName: {
    fontSize: 14,
    fontWeight: '700',
  },
  instructorRole: {
    fontSize: 12,
  },
  instructorContactBtn: {
    padding: 8,
  },
  tabsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  tabPill: {
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 20,
    borderWidth: 1.5,
  },
  activeTabPill: {},
  tabPillText: {
    fontSize: 14,
    fontWeight: '600',
  },
  modulesContainer: {
    gap: 18,
  },
  moduleSection: {
    gap: 10,
  },
  moduleTitle: {
    fontSize: 15,
    fontWeight: '700',
  },
  lecturesList: {
    gap: 8,
  },
  lectureCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 14,
    borderWidth: 1,
  },
  playIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  lectureInfo: {
    flex: 1,
  },
  lectureTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 2,
  },
  lectureMeta: {
    fontSize: 12,
  },
  reviewsContainer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  emptyReviewsText: {
    fontSize: 14,
    textAlign: 'center',
  },
  stickyBottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingTop: 12,
    borderTopWidth: 1,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 8,
  },
  enrollButton: {
    width: '100%',
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  enrollButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  pressed: {
    opacity: 0.7,
  },
  pressedBtn: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
});
