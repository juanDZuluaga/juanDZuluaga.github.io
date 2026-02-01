"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const slides = [
    { src: "/images/6.Figma.png", text: "Figma" },
    { src: "/images/Diseno-Interfaces.png", text: "Diseño de Interfaces" },
    { src: "/images/Portafolio.png", text: "Portafolio" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
        setFade(true);
      }, 1500);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length])// dependencias correctas

  return (
    <div className="lg:absolute lg:w-180 lg:h-125 h-115 flex items-center justify-center  overflow-hidden lg:m-10 lg:mt-20">
      
      {/* Imagen */}
      <div className="relative w-[500px] h-[800px] lg:mb-30">
        <Image key={slides[currentIndex].src} src={slides[currentIndex].src} alt={slides[currentIndex].text} fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px" className={`object-contain rounded-2xl absolute transition-opacity duration-[1500ms] ease-in-out ${
            fade ? "opacity-100" : "opacity-0"
        }`} />
      </div>
      {/* Botones de navegación */}
      <button onClick={() => setCurrentIndex((prev) => prev === 0 ? slides.length - 1 : prev - 1 )} className="absolute left-10 bg-white/50 hover:bg-white text-black rounded-full px-4 py-2">
        <svg className="w-3 h-3 lg:w-9 lg:h-9 text-gray-800 dark:text-white  hover:text-zinc-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7"/>
      </svg>

      </button>
      <button onClick={() => setCurrentIndex((prev) => prev === slides.length - 1 ? 0 : prev + 1 )} className="absolute right-10 bg-white/50 hover:bg-white text-black rounded-full px-4 py-2">
        <svg className="w-3 h-3 lg:w-9 lg:h-9 text-gray-800 dark:text-white hover:text-zinc-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
        </svg>
      </button>
      {/* Texto */}
      <div className="absolute bottom-10 flex mb-10 hidden sm:flex">
        <a href="#" className={`z-10 bg-amber-500 top-0 right-12 rounded-4xl text-3xl font-bold tracking-wide text-center transition-opacity duration-[1500ms] ease-in-out ${
          fade ? "opacity-100" : "opacity-0"
        }`}>
          <p className="text-zinc-900 p-1.5">{slides[currentIndex].text}</p>
        </a>
      </div>
      {/* Indicadores (puntos) */}
      <div className="absolute bottom-10 flex space-x-3 hidden sm:flex">
        {slides.map((_, index) => (
          <div key={index} onClick={() => {
              if (index !== currentIndex) {
                setNextIndex(index);
                setFade(false);
                setTimeout(() => {
                  setCurrentIndex(index);
                  setNextIndex(null);
                  setFade(true);
                }, 1500);
              }
            }}
            className={`mt-20 w-4 h-4 rounded-full cursor-pointer transition-colors duration-300 ${
              currentIndex === index ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

