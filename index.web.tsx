import "@expo/metro-runtime";
import { App } from "expo-router/build/qualified-entry";
import { renderRootComponent } from "expo-router/build/renderRootComponent";

import { LoadSkiaWeb } from "@shopify/react-native-skia/lib/module/web";

// Uncomment to defer loading app
LoadSkiaWeb().then(async () => {
  renderRootComponent(App);
});

// Uncomment to keep default app's registration
// renderRootComponent(App);
