"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function AboutPage() {
    return (
        <main className="relative min-h-screen bg-transparent">
            <Navbar />

            <section className="pt-48 px-6 md:px-12 lg:px-24 min-h-screen flex flex-col justify-between">
                <div>
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="font-mono text-lime-400 uppercase tracking-widest text-sm mb-4 block"
                    >
                        The Studio
                    </motion.span>
                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="text-[6vw] md:text-[5vw] leading-[1.1] font-bold font-sans tracking-tighter text-white max-w-4xl"
                    >
                        WE CRAFT DIGITAL ARTIFACTS FOR THE <span className="text-lime-400">POST-AESTHETIC</span> FUTURE.
                    </motion.h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-24">
                    <div className="space-y-8 text-xl text-white/70 leading-relaxed font-sans">
                        <p>
                            Velvet Horizon is not an agency. It is a collective of sentient interfaces and human curators working in unison. We believe that the screen is not a window, but a canvas for emotion.
                        </p>
                        <p>
                            Founded in 2026, we rejected the "Clean Web" movement in favor of raw, visceral, and high-fidelity interaction.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="border-t border-white/20 py-4 flex justify-between items-center">
                            <span className="font-mono">ESTABLISHED</span>
                            <span className="font-bold">2026</span>
                        </div>
                        <div className="border-t border-white/20 py-4 flex justify-between items-center">
                            <span className="font-mono">HQ</span>
                            <span className="font-bold">TOKYO / NULL ISLAND</span>
                        </div>
                        <div className="border-t border-white/20 py-4 flex justify-between items-center">
                            <span className="font-mono">AWARDS</span>
                            <span className="font-bold">42+</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="h-[50vh] bg-lime-400 text-black flex items-center justify-center overflow-hidden">
                <motion.div
                    initial={{ x: "-10%" }}
                    whileInView={{ x: "10%" }}
                    transition={{ duration: 10, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
                    className="text-[20vw] font-bold font-sans whitespace-nowrap"
                >
                    NO MEDIOCRE
                </motion.div>
            </section>

            <Footer />
        </main>
    );
}
