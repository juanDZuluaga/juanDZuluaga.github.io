"use client";
import { useState, useEffect  } from "react";
import Image from "next/image";
// import React from "react";
import TextReviews from "./TextReviews";
import Link from "next/link";


function AboutMe() {


    const [AboutMe, setAboutMe] = useState(null);
    return(
        <div id="sobreMi" className=" text-center">
            <h1 className="text-2xl md:text-5xl text-center col-span-full pt-10  pb-11">
                <strong className="text-gray-50 dark:text-zinc-900 p-1 bg-amber-500 rounded ">
                    Informacion sobre mi
                </strong>
            </h1>
            <div className="grid grid-cols-2 gap-4 p-4">
                <div className="flex justify-center items-center">
                    <p className="text-lg md:text-xl leading-relaxed text-justify">
                        <strong>Desarrollador Full Stack </strong> con experiencia en el desarrollo de plataformas web en producción para sectores como salud, 
                        fintech y servicios empresariales, participando en todas las etapas del ciclo de vida del software: análisis, desarrollo, 
                        integración y mantenimiento.<br/>
                        Formación universitaria con fuerte enfoque en Python aplicado a Inteligencia Artificial, lo que me permitió adquirir bases 
                        sólidas en lógica, análisis de datos, automatización y desarrollo de soluciones orientadas a la optimización de procesos y 
                        toma de decisiones.<br/>
                        Especializado en el desarrollo de APIs, automatización de procesos, generación de reportes contables y gestión de datos, 
                        integrando frontend moderno con backend robusto. Experiencia práctica trabajando con equipos multidisciplinarios bajo metodologías ágiles, con foco en construir soluciones escalables, mantenibles y alineadas a objetivos de negocio.
                        <br/><br/>
                        <strong>Tecnologías clave: </strong>
                        PHP (Laravel, CodeIgniter), JavaScript (Vue.js, React, Next.js), Python (Flask, FastAPI, fundamentos de IA y automatización), 
                        bases de datos SQL y NoSQL.
                    </p>
                </div>
                <div className=" p-6 rounded-lg  md:mt-10">
                    <TextReviews />
                    <button
                        onClick={() => setAboutMe(!AboutMe)}
                        className="mt-6 px-4 py-2 bg-amber-500 text-zinc-900 rounded shadow hover:bg-amber-600 transition"
                    >
                        {AboutMe ? "Ocultar Más" : "Ver Más"}
                    </button>
                    <a
                        href="/dashboard/about_me"
                        className="mt-6 inline-block px-4 py-2 bg-amber-500 text-zinc-900 rounded shadow hover:bg-amber-600 transition ml-10"
                    >
                        Ver perfil profesional
                    </a>
                    <div className={`mt-4 text-justify ${AboutMe ? "block" : "hidden"}`}>
                        <p className="text-lg md:text-xl leading-relaxed">
                            Mi objetivo es seguir creciendo como desarrollador Full Stack y como profesional en Inteligencia Artificial, aplicando mis habilidades técnicas y mi formación en IA para crear soluciones web innovadoras y eficientes que aporten valor real a los usuarios y negocios. Estoy abierto a nuevos desafíos profesionales donde pueda contribuir con mi experiencia y seguir aprendiendo en un entorno dinámico y colaborativo.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutMe;
