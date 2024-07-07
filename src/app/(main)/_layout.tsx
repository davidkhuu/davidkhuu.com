import { Slot } from "expo-router";

import { Footer } from "@/components/Footer";
import { MenuBar } from "@/components/MenuBar";

export default function Navigator() {
  return (
    <div className="flex h-full overflow-x-hidden px-4">
      <div className="container md:mx-auto pt-4 max-w-2xl">
        <MenuBar />

        <div className="container pt-4">
          <Slot />
        </div>

        <Footer />
      </div>
    </div>
  );
}
