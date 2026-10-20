"use client";

import { motion } from "framer-motion";
import { Home, Search, BookOpen, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navItems = [
    { name: "Home", icon: Home, href: "/" },
    { name: "Read", icon: BookOpen, href: "/articles" },
    { name: "Contact", icon: Search, href: "/contact" }, // Using Search icon for now or switch to Mail? Let's use Mail if available or keep Search if it searches. But user asked for pages. Let's assume Search is Search.
    { name: "Studio", icon: Menu, href: "/about" },
];

export function Navbar() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
            <motion.div
                className="flex items-center gap-2 p-2 rounded-full border border-white/10 bg-black/50 backdrop-blur-xl shadow-2xl"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
            >
                {navItems.map((item, index) => (
                    <Link key={item.name} href={item.href}>
                        <motion.div
                            className="relative p-3 rounded-full flex items-center justify-center text-white/70 hover:text-lime-400 transition-colors"
                            onHoverStart={() => setHoveredIndex(index)}
                            onHoverEnd={() => setHoveredIndex(null)}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <item.icon size={24} strokeWidth={1.5} />
                            {hoveredIndex === index && (
                                <motion.span
                                    className="absolute -top-10 left-1/2 -translate-x-1/2 text-xs font-mono bg-white/10 px-2 py-1 rounded backdrop-blur-md border border-white/5 text-white"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                >
                                    {item.name}
                                </motion.span>
                            )}
                        </motion.div>
                    </Link>
                ))}
            </motion.div>
        </nav>
    );
}
