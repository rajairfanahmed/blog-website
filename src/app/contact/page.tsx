"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function ContactPage() {
    return (
        <main className="relative min-h-screen bg-transparent">
            <Navbar />

            <section className="pt-48 px-6 md:px-12 lg:px-24 min-h-screen">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                    <div>
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-6xl md:text-8xl font-bold font-sans tracking-tight mb-8"
                        >
                            LET'S <br /><span className="text-lime-400">COLLIDE</span>
                        </motion.h1>
                        <p className="text-xl text-white/60 max-w-md">
                            Have a project that requires elite visual dominance? Send a signal. Use the form or email us directly at <a href="mailto:signal@velvet.horizon" className="text-white underline decoration-lime-400">signal@velvet.horizon</a>
                        </p>
                    </div>

                    <form className="space-y-12">
                        <div className="relative group">
                            <input
                                type="text"
                                placeholder="NAME"
                                className="w-full bg-transparent border-b border-white/20 py-4 text-3xl font-bold outline-none placeholder:text-white/20 focus:border-lime-400 transition-colors"
                            />
                        </div>
                        <div className="relative group">
                            <input
                                type="email"
                                placeholder="EMAIL"
                                className="w-full bg-transparent border-b border-white/20 py-4 text-3xl font-bold outline-none placeholder:text-white/20 focus:border-lime-400 transition-colors"
                            />
                        </div>
                        <div className="relative group">
                            <textarea
                                placeholder="MESSAGE"
                                rows={4}
                                className="w-full bg-transparent border-b border-white/20 py-4 text-3xl font-bold outline-none placeholder:text-white/20 focus:border-lime-400 transition-colors resize-none"
                            />
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02, backgroundColor: "#a3e635", color: "#000" }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-6 border border-white text-white font-mono uppercase tracking-widest text-lg rounded-full transition-colors"
                        >
                            Transmit Signal
                        </motion.button>
                    </form>
                </div>
            </section>

            <Footer />
        </main>
    );
}
