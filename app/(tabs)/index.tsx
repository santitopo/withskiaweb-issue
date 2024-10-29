import { StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import SkiaComponent from "@/components/SkiaComponent/SkiaComponent";

export default function HomeScreen() {
  console.log("rendering home");
  const [size, setSize] = useState(10);

  useEffect(() => {
    setInterval(() => {
      setSize((prev) => prev + 20);
    }, 2000);
  }, []);

  return (
    <View style={{ padding: 20, flex: 1 }}>
      <SkiaComponent contentSize={size} borderSize={2} />
      {/* <SkiaComponent contentSize={size} borderSize={2} /> */}
    </View>
  );
}
