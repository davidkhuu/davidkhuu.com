import { Dongle_300Light, Dongle_400Regular } from "@expo-google-fonts/dongle";
import { Inter_600SemiBold } from "@expo-google-fonts/inter";
import { NotoColorEmoji_400Regular } from "@expo-google-fonts/noto-color-emoji";
import { SourceCodePro_400Regular } from "@expo-google-fonts/source-code-pro";
import { loadAsync } from "expo-font";
import { Slot } from "expo-router";
import Head from "expo-router/head";

import { Background } from "@/components/Background";

export default function App() {
  loadAsync({
    Dongle_300Light,
    Dongle_400Regular,
    NotoColorEmoji_400Regular,
    SourceCodePro_400Regular,
    Inter_600SemiBold,
  });

  return (
    <>
      <Head>
        <title>David Khuu</title>
      </Head>
      <Background />
      <Slot />
    </>
  );
}
