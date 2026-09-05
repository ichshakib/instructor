import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface WishlistCourse {
  id: string;
  title: string;
  category: string;
  instructor: string;
  thumbnail: string;
  duration: string;
  lessonsCount: number;
  price: string;
}

const WISHLIST_ITEMS: WishlistCourse[] = [
  {
    id: 'c1',
    title: 'Advanced Machine Learning Algorithms',
    category: 'Artificial Intelligence',
    instructor: 'Stanley Mante',
    thumbnail:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80',
    duration: '1h 20 mins',
    lessonsCount: 30,
    price: '$299',
  },
  {
    id: 'p1',
    title: 'Full Stack Web Development Bootcamp',
    category: 'Web Development',
    instructor: 'Dawn Corwin',
    thumbnail:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&auto=format&fit=crop&q=80',
    duration: '1h 20 mins',
    lessonsCount: 30,
    price: '$399',
  },
];

export default function WishlistScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const bgColor = isDark ? '#0F141C' : '#FAFBFD';
  const cardBg = isDark ? '#161F2C' : '#FFFFFF';
  const textColor = isDark ? '#F9FAFB' : '#1E2433';
  const mutedText = isDark ? '#9CA3AF' : '#8A92A6';
  const borderColor = isDark ? '#263345' : '#E8ECF2';
  const primaryBlue = '#2563EB';

  const openCourse = (course: WishlistCourse) => {
    router.push({
      pathname: '/course-details' as any,
      params: {
        id: course.id,
        title: course.title,
        category: course.category,
        instructor: course.instructor,
        image: course.thumbnail,
      },
    });
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: bgColor }]} edges={['top']}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={[styles.headerTitle, { color: textColor }]}>Wishlist</Text>
          <Text style={[styles.headerSub, { color: mutedText }]}>
            {WISHLIST_ITEMS.length} saved courses
          </Text>
        </View>

        <View style={styles.list}>
          {WISHLIST_ITEMS.map((course) => (
            <Pressable
              key={course.id}
              onPress={() => openCourse(course)}
              style={({ pressed }) => [
                styles.courseCard,
                { backgroundColor: cardBg, borderColor },
                pressed && styles.pressed,
              ]}
            >
              <Image
                source={{ uri: course.thumbnail }}
                style={styles.thumbnail}
                resizeMode="cover"
              />
              <View style={styles.info}>
                <View style={styles.topRow}>
                  <View
                    style={[
                      styles.catBadge,
                      { backgroundColor: isDark ? '#1E293B' : '#EFF6FF' },
                    ]}
                  >
                    <Text style={[styles.catBadgeText, { color: primaryBlue }]}>
                      {course.category}
                    </Text>
                  </View>
                  <Ionicons name="heart" size={18} color="#EF4444" />
                </View>

                <Text style={[styles.title, { color: textColor }]} numberOfLines={2}>
                  {course.title}
                </Text>

                <Text style={[styles.instructor, { color: mutedText }]}>
                  {course.instructor}
                </Text>

                <View style={styles.footerRow}>
                  <Text style={[styles.duration, { color: mutedText }]}>
                    {course.duration} • {course.lessonsCount} lessons
                  </Text>
                  <Text style={[styles.price, { color: textColor }]}>{course.price}</Text>
                </View>
              </View>
            </Pressable>
          ))}
        </View>
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
  },
  header: {
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: -0.2,
  },
  headerSub: {
    fontSize: 13,
    marginTop: 2,
  },
  list: {
    gap: 12,
  },
  courseCard: {
    flexDirection: 'row',
    padding: 12,
    borderRadius: 14,
    borderWidth: 1,
    gap: 12,
  },
  thumbnail: {
    width: 85,
    height: 85,
    borderRadius: 10,
    backgroundColor: '#0F172A',
  },
  info: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  catBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  catBadgeText: {
    fontSize: 11,
    fontWeight: '600',
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 18,
    marginTop: 2,
  },
  instructor: {
    fontSize: 12,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  duration: {
    fontSize: 11,
  },
  price: {
    fontSize: 14,
    fontWeight: '700',
  },
  pressed: {
    opacity: 0.7,
  },
});
