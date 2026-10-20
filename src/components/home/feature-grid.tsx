"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Article {
    id: string;
    category: string;
    title: string;
    description: string;
    image: string; // Color placeholder for now, or URL
    size: "large" | "medium" | "small";
}

const articles: Article[] = [
    {
        id: "01",
        category: "Philosophy",
        title: "The Death of Static Web",
        description: "Why motion is the new literacy in digital interface design.",
        image: "bg-slate-800",
        size: "large",
    },
    {
        id: "02",
        category: "Design",
        title: "Neon Shadows",
        description: "Case study on the void-black aesthetic trend.",
        image: "bg-stone-900",
        size: "medium",
    },
    {
        id: "03",
        category: "Code",
        title: "React 19 Server Components",
        description: "A deep dive into the new mental model.",
        image: "bg-neutral-800",
        size: "medium",
    },
    {
        id: "04",
        category: "Culture",
        title: "Analog Decay",
        description: "Bringing film grain and noise back to the browser.",
        image: "bg-zinc-900",
        size: "large",
    },
];

export function FeatureGrid() {
    return (
        <section className="min-h-screen w-full px-6 py-24 md:px-12 lg:px-24 bg-zinc-950/50">
            <div className="flex justify-between items-end mb-16">
                <h2 className="text-4xl md:text-6xl font-bold font-sans tracking-tight">
                    LATEST <br /> <span className="text-lime-400">ISSUES</span>
                </h2>
                <span className="text-sm font-mono text-white/50 hidden md:block">
                    SCROLL FOR MORE ↓
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
                {articles.map((article, index) => (
                    <motion.div
                        key={article.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className={`group relative flex flex-col justify-end p-8 border border-white/10 rounded-3xl overflow-hidden hover:border-lime-400/50 transition-colors ${article.size === "large" ? "lg:col-span-8 min-h-[60vh]" : "lg:col-span-4 min-h-[60vh] md:min-h-[40vh]"
                            } ${article.image}`}
                    >
                        {/* Visual Placeholder for Image */}
                        <div className={`absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity bg-gradient-to-br from-white/10 to-transparent`} />

                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-4">
                                <span className="px-3 py-1 text-xs font-mono border border-white/20 rounded-full bg-black/50 backdrop-blur-md">
                                    {article.category}
                                </span>
                                <span className="text-4xl font-bold font-sans opacity-20 group-hover:opacity-100 transition-opacity text-lime-400">
                                    {article.id}
                                </span>
                            </div>

                            <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-4 group-hover:text-lime-400 transition-colors">
                                {article.title}
                            </h3>
                            <p className="text-white/60 max-w-sm mb-6 text-lg">
                                {article.description}
                            </p>

                            <div className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider group-hover:gap-4 transition-all">
                                Read Article <ArrowUpRight size={16} />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
