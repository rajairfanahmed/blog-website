"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex flex-col justify-center px-6 md:px-12 lg:px-24">
            <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl">
                <div className="overflow-hidden">
                    <motion.h1
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
                        className="text-[12vw] leading-[0.85] font-bold font-sans tracking-tighter text-white mix-blend-difference"
                    >
                        VELVET
                    </motion.h1>
                </div>
                <div className="overflow-hidden">
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
                        className="flex items-center gap-4"
                    >
                        <h1 className="text-[12vw] leading-[0.85] font-bold font-sans tracking-tighter text-lime-400 mix-blend-difference">
                            HORIZON
                        </h1>
                        <div className="hidden lg:block w-32 h-1 bg-white mt-8" />
                    </motion.div>

                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="mt-12 max-w-xl flex flex-col gap-6"
                >
                    <p className="text-xl md:text-2xl text-white/60 font-mono leading-relaxed text-balance">
                        Digital grandeur for the post-aesthetic era. We curate the bleeding edge of design, code, and culture.
                    </p>

                    <div className="flex gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-lime-400 transition-colors uppercase tracking-widest text-sm"
                        >
                            Explore Issues
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-colors uppercase tracking-widest text-sm"
                        >
                            Subscribe
                        </motion.button>
                    </div>
                </motion.div>
            </motion.div>

            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[50vw] h-full pointer-events-none opacity-20">
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-violet-600 blur-[150px] rounded-full animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-lime-500 blur-[100px] rounded-full mix-blend-overlay" />
            </div>
        </section>
    );
}
