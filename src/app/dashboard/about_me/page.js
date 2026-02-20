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
            <div className=" max-w-5xl w-full bg-stone-700 text-zinc-50 p-8 md:p-12 m-6 rounded-xl shadow-lg mb-20">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
                Perfil Profesional
                </h1>
                {/* PERFIL */}
                <section className="space-y-4 text-base md:text-lg leading-relaxed">
                    <p className="p-alt">
                        Ingeniero de Sistemas en formación y <strong>Full Stack Developer </strong> con 
                        experiencia desarrollando soluciones digitales para plataformas fintech, 
                        healthtech y marketplace en entornos de producción. He participado en la 
                        construcción de funcionalidades end-to-end, desde la modernización de 
                        interfaces y experiencia de usuario hasta la implementación de 
                        lógica backend y optimización de bases de datos en PostgreSQL.
                    </p>
                    <p className="p-alt">
                        Cuento con experiencia trabajando con {" "}
                        <strong>grandes volúmenes de información </strong>,
                        (más de 95.000 usuarios y 300.000 créditos gestionados), desarrollando 
                        consultas SQL avanzadas, optimizando rendimiento mediante índices y 
                        automatizando procesos operativos con n8n (JavaScript + PostgreSQL), 
                        reduciendo tiempos manuales en operaciones críticas.
                    </p>
                    <p className="p-alt">
                        (más de 95.000 usuarios y 300.000 créditos gestionados), desarrollando
                        consultas SQL avanzadas, optimizando rendimiento mediante índices y 
                        automatizando procesos operativos con n8n (JavaScript + PostgreSQL),
                        reduciendo tiempos manuales en operaciones críticas.
                    </p>
                    <p className="p-alt">
                        <strong>Tecnologías clave:</strong> PHP (Laravel, CodeIgniter),
                        JavaScript (Vue.js, React, Next.js), Python (Flask, FastAPI,
                        fundamentos de IA y automatización), bases de datos SQL, NoSQL ypostgres.
                    </p>
                </section>
                {/* ESTUDIOS */}
                <section className="mt-12">
                    <h2 className="text-2xl font-semibold mb-4">Educación</h2>
                    <ul className="space-y-3 list-disc list-inside">
                        <li>
                            <strong>Ingeniería de Sistemas</strong> – Universidad Uka
                            (CDMX, México) <br />
                            <span className="text-sm opacity-80">
                                En curso · Finalización estimada: junio de  2026
                            </span>
                        </li>
                        <li>
                            <strong>Técnico en Programación de Software</strong> – CENSA
                            (Medellín, Colombia) <br />
                            <span className="text-sm opacity-80">
                                Febrero 2023 – Diciembre 2023 · Enfoque en desarrollo web
                            </span>
                        </li>
                    </ul>
                </section>

                {/* CURSOS */}
                <section className="mt-12">
                    <h2 className="text-2xl font-semibold mb-4">
                        Formación complementaria
                    </h2>
                    <ul className="space-y-3 list-disc list-inside">
                        <li>
                            <strong>Análisis de Datos y Business Intelligence: </strong>
                            <span className="text-sm opacity-80">
                                Python, SQL, Power BI, fundamentos de Machine Learning.
                            </span>
                        </li>
                        <li>
                            <strong>Desarrollo y Arquitectura Web: </strong>
                            <span className="text-sm opacity-80">
                                JavaScript, desarrollo frontend, estructuras de datos y patrones básicos.
                            </span>
                        </li>
                        <li>
                            <strong>Diseño y UX/UI: </strong>
                            <span className="text-sm opacity-80">
                                Prototipado en Figma y diseño de interfaces orientadas a producto.
                            </span>
                        </li>
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
                            Sep 2024 – Feb 2026
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>
                                Desarrollo de funcionalidades end-to-end para plataforma fintech de administración de créditos 
                                (95.000+ usuarios y más de 300.000 créditos gestionados).
                            </li>
                            <li>Construcción y optimización de consultas SQL avanzadas en PostgreSQL 
                                (JOIN múltiples, CTE, subqueries, agregaciones) para procesamiento de grandes volúmenes de datos.
                            </li>
                            <li>
                                Implementación y optimización de índices para mejora de rendimiento en consultas críticas 
                                de reporting y conciliación.
                            </li>
                            <li>
                                Implementación y optimización de índices para mejora de rendimiento en consultas 
                                críticas de reporting y conciliación.
                            </li>
                            <li>
                                Desarrollo de vistas UX para flujos transaccionales y módulos de reporting dentro del CRM.
                            </li>
                            <li>
                                Implementación de validaciones backend para detección de inconsistencias (pagos duplicados, 
                                montos incorrectos, estados inconsistentes). 
                            </li>
                            <li>
                                Implementación de validaciones backend para detección de inconsistencias (pagos duplicados,
                                montos incorrectos, estados inconsistentes). 
                            </li>
                            <li>
                                Corrección de bugs críticos en producción y mejora de estabilidad en módulos de reporting 
                                bajo entornos de alta presión.
                            </li>
                        </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold">
                                14 TEAM – Desarrollador Full Stack (Remoto)
                            </h3>
                            <p className="text-sm opacity-80 mb-2">
                                Diciembre 2023 – Agosto 2024
                            </p>
                            <ul className="list-disc list-inside space-y-1">
                                <li>
                                    Desarrollo de funcionalidades end-to-end para plataformas en sectores healthtech, 
                                    fintech y marketplace (modelo tipo Airbnb para mascotas).
                                </li>
                                <li>
                                    Implementación de lógica backend y desarrollo de interfaces frontend modernas orientadas a experiencia de usuario.
                                </li>
                                <li>
                                    Rediseño y modernización completa de interfaz CRM legacy, mejorando usabilidad y claridad en flujos operativos.
                                </li>
                                <li>
                                    Desarrollo de vistas UX para flujos de solicitud de créditos y adaptación a sistemas CRM.
                                </li>
                                <li>
                                    Participación en proyectos de administración de clínicas, implementando mejoras funcionales
                                    basadas en feedback directo de usuarios
                                </li>
                                <li>
                                    Levantamiento y traducción de requerimientos de negocio a soluciones técnicas viables. 
                                </li>
                                <li>
                                    Resolución de bugs críticos en producción y mejoras iterativas bajo metodologías ágiles.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <div className="flex justify-center mt-20">
                <a
                href="/pdf/JuanDavidZuluagaCV.pdf"
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
