"use client";
import { useEffect, useState } from "react";
import SoundToggleButton from "@/components/SoundToggleButton";
import ThemeToggle from "@/components/ThemeToggle";
import BubbleCursor from "@/components/BubbleCursor";
import Navbar from "@/components/nav";
import DataFooter from "@/components/footer";
import FormContactMe from "@/components/contactMe";
import Image from "next/image";



export default function ContactMe() {
    const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("isMuted");
    if (stored) setIsMuted(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("isMuted", JSON.stringify(isMuted));
  }, [isMuted]);

  const toggleMute = () => setIsMuted((v) => !v);
   const slides = [
        { src: "/images/photo_data_view/diseno.png", text: "dashboards y reportes" },
        { src: "/images/photo_data_view/diseno_1.png", text: "análisis de datos en acción" },
        { src: "/images/photo_data_view/diseno_2.png", text: "ciencia de datos" },
        { src: "/images/photo_data_view/diseno_3.png", text: "Visualización de datos" },
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
     <div className="relative min-h-screen overflow-y-auto">

       {/* Navbar */}
        <Navbar />

        {/* Contenido */}
        <main className="flex flex-col  justify-start relative min-h-screen py-11 px-7">
            <section className="lg:mb-20 flex justify-center ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                    <div className="text-center lg:mt-20">
                        <div className="swing-hover flex flex-col text-center lg:w-full lg:max-w-2xl dark:bg-stone-700 text-zinc-50 p-8 md:p-12 rounded-xl shadow-lg">
                            <div>
                                <h1 className="text-2xl md:text-4xl font-bold text-center mb-5 ">
                                    Ciencia de Datos y Visualización
                                </h1>
                                <p className="p-alt">
                                    Trabajo con ciencia de datos aplicada para transformar información en insights claros y accionables. 
                                    Utilizo herramientas como<strong> PHP, Power BI, Metabase y SQL</strong> para procesar, analizar y 
                                    presentar datos de manera visual e interactiva.<br /> <br />
                                    Cada proyecto combina <strong> análisis, automatización y visualización</strong>, ermitiendo que 
                                    los equipos tomen decisiones rápidas y basadas en información real.
                                     Desde la extracción de datos hasta la generación de <strong> reportes y dashboards dinámicos,</strong>,
                                     busco que los resultados sean útiles, precisos y fáciles de interpretar
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* SLINDER*/}
                    <div className="relative w-full md:h-96">
                        <div className="lg:absolute lg:w-180 lg:h-125 h-115 flex items-center justify-center  overflow-hidden lg:m-10 lg:mt-20">
                            {/* Imagen */}
                            <div className="relative w-[500px] h-[800px] lg:mb-30">
                                <Image key={slides[currentIndex].src} src={slides[currentIndex].src} alt={slides[currentIndex].text} fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px" className={`object-contain rounded-xl shadow-lg absolute transition-opacity duration-[1500ms] ease-in-out ${fade ? "opacity-100" : "opacity-0"}`} />
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
                    </div>
                </div>
                
            </section>
         </main>
         <DataFooter />
         <div className="z-[100] flex flex-col items-end gap-4 pointer-events-auto fixed bottom-6 right-6">
            <SoundToggleButton isMuted={isMuted} toggleMute={toggleMute} />
            <ThemeToggle />
         </div>
         <BubbleCursor isMuted={isMuted} />
        </div>
  );
}