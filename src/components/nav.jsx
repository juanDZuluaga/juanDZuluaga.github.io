"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownDataCiens, setIsDropdownDataCiens] = useState(false);

    return (
        <nav className="border-gray-200 shadow-lg">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                {/* Logo */}
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image className="" src="/logos/oscuro-jdz.png"  alt="Logo" width={56} height={32} />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap"><strong>JDZ</strong> Portafolio</span>
                </a>
                {/* Botón hamburguesa (mobile) */}
                <button onClick={() => setIsOpen(!isOpen)}
                    type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden 
                    hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-dropdown" aria-expanded={isOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"  strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>

                {/* Links */}
                <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-dropdown" >
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0  md:border-0 md:dark:b-zinc-900">
                        <li  className="relative group">
                            <a href="/" className="block py-2 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0  dark:text-white dark:hover:bg-gray-700  dark:hover:text-white md:dark:hover:bg-transparent">
                                <svg viewBox="0 0 140.45 136.97" fill="currentColor" strokeWidth="1.5"  className="w-8 h-8 transition-colors duration-200">
                                    <path d="M139.55,65.95c0.01,0.94-0.26,1.82-0.71,2.68c-0.9,1.71-2.73,2.61-4.74,2.56c-2.44-0.06-4.89-0.01-7.34-0.01
                                        c-0.48,0-0.96,0-1.6,0c0,0.66,0,1.18,0,1.7c0,14.86-0.01,29.72,0.01,44.58c0.01,5.52-1.89,10.24-6.11,13.79
                                        c-3.18,2.67-6.92,4.36-11.19,4.38c-11.56,0.05-23.12,0.03-34.68,0.04c-13.21,0-26.41,0.02-39.62-0.01
                                        c-8.28-0.02-14.9-4.5-17.39-12c-0.69-2.06-0.95-4.35-0.96-6.54c-0.08-14.73-0.04-29.45-0.04-44.18c0-0.52,0-1.05,0-1.69
                                        c-0.6-0.03-1.07-0.07-1.54-0.07c-2.45-0.01-4.89-0.08-7.34,0.02c-2.04,0.09-3.37-0.83-4.35-2.49c-1.74-2.93-1.59-6.53,0.73-9.06
                                        c2.39-2.61,5.03-4.99,7.56-7.48c0.22-0.22,0.44-0.44,0.66-0.66c2.99-2.99,5.96-5.99,8.96-8.96c8.39-8.32,16.79-16.65,25.2-24.94
                                        c3.67-3.61,7.31-7.26,11.1-10.73c6.65-6.1,16.78-7.07,24.51-2.36C82.59,5.67,84.39,7.1,86,8.64c3.76,3.59,7.37,7.35,11.07,11.01
                                        c6.69,6.63,13.4,13.24,20.1,19.86c5.98,5.9,11.95,11.79,17.94,17.68C138.6,60.37,139.66,64.07,139.55,65.95z M6.81,65.41
                                        c3.3,0,6.62,0,9.95,0c3.24,0,4.11,0.88,4.11,4.12c0,15.75-0.01,31.5,0.02,47.25c0,1.32,0.08,2.69,0.42,3.96
                                        c1.54,5.79,6,9.19,12.32,9.2c24.37,0.05,48.74,0.02,73.11,0.02c5.94,0,10.65-3.75,12.29-9.16c0.38-1.25,0.44-2.63,0.45-3.95
                                        c0.03-15.93,0.02-31.86,0.02-47.79c0-2.57,1.07-3.63,3.65-3.64c1.78-0.01,3.56,0,5.34,0c1.63,0,3.26,0,4.83,0
                                        c0.47-1.35-0.19-2.12-0.94-2.86c-5.07-4.98-10.15-9.95-15.2-14.95c-7.75-7.65-15.48-15.32-23.23-22.96
                                        c-4.39-4.34-8.79-8.67-13.23-12.96c-6.09-5.89-15.29-5.86-21.37,0.05c-5.16,5.02-10.28,10.07-15.4,15.13
                                        C32.84,37.84,21.78,48.84,10.7,59.83c-1.07,1.06-2.22,2.03-3.31,3.07C6.71,63.55,6.35,64.32,6.81,65.41z"/>
                                    <path d="M43.48,70.87c-2.09-0.02-4.18,0-6.26-0.09c-1.62-0.07-2.65-0.99-2.93-2.42c-0.23-1.17,0.38-2.47,1.52-2.97
                                        c0.59-0.26,1.29-0.37,1.93-0.37c3.95,0.01,12.91,0.05,16.86,0.13c1.82,0.04,2.95,0.83,3.28,2.17c0.48,1.95-0.91,3.59-3.15,3.61
                                        C52.66,70.96,45.57,70.9,43.48,70.87C43.48,70.87,43.48,70.87,43.48,70.87z"/>
                                    <path d="M31.84,67.84c-0.02,1.57-1.36,2.87-2.93,2.85c-1.56-0.02-2.9-1.37-2.89-2.91c0.01-1.55,1.36-2.84,2.95-2.82
                                        C30.58,64.97,31.86,66.26,31.84,67.84z"/>
                                    <path d="M69.44,71.16c-1.76-0.02-3.53,0.01-5.29-0.08c-1.37-0.07-2.24-0.98-2.47-2.41c-0.19-1.17,0.33-2.47,1.29-2.97
                                        c0.5-0.26,1.09-0.38,1.63-0.38c3.34,0,45.56-0.04,48.9,0.03c1.54,0.03,2.5,0.83,2.77,2.16c0.4,1.95-0.77,3.59-2.67,3.62
                                        C111.84,71.16,71.2,71.19,69.44,71.16C69.44,71.17,69.44,71.16,69.44,71.16z"
                                    />
                                </svg>
                                <span className="absolute top-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-sm px-2 py-1 rounded-lg whitespace-nowrap z-10">
                                    Inicio
                                </span>
                            </a>
                        </li>
                        {/* Dropdown */}
                        <li className="relative group" onMouseLeave={() => setIsDropdownDataCiens(false)}>
                            <button onClick={() => setIsDropdownDataCiens(!isDropdownDataCiens)}
                                className="flex items-center justify-between w-full py-2 text-gray-900 rounded-sm dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.0" stroke="currentColor" className="size-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z" />
                                </svg>
                                <span className="absolute top-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-sm px-2 py-1 rounded-lg whitespace-nowrap z-10">
                                    Data Solutions
                                </span>
                                <svg className="w-2.5 h-2.5 ms-2.5"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6" >
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"  d="m1 1 4 4 4-4" />
                                </svg>
                            </button>
                            {/* Dropdown menu */}
                            {isDropdownDataCiens && (
                                <div className="absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600"  onMouseLeave={() => setIsDropdownOpen(false)}>
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                                        <li>
                                            <a href="/dashboard/n8n_automatization" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-amber-500 dark:hover:text-white">
                                                Automatización (n8n)
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/dashboard/sql_advanced" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-amber-500 dark:hover:text-white">
                                                SQL Avanzado
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="py-1">
                                        <a href="/dashboard/business_intelligence" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-amber-500 dark:text-gray-200 dark:hover:text-white">
                                            Business Intelligence
                                        </a>
                                    </div>
                                </div>
                            )}
                        </li>
                        {/* Dropdown */}
                        <li className="relative group" onMouseLeave={() => setIsDropdownOpen(false)}>
                            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="flex items-center justify-between w-full py-2 text-gray-900 rounded-sm dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.0" stroke="currentColor" className="size-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                                </svg>

                                <span className="absolute top-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-sm px-2 py-1 rounded-lg whitespace-nowrap z-10">
                                    UI / UX 
                                </span>
                                <svg className="w-2.5 h-2.5 ms-2.5"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6" >
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"  d="m1 1 4 4 4-4" />
                                </svg>
                            </button>
                            {/* Dropdown menu */}
                            {isDropdownOpen && (
                                <div className="absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600"  onMouseLeave={() => setIsDropdownOpen(false)}>
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                                        <li>
                                            <a href="/dashboard/uiux" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-amber-500 dark:hover:text-white">
                                                Figma (Interfaces)
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/dashboard/Interactive_prototypes" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-amber-500 dark:hover:text-white">
                                                Algunos Desarrollos
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="py-1">
                                        <a href="/dashboard/design_system" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-amber-500 dark:text-gray-200 dark:hover:text-white">
                                            Designs - Diseños
                                        </a>
                                    </div>
                                </div>
                            )}
                        </li>
                        <li className="relative group">
                            <a href="/dashboard/about_me" className="block py-2 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 dark:hover:bg-gray-700  dark:hover:text-white md:dark:hover:bg-transparent" tooltip="Sobre mi" >
                                <svg viewBox="0 0 140.45 136.97" fill="currentColor" className="w-10 h-10 transition-colors duration-200">
                                    <path d="M70.19,140.8c-0.7-0.73-1.59-1.36-2.08-2.22c-4.87-8.43-9.74-16.86-14.48-25.37c-1.1-1.97-2.43-2.7-4.66-2.67
                                        c-8.02,0.11-16.05,0.06-24.07,0.04c-4.29-0.01-7.42-2.39-8.39-6.34c-0.2-0.82-0.23-1.71-0.23-2.56
                                        c-0.01-30.42-0.01-60.84-0.01-91.26c0-5.54,3.36-8.91,8.88-8.91c30.55-0.01,61.11-0.01,91.66,0c5.53,0,8.9,3.36,8.9,8.89
                                        c0.01,30.42,0.01,60.84,0,91.26c0,5.59-3.38,8.92-9.01,8.93c-8.16,0.01-16.32,0.03-24.48-0.02c-1.65-0.01-2.7,0.63-3.51,2.03
                                        c-4.9,8.57-9.83,17.13-14.79,25.66c-0.55,0.94-1.4,1.7-2.12,2.54C71.27,140.8,70.73,140.8,70.19,140.8z M70.91,132.55
                                        c0.38-0.61,0.65-1.02,0.89-1.45c4.07-7.06,8.18-14.1,12.2-21.19c1.86-3.28,4.55-4.82,8.33-4.79c8.02,0.07,16.05,0.02,24.07,0.02
                                        c3.05,0,3.88-0.82,3.88-3.87c0-30.15,0-60.29,0-90.44c0-3.06-0.82-3.88-3.86-3.88c-30.28,0-60.56,0-90.84,0
                                        c-3.04,0-3.85,0.82-3.85,3.88c0,30.15,0,60.29,0,90.44c0,3.04,0.82,3.87,3.88,3.87c8.16,0,16.32,0.01,24.48,0
                                        c3.44-0.01,6,1.46,7.7,4.44c0.34,0.59,0.68,1.18,1.01,1.77C62.79,118.35,66.79,125.35,70.91,132.55z"/>
                                    <path d="M98.18,90.04c2.01,0,3.86,0.04,5.71-0.04c0.31-0.01,0.67-0.53,0.87-0.89c0.13-0.24,0.03-0.62,0.03-0.94
                                        c0-21.26,0-42.53,0-63.79c0-1.91,0-1.92-1.94-1.92c-21.26,0-42.53,0-63.79,0c-1.81,0-1.81,0-1.81,1.77c0,8.52,0,17.05,0,25.57
                                        c0,2.12-0.88,3.31-2.49,3.44c-1.47,0.12-2.68-0.81-2.9-2.27c-0.07-0.45-0.06-0.9-0.06-1.36c0-8.57-0.01-17.14,0-25.71
                                        c0-4.6,2.32-6.89,6.96-6.9c21.54,0,43.07,0,64.61,0c4.53,0,6.87,2.33,6.87,6.85c0,21.58,0,43.16,0,64.74c0,4.55-2.3,6.89-6.84,6.89
                                        c-21.58,0.01-43.16,0.01-64.74,0c-4.55,0-6.86-2.32-6.86-6.86c-0.01-6.3-0.02-12.6,0.01-18.91c0.01-2.32,1.84-3.7,3.75-2.87
                                        c1.36,0.59,1.69,1.78,1.69,3.14c0,5.53,0,11.06,0,16.59c0,0.82-0.1,1.65,0.05,2.44c0.07,0.38,0.58,0.94,0.91,0.96
                                        c1.81,0.09,3.62,0.04,5.63,0.04c0-0.6-0.01-1.13,0-1.66c0.05-3.71-0.04-7.44,0.17-11.14c0.35-6.32,5.72-11.45,12.56-11.5
                                        c9.61-0.07,19.22-0.08,28.83,0c6.11,0.06,10.71,3.69,12.32,9.57c0.34,1.25,0.42,2.59,0.44,3.89
                                        C98.21,82.74,98.18,86.27,98.18,90.04z M49.28,89.96c14.53,0,28.92,0,43.3,0c0.06-0.21,0.14-0.34,0.14-0.46
                                        c0.01-3.58,0.05-7.16,0.01-10.74c-0.05-4.56-3.06-7.53-7.64-7.58c-2.27-0.02-4.53,0-6.8,0c-7.12,0-14.23-0.02-21.35,0.01
                                        c-4.58,0.02-7.57,3.01-7.65,7.58c-0.03,1.63,0,3.26,0,4.9C49.28,85.72,49.28,87.8,49.28,89.96z"/>
                                    <path d="M70.93,60.03c-8.25-0.03-14.91-6.74-14.9-15.01c0.01-8.29,6.8-15,15.12-14.94c8.23,0.06,14.88,6.83,14.83,15.09
                                        C85.93,53.41,79.2,60.06,70.93,60.03z M71,54.57c5.23,0,9.52-4.28,9.53-9.51c0.01-5.2-4.31-9.53-9.52-9.54
                                        c-5.2,0-9.53,4.32-9.53,9.53C61.48,50.29,65.77,54.57,71,54.57z"/>
                                    <path d="M37.18,59.66c0.02,1.41-1.22,2.69-2.64,2.74c-1.42,0.04-2.69-1.16-2.74-2.61C31.76,58.26,32.97,57,34.48,57
                                        C35.92,57,37.17,58.23,37.18,59.66z"/>
                                </svg>
                                <span className="absolute top-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-sm px-2 py-1 rounded-lg whitespace-nowrap z-10">
                                    Sobre mí
                                </span>
                            </a>
                            <span className="absolute top-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-sm px-2 py-1 rounded-lg whitespace-nowrap z-10">
                                Sobre mí
                            </span>
                        </li>
                        <li className="relative group">
                            <a href="/dashboard/contact_me" className="flex flex-col py-2 text-gray-900 rounded-sm md:hover:bg-transparent md:border-0 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                <svg viewBox="0 0 140.45 136.97" fill="currentColor" className="w-11 h-11 hover:text-amber-500transition-colors duration-200">
                                    <path d="M116.31,61.74c0-0.53,0-1.08,0-1.63c0-10.16,0.01-20.32-0.01-30.47c-0.01-3.85-1.44-7.11-4.29-9.7
                                    c-2.63-2.39-5.83-3.21-9.33-3.2c-20.32,0.01-40.64,0.01-60.96,0.01c-8.91,0-17.83-0.03-26.74,0.01C7.02,16.78,1.62,22.23,1.61,30.2
                                    C1.61,47.65,1.6,65.1,1.63,82.56c0,1.28,0.12,2.6,0.43,3.83c1.47,5.9,6.5,9.55,13.09,9.56c21.98,0.01,43.96,0,65.95,0
                                    c0.6,0,1.19,0,1.86,0c2.99,15.07,16.84,24.99,31.78,23.48c13.03-1.32,24.04-12.22,25.71-25.04
                                    C142.37,79.48,132.13,64.21,116.31,61.74z M111.32,110.1c-2.35,0-4.7,0.03-7.05-0.01c-4.43-0.08-6.99-4.21-4.99-8.16
                                    c2.55-5.01,6.76-7.66,12.35-7.63c5.53,0.03,9.67,2.72,12.17,7.69c1.89,3.75-0.55,7.87-4.73,8.06c-2.58,0.11-5.16,0.02-7.74,0.02
                                    C111.32,110.08,111.32,110.09,111.32,110.1z M122.51,81.85c0.02,6.19-4.87,11.08-11.06,11.07c-6.07-0.01-10.98-4.97-10.95-11.06
                                    c0.02-6.06,4.99-10.96,11.08-10.93C117.62,70.95,122.49,75.81,122.51,81.85z M112.08,29.16c0.06,10.62,0.03,21.24,0.03,31.85
                                    c0,0.09-0.05,0.18-0.12,0.43c-7.77,0-14.62,2.66-20.44,7.99c-4.67-4.29-9.25-8.5-13.99-12.86c11.19-10.29,22.31-20.52,33.74-31.04
                                    C111.61,26.92,112.07,28.04,112.08,29.16z M14.4,21.23c29.74-0.05,59.48-0.05,89.21,0c1.42,0,2.83,0.56,4.25,0.85
                                    c0.15,0.27,0.29,0.54,0.44,0.82c-0.46,0.22-1.01,0.34-1.37,0.67C94.97,34.51,83.04,45.48,71.1,56.44c-3.3,3.03-6.58,6.08-9.89,9.09
                                    c-1.83,1.67-2.65,1.65-4.49-0.05C41.38,51.39,26.06,37.3,10.73,23.2c-0.2-0.18-0.37-0.39-0.56-0.59c0-0.17,0-0.33,0-0.5
                                    C11.58,21.81,12.99,21.23,14.4,21.23z M5.91,83C5.86,65.23,5.87,47.46,5.91,29.69c0-1.26,0.37-2.52,0.58-3.78
                                    c0.15-0.03,0.31-0.06,0.46-0.09c11.1,10.2,22.19,20.41,33.44,30.75C29.22,66.84,18.13,77.04,6.7,87.55
                                    C6.39,85.83,5.92,84.42,5.91,83z M82.5,91.72c-0.6,0-1.09,0-1.58,0c-21.93,0-43.85,0.02-65.78-0.03c-1.7,0-3.4-0.49-5.1-0.76
                                    c-0.03-0.18-0.05-0.37-0.08-0.55c11.19-10.28,22.37-20.57,33.63-30.91c2.99,2.76,5.9,5.45,8.81,8.13c0.64,0.59,1.28,1.2,1.94,1.78
                                    c2.91,2.53,6.59,2.48,9.51-0.17c3.25-2.95,6.45-5.94,9.67-8.92c0.27-0.25,0.55-0.47,0.9-0.77c4.74,4.36,9.46,8.69,14.25,13.1
                                    C84.4,78.24,82.4,84.58,82.5,91.72z"/>
                                </svg>
                                <span className="absolute top-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-sm px-2 py-1 rounded-lg whitespace-nowrap z-10">
                                    Contactar
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
