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
                     ver más  sobre mi crecimiento como Desarrollador
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
         <div className="z-100 flex flex-col items-end gap-4 pointer-events-auto fixed bottom-6 right-6">
            <div className="mr-2 col_bt_a rounded-full p-1">
               <a href="https://github.com/juanDZuluaga" target="_blank" rel="noopener noreferrer">
                  <svg class="w-9 h-9" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                     < path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
                  </svg>
               </a>
            </div>
            <div className="mr-2 col_bt_a rounded-full p-1">
               <a href="https://www.linkedin.com/in/juan-david-zuluaga-49045b252/" target="_blank" rel="noopener noreferrer">
                  <svg class="w-9 h-9" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                     <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd"/>
                     <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                  </svg>
               </a>
            </div>
            <div className="mr-2 col_bt_a rounded-full p-1">
               <a class="" href="https://wa.me/573002965927" target="_blank" rel="noopener noreferrer" >
                  <svg class="w-9 h-9 rounded-full " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                     <path fill="currentColor" fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clip-rule="evenodd"/>
                     <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"/>
                  </svg>
               </a>
            </div>
            <div>
               <ThemeToggle />
            </div>
         </div>
         <BubbleCursor />
      </div>
   );
}
