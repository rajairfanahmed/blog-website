"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ArrowUpRight } from "lucide-react";

export default function ArticlesPage() {
    const articles = Array.from({ length: 9 }).map((_, i) => ({
        id: i + 1,
        title: ["The Death of Static Web", "Neon Shadows", "React 19 Server Components", "Analog Decay", "Void CSS", "Hyper-Typography", "Framer Physics", "Semantic AI", "Future Interfaces"][i],
        category: ["Philosophy", "Design", "Code", "Culture", "Design", "Design", "Code", "AI", "UX"][i],
        date: "OCT 2026",
    }));

    return (
        <main className="relative min-h-screen bg-transparent pb-32">
            <Navbar />

            <section className="pt-48 px-6 md:px-12 lg:px-24">
                <motion.h1
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                    className="text-[10vw] leading-[0.85] font-bold font-sans tracking-tighter text-white mb-24"
                >
                    ARCHIVE
                </motion.h1>

                <div className="grid grid-cols-1 gap-0 border-t border-white/10">
                    {articles.map((article, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="group relative flex flex-col md:flex-row md:items-center justify-between py-12 border-b border-white/10 hover:bg-white/5 transition-colors px-4 -mx-4"
                        >
                            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                                <span className="font-mono text-lime-400 min-w-[3ch]">0{article.id}</span>
                                <h2 className="text-3xl md:text-5xl font-bold font-sans tracking-tight group-hover:translate-x-4 transition-transform duration-300">
                                    {article.title}
                                </h2>
                            </div>

                            <div className="flex items-center gap-8 mt-4 md:mt-0">
                                <span className="px-3 py-1 border border-white/20 rounded-full text-xs font-mono uppercase text-white/60">
                                    {article.category}
                                </span>
                                <ArrowUpRight className="text-lime-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
