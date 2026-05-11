"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative overflow-hidden max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-32">
            <div className="absolute inset-0 -z-10 opacity-40">
                <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-600 rounded-full blur-3xl" />
            </div>

            <div className="grid lg:grid-cols-2 gap-14 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-2 rounded-full text-sm text-blue-300 mb-6">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        Available for AI & Full Stack Projects
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-6">
                        Building <span className="gradient-text">AI-powered</span> web apps
                        and data-driven systems.
                    </h1>

                    <p className="text-gray-300 text-lg md:text-xl leading-8 max-w-3xl">
                        I build modern full-stack products using Next.js, MERN stack,
                        backend APIs, automation workflows, PostgreSQL, Redis, and AI-style
                        interfaces.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-10">
                        <a
                            href="/projects"
                            className="text-center bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition shadow-lg shadow-purple-900/30"
                        >
                            View Projects
                        </a>

                        <a
                            href="#ai-assistant"
                            className="text-center border border-white/20 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition"
                        >
                            Ask My AI Agent
                        </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 max-w-xl">
                        {[
                            ["3+", "Projects"],
                            ["$20-$30", "Hourly Rate"],
                            ["Remote", "Available"],
                        ].map(([value, label]) => (
                            <div key={label} className="glass-card rounded-2xl p-4">
                                <p className="text-2xl font-bold gradient-text">{value}</p>
                                <p className="text-sm text-gray-400">{label}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    className="relative"
                >
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-[2rem] blur-2xl opacity-40" />

                    <div className="relative glass-card rounded-[2rem] p-4 md:p-6">
                        <Image
                            src="/profile.jpg"
                            alt="Ramzan Arif"
                            width={500}
                            height={500}
                            className="rounded-3xl object-cover w-full h-[300px] md:h-[420px]"
                        />

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">
                            {["AI", "Full Stack", "Data"].map((item) => (
                                <div
                                    key={item}
                                    className="bg-black/40 border border-white/10 rounded-2xl p-4 text-center"
                                >
                                    <p className="font-bold gradient-text">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}