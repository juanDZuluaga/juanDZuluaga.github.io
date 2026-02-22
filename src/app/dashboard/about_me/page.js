"use client";
import { useState, useEffect } from "react";
import SoundToggleButton from "@/components/SoundToggleButton";
import ThemeToggle from "@/components/ThemeToggle";
import BubbleCursor from "@/components/BubbleCursor";
import Navbar from "@/components/nav";
import DataFooter from "@/components/footer";

export default function MyProfessionalProfile() {

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
        </main>
        </div>
    );
}
