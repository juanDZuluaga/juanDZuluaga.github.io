"use client";
import Image from "next/image";
import React from "react";

const planets = [
    { name: "Mercurio", img: "/images/lights_plants/mercurio.png", size: 30, orbit: "w-24 h-24", speed: "animate-spin-slow", gap: 0 },
    { name: "Venus",    img: "/images/lights_plants/venus.png",    size: 40, orbit: "w-36 h-36", speed: "animate-spin-slower", gap: 11 },
    { name: "Tierra",   img: "/images/lights_plants/tierra.png",   size: 55, orbit: "w-48 h-48", speed: "animate-spin-slow", gap: 44 },
    { name: "Marte",    img: "/images/lights_plants/marte.png",    size: 45, orbit: "w-60 h-60", speed: "animate-spin-mediumslow", gap: 70 },
    { name: "Júpiter",  img: "/images/lights_plants/jupiter.png",  size: 125, orbit: "w-80 h-80", speed: "animate-spin-medium", gap: 160 },
    { name: "Saturno",  img: "/images/lights_plants/saturno.png",  size: 118, orbit: "w-96 h-96", speed: "animate-spin-slowermedium", gap: 220 },
    { name: "Urano",    img: "/images/lights_plants/uranus.png",   size: 90, orbit: "w-[28rem] h-[28rem]", speed: "animate-spin-moderate", gap: 265 },
    { name: "Neptuno",  img: "/images/lights_plants/neptuno.png",  size: 90, orbit: "w-[32rem] h-[32rem]", speed: "animate-spin-slower", gap: 330 },
];

export default function SolarSystem() {
    return (
        <div className="relative flex items-center justify-center">
            <div className=" relative  w-[800px] h-[800px] flex items-center justify-center  m-50  scale-75 sm:scale-90 md:scale-100 "  >
            {/* Sol */}
            <div className="absolute z-10">
                {/* <Image src="/images/lights_plants/sun.png" alt="Sol" width={100} height={100} /> */}
            </div>
            {/* Planetas con sus órbitas */}
            {planets.map((planet, i) => (
                <div key={i} className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 ${planet.orbit} ${planet.speed} box-content`} style={{ padding: `${planet.gap}px` }} >
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 cursor-pointer pointer-events-auto hover:scale-110 transition-transform duration-200" onClick={() => onPlanetClick?.(planet.name)}>
                        <Image className="" src={planet.img} alt={planet.name} width={planet.size} height={planet.size} style={{ height: "auto", width: "auto" }}/>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );

}
