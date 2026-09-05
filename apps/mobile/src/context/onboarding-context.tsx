import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';

const ONBOARDING_STORAGE_KEY = '@instructor_onboarding_completed_v1';
const USER_NAME_STORAGE_KEY = '@instructor_user_name_v1';

interface OnboardingContextType {
  isLoading: boolean;
  hasCompletedOnboarding: boolean;
  isViewingOnboarding: boolean;
  userName: string;
  setUserName: (name: string) => void;
  completeOnboardingWithName: (name: string) => Promise<void>;
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
  const [userName, setUserNameState] = useState('Maria Waelchi');

  useEffect(() => {
    async function loadStorage() {
      try {
        const [completedVal, storedName] = await Promise.all([
          AsyncStorage.getItem(ONBOARDING_STORAGE_KEY),
          AsyncStorage.getItem(USER_NAME_STORAGE_KEY),
        ]);

        if (storedName && storedName.trim().length > 0) {
          setUserNameState(storedName.trim());
        }

        if (completedVal === 'true') {
          setHasCompletedOnboarding(true);
        } else {
          setHasCompletedOnboarding(false);
          setIsViewingOnboarding(true);
        }
      } catch (err) {
        console.error('Failed to load onboarding status from local storage:', err);
        setHasCompletedOnboarding(false);
      } finally {
        setIsLoading(false);
      }
    }
    loadStorage();
  }, []);

  const completeOnboardingWithName = async (name: string) => {
    try {
      const finalName = name.trim().length > 0 ? name.trim() : 'Maria Waelchi';
      await Promise.all([
        AsyncStorage.setItem(ONBOARDING_STORAGE_KEY, 'true'),
        AsyncStorage.setItem(USER_NAME_STORAGE_KEY, finalName),
      ]);
      setUserNameState(finalName);
      setHasCompletedOnboarding(true);
      setIsViewingOnboarding(false);
    } catch (err) {
      console.error('Failed to save name and onboarding completion:', err);
    }
  };

  const completeOnboarding = async () => {
    await completeOnboardingWithName(userName);
  };

  const setUserName = async (name: string) => {
    const finalName = name.trim().length > 0 ? name.trim() : 'Maria Waelchi';
    setUserNameState(finalName);
    try {
      await AsyncStorage.setItem(USER_NAME_STORAGE_KEY, finalName);
    } catch (err) {
      console.error('Failed to update user name locally:', err);
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
      await Promise.all([
        AsyncStorage.removeItem(ONBOARDING_STORAGE_KEY),
        AsyncStorage.removeItem(USER_NAME_STORAGE_KEY),
      ]);
      setUserNameState('Maria Waelchi');
      setHasCompletedOnboarding(false);
      setIsViewingOnboarding(true);
    } catch (err) {
      console.error('Failed to reset onboarding status in local storage:', err);
    }
  };

  return (
    <OnboardingContext.Provider
      value={{
        isLoading,
        hasCompletedOnboarding,
        isViewingOnboarding,
        userName,
        setUserName,
        completeOnboardingWithName,
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
