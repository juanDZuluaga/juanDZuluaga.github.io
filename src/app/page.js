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
import MySolution from "@/components/MySolution";
// import Development from "@/components/development";

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
                     <h2 className="text-2xl md:text-4xl mb-8 text-center">
                        <strong className="strong-alt">Desarrollador Web </strong>{" "}
                        <strong className="cont_tex p-1 rounded shadow">
                           full Stack Developer
                        </strong>{" "}
                           <strong className="strong-alt">con experiencia en </strong><br />
                        <div className="ml-4">
                           <strong className="mt-5 text-center text-xl cont_tex p-1 rounded shadow md:w-1/3 w-1/2 mx-auto ">
                              plataformas fintech, healthtech y marketplace en entornos de producción
                           </strong>
                        </div>
                     </h2>
                     <p className="text-lgtext-shadow">
                        <strong>Bienvenido a mi portafolio. Aquí encontrarás una selección de mis proyectos y habilidades en desarrollo web.</strong>
                     </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 items-start">
                     <Slinder />
                  </div>
               </div>
            </section>
            <section className="lg:mb-20 mb-15">
               <MySolution />
               <div className="text-center">
                  <a href="/dashboard/design_system" className="col_bt_a rounded-xl inline-flex items-center justify-center p-1.5  transition" target="_blank" rel="noopener noreferrer">
                     Mi crecimiento como Desarrollador Full Stack
                  </a>
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
