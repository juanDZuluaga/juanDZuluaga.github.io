"use client";
import { useEffect, useState } from "react";
import SolarSystem from "@/components/SolarSystem";
import BubbleCursor from "@/components/BubbleCursor";
import SoundToggleButton from "@/components/SoundToggleButton";
import ThemeToggle from "@/components/ThemeToggle";
import Navbar from "@/components/nav";
import FormContactMe from "@/components/contactMe";
import DataFooter from "@/components/footer";
import AboutMe from "@/components/section-two/AboutMe";
import Slinder from "@/components/selectSlinder";

export default function Home() {
   // opcional: persistir en localStorage
   const [isMuted, setIsMuted] = useState(() => {
      try {
         return JSON.parse(localStorage.getItem("isMuted")) ?? false;
      } catch {
         return false;
      }
   });

   useEffect(() => {
      try {
         localStorage.setItem("isMuted", JSON.stringify(isMuted));
      } catch {}
   }, [isMuted]);

   const toggleMute = () => setIsMuted((v) => !v);

   return (

      <div className="relative min-h-screen overflow-y-auto">
      {/* Fondo fijo */}
         <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
            <SolarSystem />
         </div>

      {/* Navbar */}
         <Navbar />

      {/* Contenido */}
         <main className="flex flex-col  justify-start relative min-h-screen py-11 px-7">
            <section className="lg:mb-20 ">
               <div className="grid grid-cols-1 md:grid-cols-2 items-start lg:gap-2">
                  <div className="">
                     <h1 className="text-7xl md:text-9xl font-bold mb-8 text-shadow"><strong>Juan <br /> David <br /> Zuluaga</strong></h1>
                     <h2 className="text-2xl md:text-4xl mb-8">
                        Desarrollador Web{" "}
                        <strong className="text-amber-500 bg-zinc-900 dark:text-zinc-900 dark:bg-amber-500 p-1 rounded shadow">
                           front-end
                        </strong>{" "}
                           full Stack y <br />
                        <strong className="block mt-4 text-center text-amber-500 bg-zinc-900 dark:text-zinc-900 dark:bg-amber-500 p-1 rounded shadow md:w-1/3 w-1/2 mx-auto">
                           Data Science
                        </strong>
                     </h2>
                     <p className="text-lgtext-shadow">Bienvenido a mi portafolio. Aquí encontrarás una selección de mis proyectos y habilidades en desarrollo web.</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 items-start">
                     <Slinder />
                  </div>
               </div>
            </section>
            <section className="lg:mb-30 mb-15">
               <AboutMe />
            </section>
            <section>
               <FormContactMe />
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
