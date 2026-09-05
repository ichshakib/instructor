import { useRouter } from 'expo-router';
import React from 'react';

import { Onboarding } from '@/components/onboarding';
import { useOnboarding } from '@/context/onboarding-context';

export default function OnboardingScreen() {
  const router = useRouter();
  const { completeOnboarding } = useOnboarding();

  const handleComplete = async () => {
    await completeOnboarding();
    router.replace('/');
  };

  return <Onboarding onComplete={handleComplete} />;
}
