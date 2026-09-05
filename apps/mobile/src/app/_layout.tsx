import { Ionicons } from '@expo/vector-icons';
import { DarkTheme, DefaultTheme, Tabs, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Platform, StyleSheet, useColorScheme, View } from 'react-native';
import { KeyboardProvider } from 'react-native-keyboard-controller';

import { Onboarding } from '@/components/onboarding';
import { LearningProvider } from '@/context/learning-context';
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
    <View style={[styles.container, { backgroundColor: isDark ? '#09090B' : '#FFFFFF' }]}>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: isDark ? '#FFFFFF' : '#09090B',
          tabBarInactiveTintColor: isDark ? '#71717A' : '#A1A1AA',
          tabBarStyle: {
            backgroundColor: isDark ? '#09090B' : '#FFFFFF',
            borderTopColor: isDark ? '#27272A' : '#E4E4E7',
            borderTopWidth: 1,
            elevation: 0,
            shadowOpacity: 0,
            height: Platform.OS === 'ios' ? 84 : 64,
            paddingBottom: Platform.OS === 'ios' ? 24 : 10,
            paddingTop: 8,
          },
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: '600',
            marginTop: 2,
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
                name={focused ? 'book' : 'book-outline'}
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
        {/* Wishlist route hidden from the bottom tab bar (saved courses are inside My Learning) */}
        <Tabs.Screen
          name="wishlist"
          options={{
            href: null,
            tabBarStyle: { display: 'none' },
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
            tabBarStyle: { display: 'none' },
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
        <LearningProvider>
          <OnboardingProvider>
            <TabsLayoutContent />
          </OnboardingProvider>
        </LearningProvider>
      </KeyboardProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
