import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Alert,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useOnboarding } from '@/context/onboarding-context';

export default function SettingsScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const { reopenOnboarding, resetOnboarding, userName } = useOnboarding();
  const initials = (userName || 'Maria Waelchi')
    .split(' ')
    .filter(Boolean)
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  // Settings states
  const [slowAudio, setSlowAudio] = useState(false);
  const [autoPlayAudio, setAutoPlayAudio] = useState(true);
  const [showPhonetics, setShowPhonetics] = useState(true);
  const [dailyReminders, setDailyReminders] = useState(true);

  // Palette tokens
  const bgColor = isDark ? '#090D16' : '#F8FAFC';
  const cardBg = isDark ? '#131D2E' : '#FFFFFF';
  const innerCardBg = isDark ? '#1C293D' : '#F1F5F9';
  const textColor = isDark ? '#F8FAFC' : '#0F172A';
  const mutedText = isDark ? '#94A3B8' : '#64748B';
  const borderColor = isDark ? '#24344D' : '#E2E8F0';
  const primaryColor = '#F59E0B';

  const handleResetConfirmation = () => {
    if (Platform.OS === 'web') {
      if (window.confirm('Reset onboarding status and start the walkthrough from the beginning?')) {
        resetOnboarding();
      }
      return;
    }

    Alert.alert(
      'Reset Onboarding',
      'This will reset your onboarding completion flag and restart the walkthrough. Continue?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Reset',
          style: 'destructive',
          onPress: () => resetOnboarding(),
        },
      ]
    );
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: bgColor }]} edges={['top']}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={[styles.headerTitle, { color: textColor }]}>Settings</Text>
          <Text style={[styles.headerSubtitle, { color: mutedText }]}>
            Preferences, Audio & Onboarding
          </Text>
        </View>

        {/* Profile Card */}
        <View style={[styles.profileCard, { backgroundColor: cardBg, borderColor }]}>
          <View style={[styles.avatarCircle, { backgroundColor: '#FEF3C7' }]}>
            <Text style={styles.avatarText}>{initials}</Text>
          </View>
          <View style={styles.profileInfo}>
            <Text style={[styles.profileName, { color: textColor }]}>
              {userName || 'Maria Waelchi'}
            </Text>
            <Text style={[styles.profileSub, { color: mutedText }]}>
              Target: Goethe-Zertifikat A1
            </Text>
            <View style={styles.profileBadgeRow}>
              <View style={[styles.badge, { backgroundColor: isDark ? '#1E293B' : '#EFF6FF' }]}>
                <Ionicons name="sparkles" size={12} color="#2563EB" />
                <Text style={[styles.badgeText, { color: '#2563EB' }]}>Active Student</Text>
              </View>
              <View style={[styles.badge, { backgroundColor: isDark ? '#1E293B' : '#FEF3C7' }]}>
                <Ionicons name="flame" size={12} color="#D97706" />
                <Text style={[styles.badgeText, { color: '#D97706' }]}>5 Day Streak</Text>
              </View>
            </View>
          </View>
        </View>

        {/* ONBOARDING & GUIDANCE SECTION */}
        <View style={styles.sectionHeaderRow}>
          <Ionicons name="compass-outline" size={18} color={primaryColor} />
          <Text style={[styles.sectionTitle, { color: textColor }]}>
            Onboarding & Walkthrough
          </Text>
        </View>

        <View style={[styles.settingsCard, { backgroundColor: cardBg, borderColor }]}>
          {/* Replay Onboarding Walkthrough */}
          <Pressable
            onPress={reopenOnboarding}
            style={({ pressed }) => [
              styles.settingRowPressable,
              { borderBottomColor: borderColor },
              pressed && styles.pressed,
            ]}
          >
            <View style={styles.settingRowLeft}>
              <View style={[styles.settingIconWrap, { backgroundColor: '#FEF3C7' }]}>
                <Ionicons name="play-forward" size={18} color="#D97706" />
              </View>
              <View style={styles.settingRowText}>
                <Text style={[styles.settingLabel, { color: textColor }]}>
                  Replay Onboarding Flow
                </Text>
                <Text style={[styles.settingSub, { color: mutedText }]}>
                  Swipe through the intro carousel and feature guide
                </Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color={mutedText} />
          </Pressable>

          {/* Reset Onboarding State */}
          <Pressable
            onPress={handleResetConfirmation}
            style={({ pressed }) => [
              styles.settingRowPressable,
              pressed && styles.pressed,
            ]}
          >
            <View style={styles.settingRowLeft}>
              <View style={[styles.settingIconWrap, { backgroundColor: '#FEE2E2' }]}>
                <Ionicons name="refresh" size={18} color="#DC2626" />
              </View>
              <View style={styles.settingRowText}>
                <Text style={[styles.settingLabel, { color: '#DC2626' }]}>
                  Reset Onboarding Cache
                </Text>
                <Text style={[styles.settingSub, { color: mutedText }]}>
                  Clears saved AsyncStorage completion flag
                </Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color={mutedText} />
          </Pressable>
        </View>

        {/* AUDIO & SPEECH PREFERENCES */}
        <View style={styles.sectionHeaderRow}>
          <Ionicons name="headset-outline" size={18} color="#2563EB" />
          <Text style={[styles.sectionTitle, { color: textColor }]}>
            German Audio & Playback
          </Text>
        </View>

        <View style={[styles.settingsCard, { backgroundColor: cardBg, borderColor }]}>
          {/* Slow Audio Mode */}
          <View style={[styles.settingRow, { borderBottomColor: borderColor }]}>
            <View style={styles.settingRowLeft}>
              <View style={[styles.settingIconWrap, { backgroundColor: '#DBEAFE' }]}>
                <Ionicons name="speedometer-outline" size={18} color="#2563EB" />
              </View>
              <View style={styles.settingRowText}>
                <Text style={[styles.settingLabel, { color: textColor }]}>
                  Slow Playback (0.8x)
                </Text>
                <Text style={[styles.settingSub, { color: mutedText }]}>
                  Helps recognize nuances and diphthongs
                </Text>
              </View>
            </View>
            <Switch
              value={slowAudio}
              onValueChange={setSlowAudio}
              trackColor={{ false: innerCardBg, true: primaryColor }}
              thumbColor="#FFFFFF"
            />
          </View>

          {/* Auto-Play Audio */}
          <View style={[styles.settingRow, { borderBottomColor: borderColor }]}>
            <View style={styles.settingRowLeft}>
              <View style={[styles.settingIconWrap, { backgroundColor: '#DCFCE7' }]}>
                <Ionicons name="volume-high-outline" size={18} color="#16A34A" />
              </View>
              <View style={styles.settingRowText}>
                <Text style={[styles.settingLabel, { color: textColor }]}>
                  Auto-Play Audio on Open
                </Text>
                <Text style={[styles.settingSub, { color: mutedText }]}>
                  Automatically pronounce vocabulary cards
                </Text>
              </View>
            </View>
            <Switch
              value={autoPlayAudio}
              onValueChange={setAutoPlayAudio}
              trackColor={{ false: innerCardBg, true: primaryColor }}
              thumbColor="#FFFFFF"
            />
          </View>

          {/* Phonetics & IPA */}
          <View style={styles.settingRow}>
            <View style={styles.settingRowLeft}>
              <View style={[styles.settingIconWrap, { backgroundColor: '#F3E8FF' }]}>
                <Ionicons name="text-outline" size={18} color="#9333EA" />
              </View>
              <View style={styles.settingRowText}>
                <Text style={[styles.settingLabel, { color: textColor }]}>
                  Show Phonetic Transcriptions
                </Text>
                <Text style={[styles.settingSub, { color: mutedText }]}>
                  Display IPA pronunciation hints
                </Text>
              </View>
            </View>
            <Switch
              value={showPhonetics}
              onValueChange={setShowPhonetics}
              trackColor={{ false: innerCardBg, true: primaryColor }}
              thumbColor="#FFFFFF"
            />
          </View>
        </View>

        {/* HABIT & NOTIFICATIONS */}
        <View style={styles.sectionHeaderRow}>
          <Ionicons name="notifications-outline" size={18} color="#10B981" />
          <Text style={[styles.sectionTitle, { color: textColor }]}>Study Habits</Text>
        </View>

        <View style={[styles.settingsCard, { backgroundColor: cardBg, borderColor }]}>
          <View style={styles.settingRow}>
            <View style={styles.settingRowLeft}>
              <View style={[styles.settingIconWrap, { backgroundColor: '#D1FAE5' }]}>
                <Ionicons name="alarm-outline" size={18} color="#059669" />
              </View>
              <View style={styles.settingRowText}>
                <Text style={[styles.settingLabel, { color: textColor }]}>
                  Daily Practice Reminder
                </Text>
                <Text style={[styles.settingSub, { color: mutedText }]}>
                  Notification at 19:00 every evening
                </Text>
              </View>
            </View>
            <Switch
              value={dailyReminders}
              onValueChange={setDailyReminders}
              trackColor={{ false: innerCardBg, true: primaryColor }}
              thumbColor="#FFFFFF"
            />
          </View>
        </View>

        {/* ABOUT & APP INFO */}
        <View style={styles.sectionHeaderRow}>
          <Ionicons name="information-circle-outline" size={18} color={mutedText} />
          <Text style={[styles.sectionTitle, { color: textColor }]}>About Instructor</Text>
        </View>

        <View style={[styles.settingsCard, { backgroundColor: cardBg, borderColor }]}>
          <View style={[styles.infoRow, { borderBottomColor: borderColor }]}>
            <Text style={[styles.infoLabel, { color: mutedText }]}>App Version</Text>
            <Text style={[styles.infoValue, { color: textColor }]}>1.0.0 (Expo SDK 57)</Text>
          </View>
          <View style={[styles.infoRow, { borderBottomColor: borderColor }]}>
            <Text style={[styles.infoLabel, { color: mutedText }]}>React Native</Text>
            <Text style={[styles.infoValue, { color: textColor }]}>0.86.3</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={[styles.infoLabel, { color: mutedText }]}>Platform</Text>
            <Text style={[styles.infoValue, { color: textColor }]}>
              {Platform.OS.toUpperCase()}
            </Text>
          </View>
        </View>

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
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 18,
    borderWidth: 1,
    marginBottom: 20,
    gap: 14,
  },
  avatarCircle: {
    width: 54,
    height: 54,
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#D97706',
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 2,
  },
  profileSub: {
    fontSize: 13,
    marginBottom: 8,
  },
  profileBadgeRow: {
    flexDirection: 'row',
    gap: 8,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    gap: 4,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '700',
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 10,
    marginTop: 6,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
  },
  settingsCard: {
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 16,
    overflow: 'hidden',
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
  },
  settingRowPressable: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
  },
  settingRowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 12,
  },
  settingIconWrap: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingRowText: {
    flex: 1,
  },
  settingLabel: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 2,
  },
  settingSub: {
    fontSize: 12,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
  },
  infoLabel: {
    fontSize: 13,
  },
  infoValue: {
    fontSize: 13,
    fontWeight: '600',
  },
  pressed: {
    opacity: 0.7,
  },
});
