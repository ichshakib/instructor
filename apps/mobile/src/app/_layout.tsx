import { Ionicons } from '@expo/vector-icons';
import { DarkTheme, DefaultTheme, Tabs, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import { Platform, StyleSheet, useColorScheme, View } from 'react-native';
import { KeyboardProvider } from 'react-native-keyboard-controller';

import { Onboarding } from '@/components/onboarding';
import { OnboardingProvider, useOnboarding } from '@/context/onboarding-context';

function TabsLayoutContent() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const {
    isLoading,
    hasCompletedOnboarding,
    isViewingOnboarding,
    completeOnboarding,
    closeOnboardingOverlay,
  } = useOnboarding();

  const showOnboarding = !hasCompletedOnboarding || isViewingOnboarding;

  return (
    <View style={styles.container}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: isDark ? '#F9FAFB' : '#1E2433',
          tabBarInactiveTintColor: isDark ? '#6B7280' : '#8E95A5',
          tabBarStyle: {
            backgroundColor: isDark ? '#111827' : '#FFFFFF',
            borderTopColor: isDark ? '#1F2937' : '#F1F3F9',
            borderTopWidth: 1,
            elevation: 0,
            shadowOpacity: 0,
            height: Platform.OS === 'ios' ? 84 : 60,
            paddingBottom: Platform.OS === 'ios' ? 24 : 8,
            paddingTop: 6,
          },
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: '500',
            marginTop: 1,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={22}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="courses"
          options={{
            title: 'My Learning',
            tabBarLabel: 'My Learning',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? 'play-circle' : 'play-circle-outline'}
                size={22}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="wishlist"
          options={{
            title: 'Wishlist',
            tabBarLabel: 'Wishlist',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? 'heart' : 'heart-outline'}
                size={22}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: 'Setting',
            tabBarLabel: 'Setting',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? 'settings' : 'settings-outline'}
                size={22}
                color={color}
              />
            ),
          }}
        />
        {/* Auxiliary routes hidden from the bottom tab bar */}
        <Tabs.Screen
          name="course-details"
          options={{
            href: null,
            tabBarStyle: { display: 'none' },
          }}
        />
        <Tabs.Screen
          name="onboarding"
          options={{
            href: null,
          }}
        />
      </Tabs>

      {/* Interactive Onboarding Overlay */}
      {!isLoading && showOnboarding && (
        <View style={StyleSheet.absoluteFill}>
          <Onboarding
            onComplete={completeOnboarding}
            canDismiss={hasCompletedOnboarding}
            onDismiss={closeOnboardingOverlay}
          />
        </View>
      )}
    </View>
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  useEffect(() => {
    // Hide native splash screen immediately on mount
    SplashScreen.hideAsync().catch(() => {});
  }, []);

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <KeyboardProvider>
        <OnboardingProvider>
          <TabsLayoutContent />
        </OnboardingProvider>
      </KeyboardProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
