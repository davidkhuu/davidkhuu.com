import { Slot } from "expo-router";
import Head from "expo-router/head";

import { Background } from "@/components/Background";

export default function App() {
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
