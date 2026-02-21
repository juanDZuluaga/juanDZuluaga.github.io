"use client";
import { useEffect, useState } from "react";
import SoundToggleButton from "@/components/SoundToggleButton";
import ThemeToggle from "@/components/ThemeToggle";
import BubbleCursor from "@/components/BubbleCursor";
import Navbar from "@/components/nav";
import DataFooter from "@/components/footer";
import Image from "next/image";
import Development from "@/components/development";




export default function ThreeDi() {
    const [isMuted, setIsMuted] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem("isMuted");
        if (stored) setIsMuted(JSON.parse(stored));
    }, []);

      useEffect(() => {
    localStorage.setItem("isMuted", JSON.stringify(isMuted));
  }, [isMuted]);

     return (
    <div>
      <Navbar />

      <main className=" justify-center min-h-screen flex-col">

          <section>
            <Development />
          </section>
          <DataFooter />
          {/* Floating buttons */}
          <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end">
          <SoundToggleButton isMuted={isMuted} toggleMute={() => setIsMuted((v) => !v)}/>
          <ThemeToggle />
          </div>

          <BubbleCursor isMuted={isMuted} />
      </main>
    </div>
  );
}