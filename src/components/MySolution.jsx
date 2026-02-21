"use client";
import { useState } from "react";

function ProblemSolution() {
  const [formContactMe, setFormContactMe] = useState(null);

  return (
    <section className="flex justify-center px-4 py-12">
      <div className="max-w-4xl space-y-8 text-left bg-zinc-800 rounded-xl p-5">
        {/* Header */}
        <header className="space-y-2 text-center">
            <h2 className="text-2xl font-bold">
                un ejemplo de mi solución a un problema real en producción
            </h2>
            <h1 className="text-4xl font-extrabold text-amber-500">
                Plataforma de administración de créditos en producción
            </h1>
            <p className="p-alt">
                Full Stack Development · Product-Oriented
            </p>
        </header>

            {/* Contexto */}
            <div className="space-y-2">
                <h3 className="text-lg font-semibold col_bt_a">Contexto</h3>
                <p className="p-alt">
                    Plataforma fintech en producción enfocada en la administración de
                    créditos, conciliación de cartera y reporting financiero, utilizada
                    por más de <strong>95.000 usuarios</strong> y gestionando
                    <strong> 300.000+ créditos</strong> y
                    <strong> 1M+ planes de pago</strong>.
                </p>
            </div>

            {/* Problema */}
            <div className="space-y-2">
                <h3 className="text-lg font-semibold col_bt_a">Problema</h3>
                <p className="p-alt">
                    Los equipos operativos y contables dependían de procesos manuales
                    para la conciliación de cartera y generación de reportes, lo que
                    provocaba retrasos, errores y baja visibilidad del estado real de
                    los créditos.
                </p>
            </div>

            {/* Solución */}
            <div className="space-y-3">
                <h3 className="text-lg font-semibold col_bt_a">Solución</h3>
                <p className="p-alt">
                    Participé en el desarrollo de funcionalidades end-to-end,
                    combinando frontend, backend y modelado de datos:
                </p>
                <ul className="list-disc list-inside space-y-1 p-alt">
                    <li>
                        Construcción de consultas SQL avanzadas en PostgreSQL
                        (JOINs, CTEs, subqueries y agregaciones).
                    </li>
                    <li>
                        Modelado de vistas SQL para consolidación de información financiera.
                    </li>
                    <li>
                        Desarrollo de vistas UX para flujos transaccionales y dashboards
                        dentro del CRM.
                    </li>
                    <li>
                        Implementación de automatizaciones backend con n8n
                        (JavaScript + PostgreSQL), integrando APIs y procesamiento de CSV.
                    </li>
                    <li>
                    Optimización de rendimiento mediante índices y refactorización
                    de queries críticas.
                    </li>
                </ul>
            </div>

            {/* Impacto */}
            <div className="space-y-3">
                <h3 className="text-lg font-semibold col_bt_a">Impacto</h3>
                <ul className="space-y-1 p-alt">
                    <li>⏱️ Reducción aproximada de 5 horas diarias de trabajo manual.</li>
                    <li>📊 Mejora significativa en confiabilidad y velocidad de reportes.</li>
                    <li>🚀 Soporte estable para un sistema en producción de alto volumen.</li>
                    <li>🛠️ Resolución de bugs críticos bajo entornos de alta presión.</li>
                </ul>
            </div>

            {/* Tech Stack */}
            <div className="space-y-2">
                <h3 className="text-lg font-semibold col_bt_a">Tech Stack</h3>
                <ul className="grid grid-cols-2 gap-2 p-alt">
                    <li><strong>Frontend:</strong> Vue.js</li>
                    <li><strong>Backend:</strong> Node.js, JavaScript</li>
                    <li><strong>Database:</strong> PostgreSQL</li>
                    <li><strong>Automation:</strong> n8n</li>
                    <li><strong>BI & Reporting:</strong> Metabase</li>
                </ul>
            </div>

        </div>
    </section>
  );
}

export default ProblemSolution;