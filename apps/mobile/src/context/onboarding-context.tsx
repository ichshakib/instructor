import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';

const ONBOARDING_STORAGE_KEY = '@instructor_onboarding_completed_v1';

interface OnboardingContextType {
  isLoading: boolean;
  hasCompletedOnboarding: boolean;
  isViewingOnboarding: boolean;
  completeOnboarding: () => Promise<void>;
  reopenOnboarding: () => void;
  closeOnboardingOverlay: () => void;
  resetOnboarding: () => Promise<void>;
}

const OnboardingContext = createContext<OnboardingContextType | null>(null);

export function OnboardingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);
  const [isViewingOnboarding, setIsViewingOnboarding] = useState(false);

  useEffect(() => {
    async function loadStorage() {
      try {
        const value = await AsyncStorage.getItem(ONBOARDING_STORAGE_KEY);
        if (value === 'true') {
          setHasCompletedOnboarding(true);
        } else {
          setHasCompletedOnboarding(false);
          setIsViewingOnboarding(true);
        }
      } catch (err) {
        console.error('Failed to load onboarding status:', err);
        setHasCompletedOnboarding(false);
      } finally {
        setIsLoading(false);
      }
    }
    loadStorage();
  }, []);

  const completeOnboarding = async () => {
    try {
      await AsyncStorage.setItem(ONBOARDING_STORAGE_KEY, 'true');
      setHasCompletedOnboarding(true);
      setIsViewingOnboarding(false);
    } catch (err) {
      console.error('Failed to persist onboarding completion:', err);
    }
  };

  const reopenOnboarding = () => {
    setIsViewingOnboarding(true);
  };

  const closeOnboardingOverlay = () => {
    setIsViewingOnboarding(false);
  };

  const resetOnboarding = async () => {
    try {
      await AsyncStorage.removeItem(ONBOARDING_STORAGE_KEY);
      setHasCompletedOnboarding(false);
      setIsViewingOnboarding(true);
    } catch (err) {
      console.error('Failed to reset onboarding status:', err);
    }
  };

  return (
    <OnboardingContext.Provider
      value={{
        isLoading,
        hasCompletedOnboarding,
        isViewingOnboarding,
        completeOnboarding,
        reopenOnboarding,
        closeOnboardingOverlay,
        resetOnboarding,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error('useOnboarding must be used within an OnboardingProvider');
  }
  return context;
}
