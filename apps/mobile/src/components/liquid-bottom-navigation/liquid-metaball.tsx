import React from 'react';
import Svg, { Path } from 'react-native-svg';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolation,
} from 'react-native-reanimated';
import { View, StyleSheet, Platform } from 'react-native';

export interface Point {
  x: number;
  y: number;
}

/**
 * Single stretching liquid bridge between the center FAB and a sub-action circle.
 * Uses centered 200x200 canvas rotated around the exact center of the FAB.
 */
export const LiquidBridge: React.FC<{
  angle: number; // in degrees
  progress: SharedValue<number>;
  startRange: [number, number]; // e.g. [0, 0.8] for Camera, [0.1, 0.9] for Settings, [0.2, 1.0] for Cart
  color: string;
  maxDistance?: number;
}> = ({ angle, progress, startRange, color, maxDistance = 78 }) => {
  const containerStyle = useAnimatedStyle(() => {
    const p = interpolate(
      progress.value,
      [startRange[0], startRange[1]],
      [0, 1],
      Extrapolation.CLAMP
    );

    // Bridge stretches between p = 0.04 and p = 0.65, then snaps off cleanly
    const stretchProgress = interpolate(p, [0.04, 0.65], [0, 1], Extrapolation.CLAMP);
    const scaleX = interpolate(stretchProgress, [0, 1], [0.2, 1]);
    const scaleY = interpolate(stretchProgress, [0, 0.45, 0.85, 1], [1, 0.78, 0.42, 0.15]);

    // Bridge opacity: fades in immediately as motion starts, thins, and snaps away at p > 0.60
    const opacity = interpolate(
      p,
      [0, 0.05, 0.52, 0.65],
      [0, 1, 0.95, 0],
      Extrapolation.CLAMP
    );

    return {
      transform: [
        { rotate: `${angle}deg` },
        { scaleX },
        { scaleY },
      ],
      opacity,
    };
  });

  // Micro droplet pinched off from surface tension at snap point
  const dropletStyle = useAnimatedStyle(() => {
    const p = interpolate(
      progress.value,
      [startRange[0], startRange[1]],
      [0, 1],
      Extrapolation.CLAMP
    );

    const transX = interpolate(p, [0.55, 0.78], [maxDistance * 0.48, maxDistance * 0.68], Extrapolation.CLAMP);
    const scale = interpolate(p, [0.55, 0.65, 0.78], [0, 1, 0], Extrapolation.CLAMP);
    const opacity = interpolate(p, [0.55, 0.65, 0.78], [0, 0.9, 0], Extrapolation.CLAMP);

    return {
      transform: [
        { rotate: `${angle}deg` },
        { translateX: transX },
        { scale },
      ],
      opacity,
    };
  });

  const L = maxDistance;
  const r1 = 28;
  const r2 = 22;
  const w = 4.5; // pinched waist width

  // Symmetrical 200x200 canvas centered at (100, 100)
  // Base at (100, 100), extending to (100 + L, 100) along positive X
  const bridgePath = `
    M 100 ${100 - r1}
    Q ${100 + L * 0.42} ${100 - w} ${100 + L} ${100 - r2}
    L ${100 + L} ${100 + r2}
    Q ${100 + L * 0.42} ${100 + w} 100 ${100 + r1}
    Z
  `;

  return (
    <>
      <Animated.View style={[styles.centeredCanvas, containerStyle]} pointerEvents="none">
        <Svg width={200} height={200} viewBox="0 0 200 200">
          <Path d={bridgePath} fill={color} />
        </Svg>
      </Animated.View>

      {/* Surface tension snap micro-droplet */}
      <Animated.View style={[styles.centeredDropletWrapper, dropletStyle]} pointerEvents="none">
        <View style={[styles.droplet, { backgroundColor: color }]} />
      </Animated.View>
    </>
  );
};

export const WebSvgGooeyFilter: React.FC = () => {
  if (Platform.OS !== 'web') return null;

  return (
    <svg
      style={{
        position: 'absolute',
        width: 0,
        height: 0,
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    >
      <defs>
        <filter id="liquid-gooey" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 36 -12"
            result="goo"
          />
        </filter>
      </defs>
    </svg>
  );
};

const styles = StyleSheet.create({
  centeredCanvas: {
    position: 'absolute',
    left: -70, // (200 - 60) / 2 = 70 to center 200px box over 60px container
    top: -70,
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 4,
  },
  centeredDropletWrapper: {
    position: 'absolute',
    left: 26,
    top: 26,
    width: 8,
    height: 8,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 5,
  },
  droplet: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
});
