"use client";
import { useEffect, useState } from "react";
import SoundToggleButton from "@/components/SoundToggleButton";
import ThemeToggle from "@/components/ThemeToggle";
import BubbleCursor from "@/components/BubbleCursor";
import Navbar from "@/components/nav";
import DataFooter from "@/components/footer";
import Image from "next/image";


export default function UiUx() {

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