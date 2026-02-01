"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="fixed bottom-6 right-6 px-4 py-2 {*mx-4 sm:mx-0 md:mx-4*} rounded-full border bg-gray-200 dark:bg-gray-800 dark:text-white shadow-lg hover:scale-110 transition" >
            {theme === "light" ? "🌙" : "☀️"}
        </button>
    );
}
