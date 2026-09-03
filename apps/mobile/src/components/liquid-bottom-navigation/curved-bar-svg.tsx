import React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop, Filter, FeDropShadow } from 'react-native-svg';

interface CurvedBarSvgProps {
  width: number;
  height?: number;
  fillColor?: string;
  notchWidth?: number;
  notchDepth?: number;
  cornerRadius?: number;
  shadow?: boolean;
}

export const CurvedBarSvg: React.FC<CurvedBarSvgProps> = ({
  width,
  height = 76,
  fillColor = '#584a9c',
  notchWidth = 104,
  notchDepth = 38,
  cornerRadius = 24,
  shadow = true,
}) => {
  if (width <= 0) return null;

  const center = width / 2;
  const halfNotch = notchWidth / 2;
  const notchStart = center - halfNotch;
  const notchEnd = center + halfNotch;

  // Generate smooth cubic bezier curved path matching Jetpack Compose bg_bottom_nav
  const pathData = `
    M 0 ${cornerRadius}
    Q 0 0 ${cornerRadius} 0
    L ${notchStart} 0
    C ${center - 32} 0, ${center - 28} ${notchDepth}, ${center} ${notchDepth}
    C ${center + 28} ${notchDepth}, ${center + 32} 0, ${notchEnd} 0
    L ${width - cornerRadius} 0
    Q ${width} 0 ${width} ${cornerRadius}
    L ${width} ${height}
    L 0 ${height}
    Z
  `;

  return (
    <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <Defs>
        <LinearGradient id="curvedBarGradient" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor={fillColor} stopOpacity="1" />
          <Stop offset="1" stopColor={fillColor} stopOpacity="0.92" />
        </LinearGradient>
      </Defs>
      <Path d={pathData} fill="url(#curvedBarGradient)" />
    </Svg>
  );
};
