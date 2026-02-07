"use client";
import { useEffect, useRef, useState } from "react";

export default function BubbleCursor({ isMuted = false }) {
  // Posición actual del cursor/nave
  const [pos, setPos] = useState({ x: -9999, y: -9999 });
  // Partículas de humo
  const [particles, setParticles] = useState([]);
  // Saber si el componente ya está montado en cliente
  const [mounted, setMounted] = useState(false);

  // Referencias para audio y control de estado
  const audioRef = useRef(null);     // referencia al <audio>
  const unlockedRef = useRef(false); // para desbloquear sonido 1 sola vez
  const timeoutRef = useRef(null);   // para pausar cuando se deja de mover
  const isMutedRef = useRef(isMuted); // sincronizar mute con prop

  // Mantener mute sincronizado entre prop y <audio>
  useEffect(() => {
    isMutedRef.current = isMuted;
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
      if (isMuted) {
        audioRef.current.pause(); // si está muteado, paramos
      } else {
        if (unlockedRef.current && audioRef.current.paused) {
          audioRef.current.play().catch(() => {});
        }
      }
    }
  }, [isMuted]);

  // Confirmamos que ya está montado en cliente
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // 🔊 Desbloquear audio en la primera interacción
    const unlockAudio = () => {
      if (audioRef.current && !unlockedRef.current) {
        audioRef.current.volume = 0.05; // volumen bajito
        audioRef.current.loop = true;   // reproducir en loop
        audioRef.current.muted = isMutedRef.current;
        if (!isMutedRef.current) {
          audioRef.current.play().catch(() => {});
        }
        unlockedRef.current = true;
      }
    };

    // 🚀 Manejador del movimiento (mouse o dedo)
    const handleMove = (e) => {
      let x, y;

      // Si es evento táctil (móvil)
      if (e.type === "touchmove" || e.type === "touchstart") {
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
      } else {
        // Si es evento de mouse (PC)
        x = e.clientX;
        y = e.clientY;
      }

      // Actualizamos posición
      setPos({ x, y });

      // Desbloqueamos audio si aún no lo está
      unlockAudio();

      // Crear partícula de humo
      if (mounted) {
        const id = Math.random().toString(36).substr(2, 9);
        setParticles((prev) => [
          ...prev,
          { id, x: x - 10, y: y - 10, size: Math.random() * 6 + 4 },
        ]);
        setTimeout(() => {
          setParticles((prev) => prev.filter((p) => p.id !== id));
        }, 600);
      }

      // Si está desbloqueado y no está muteado → reproducir
      if (
        audioRef.current &&
        unlockedRef.current &&
        audioRef.current.paused &&
        !isMutedRef.current
      ) {
        audioRef.current.play().catch(() => {});
      }

      // Pausar sonido cuando se deje de mover
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        if (audioRef.current) audioRef.current.pause();
      }, 100);
    };

    // 📱 + 🖱 Eventos
    window.addEventListener("mousemove", handleMove);   // PC
    window.addEventListener("touchmove", handleMove);   // móvil
    window.addEventListener("click", unlockAudio);      // click desbloquea
    window.addEventListener("touchstart", unlockAudio); // tap desbloquea

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("click", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [mounted]);

  return (
    <>
      {/* 💨 Partículas de humo */}
      {mounted &&
        particles.map((p) => (
          <div key={p.id} className="fixed rounded-full pointer-events-none bg-gray-400"
            style={{ left: p.x, top: p.y, width: `${p.size}px`, height: `${p.size}px`, opacity: 0.5, transform: "translate(-50%, -50%)", animation: "fade 0.6s forwards",}}
          />
        ))}

      {/* 🚀 Cursor nave */}
      {mounted && (
        <img src="/images/elements/spaceship.png" alt="cursor" className="fixed pointer-events-none"
          style={{ left: `${pos.x - 25}px`, top: `${pos.y - 25}px`, width: "50px", height: "50px",}}
        />
      )}

      {/* 🎵 Audio */}
      <audio ref={audioRef} src="/sounds/alien.mp3" preload="auto" />
      {/* Animación partículas */}
      <style jsx>{
      `
        @keyframes fade {
          0% {
            opacity: 0.5;
            transform: translate(-50%, -50%) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(2);
          }
        }
      `
      }</style>
    </>
  );
}
