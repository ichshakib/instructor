import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import {
  KeyboardAwareScrollView,
  KeyboardToolbar,
} from 'react-native-keyboard-controller';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, {
  Circle,
  Defs,
  Ellipse,
  Line,
  LinearGradient,
  Path,
  Polygon,
  Rect,
  Stop,
} from 'react-native-svg';

import { useOnboarding } from '@/context/onboarding-context';

interface OnboardingProps {
  onComplete: () => void;
  canDismiss?: boolean;
  onDismiss?: () => void;
}

export function Onboarding({ onComplete, canDismiss, onDismiss }: OnboardingProps) {
  const { width } = useWindowDimensions();
  const maxContentWidth = Math.min(width, 480);
  const { userName, completeOnboardingWithName } = useOnboarding();

  // Step 1: Splash Welcome ("Start Learning Today")
  // Step 2: Name Input ("Enter your name")
  const [currentStep, setCurrentStep] = useState<'splash' | 'name'>('splash');
  const [inputName, setInputName] = useState(userName || '');

  const handleStartLearningClick = () => {
    setCurrentStep('name');
  };

  const handleFinishName = async () => {
    const finalName = inputName.trim().length > 0 ? inputName.trim() : 'Maria Waelchi';
    await completeOnboardingWithName(finalName);
    onComplete();
  };

  return (
    <View style={styles.container}>
      {/* Blue to light-blue/white gradient background */}
      <Svg height="100%" width="100%" style={StyleSheet.absoluteFill}>
        <Defs>
          <LinearGradient id="bgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <Stop offset="0%" stopColor="#1D4ED8" stopOpacity="1" />
            <Stop offset="25%" stopColor="#2563EB" stopOpacity="1" />
            <Stop offset="55%" stopColor="#60A5FA" stopOpacity="0.85" />
            <Stop offset="80%" stopColor="#DBEAFE" stopOpacity="0.9" />
            <Stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
          </LinearGradient>
        </Defs>
        <Rect x="0" y="0" width="100%" height="100%" fill="url(#bgGrad)" />
      </Svg>

      <SafeAreaView style={styles.safeArea}>
        {/* Top Dismiss Button (if previewed from Settings) */}
        <View style={styles.topBar}>
          {currentStep === 'name' ? (
            <Pressable
              onPress={() => setCurrentStep('splash')}
              style={({ pressed }) => [styles.dismissBtn, pressed && styles.pressed]}
              hitSlop={12}
            >
              <Ionicons name="arrow-back" size={22} color="#FFFFFF" />
            </Pressable>
          ) : canDismiss && onDismiss ? (
            <Pressable
              onPress={onDismiss}
              style={({ pressed }) => [styles.dismissBtn, pressed && styles.pressed]}
              hitSlop={12}
            >
              <Ionicons name="close" size={22} color="#FFFFFF" />
            </Pressable>
          ) : (
            <View style={{ height: 36 }} />
          )}
        </View>

        {currentStep === 'splash' ? (
          /* STEP 1: SPLASH ONBOARDING UI (MATCHING REFERENCE IMAGE) */
          <>
            {/* Center / Upper Area: Brand Logo & Title */}
            <View style={[styles.brandSection, { maxWidth: maxContentWidth }]}>
              {/* Circular Graduation & Learning Emblem */}
              <View style={styles.emblemContainer}>
                <Svg width={110} height={110} viewBox="0 0 100 100">
                  {/* Mortarboard / Graduation Cap */}
                  <Polygon points="50,12 88,28 50,44 12,28" fill="#FFFFFF" />
                  <Path
                    d="M28,34 L28,48 C28,58 72,58 72,48 L72,34"
                    fill="#FFFFFF"
                    opacity={0.95}
                  />
                  {/* Tassel */}
                  <Path
                    d="M74,30 L84,46"
                    stroke="#FFFFFF"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <Circle cx={84} cy={48} r={3.5} fill="#FFFFFF" />

                  {/* Globe / Sphere base */}
                  <Circle
                    cx={50}
                    cy={68}
                    r={24}
                    stroke="#FFFFFF"
                    strokeWidth="3.5"
                    fill="none"
                  />
                  {/* Equatorial line */}
                  <Line
                    x1={26}
                    y1={68}
                    x2={74}
                    y2={68}
                    stroke="#FFFFFF"
                    strokeWidth="2.8"
                  />
                  {/* Vertical curved meridian lines */}
                  <Ellipse
                    cx={50}
                    cy={68}
                    rx={13}
                    ry={24}
                    stroke="#FFFFFF"
                    strokeWidth="2.8"
                    fill="none"
                  />
                </Svg>
              </View>

              {/* App Brand Name */}
              <Text style={styles.brandTitle}>Instructor</Text>
            </View>

            {/* Lower Area: Headline & Action Button */}
            <View style={[styles.bottomSection, { maxWidth: maxContentWidth }]}>
              <Text style={styles.headlineText}>
                Learn Smarter{'\n'}Grow With Instructor
              </Text>

              <Pressable
                onPress={handleStartLearningClick}
                style={({ pressed }) => [
                  styles.ctaButton,
                  pressed && styles.ctaButtonPressed,
                ]}
              >
                <Text style={styles.ctaButtonText}>Start Learning Today</Text>
              </Pressable>
            </View>
          </>
        ) : (
          /* STEP 2: NAME INPUT UI WITH REACT-NATIVE-KEYBOARD-CONTROLLER */
          <>
            <KeyboardAwareScrollView
              bottomOffset={62}
              contentContainerStyle={[styles.nameStepScroll, { maxWidth: maxContentWidth }]}
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
            >
              <View style={styles.nameCard}>
                <View style={styles.avatarCircle}>
                  <Ionicons name="person" size={32} color="#2563EB" />
                </View>

                <Text style={styles.nameTitle}>What's your name?</Text>
                <Text style={styles.nameSubtitle}>
                  We will personalize your courses, roadmaps, and certificates on Instructor.
                </Text>

                <View style={styles.inputWrapper}>
                  <Ionicons name="person-outline" size={20} color="#64748B" style={styles.inputIcon} />
                  <TextInput
                    value={inputName}
                    onChangeText={setInputName}
                    placeholder="e.g. Maria Waelchi"
                    placeholderTextColor="#94A3B8"
                    autoFocus
                    style={styles.textInput}
                    returnKeyType="done"
                    onSubmitEditing={handleFinishName}
                  />
                </View>

                <Pressable
                  onPress={handleFinishName}
                  style={({ pressed }) => [
                    styles.ctaButton,
                    styles.nameSubmitBtn,
                    pressed && styles.ctaButtonPressed,
                  ]}
                >
                  <Text style={styles.ctaButtonText}>Continue to Home</Text>
                  <Ionicons name="arrow-forward" size={18} color="#FFFFFF" style={{ marginLeft: 6 }} />
                </Pressable>

                <Pressable
                  onPress={() => {
                    setInputName('Maria Waelchi');
                    handleFinishName();
                  }}
                  style={styles.skipNameBtn}
                >
                  <Text style={styles.skipNameText}>Use default name (Maria Waelchi)</Text>
                </Pressable>
              </View>
            </KeyboardAwareScrollView>
            <KeyboardToolbar />
          </>
        )}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 28,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 8,
    minHeight: 36,
  },
  dismissBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandSection: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    alignSelf: 'center',
    marginTop: -40,
  },
  emblemContainer: {
    width: 120,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    shadowColor: '#1E3A8A',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 6,
  },
  brandTitle: {
    fontSize: 38,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: -0.5,
    textAlign: 'center',
    textShadowColor: 'rgba(15, 23, 42, 0.15)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
  bottomSection: {
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    paddingBottom: Platform.OS === 'ios' ? 24 : 36,
  },
  headlineText: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1E293B',
    textAlign: 'center',
    lineHeight: 36,
    marginBottom: 24,
    letterSpacing: -0.3,
  },
  ctaButton: {
    width: '100%',
    backgroundColor: '#2563EB',
    paddingVertical: 18,
    paddingHorizontal: 24,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 5,
  },
  ctaButtonPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
  ctaButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  nameStepScroll: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    alignSelf: 'center',
    paddingVertical: 20,
  },
  nameCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 6,
  },
  avatarCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#EFF6FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  nameTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 8,
    textAlign: 'center',
  },
  nameSubtitle: {
    fontSize: 14,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#F8FAFC',
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    borderRadius: 14,
    paddingHorizontal: 14,
    marginBottom: 16,
  },
  inputIcon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    paddingVertical: 14,
    fontSize: 16,
    fontWeight: '600',
    color: '#0F172A',
  },
  nameSubmitBtn: {
    flexDirection: 'row',
    paddingVertical: 16,
  },
  skipNameBtn: {
    marginTop: 12,
    paddingVertical: 6,
  },
  skipNameText: {
    fontSize: 13,
    color: '#64748B',
    fontWeight: '500',
  },
  pressed: {
    opacity: 0.7,
  },
});
