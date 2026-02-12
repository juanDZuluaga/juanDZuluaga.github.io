"use client";

import { useState } from "react";
import Image from "next/image";

function AboutDevelopmentData() {
    const [Clicmony, setClicmony] = useState(false);

    return (
<div
  id="sobreMi"
  className=" bg-zinc-700/30 text-center h-screen overflow-y-scroll no-scrollbar p-4"
>
     <h1 className="text-2xl md:text-5xl col-span-full pt-10 pb-11">
                <strong className="ex_text rounded pl-5 pr-5">
                    Mi crecimiento como Desarrollador Full Stack
                </strong>
            </h1>
            {/*clicmony*/}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:p-4 p-0">
                {/* 1 */}
                <div className="lg:p-6 rounded-xl overflow-hidden">
                    <h2 className="p-alt_two text-xl md:text-2xl mb-4">
                        <strong>ClicMoney – Plataforma de solicitud de créditos</strong>
                    </h2>
                    <div className="text-lg md:text-xl leading-relaxed text-justify space-y-3">
                        <p><strong>Rol:</strong> Full Stack Developer</p>
                        <p><strong>Stack:</strong> Laravel 12, Vue.js, PostgreSQL, MySQL, JWT</p>
                        <p>
                            <strong>Problema:</strong> Las personas necesitaban comparar y solicitar
                            créditos de forma digital con múltiples bancos, evitando procesos manuales.
                        </p>
                        <div>
                            <strong>Mi solución:</strong>
                            <ul className="list-disc list-inside space-y-1 mt-2">
                                <li>Registro de usuarios</li>
                                <li>Simulación de crédito según perfil financiero</li>
                                <li>Envío de solicitudes a entidades bancarias</li>
                                <li>Gestión de los estados del crédito</li>
                            </ul>
                        </div>
                    </div>
                    <button onClick={() => setClicmony(!Clicmony)} className="mt-6 px-4 py-2 bg-amber-500 text-zinc-900 rounded shadow hover:bg-amber-600 transition">
                        {Clicmony ? "Ocultar más" : "Ver más"}
                    </button>
                    {Clicmony && (
                        <div className="mt-4 text-lg md:text-xl leading-relaxed text-justify space-y-3">
                            <div>
                                <strong>Lo que desarrollé específicamente:</strong>
                                <ul className="list-disc list-inside space-y-1 mt-2">
                                    <li>API REST completa</li>
                                    <li>Sistema de autenticación con JWT</li>
                                    <li>Validaciones backend</li>
                                    <li>Dashboard administrativo</li>
                                </ul>
                            </div>
                            <div>
                                <strong>Resultados:</strong>
                                <ul className="list-disc list-inside space-y-1 mt-2">
                                    <li>Reducción del tiempo de solicitud</li>
                                    <li>Automatización del proceso manual</li>
                                    <li>Soporte para múltiples entidades financieras</li>
                                </ul>
                            </div>
                            <p>
                                <strong>Demo</strong> · <strong>Código</strong> (si es público)
                            </p>
                        </div>
                    )}
                </div>

                {/* 2 */}
                <div className="lg:p-6 rounded-xl overflow-hidden">
                    <div className="mx-5 my-10 lg:m-0 lg:max-w-4xl">
                        <Image src="/images/disigns_web/diseno_1.png" alt="Diseño UI/UX del proyecto ClicMoney" width={1200} height={800} className="rounded-xl w-full mx-auto transition-transform duration-700 ease-out hover:scale-105" />
                        <div className="lg:mt-10 text-center">
                            <a href="https://derivacrm.com/clicmony/own/simulador/" className="col_bt_a p-4 rounded-full"  target="_blank" rel="noopener noreferrer" >
                                <strong>Ver</strong>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
            {/*practic*/}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:p-4 p-0">
                {/* 1 */}
                <div className="lg:p-6 rounded-xl overflow-hidden">
                    <div className="mx-5 my-10 lg:m-0 lg:max-w-4xl">
                        <Image src="/images/disigns_web/diseno_2.png" alt="Diseño UI/UX del proyecto ClicMoney" width={1200} height={800} className="rounded-xl w-full mx-auto transition-transform duration-700 ease-out hover:scale-105" />
                        <div className="lg:mt-10 text-center">
                            <a href="https://clientes.famicredito.com/credit_application" className="col_bt_a p-4 rounded-full"  target="_blank" rel="noopener noreferrer" >
                                <strong>Ver</strong>
                            </a>
                        </div>
                    </div>
                </div>
                {/* 2 */}
                <div className="lg:p-6 rounded-xl overflow-hidden">
                    <h2 className="p-alt_two text-xl md:text-2xl mb-4">
                        <strong>Fami crédito – Gestion solicitud creditos</strong>
                    </h2>
                    <div className="text-lg md:text-xl leading-relaxed text-justify space-y-3">
                        <p><strong>Rol:</strong> Full Stack Developer</p>
                        <p><strong>Stack:</strong> Laravel 12, Vue.js, PostgreSQL, MySQL, JWT</p>
                        <p>
                            <strong>Problema:</strong> Las personas necesitaban comparar y solicitar
                            créditos de forma digital con múltiples bancos, evitando procesos manuales.
                        </p>
                        <div>
                            <strong>Mi solución:</strong>
                            <ul className="list-disc list-inside space-y-1 mt-2">
                                <li>Registro de usuarios</li>
                                <li>Simulación de crédito según perfil financiero</li>
                                <li>Envío de solicitudes a entidades bancarias</li>
                                <li>Gestión de los estados del crédito</li>
                            </ul>
                        </div>
                    </div>
                    <button onClick={() => setClicmony(!Clicmony)} className="mt-6 px-4 py-2 bg-amber-500 text-zinc-900 rounded shadow hover:bg-amber-600 transition">
                        {Clicmony ? "Ocultar más" : "Ver más"}
                    </button>
                    {Clicmony && (
                        <div className="mt-4 text-lg md:text-xl leading-relaxed text-justify space-y-3">
                            <div>
                                <strong>Lo que desarrollé específicamente:</strong>
                                <ul className="list-disc list-inside space-y-1 mt-2">
                                    <li>API REST completa</li>
                                    <li>Sistema de autenticación con JWT</li>
                                    <li>Validaciones backend</li>
                                    <li>Dashboard administrativo</li>
                                </ul>
                            </div>
                            <div>
                                <strong>Resultados:</strong>
                                <ul className="list-disc list-inside space-y-1 mt-2">
                                    <li>Reducción del tiempo de solicitud</li>
                                    <li>Automatización del proceso manual</li>
                                    <li>Soporte para múltiples entidades financieras</li>
                                </ul>
                            </div>
                            <p>
                                <strong>Demo</strong> · <strong>Código</strong> (si es público)
                            </p>
                        </div>
                    )}
                </div>
            </div>
            <div className="lg:mt-10 mt-20 text-center lg:mb-15 mb-10">
                <a href="/dashboard/Interactive_prototypes" className="col_bt_a p-4 rounded-full"  target="_blank" rel="noopener noreferrer" >
                    <strong>Ver más</strong>
                </a>
            </div>
            
        </div>
    );
}

export default AboutDevelopmentData;
