"use client";

import { useEffect, useRef, useState } from "react";

export default function SpaceShooter({ isMuted = false }) {
    const naveRef = useRef(null);
    const laserSound = useRef(null);
    const explosionSound = useRef(null);

    const bulletsRef = useRef([]);
    const enemiesRef = useRef([]);

    const [lives, setLives] = useState(5);
    const [seconds, setSeconds] = useState(60);
    const [renderTick, setRenderTick] = useState(0); // 🔄 para forzar repintado

    // 🕹️ Movimiento de la nave
    useEffect(() => {
        const handleMove = (e) => {
        if (!naveRef.current) return;
        naveRef.current.style.left = `${e.clientX - 60}px`;
        };
        document.addEventListener("mousemove", handleMove);
        return () => document.removeEventListener("mousemove", handleMove);
    }, []);

    // ⏱️ Contador de tiempo
    useEffect(() => {
        const timer = setInterval(() => {
        setSeconds((prev) => {
            if (prev <= 1) {
            alert("You win!");
            window.location.reload();
            return 60;
            }
            return prev - 1;
        });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // 🔫 Disparo
    useEffect(() => {
        const handleShoot = () => {
        if (!naveRef.current) return;
        const rect = naveRef.current.getBoundingClientRect();

        const bullet = {
            id: Math.random().toString(36).substring(2, 9),
            x: rect.left + 56,
            y: rect.top - 30,
        };

        bulletsRef.current.push(bullet);

        if (laserSound.current && !isMuted) {
            laserSound.current.currentTime = 0;
            laserSound.current.play().catch(() => {});
        }
        };

        document.addEventListener("click", handleShoot);
        return () => document.removeEventListener("click", handleShoot);
    }, [isMuted]);

    // 🚀 Bucle principal
    useEffect(() => {
        const loop = setInterval(() => {
        const naveRect = naveRef.current?.getBoundingClientRect();

        // mover balas
        bulletsRef.current = bulletsRef.current
            .map((b) => ({ ...b, y: b.y - 25 }))
            .filter((b) => b.y > -50);

        // generar enemigos
        if (Math.random() < 0.04) {
            const enemy = {
            id: Math.random().toString(36).substring(2, 9),
            x: Math.random() * (window.innerWidth - 120),
            y: -120,
            exploded: false,
            };
            enemiesRef.current.push(enemy);
        }

        // mover enemigos
        enemiesRef.current = enemiesRef.current
            .map((e) => ({ ...e, y: e.y + 10 }))
            .filter((e) => {
            if (naveRect && e.y + 120 >= naveRect.top) {
                // enemigo toca la nave
                setLives((prev) => {
                const newLives = prev - 1;
                if (newLives < 0) alert("GAME OVER");
                return newLives;
                });
                return false;
            }
            return true;
            });

        // detectar colisiones
        bulletsRef.current.forEach((b) => {
            enemiesRef.current.forEach((e) => {
            if (
                !e.exploded &&
                b.x >= e.x &&
                b.x <= e.x + 120 &&
                b.y <= e.y + 120 &&
                b.y >= e.y
            ) {
                // 💥 impacto
                e.exploded = true;

                if (explosionSound.current && !isMuted) {
                explosionSound.current.currentTime = 0;
                explosionSound.current.play().catch(() => {});
                }

                // eliminar enemigo luego de 800ms
                setTimeout(() => {
                enemiesRef.current = enemiesRef.current.filter(
                    (en) => en.id !== e.id
                );
                setRenderTick((tick) => tick + 1);
                }, 800);
            }
            });
        });

        // eliminar balas que impactaron enemigos
        bulletsRef.current = bulletsRef.current.filter((b) => {
            return !enemiesRef.current.some(
            (e) =>
                e.exploded &&
                b.x >= e.x &&
                b.x <= e.x + 120 &&
                b.y <= e.y + 120 &&
                b.y >= e.y
            );
        });

        // 🔄 forzar repintado
        setRenderTick((tick) => tick + 1);
        }, 100);

        return () => clearInterval(loop);
    }, [isMuted]);

    return (
        <div className="relative w-full h-screen overflow-hidden bg-black select-none">
        {/* 🛸 Nave */}
        <div ref={naveRef} className="nave"></div>

        {/* ❤️ Vidas */}
        <div id="lives">
            <i>{lives}</i>
        </div>

        {/* ⏳ Tiempo */}
        <div id="time">{seconds}</div>

        {/* 🔫 Balas */}
        {bulletsRef.current.map((b) => (
            <div
            key={b.id}
            className="bala"
            style={{ left: `${b.x}px`, top: `${b.y}px` }}
            ></div>
        ))}

        {/* ☄️ Enemigos */}
        {enemiesRef.current.map((e) => (
            <div
            key={e.id}
            className="enemigo"
            style={{
                left: `${e.x}px`,
                top: `${e.y}px`,
                backgroundImage: e.exploded
                ? 'url("/images/imgpay/explocion.gif")'
                : 'url("/images/imgpay/asteroide2.png")',
            }}
            ></div>
        ))}

        {/* 🔊 Sonidos */}
        <audio ref={laserSound} src="/sounds/soundplay/laser.mp3" preload="auto" />
        <audio
            ref={explosionSound}
            src="/sounds/soundplay/explosion.mp3"
            preload="auto"
        />
        </div>
    );
}
