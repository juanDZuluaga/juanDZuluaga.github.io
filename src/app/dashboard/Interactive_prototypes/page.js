"use client";
import { useEffect, useState } from "react";
import SoundToggleButton from "@/components/SoundToggleButton";
import ThemeToggle from "@/components/ThemeToggle";
import BubbleCursor from "@/components/BubbleCursor";
import Navbar from "@/components/nav";
import DataFooter from "@/components/footer";

export default function PersonalProject() {
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
          <div className="flex flex-col lg:flex-row text-center justify-center lg:mt-30 gap-6 lg:ml-0 ml-10 lg:mr-0 mr-8 lg:mb-55 mt-20 mb-20">
                {/* Bloque 1 */}
                <div className="swing-hover flex flex-col text-center lg:w-full lg:max-w-2xl dark:bg-stone-700 text-zinc-50 p-8 md:p-12 rounded-xl shadow-lg">
                    <div>
                    <h1 className="text-2xl md:text-4xl font-bold text-center mb-5 ">
                        Prototipos Interactivos de Proyectos Reales
                    </h1>
                    <p className="p-alt">
                        Estos prototipos fueron diseñados en Figma y llevados a la web, trabajando directamente 
                        con las empresas para entender sus necesidades y optimizar cada flujo. 
                        Puedes explorar las pantallas y funcionalidades tal como funcionan en los proyectos reales.<br /> <br />
                        Cada interacción, botón y flujo refleja decisiones de UX/UI pensadas para la experiencia del usuario y 
                        los objetivos del negocio, mostrando cómo los diseños se convirtieron en productos funcionales y listos para producción.
                    </p>
                    </div>
                </div>

                {/* Bloque 2 */}
                <div className="text-center md:text-left flex flex-col justify-between ml-20 mr-10 lg:mr-0 lg:ml-0 lg:w-full lg:max-w-2xl">
                    <div className="mb-5 w-full">
                        <h1 className="text-2xl md:text-4xl font-bold text-center lg:mt-15">
                            Explorar flujos y experiencias reales
                        </h1>
                    </div>

                    <div className="m-2 floating-container lg:mt-10 mt-0 flex flex-wrap justify-center md:justify-start gap-2 ">
                        <a href="https://citopolis.com/terque/user/public/index.php" className="inline-flex items-center justify-center p-1.5 bg-amber-500 rounded-4xl hover:bg-amber-400 transition" target="_blank" rel="noopener noreferrer">
                            <span className="ml-2 text-zinc-900"><strong>Terque</strong></span>
                        </a>
                        <a href="https://clientes.famicredito.com/credit_application" className="inline-flex items-center justify-center p-1.5 bg-amber-500 rounded-4xl hover:bg-amber-400 transition">
                            <span className="ml-2 text-zinc-900"><strong>Solic. crédito Practic</strong></span>
                        </a>
                        <a href="https://www.practic.com.co/es/" className="inline-flex items-center justify-center p-1.5 bg-amber-500 rounded-4xl hover:bg-amber-400 transition">
                            <span className="ml-2 text-zinc-900"><strong>Practic</strong></span>
                        </a>
                        <a href="https://derivacrm.com/clicmony/own/simulador/" className="inline-flex items-center justify-center p-1.5 bg-amber-500 rounded-4xl hover:bg-amber-400 transition" target="_blank" rel="noopener noreferrer">
                            <span className="ml-2 text-zinc-900"><strong>CLICMONEY</strong></span>
                        </a>
                    </div>

                    <p className="text-lg text-shadow text-center  mt-4 md:text-left">
                        <strong>
                            Prototipos interactivos diseñados en Figma y llevados a la web, listos para explorar y 
                            experimentar flujos reales de proyectos recientes con empresas reales.
                        </strong>
                    </p>
                </div>
            </div>
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
