import { Ionicons } from '@expo/vector-icons';
import { DarkTheme, DefaultTheme, Tabs, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import * as SystemUI from 'expo-system-ui';
import React, { useEffect } from 'react';
import {
  Platform,
  StatusBar as RNStatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Onboarding } from '@/components/onboarding';
import { LearningProvider } from '@/context/learning-context';
import { OnboardingProvider, useOnboarding } from '@/context/onboarding-context';

const CustomDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#09090B',
    card: '#09090B',
    border: '#27272A',
    text: '#FFFFFF',
    primary: '#FFFFFF',
  },
};

const CustomLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFFFFF',
    card: '#FFFFFF',
    border: '#E4E4E7',
    text: '#09090B',
    primary: '#09090B',
  },
};

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

  useEffect(() => {
    SystemUI.setBackgroundColorAsync(isDark ? '#09090B' : '#FFFFFF').catch(() => {});
    if (Platform.OS === 'android') {
      RNStatusBar.setTranslucent(true);
      RNStatusBar.setBackgroundColor('transparent');
    }
  }, [isDark]);

  const showOnboarding = !hasCompletedOnboarding || isViewingOnboarding;

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#09090B' : '#FFFFFF' }]}>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      <Tabs
        screenOptions={{
          headerShown: false,
          headerShadowVisible: false,
          tabBarActiveTintColor: isDark ? '#FFFFFF' : '#09090B',
          tabBarInactiveTintColor: isDark ? '#71717A' : '#A1A1AA',
          tabBarStyle: {
            backgroundColor: isDark ? '#09090B' : '#FFFFFF',
            borderTopColor: 'transparent',
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
                name={focused ? 'compass' : 'compass-outline'}
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
                name={focused ? 'bookmark' : 'bookmark-outline'}
                size={21}
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
          name="wishlist"
          options={{
            href: null,
            tabBarStyle: { display: 'none' },
          }}
        />
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
  const isDark = colorScheme === 'dark';

  useEffect(() => {
    // Hide native splash screen immediately on mount
    SplashScreen.hideAsync().catch(() => {});
  }, []);

  return (
    <SafeAreaProvider>
      <ThemeProvider value={isDark ? CustomDarkTheme : CustomLightTheme}>
        <KeyboardProvider statusBarTranslucent={true}>
          <LearningProvider>
            <OnboardingProvider>
              <TabsLayoutContent />
            </OnboardingProvider>
          </LearningProvider>
        </KeyboardProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
