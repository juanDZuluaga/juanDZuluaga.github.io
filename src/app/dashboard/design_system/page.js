"use client";
import { useEffect, useState } from "react";
import SoundToggleButton from "@/components/SoundToggleButton";
import ThemeToggle from "@/components/ThemeToggle";
import BubbleCursor from "@/components/BubbleCursor";
import Navbar from "@/components/nav";
import DataFooter from "@/components/footer";
import Image from "next/image";



export default function ThreeDi() {
    const [isMuted, setIsMuted] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem("isMuted");
        if (stored) setIsMuted(JSON.parse(stored));
    }, []);

      useEffect(() => {
    localStorage.setItem("isMuted", JSON.stringify(isMuted));
  }, [isMuted]);

     return (
    <div>
      <Navbar />

      <main className=" justify-center min-h-screen flex-col">
          <section>
            <div className="flex justify-center ">
              <div className=" text-center max-w-5xl bg-stone-700 text-zinc-50 p-8 md:p-12 m-6 rounded-xl shadow-lg lg:mb-20 mt-20  transition-transform duration-700 ease-out hover:scale-105">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
                Perfil Profesional
                </h1>
                {/* PERFIL */}
                <p className="p-alt">
                    Diseñé y desarrollé estas <strong>creaciones 3D </strong>combinando creatividad
                    y técnica, explorando modelos, animaciones y escenas interactivas que muestran 
                    cómo el diseño digital puede cobrar vida. Cada proyecto fue pensado para 
                    experimentar formas, movimiento y perspectiva, reflejando tanto 
                    funcionalidad como estética.< br />< br />
                    Estos trabajos son ejemplos de cómo aplico herramientas y conceptos de diseño 
                    3D para crear experiencias visuales únicas y llamativas, listas para ser
                    exploradas y apreciadas directamente en la web.
                </p>
              </div>
            </div>
            {/* Aquí podrías agregar tus proyectos 3D, por ejemplo: */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
              {/* Video 1 */}
              <div className="bg-stone-700 text-white p-6 text-center rounded-xl overflow-hidden">
                <div className="relative w-full aspect-video">
                  <video
                    className="rounded-xl w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                    controls
                  >
                    <source src="/videos/animacion_threejs.mp4" type="video/mp4" />
                    Tu navegador no soporta la etiqueta de video.
                  </video>
                </div>
              </div>

              {/* Imagen */}
              <div className="bg-stone-600 text-white p-6 text-center rounded-xl overflow-hidden">
                <div className="relative w-full aspect-video">
                  <Image
                    src="/images/3d/diseno_9.png"
                    alt="Proyecto Three.js"
                    fill
                    className="rounded-xl object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                </div>
              </div>

              {/* Video 2 */}
              <div className="bg-stone-500 text-white p-6 text-center rounded-xl overflow-hidden">
                <div className="relative w-full aspect-video">
                  <video
                    className="rounded-xl w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                    controls
                  >
                    <source src="/videos/dorado0001-0400.mp4" type="video/mp4" />
                    Tu navegador no soporta la etiqueta de video.
                  </video>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="flex justify-center ">
              <div className=" text-center max-w-5xl bg-stone-700 text-zinc-50 p-8 md:p-12 m-6 rounded-xl shadow-lg lg:mb-15 mt-30  transition-transform duration-700 ease-out hover:scale-105">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
                  Habilidades en Adobe Creative Suite
                </h1>
                {/* PERFIL */}
                <p className="p-alt">
                  Cuento con experiencia trabajando con <strong>Adobe Lightroom, Illustrator, Photoshop, After Effects y Premiere </strong>
                  combinando creatividad aplicando estas herramientas para crear contenido visual impactante y profesional.< br />< br />
                  Desde la edición de imágenes y retoque fotográfico en Lightroom y Photoshop,vectorial en Illustrator y la producción de 
                  videos y animaciones con After Effects y Premiere, combino creatividad y técnica para entregar resultados que destacan 
                  en <strong>diseño gráfico</strong>, multimedia y proyectos web.< br />< br />
                  Mis trabajos buscan <strong>siempre comunicar de manera clara y atractiva</strong>, respetando la identidad de marca y adaptándose a 
                  cada proyecto, desde campañas digitales hasta prototipos y presentaciones interactivas.< br />< br />
                </p>
              </div>
            </div>
            {/* imagnes DISING: */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
              <div className="bg-stone-700 text-white p-6 text-center rounded-xl overflow-hidden">
                <div className="relative w-full aspect-video">
                  <Image
                    src="/images/3d/PORTADA-DE-EL-COMPUTADOR.png"
                    alt="Proyecto Three.js"
                    fill
                    className="rounded-xl object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                </div>
              </div>
              {/* Imagen-2 */}
              <div className="bg-stone-600 text-white p-6 text-center rounded-xl overflow-hidden">
                <div className="relative w-full aspect-video">
                  <Image
                    src="/images/designs/afehgflñhk3435.png"
                    alt="Proyecto Three.js"
                    fill
                    className="rounded-xl object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                </div>
              </div>
              <div className="bg-stone-700 text-white p-6 text-center rounded-xl overflow-hidden">
                <div className="relative w-full aspect-video">
                  <Image
                    src="/images/designs/okpokpo.png"
                    alt="Proyecto Three.js"
                    fill
                    className="rounded-xl object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 lg:mb-25">
              {/* Imagen-2 */}
              <div className="bg-stone-700 text-white p-6 text-center rounded-xl col-span-2">
                  <div className="relative w-full h-60">
                    <Image
                      src="/images/3d/LOS-TRES-LOGOS.png"
                      alt="Proyecto Three.js"
                      fill
                      className="rounded-xl object-contain transition-transform duration-700 ease-out hover:scale-105"
                      style={{borderRadius:50}}
                    />
                  </div>
              </div>
              <div className="bg-stone-600 text-white p-6 text-center rounded-xl overflow-hidden col-span-1">
                <div className="relative w-full aspect-video">
                  <video
                    className="rounded-xl w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                    controls
                  >
                    <source src="/videos/SaveInsta.App - 2427244446306218037.mp4" type="video/mp4" />
                    Tu navegador no soporta la etiqueta de video.
                  </video>
                </div>
              </div>
            </div>
          </section>
          <DataFooter />
          {/* Floating buttons */}
          <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end">
          <SoundToggleButton isMuted={isMuted} toggleMute={() => setIsMuted((v) => !v)}/>
          <ThemeToggle />
          </div>

          <BubbleCursor isMuted={isMuted} />
      </main>
    </div>
  );
}