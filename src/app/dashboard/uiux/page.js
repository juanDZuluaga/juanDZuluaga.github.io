"use client";
import { useEffect, useState } from "react";
import SoundToggleButton from "@/components/SoundToggleButton";
import ThemeToggle from "@/components/ThemeToggle";
import BubbleCursor from "@/components/BubbleCursor";
import Navbar from "@/components/nav";
import DataFooter from "@/components/footer";



export default function UiUx() {
    const [isMuted, setIsMuted] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem("isMuted");
        if (stored) setIsMuted(JSON.parse(stored));
    }, []);

      useEffect(() => {
    localStorage.setItem("isMuted", JSON.stringify(isMuted));
  }, [isMuted]);

     return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="grow pb-32">
        <h1>Diseños UI / UX</h1>
      </main>

      <DataFooter />

      <div className="fixed bottom-6 right-6 z-100 flex flex-col gap-4">
        <SoundToggleButton
          isMuted={isMuted}
          toggleMute={() => setIsMuted(v => !v)}
        />
        <ThemeToggle />
      </div>

      <BubbleCursor isMuted={isMuted} />
    </div>
  );
}