import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  Alert,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useOnboarding } from '@/context/onboarding-context';
import { API_BASE_URL } from '@/services/api';

export default function SettingsScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const { reopenOnboarding, resetOnboarding, userName } = useOnboarding();

  const initials = (userName || 'Learner')
    .split(' ')
    .filter(Boolean)
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  // Monochromatic black and white palette (Zero blue)
  const bgColor = isDark ? '#09090B' : '#FFFFFF';
  const cardBg = isDark ? '#121214' : '#FFFFFF';
  const textColor = isDark ? '#FFFFFF' : '#09090B';
  const mutedText = isDark ? '#A1A1AA' : '#71717A';
  const borderColor = isDark ? '#27272A' : '#E4E4E7';

  const handleResetConfirmation = () => {
    if (Platform.OS === 'web') {
      if (window.confirm('Reset onboarding walkthrough and start from the beginning?')) {
        resetOnboarding();
      }
      return;
    }

    Alert.alert(
      'Reset Onboarding',
      'This will reset your onboarding walkthrough so you can view the introductory guide again. Continue?',
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
            Account & Application Preferences
          </Text>
        </View>

        {/* Profile Card */}
        <View style={[styles.profileCard, { backgroundColor: cardBg, borderColor }]}>
          <View
            style={[
              styles.avatarCircle,
              { backgroundColor: isDark ? '#27272A' : '#F4F4F5' },
            ]}
          >
            <Text style={[styles.avatarText, { color: textColor }]}>{initials}</Text>
          </View>
          <View style={styles.profileInfo}>
            <Text style={[styles.profileName, { color: textColor }]}>
              {userName || 'Learner'}
            </Text>
            <Text style={[styles.profileSub, { color: mutedText }]}>
              Learner Account
            </Text>
          </View>
        </View>

        {/* PREFERENCES SECTION */}
        <View style={styles.sectionHeaderRow}>
          <Ionicons name="options-outline" size={16} color={textColor} />
          <Text style={[styles.sectionTitle, { color: textColor }]}>Preferences</Text>
        </View>

        <View style={[styles.settingsCard, { backgroundColor: cardBg, borderColor }]}>
          {/* Theme Display */}
          <View style={[styles.infoRow, { borderBottomColor: borderColor }]}>
            <View style={styles.settingRowLeft}>
              <Ionicons
                name={isDark ? 'moon-outline' : 'sunny-outline'}
                size={18}
                color={textColor}
              />
              <Text style={[styles.settingLabel, { color: textColor }]}>Theme</Text>
            </View>
            <Text style={[styles.infoValue, { color: mutedText }]}>
              {isDark ? 'Dark Mode' : 'Light Mode'}
            </Text>
          </View>

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
              <Ionicons name="play-outline" size={18} color={textColor} />
              <Text style={[styles.settingLabel, { color: textColor }]}>
                Replay Introduction Guide
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color={mutedText} />
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
              <Ionicons name="refresh-outline" size={18} color={mutedText} />
              <Text style={[styles.settingLabel, { color: mutedText }]}>
                Reset Onboarding Cache
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color={mutedText} />
          </Pressable>
        </View>

        {/* ABOUT & APP INFO */}
        <View style={styles.sectionHeaderRow}>
          <Ionicons name="information-circle-outline" size={16} color={textColor} />
          <Text style={[styles.sectionTitle, { color: textColor }]}>About</Text>
        </View>

        <View style={[styles.settingsCard, { backgroundColor: cardBg, borderColor }]}>
          <View style={[styles.infoRow, { borderBottomColor: borderColor }]}>
            <Text style={[styles.infoLabel, { color: mutedText }]}>Application</Text>
            <Text style={[styles.infoValue, { color: textColor }]}>Instructor</Text>
          </View>
          <View style={[styles.infoRow, { borderBottomColor: borderColor }]}>
            <Text style={[styles.infoLabel, { color: mutedText }]}>Version</Text>
            <Text style={[styles.infoValue, { color: textColor }]}>1.0.0</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={[styles.infoLabel, { color: mutedText }]}>API Endpoint</Text>
            <Text style={[styles.infoValue, { color: textColor }]}>{API_BASE_URL}</Text>
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
    fontSize: 13,
    marginTop: 2,
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 24,
    gap: 14,
  },
  avatarCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: 17,
    fontWeight: '700',
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 2,
  },
  profileSub: {
    fontSize: 13,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
  },
  settingsCard: {
    borderRadius: 14,
    borderWidth: 1,
    marginBottom: 20,
    overflow: 'hidden',
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
    gap: 12,
  },
  settingLabel: {
    fontSize: 14,
    fontWeight: '500',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
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
