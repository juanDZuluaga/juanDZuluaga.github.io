"use client";
import { useEffect, useState } from "react";
import SoundToggleButton from "@/components/SoundToggleButton";
import ThemeToggle from "@/components/ThemeToggle";
import BubbleCursor from "@/components/BubbleCursor";
import Navbar from "@/components/nav";
import DataFooter from "@/components/footer";

export default function FloatingControls() {
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
        {/* Navbar */}
        <Navbar />
        <div className="min-h-screen flex flex-col">
            <div className="grow">
                <h1>hololas desde portafolio</h1>
            </div>
            <div className="mt-auto">
                <DataFooter />
            </div>
            
            <div className="z-100 fixed bottom-6 right-6 flex flex-col gap-4 items-end">
                <SoundToggleButton isMuted={isMuted} toggleMute={() => setIsMuted(v => !v)}
                />
                <ThemeToggle />
            </div>
            <BubbleCursor isMuted={isMuted} />
        </div>
       
    </div>
  );
}
