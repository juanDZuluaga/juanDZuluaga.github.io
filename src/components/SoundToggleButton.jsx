"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function SoundToggleButton({ isMuted, toggleMute }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // evita SSR mismatch

  return (
    <button
        aria-pressed={isMuted}
        aria-label={isMuted ? "Activar sonido" : "Apagar sonido"}
        onClick={toggleMute}
        className="
            fixed
            bottom-20
            lg:right-5
            z-50
            flex items-center justify-center
            w-16 h-16
            rounded-full
            bg-black/60
            backdrop-blur-sm
            hover:bg-black/75
            transition
        "
        title={isMuted ? "Activar sonido" : "Apagar sonido"}
        >
        {isMuted ? (
            <Image
            src="/icons/alient_silence_light.png"
            alt="Sonido desactivado"
            width={40}
            height={40}
            />
        ) : (
            <Image
            src="/icons/alient_sound_light.png"
            alt="Sonido activado"
            width={40}
            height={40}
            />
        )}
        </button>
    );
}

