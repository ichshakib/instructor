/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * Monochromatic black & white palette with zero blue as requested by user.
 */

import '@/global.css';

import { Platform } from 'react-native';

export const Colors = {
  light: {
    text: '#09090B',
    textSecondary: '#71717A',
    background: '#FFFFFF',
    backgroundElement: '#F4F4F5',
    backgroundSelected: '#E4E4E7',
    card: '#FFFFFF',
    border: '#E4E4E7',
    tabBar: '#FFFFFF',
    tabBarBorder: '#E4E4E7',
    primary: '#09090B',
    primaryText: '#FFFFFF',
    accent: '#18181B',
  },
  dark: {
    text: '#FFFFFF',
    textSecondary: '#A1A1AA',
    background: '#09090B',
    backgroundElement: '#18181B',
    backgroundSelected: '#27272A',
    card: '#121214',
    border: '#27272A',
    tabBar: '#09090B',
    tabBarBorder: '#27272A',
    primary: '#FFFFFF',
    primaryText: '#09090B',
    accent: '#F4F4F5',
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Fonts = Platform.select({
  ios: {
    sans: 'system-ui',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: 'var(--font-display)',
    serif: 'var(--font-serif)',
    rounded: 'var(--font-rounded)',
    mono: 'var(--font-mono)',
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;
