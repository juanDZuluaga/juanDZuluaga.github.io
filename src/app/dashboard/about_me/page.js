"use client";
import { useState, useEffect } from "react";
import SoundToggleButton from "@/components/SoundToggleButton";
import ThemeToggle from "@/components/ThemeToggle";
import BubbleCursor from "@/components/BubbleCursor";
import Navbar from "@/components/nav";
import DataFooter from "@/components/footer";

export default function MyProfessionalProfile() {
    const [isMuted, setIsMuted] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem("isMuted");
        if (stored !== null) {
        setIsMuted(JSON.parse(stored));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("isMuted", JSON.stringify(isMuted));
    }, [isMuted]);

    return (
        <div>
        <Navbar />

        <main className="min-h-screen flex flex-col">
            <section className="grow flex justify-center">
            <div className=" text-center max-w-5xl w-full bg-stone-700 text-zinc-50 p-8 md:p-12 m-6 rounded-xl shadow-lg mb-20">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
                Perfil Profesional
                </h1>

                {/* PERFIL */}
                <section className="space-y-4 text-base md:text-lg leading-relaxed">
                <p>
                    <strong>Desarrollador Full Stack</strong> con experiencia en el
                    desarrollo de plataformas web en producción para sectores como
                    salud, fintech y servicios empresariales, participando en todas
                    las etapas del ciclo de vida del software: análisis, desarrollo,
                    integración y mantenimiento.
                </p>

                <p>
                    Formación universitaria con fuerte enfoque en{" "}
                    <strong>Python aplicado a Inteligencia Artificial</strong>,
                    adquiriendo bases sólidas en lógica, análisis de datos,
                    automatización y desarrollo de soluciones orientadas a la toma de
                    decisiones.
                </p>

                <p>
                    Especializado en el desarrollo de APIs, automatización de
                    procesos, generación de reportes contables y gestión de datos,
                    integrando frontend moderno con backend robusto.
                </p>

                <p>
                    <strong>Tecnologías clave:</strong> PHP (Laravel, CodeIgniter),
                    JavaScript (Vue.js, React, Next.js), Python (Flask, FastAPI,
                    fundamentos de IA y automatización), bases de datos SQL y NoSQL.
                </p>
                </section>

                {/* ESTUDIOS */}
                <section className="mt-12">
                <h2 className="text-2xl font-semibold mb-4">Estudios</h2>
                <ul className="space-y-3 list-disc list-inside">
                    <li>
                    <strong>Ingeniería de Sistemas</strong> – Universidad Uka
                    (CDMX, México) <br />
                    <span className="text-sm opacity-80">
                        En curso · Finalización estimada: diciembre 2026
                    </span>
                    </li>
                    <li>
                    <strong>Técnico en Programación de Software</strong> – CENSA
                    (Medellín, Colombia) <br />
                    <span className="text-sm opacity-80">
                        Febrero 2022 – Junio 2022 · Enfoque en desarrollo web
                    </span>
                    </li>
                </ul>
                </section>

                {/* CURSOS */}
                <section className="mt-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Cursos y Certificaciones
                </h2>

                <ul className="space-y-2 list-disc list-inside">
                    <li>Maestría en Análisis de Datos (Python, SQL, ML, Power BI) – Udemy</li>
                    <li>Fundamentos de IA para Data y Machine Learning – Platzi</li>
                    <li>Curso Básico de JavaScript – Platzi</li>
                    <li>Desarrollo móvil con JavaScript – Coursera</li>
                    <li>Three.js: 3D en el navegador – Udemy</li>
                    <li>Árboles y grafos – Coursera</li>
                    <li>Figma: Prototipado e Interfaces – Platzi</li>
                </ul>
                </section>

                {/* EXPERIENCIA */}
                <section className="mt-12">
                <h2 className="text-2xl font-semibold mb-6">
                    Experiencia Profesional
                </h2>

                <div className="space-y-6">
                    <div>
                    <h3 className="font-semibold">
                        We Are Making – Full Stack Developer (Remoto)
                    </h3>
                    <p className="text-sm opacity-80 mb-2">
                        Septiembre 2024 – Actualidad
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Desarrollo de módulos completos para la plataforma Practic.</li>
                        <li>Implementación de APIs y lógica de negocio.</li>
                        <li>Generación de reportes contables.</li>
                        <li>Automatización con Python (Flask, CustomTkinter).</li>
                        <li>Trabajo con Laravel, CodeIgniter, Vue.js, SQL y MongoDB.</li>
                        <li>Metodología Scrum y documentación técnica.</li>
                    </ul>
                    </div>

                    <div>
                    <h3 className="font-semibold">
                        14 TEAM – Desarrollador Full Stack (Remoto)
                    </h3>
                    <p className="text-sm opacity-80 mb-2">
                        Noviembre 2023 – Agosto 2024
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Plataformas para sector salud.</li>
                        <li>Proyectos fintech como click.money.</li>
                        <li>Mejora de UX para Banco Cajamorelia.</li>
                        <li>Diseño de prototipos en Figma.</li>
                        <li>Comunicación directa con clientes.</li>
                    </ul>
                    </div>
                </div>
                </section>
                <div className="flex justify-center mt-20">
                <a
                href="/pdf/hoja%20de%20vida%20Juan%20David%20Zuluaga.pdf"
                download
                className="inline-flex items-center gap-2 mt-6 px-6 py-3
                            bg-amber-500 text-zinc-900 font-semibold
                            rounded-lg shadow hover:bg-amber-600 transition"
                >
                    Descargar Hoja de Vida
                </a>

                </div>
            </div>
            </section>

            <DataFooter />

            {/* Floating buttons */}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end">
            <SoundToggleButton
                isMuted={isMuted}
                toggleMute={() => setIsMuted((v) => !v)}
            />
            <ThemeToggle />
            </div>

            <BubbleCursor isMuted={isMuted} />
        </main>
        </div>
    );
}
