export interface LiquidActionItem {
  id: string;
  label: string;
  iconName: string;
  iconLibrary?: 'MaterialIcons' | 'Ionicons' | 'Feather';
  color?: string;
  onPress: () => void;
}

export interface LiquidTabItem {
  key: string;
  label: string;
  href: string;
  iconName: string;
  iconLibrary?: 'MaterialIcons' | 'Ionicons' | 'Feather';
}

export interface LiquidNavTheme {
  barBackground: string;
  fabColor: string;
  fabIconColor: string;
  activeTabColor: string;
  inactiveTabColor: string;
  rippleColor: string;
  glowColor: string;
  badgeColor?: string;
}

export const LIQUID_COMPOSE_THEME: LiquidNavTheme = {
  barBackground: '#584a9c',
  fabColor: '#EB87CE',
  fabIconColor: '#FFFFFF',
  activeTabColor: '#BB86FC',
  inactiveTabColor: 'rgba(255, 255, 255, 0.65)',
  rippleColor: '#FFFFFF',
  glowColor: 'rgba(187, 134, 252, 0.4)',
};

export const LIQUID_DARK_THEME: LiquidNavTheme = {
  barBackground: '#1C1D24',
  fabColor: '#8B5CF6',
  fabIconColor: '#FFFFFF',
  activeTabColor: '#A78BFA',
  inactiveTabColor: '#71717A',
  rippleColor: '#FFFFFF',
  glowColor: 'rgba(139, 92, 246, 0.35)',
};

export const LIQUID_LIGHT_THEME: LiquidNavTheme = {
  barBackground: '#F4F4F8',
  fabColor: '#7C3AED',
  fabIconColor: '#FFFFFF',
  activeTabColor: '#6D28D9',
  inactiveTabColor: '#71717A',
  rippleColor: '#7C3AED',
  glowColor: 'rgba(124, 58, 237, 0.25)',
};
