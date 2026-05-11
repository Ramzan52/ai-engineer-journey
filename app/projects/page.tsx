import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Sunhub Platform",
    description:
      "Worked on scalable web platform features, frontend architecture, backend integrations, and modern application workflows.",
    stack: ["Next.js", "React", "TypeScript", "APIs", "Full Stack"],
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Social27",
    description:
      "Contributed to modern event and engagement platform development with interactive UI systems and scalable frontend components.",
    stack: ["React", "Frontend", "UI Engineering", "Component Architecture"],
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Aquila360",
    description:
      "Worked on data-oriented business platform concepts involving dashboards, workflows, backend communication, and scalable architecture.",
    stack: ["Dashboards", "Backend APIs", "Data Systems", "Full Stack"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "MERN Stack Applications",
    description:
      "Built full-stack MERN applications using MongoDB, Express.js, React, and Node.js with authentication, CRUD systems, and API integrations.",
    stack: ["MongoDB", "Express.js", "React", "Node.js", "REST APIs"],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "AI Portfolio Assistant",
    description:
      "Built an AI-style portfolio assistant using Next.js API routes, React state management, markdown rendering, and backend communication flow.",
    stack: ["Next.js", "TypeScript", "API Routes", "AI UI"],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Workflow Automation System",
    description:
      "Automation-focused architecture for integrating APIs, reducing repetitive tasks, and improving business workflows.",
    stack: ["Automation", "n8n", "APIs", "Backend Logic"],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen text-white">
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-sm uppercase tracking-widest text-purple-400 mb-3">
          Projects
        </p>

        <h1 className="text-5xl font-bold mb-6">
          Practical projects focused on{" "}
          <span className="gradient-text">AI, automation and data</span>.
        </h1>

        <p className="text-gray-300 max-w-3xl mb-12 leading-7">
          A collection of professional and learning projects focused on modern
          web development, scalable frontend systems, backend APIs, dashboards,
          AI interfaces, and automation workflows.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
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

      <Footer />
    </main>
  );
}