import React from "react";
import { View } from "react-native";
import { WithSkiaWeb } from "@shopify/react-native-skia/lib/module/web";
import type BaseSkiaComponent from "./BaseSkiaComponent";

/**
 * This file acts as an async wrapper of the CircularSweepGradientBorder component,
 * which relies on Skia to render the component.
 */
const SkiaComponent = (
  args: React.ComponentProps<typeof BaseSkiaComponent>
) => {
  return (
    <WithSkiaWeb
      componentProps={args}
      getComponent={() => import("./BaseSkiaComponent")}
      fallback={<View />}
    />
  );
};

export default React.memo(SkiaComponent);
