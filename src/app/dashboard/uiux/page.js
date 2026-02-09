"use client";
import { useEffect, useState } from "react";
import SoundToggleButton from "@/components/SoundToggleButton";
import ThemeToggle from "@/components/ThemeToggle";
import BubbleCursor from "@/components/BubbleCursor";
import Navbar from "@/components/nav";
import DataFooter from "@/components/footer";
import Image from "next/image";


export default function UiUx() {
    const [isMuted, setIsMuted] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem("isMuted");
        if (stored) setIsMuted(JSON.parse(stored));
    }, []);

      useEffect(() => {
    localStorage.setItem("isMuted", JSON.stringify(isMuted));
  }, [isMuted]);

     return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="min-h-screen flex flex-col">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-15 mt-25 ">
          Diseño de Interfaces (UI/UX con Figma)
        </h1>
        <div className="swing-hover ml-5 mr-5 lg:m-0 mb-9 lg:mb-20 cursor-pointer">
          <Image src="/images/photo_figma/diseno_1.png" alt="UI/UX" width={1200} height={800} className="rounded-xl w-full max-w-6xl mx-auto" />
        </div>
        {/* PERFIL-1 */}
        <section className="mb-10 lg:ml-15 lg:mr-15">
          {/*parte 1*/}
          <div className=" grid grid-cols-1 lg:grid-cols-2 lg:gap-10 items-center">
            <div className="card-jelly text-center lg:w-full lg:max-w-5xl lg:flex lg:justify-between dark:bg-stone-700  text-zinc-50 p-8 md:p-12 m-6 rounded-xl shadow-lg lg:mb-20">
              <div className="flex justify-between mb-6">
                <strong className="text-xl md:text-4xl dark:text-amber-500 text-zinc-700" style={{marginBottom: "-30px",marginTop: "-10px", position: "relative"}}>"</strong>
              </div>
              <p className="p-alt">
                <strong>Diseñé y desarrollé de forma individual</strong>
                las interfaces y flujos de usuario utilizando Figma,
                creando experiencias claras, intuitivas y orientadas a objetivos de negocio. 
                Me encargué de todo el proceso: desde el análisis de la necesidad hasta la construcción 
                de prototipos listos para ser implementados en frontend.
              </p>
              <div className="flex justify-end mb-6">
                <strong className="text-xl md:text-4xl dark:text-amber-500 text-zinc-700 lg:mt-25" style={{marginBottom: "-60px", position: "relative"}}>"</strong>
              </div>
            </div>
            {/*parte 2*/}
            <div className="ml-5 mr-5 lg:m-0 lg:mb-20 lg:max-w-2xl">
              <a href="https://www.figma.com/proto/jpWqxeowJQmQvmXGGmRLOY/Inventario-metroly?content-scaling=fixed&kind=proto&node-id=1-6764&page-id=0%3A1&scaling=min-zoom&starting-point-node-id=1%3A6764" target="_blank" rel="noopener noreferrer">
                <Image  src="/images/photo_figma/diseno_4.png" alt="UI/UX" width={1200} height={800} className="rounded-xl w-full max-w-6xl mx-auto transition-transform duration-700 ease-out hover:scale-105"  />
              </a>
            </div>
            
          </div>

          {/*PERFIL-2*/}
          <div className=" grid grid-cols-1 lg:grid-cols-2 lg:gap-10 items-center ml-12 mr-13">
            {/*parte 1*/}
            <div className="ml-5 mr-5 mt-10 mb-5 lg:mt-0 lg:m-0  lg:max-w-4xl ">
              <a href="https://www.figma.com/proto/edRD0oTnhPQDF5S2F6QkmU/Untitled?page-id=0%3A1&node-id=15-2773&viewport=-405%2C220%2C0.35&t=fkmNTuavT0wGS3V9-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=15%3A2773" target="_blank" rel="noopener noreferrer">
                <Image  src="/images/photo_figma/diseno_2.png" alt="UI/UX" width={1200} height={800} className="rounded-xl w-full max-w-6xl mx-auto transition-transform duration-700 ease-out hover:scale-105"  />
              </a>
            </div>
            <div className="card-jelly text-center lg:w-full lg:max-w-5xl lg:flex lg:justify-between dark:bg-stone-700  text-zinc-50 p-8 md:p-12 m-6 rounded-xl shadow-lg lg:mb-20">
              <div className="flex justify-between mb-6">
                <strong className="text-xl md:text-4xl dark:text-amber-500 text-zinc-700" style={{marginBottom: "-30px",marginTop: "-10px", position: "relative"}}>"</strong>
              </div>
              <p className="p-alt">
                Creé <strong>diagramas de flujo y user flows </strong>
                para definir recorridos de usuario, reducir fricción y asegurar una experiencia coherente en plataformas
                 de salud, fintech y servicios empresariales. Cada decisión de diseño estuvo enfocada en mejorar la 
                 usabilidad, optimizar procesos clave y facilitar la escalabilidad del producto.
              </p>
              <div className="flex justify-end mb-6">
                <strong className="text-xl md:text-4xl dark:text-amber-500 text-zinc-700 lg:mt-25" style={{marginBottom: "-60px", position: "relative"}}>"</strong>
              </div>
            </div>
          </div>

          {/*PERFIL-3*/}
          <div className=" grid grid-cols-1 lg:grid-cols-2 lg:gap-10 items-center ml-12 mr-13">
            {/*parte 1*/}
            
            <div className="card-jelly text-center lg:w-full lg:max-w-5xl lg:flex lg:justify-between dark:bg-stone-700  text-zinc-50 p-8 md:p-12 m-6 rounded-xl shadow-lg lg:mb-20">
              <div className="flex justify-between mb-6">
                <strong className="text-xl md:text-4xl dark:text-amber-500 text-zinc-700" style={{marginBottom: "-30px",marginTop: "-10px", position: "relative"}}>"</strong>
              </div>
              <p className="p-alt">
                Implementé principios de <strong>UX/UI</strong>, 
                diseño mobile-first y consistencia visual, asegurando que las interfaces no solo fueran atractivas, 
                sino también funcionales y alineadas con el desarrollo en producción.
              </p>
              <div className="flex justify-end mb-6">
                <strong className="text-xl md:text-4xl dark:text-amber-500 text-zinc-700 lg:mt-25" style={{marginBottom: "-60px", position: "relative"}}>"</strong>
              </div>
            </div>
            <div className="ml-5 mr-5 mb-5 lg:mt-0 lg:max-w-4xl ">
              <a href="https://www.figma.com/proto/2JSywr4c7X6jrFwbjql41M/NexaCheckerAndroid?page-id=0%3A1&node-id=11-3&viewport=844%2C1047%2C0.35&t=L0rKFTdMpsGTZTB3-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=11%3A2990" target="_blank" rel="noopener noreferrer">
                <Image  src="/images/photo_figma/diseno_5.png" alt="UI/UX" width={1200} height={800} className="rounded-xl w-full max-w-6xl mx-auto transition-transform duration-700 ease-out hover:scale-105"  />
              </a>
            </div>
          </div>

            <div className="flex text-center justify-center lg:mt-20">
              <div className="card-jelly flex text-center lg:w-full lg:max-w-2xl dark:bg-stone-700  text-zinc-50 p-8 md:p-12 m-6 rounded-xl shadow-lg lg:mb-20">
                <div>
                  <h1 className="text-2xl md:text-4xl font-bold text-center mb-5">
                    Lo que realicé en este proyecto
                  </h1><br></br>
                  <p>
                    Creé diagramas de flujo y user flows para definir la experiencia<br />
                    Creé diagramas de flujo y user flows para definir la experiencia<br />
                    Desarrollé wireframes y prototipos interactivos<br />
                    Apliqué principios de UX/UI orientados a negocio<br />
                    Preparé los diseños para una implementación directa en frontend
                  </p>
                </div>
              </div>
            </div>
        </section>
        <DataFooter />
      </main>
        {/* Floating buttons */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end">
          <SoundToggleButton isMuted={isMuted} toggleMute={() => setIsMuted((v) => !v)} />
          <ThemeToggle />
        </div>
        <BubbleCursor isMuted={isMuted} />
    </div>
  );
}