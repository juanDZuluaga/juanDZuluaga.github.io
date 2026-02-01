"use client";
import { useState, useEffect } from "react";

/* =======================
BASE ICON (ESCALA UNIFICADA)
======================= */
function BaseIcon({ children, className = "" }) {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`w-[clamp(1.8rem,6cqw,3rem)] h-[clamp(1.8rem,6cqw,3rem)] ${className}`}
        >
        {children}
        </svg>
    );
}

/* =======================
ICONOS
======================= */
function GridIcon({ className = "" }) {
    return (
        <BaseIcon className={className}>
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5
            c.621 0 1.125.504 1.125 1.125v4.5
            c0 .621-.504 1.125-1.125 1.125h-4.5
            A1.125 1.125 0 0 1 3.75 9.375v-4.5Z
            M3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5
            c.621 0 1.125.504 1.125 1.125v4.5
            c0 .621-.504 1.125-1.125 1.125h-4.5
            A1.125 1.125 0 0 1 3.75 18.75v-4.125Z
            M13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5
            c.621 0 1.125.504 1.125 1.125v4.5
            c0 .621-.504 1.125-1.125 1.125h-4.5
            A1.125 1.125 0 0 1 13.5 9.375v-4.5Z
            M13.5 14.625c0-.621.504-1.125 1.125-1.125h4.5
            c.621 0 1.125.504 1.125 1.125v4.5
            c0 .621-.504 1.125-1.125 1.125h-4.5
            A1.125 1.125 0 0 1 13.5 18.75v-4.125Z"
        />
        </BaseIcon>
    );
}

function CodeIcon({ className = "" }) {
    return (
        <BaseIcon className={className}>
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 6.75 22.5 12l-5.25 5.25
            m-10.5 0L1.5 12l5.25-5.25
            m7.5-3-4.5 16.5"
        />
        </BaseIcon>
    );
}

function IaIcon({ className = "" }) {
    return (
        <BaseIcon className={className}>
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 4.5h10.5a2.25 2.25 0 0 1 2.25 2.25v10.5
            a2.25 2.25 0 0 1-2.25 2.25H6.75
            a2.25 2.25 0 0 1-2.25-2.25V6.75
            A2.25 2.25 0 0 1 6.75 4.5Z"
        />
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 9h6v6H9z"
        />
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 1.5v3M12 19.5v3M1.5 12h3M19.5 12h3"
        />
        </BaseIcon>
    );
}

/* =======================
COMPONENTE PRINCIPAL
======================= */
export default function TextReviews() {
    const quotes = [
        {
        icon: GridIcon,
        text: "Desarrollador Full Stack",
        highlight: " creando plataformas y servicios empresariales.",
        },
        {
        icon: CodeIcon,
        text: "Frontend moderno y backend",
        highlight: " robusto en entornos productivos.",
        },
        {
        icon: IaIcon,
        text: "Desarrollador IA",
        highlight: " machine learning y deep learning.",
        },
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % quotes.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const Icon = quotes[index].icon;

    return (
        <div className="flex items-center justify-center md:mt-10">
        <div className="card-bg-one space-y-4 text-center">
            <p className="text-[clamp(1rem,4cqw,2rem)] leading-relaxed">
            <span className="flex justify-center mb-4">
                {Icon && <Icon className="text-amber-500" />}
            </span>

            <strong className="text-amber-500">“ </strong>
            <strong className="text-amber-500 bg-zinc-900 dark:bg-amber-500 dark:text-zinc-900 px-2 rounded">
                {quotes[index].text}
            </strong>
            {quotes[index].highlight}
            <strong className="text-amber-500"> ”</strong>
            </p>
        </div>
        </div>
    );
}
