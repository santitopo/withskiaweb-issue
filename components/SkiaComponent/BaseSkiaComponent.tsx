import type { PropsWithChildren } from "react";
import React from "react";
import type { StyleProp, ViewStyle } from "react-native";
import {
  Canvas,
  RoundedRect,
  SweepGradient,
  vec,
} from "@shopify/react-native-skia";

const SKIA_CANVAS_STYLE: StyleProp<ViewStyle> = {
  flex: 1,
};

const gradient = [
  "#D9D9D9",
  "#FFFFFF",
  "#9DC4D2",
  "#EBC4B8",
  "#E6DAB0",
  "#999999",
];

const BaseSkiaComponent = ({
  borderSize,
  children,
  contentSize,
}: { borderSize: number; contentSize: number } & PropsWithChildren) => {
  const size = contentSize + 2 * borderSize;

  console.log("rendering base component");

  const borderRadius = size / 2;

  return (
    <Canvas style={SKIA_CANVAS_STYLE}>
      <RoundedRect r={borderRadius} x={0} y={0} width={size} height={size}>
        <SweepGradient c={vec(size / 2, size / 2)} colors={gradient} />
      </RoundedRect>
    </Canvas>
  );
};

export default BaseSkiaComponent;
