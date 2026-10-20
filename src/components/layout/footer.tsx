"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Footer() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [-100, 0]);

    return (
        <footer ref={ref} className="relative w-full pt-32 pb-12 px-6 md:px-12 lg:px-24 bg-black overflow-hidden">
            <div className="border-t border-white/10 mb-24" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-32">
                <div className="col-span-2">
                    <h4 className="text-2xl font-bold mb-8">Newsletter</h4>
                    <div className="flex gap-4 border-b border-white/20 pb-4 max-w-md">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-transparent text-xl outline-none w-full placeholder:text-white/30"
                        />
                        <button className="text-lime-400 font-mono uppercase">Join</button>
                    </div>
                </div>

                <div>
                    <h4 className="text-sm font-mono text-white/50 mb-6 uppercase">Sitemap</h4>
                    <ul className="space-y-4 text-lg">
                        <li><a href="#" className="hover:text-lime-400 transition-colors">Home</a></li>
                        <li><a href="#" className="hover:text-lime-400 transition-colors">Articles</a></li>
                        <li><a href="#" className="hover:text-lime-400 transition-colors">About</a></li>
                        <li><a href="#" className="hover:text-lime-400 transition-colors">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-sm font-mono text-white/50 mb-6 uppercase">Socials</h4>
                    <ul className="space-y-4 text-lg">
                        <li><a href="#" className="hover:text-lime-400 transition-colors">Twitter / X</a></li>
                        <li><a href="#" className="hover:text-lime-400 transition-colors">Instagram</a></li>
                        <li><a href="#" className="hover:text-lime-400 transition-colors">LinkedIn</a></li>
                    </ul>
                </div>
            </div>

            <motion.div style={{ y }} className="text-[15vw] md:text-[18vw] leading-none font-bold text-center opacity-10 select-none">
                VELVET
            </motion.div>

            <div className="flex justify-between items-end mt-12 text-sm font-mono text-white/30 uppercase">
                <span>© 2026 Velvet Horizon. All rights reserved.</span>
                <span>Designed by AI</span>
            </div>
        </footer>
    );
}
