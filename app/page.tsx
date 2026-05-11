"use client";

import { useEffect } from "react";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import SkillCard from "./components/SkillCard";
import ProjectCard from "./components/ProjectCard";
import ChatBox from "./components/ChatBox";
import Footer from "./components/Footer";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "AI Engineering",
  "LangChain",
  "OpenAI APIs",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Redis",
  "Automation",
  "Backend APIs",
];

const projects = [
  {
    title: "Sunhub Platform",
    description:
      "Scalable modern platform development with frontend systems, backend integrations, and application architecture.",
    stack: ["Next.js", "React", "Full Stack"],
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Social27",
    description:
      "Interactive event and engagement platform development using modern frontend engineering practices.",
    stack: ["React", "UI Engineering", "Frontend"],
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Aquila360",
    description:
      "Business-oriented dashboard and workflow platform with data-driven architecture concepts.",
    stack: ["Dashboards", "Backend APIs", "Data Systems"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Home() {
useEffect(() => {
  if (window.location.hash) {
    window.history.replaceState(null, "", window.location.pathname);
    window.scrollTo({ top: 0, behavior: "instant" });
  }
}, [])
  return (
    <main className="min-h-screen text-white">
      <Navbar />
      <Hero />

      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-sm uppercase tracking-widest text-blue-400 mb-3">
          Technical Focus
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          Building intelligent, scalable and{" "}
          <span className="gradient-text">data-driven</span> applications.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <SkillCard key={skill} title={skill} />
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-sm uppercase tracking-widest text-purple-400 mb-3">
          Featured Work
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          Professional Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              stack={project.stack}
              image={project.image}
            />
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="text-sm uppercase tracking-widest text-pink-400 mb-3">
          AI Demo
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ask my <span className="gradient-text">AI Portfolio Agent</span>
        </h2>

        <p className="text-gray-300 mb-10 max-w-2xl leading-7">
          This assistant can answer questions about my projects, skills,
          experience, budget, contact details, and technical examples.
        </p>

        <ChatBox />
      </section>

      <Footer />
    </main>
  );
}