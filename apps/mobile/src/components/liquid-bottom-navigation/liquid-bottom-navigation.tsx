import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  LayoutChangeEvent,
  Platform,
  Dimensions,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  Easing,
  interpolate,
  Extrapolation,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';

import { CurvedBarSvg } from './curved-bar-svg';
import { LiquidBridge, WebSvgGooeyFilter } from './liquid-metaball';
import {
  LiquidActionItem,
  LiquidTabItem,
  LiquidNavTheme,
  LIQUID_COMPOSE_THEME,
} from './types';

export interface LiquidBottomNavigationProps {
  currentRoute?: string;
  onNavigate?: (href: string) => void;
  theme?: LiquidNavTheme;
  actions?: LiquidActionItem[];
  tabs?: LiquidTabItem[];
  onActionTriggered?: (action: LiquidActionItem) => void;
}

const DEFAULT_TABS: LiquidTabItem[] = [
  {
    key: 'home',
    label: 'Calendar',
    href: '/',
    iconName: 'calendar-today',
  },
  {
    key: 'explore',
    label: 'Group',
    href: '/explore',
    iconName: 'group',
  },
];

export const LiquidBottomNavigation: React.FC<LiquidBottomNavigationProps> = ({
  currentRoute = '/',
  onNavigate,
  theme = LIQUID_COMPOSE_THEME,
  actions,
  tabs = DEFAULT_TABS,
  onActionTriggered,
}) => {
  const insets = useSafeAreaInsets();
  const screenWidth = Dimensions.get('window').width;
  const [layoutWidth, setLayoutWidth] = useState(screenWidth);
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeToast, setActiveToast] = useState<string | null>(null);

  // Animation shared values matching Jetpack Compose MainActivity.kt
  const animProgress = useSharedValue(0);
  const rippleProgress = useSharedValue(0);

  // Default actions matching Jetpack Compose MainActivity.kt
  const defaultActions: LiquidActionItem[] = [
    {
      id: 'camera',
      label: 'Camera',
      iconName: 'photo-camera',
      color: theme.fabColor,
      onPress: () => showToast('Photo Camera clicked!'),
    },
    {
      id: 'settings',
      label: 'Settings',
      iconName: 'settings',
      color: theme.fabColor,
      onPress: () => showToast('Settings clicked!'),
    },
    {
      id: 'cart',
      label: 'Cart',
      iconName: 'shopping-cart',
      color: theme.fabColor,
      onPress: () => showToast('Shopping Cart clicked!'),
    },
  ];

  const items = actions || defaultActions;

  const showToast = (message: string) => {
    setActiveToast(message);
    setTimeout(() => {
      setActiveToast((curr) => (curr === message ? null : curr));
    }, 2400);
  };

  const toggleMenu = useCallback(() => {
    const nextState = !isExpanded;
    setIsExpanded(nextState);

    // Ripple wave animation on click (400ms duration, matching Compose)
    rippleProgress.value = 0;
    rippleProgress.value = withTiming(1, {
      duration: 520,
      easing: Easing.bezier(0.2, 0.8, 0.4, 1.0),
    });

    // Main FAB and sub-actions spring/timing (FastOutSlowInEasing matching Compose)
    if (nextState) {
      animProgress.value = withTiming(1, {
        duration: 750,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1.0),
      });
    } else {
      animProgress.value = withTiming(0, {
        duration: 550,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1.0),
      });
    }
  }, [isExpanded]);

  const closeMenu = useCallback(() => {
    if (isExpanded) {
      setIsExpanded(false);
      animProgress.value = withTiming(0, {
        duration: 480,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1.0),
      });
    }
  }, [isExpanded]);

  const onLayout = (e: LayoutChangeEvent) => {
    const w = e.nativeEvent.layout.width;
    if (w > 0 && Math.abs(w - layoutWidth) > 2) {
      setLayoutWidth(w);
    }
  };

  // 1. Center FAB rotation animated style (0 -> 225 deg rotation transforms '+' into 'x')
  const fabAnimatedStyle = useAnimatedStyle(() => {
    const rotate = interpolate(
      animProgress.value,
      [0.35, 0.65],
      [0, 225],
      Extrapolation.CLAMP
    );
    return {
      transform: [{ rotate: `${rotate}deg` }],
    };
  });

  // Background scaled FAB circle matching Compose: scale(1f - LinearEasing.transform(0.5f, 0.85f, progress))
  const fabBackdropScaleStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      animProgress.value,
      [0.5, 0.85],
      [1.0, 0.7],
      Extrapolation.CLAMP
    );
    return {
      transform: [{ scale }],
    };
  });

  // 2. Ripple wave circle animated style matching Compose: scale(2 - sin(PI * clickProgress))
  const rippleAnimatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(rippleProgress.value, [0, 1], [0.85, 2.4]);
    const opacity = interpolate(
      rippleProgress.value,
      [0, 0.3, 0.7, 1],
      [0.85, 0.6, 0.3, 0]
    );
    return {
      transform: [{ scale }],
      opacity,
    };
  });

  // Background glow circle
  const glowRingStyle = useAnimatedStyle(() => {
    const scale = interpolate(animProgress.value, [0, 1], [1, 1.4]);
    const opacity = interpolate(animProgress.value, [0, 0.5, 1], [0.4, 0.25, 0]);
    return {
      transform: [{ scale }],
      opacity,
    };
  });

  // 3. Staged sub-actions matching Compose FastOutSlowInEasing & LinearEasing:
  // Action 1: Left Action (Camera) -> offset (-78, -72), range [0, 0.8]
  const action1LiquidStyle = useAnimatedStyle(() => {
    const p = interpolate(animProgress.value, [0, 0.8], [0, 1], Extrapolation.CLAMP);
    const transX = interpolate(p, [0, 1], [0, -78]);
    const transY = interpolate(p, [0, 1], [0, -72]);
    // Fluid droplet deformation along travel direction
    const stretch = interpolate(p, [0, 0.45, 0.8, 1], [0.3, 1.25, 1.05, 1]);

    return {
      transform: [{ translateX: transX }, { translateY: transY }, { scale: stretch }],
      opacity: interpolate(p, [0, 0.1, 1], [0, 1, 1]),
    };
  });

  const action1ForegroundStyle = useAnimatedStyle(() => {
    const p = interpolate(animProgress.value, [0, 0.8], [0, 1], Extrapolation.CLAMP);
    const transX = interpolate(p, [0, 1], [0, -78]);
    const transY = interpolate(p, [0, 1], [0, -72]);
    const opacity = interpolate(animProgress.value, [0.2, 0.7], [0, 1], Extrapolation.CLAMP);

    return {
      transform: [{ translateX: transX }, { translateY: transY }],
      opacity,
    };
  });

  // Action 2: Center Top Action (Settings) -> offset (0, -96), range [0.1, 0.9]
  const action2LiquidStyle = useAnimatedStyle(() => {
    const p = interpolate(animProgress.value, [0.1, 0.9], [0, 1], Extrapolation.CLAMP);
    const transY = interpolate(p, [0, 1], [0, -96]);
    const stretch = interpolate(p, [0, 0.45, 0.8, 1], [0.3, 1.25, 1.05, 1]);

    return {
      transform: [{ translateY: transY }, { scale: stretch }],
      opacity: interpolate(p, [0, 0.1, 1], [0, 1, 1]),
    };
  });

  const action2ForegroundStyle = useAnimatedStyle(() => {
    const p = interpolate(animProgress.value, [0.1, 0.9], [0, 1], Extrapolation.CLAMP);
    const transY = interpolate(p, [0, 1], [0, -96]);
    const opacity = interpolate(animProgress.value, [0.3, 0.8], [0, 1], Extrapolation.CLAMP);

    return {
      transform: [{ translateY: transY }],
      opacity,
    };
  });

  // Action 3: Right Action (Cart) -> offset (78, -72), range [0.2, 1.0]
  const action3LiquidStyle = useAnimatedStyle(() => {
    const p = interpolate(animProgress.value, [0.2, 1.0], [0, 1], Extrapolation.CLAMP);
    const transX = interpolate(p, [0, 1], [0, 78]);
    const transY = interpolate(p, [0, 1], [0, -72]);
    const stretch = interpolate(p, [0, 0.45, 0.8, 1], [0.3, 1.25, 1.05, 1]);

    return {
      transform: [{ translateX: transX }, { translateY: transY }, { scale: stretch }],
      opacity: interpolate(p, [0, 0.1, 1], [0, 1, 1]),
    };
  });

  const action3ForegroundStyle = useAnimatedStyle(() => {
    const p = interpolate(animProgress.value, [0.2, 1.0], [0, 1], Extrapolation.CLAMP);
    const transX = interpolate(p, [0, 1], [0, 78]);
    const transY = interpolate(p, [0, 1], [0, -72]);
    const opacity = interpolate(animProgress.value, [0.4, 0.9], [0, 1], Extrapolation.CLAMP);

    return {
      transform: [{ translateX: transX }, { translateY: transY }],
      opacity,
    };
  });

  const barHeight = 76;
  const bottomPadding = Math.max(insets.bottom, 12);

  return (
    <>
      {/* Web SVG Filter definition in DOM */}
      <WebSvgGooeyFilter />

      {/* Toast Alert Feedback */}
      {activeToast && (
        <View style={styles.toastContainer} pointerEvents="none">
          <View style={[styles.toastBubble, { backgroundColor: theme.fabColor }]}>
            <MaterialIcons name="check-circle" size={18} color="#FFFFFF" />
            <Text style={styles.toastText}>{activeToast}</Text>
          </View>
        </View>
      )}

      {/* Dismiss Backdrop when expanded */}
      {isExpanded && (
        <Pressable
          style={styles.backdrop}
          onPress={closeMenu}
          android_disableSound
        />
      )}

      {/* Bottom Navigation Container */}
      <View
        style={[styles.container, { paddingBottom: bottomPadding }]}
        onLayout={onLayout}
        pointerEvents="box-none"
      >
        {/* Curved SVG Background matching Compose bg_bottom_nav */}
        <View style={styles.svgWrapper} pointerEvents="none">
          <CurvedBarSvg
            width={layoutWidth}
            height={barHeight}
            fillColor={theme.barBackground}
          />
        </View>

        {/* Tab Buttons Row */}
        <View style={[styles.barRow, { height: barHeight }]}>
          {/* Left Tab: Calendar / Home */}
          <Pressable
            style={({ pressed }) => [styles.tabButton, pressed && styles.tabPressed]}
            onPress={() => onNavigate?.(tabs[0].href)}
          >
            <View style={styles.tabContent}>
              <MaterialIcons
                name={(tabs[0]?.iconName as any) || 'calendar-today'}
                size={24}
                color={
                  currentRoute === tabs[0].href || (tabs[0].href === '/' && currentRoute === '/index')
                    ? theme.activeTabColor
                    : theme.inactiveTabColor
                }
              />
              <Text
                style={[
                  styles.tabLabel,
                  {
                    color:
                      currentRoute === tabs[0].href || (tabs[0].href === '/' && currentRoute === '/index')
                        ? theme.activeTabColor
                        : theme.inactiveTabColor,
                  },
                ]}
              >
                {tabs[0].label}
              </Text>
              {(currentRoute === tabs[0].href || (tabs[0].href === '/' && currentRoute === '/index')) && (
                <View style={[styles.activeDot, { backgroundColor: theme.activeTabColor }]} />
              )}
            </View>
          </Pressable>

          {/* Center Empty Space for FAB Notch */}
          <View style={styles.centerSpace} />

          {/* Right Tab: Group / Explore */}
          <Pressable
            style={({ pressed }) => [styles.tabButton, pressed && styles.tabPressed]}
            onPress={() => onNavigate?.(tabs[1].href)}
          >
            <View style={styles.tabContent}>
              <MaterialIcons
                name={(tabs[1]?.iconName as any) || 'group'}
                size={24}
                color={
                  currentRoute === tabs[1].href
                    ? theme.activeTabColor
                    : theme.inactiveTabColor
                }
              />
              <Text
                style={[
                  styles.tabLabel,
                  {
                    color:
                      currentRoute === tabs[1].href
                        ? theme.activeTabColor
                        : theme.inactiveTabColor,
                  },
                ]}
              >
                {tabs[1].label}
              </Text>
              {currentRoute === tabs[1].href && (
                <View style={[styles.activeDot, { backgroundColor: theme.activeTabColor }]} />
              )}
            </View>
          </Pressable>
        </View>

        {/* Center Floating Action Button Group */}
        <View style={styles.centerFabAnchor} pointerEvents="box-none">
          {/* =========================================================================
              LAYER 1: LIQUID BACKDROP LAYER (renderEffect in Compose)
              This layer houses the liquid metaball bridges, expanding liquid blobs,
              and gooey filter container. All colored identically in theme.fabColor.
              ========================================================================= */}
          <View
            style={[
              styles.liquidLayerContainer,
              Platform.OS === 'web' &&
                ({
                  filter: 'url(#liquid-gooey)',
                  WebkitFilter: 'url(#liquid-gooey)',
                } as any),
            ]}
            {...(Platform.OS === 'web' ? { className: 'liquid-gooey-layer' } : {})}
            pointerEvents="none"
          >
            {/* Liquid Stretchy Bridge 1: Towards Camera (angle -137.3 deg) */}
            <LiquidBridge
              angle={-137.3}
              progress={animProgress}
              startRange={[0, 0.8]}
              color={theme.fabColor}
              maxDistance={78}
            />

            {/* Liquid Stretchy Bridge 2: Towards Settings (angle -90 deg) */}
            <LiquidBridge
              angle={-90}
              progress={animProgress}
              startRange={[0.1, 0.9]}
              color={theme.fabColor}
              maxDistance={74}
            />

            {/* Liquid Stretchy Bridge 3: Towards Cart (angle -42.7 deg) */}
            <LiquidBridge
              angle={-42.7}
              progress={animProgress}
              startRange={[0.2, 1.0]}
              color={theme.fabColor}
              maxDistance={78}
            />

            {/* Sub-Action 1 Liquid Circle Blob */}
            <Animated.View
              style={[
                styles.liquidBlobSub,
                { backgroundColor: items[0]?.color || theme.fabColor },
                action1LiquidStyle,
              ]}
            />

            {/* Sub-Action 2 Liquid Circle Blob */}
            <Animated.View
              style={[
                styles.liquidBlobSub,
                { backgroundColor: items[1]?.color || theme.fabColor },
                action2LiquidStyle,
              ]}
            />

            {/* Sub-Action 3 Liquid Circle Blob */}
            <Animated.View
              style={[
                styles.liquidBlobSub,
                { backgroundColor: items[2]?.color || theme.fabColor },
                action3LiquidStyle,
              ]}
            />

            {/* Center Main Liquid Pool Blob */}
            <Animated.View
              style={[
                styles.liquidBlobCenter,
                { backgroundColor: theme.fabColor },
                fabBackdropScaleStyle,
              ]}
            />
          </View>

          {/* =========================================================================
              LAYER 2: FOREGROUND CRISP LAYER (renderEffect = null in Compose)
              Renders crisp icons, tap handlers, and ripple pulses on top of liquid.
              ========================================================================= */}

          {/* Sub-Action 1: Left Action (Camera) */}
          <Animated.View
            style={[styles.subActionButtonWrapper, action1ForegroundStyle]}
            pointerEvents={isExpanded ? 'auto' : 'none'}
          >
            <Pressable
              style={styles.subActionButtonInner}
              onPress={() => {
                items[0]?.onPress();
                onActionTriggered?.(items[0]);
                closeMenu();
              }}
              accessibilityRole="button"
              accessibilityLabel={items[0]?.label || 'Camera'}
            >
              <MaterialIcons
                name={(items[0]?.iconName as any) || 'photo-camera'}
                size={22}
                color="#FFFFFF"
              />
            </Pressable>
          </Animated.View>

          {/* Sub-Action 2: Center Top Action (Settings) */}
          <Animated.View
            style={[styles.subActionButtonWrapper, action2ForegroundStyle]}
            pointerEvents={isExpanded ? 'auto' : 'none'}
          >
            <Pressable
              style={styles.subActionButtonInner}
              onPress={() => {
                items[1]?.onPress();
                onActionTriggered?.(items[1]);
                closeMenu();
              }}
              accessibilityRole="button"
              accessibilityLabel={items[1]?.label || 'Settings'}
            >
              <MaterialIcons
                name={(items[1]?.iconName as any) || 'settings'}
                size={22}
                color="#FFFFFF"
              />
            </Pressable>
          </Animated.View>

          {/* Sub-Action 3: Right Action (Cart) */}
          <Animated.View
            style={[styles.subActionButtonWrapper, action3ForegroundStyle]}
            pointerEvents={isExpanded ? 'auto' : 'none'}
          >
            <Pressable
              style={styles.subActionButtonInner}
              onPress={() => {
                items[2]?.onPress();
                onActionTriggered?.(items[2]);
                closeMenu();
              }}
              accessibilityRole="button"
              accessibilityLabel={items[2]?.label || 'Cart'}
            >
              <MaterialIcons
                name={(items[2]?.iconName as any) || 'shopping-cart'}
                size={22}
                color="#FFFFFF"
              />
            </Pressable>
          </Animated.View>

          {/* Ripple Pulse Wave */}
          <Animated.View
            style={[
              styles.rippleCircle,
              { borderColor: theme.rippleColor },
              rippleAnimatedStyle,
            ]}
            pointerEvents="none"
          />

          {/* Background Glow Ring */}
          <Animated.View
            style={[
              styles.glowCircle,
              { backgroundColor: theme.glowColor },
              glowRingStyle,
            ]}
            pointerEvents="none"
          />

          {/* Main Rotating FAB Button with Crisp '+' Icon */}
          <Pressable
            style={styles.fabTouchTarget}
            onPress={toggleMenu}
            accessibilityRole="button"
            accessibilityLabel="Toggle liquid quick actions"
          >
            <Animated.View style={fabAnimatedStyle}>
              <MaterialIcons name="add" size={32} color={theme.fabIconColor} />
            </Animated.View>
          </Pressable>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  svgWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.15,
        shadowRadius: 10,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  barRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 36,
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 70,
  },
  tabPressed: {
    opacity: 0.7,
  },
  tabContent: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
  },
  tabLabel: {
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 0.2,
  },
  activeDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    marginTop: 2,
  },
  centerSpace: {
    width: 76,
  },
  centerFabAnchor: {
    position: 'absolute',
    bottom: 34,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
  },
  liquidLayerContainer: {
    position: 'absolute',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3,
  },
  liquidBlobCenter: {
    width: 58,
    height: 58,
    borderRadius: 29,
    position: 'absolute',
  },
  liquidBlobSub: {
    width: 48,
    height: 48,
    borderRadius: 24,
    position: 'absolute',
  },
  fabTouchTarget: {
    width: 58,
    height: 58,
    borderRadius: 29,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  subActionButtonWrapper: {
    position: 'absolute',
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9,
  },
  subActionButtonInner: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rippleCircle: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    zIndex: 1,
  },
  glowCircle: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    zIndex: 0,
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
  },
  toastContainer: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 999,
  },
  toastBubble: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 24,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
      },
      android: {
        elevation: 6,
      },
      web: {
        boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
      },
    }),
  },
  toastText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
});
