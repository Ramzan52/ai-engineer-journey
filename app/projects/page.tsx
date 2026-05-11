// app/projects/page.tsx
import Navbar from "../components/NavBar";

const projects = [
  {
    title: "AI Chat Assistant",
    desc: "Smart AI chatbot using OpenAI APIs",
  },
  {
    title: "Automation System",
    desc: "Workflow automation using n8n + APIs",
  },
  {
    title: "Full Stack Dashboard",
    desc: "Next.js + PostgreSQL admin panel",
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="max-w-5xl mx-auto py-20 px-6">
        <h1 className="text-4xl font-bold mb-10">Projects</h1>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="border border-gray-800 p-6 rounded-2xl"
            >
              <h2 className="text-xl font-semibold">{p.title}</h2>
              <p className="text-gray-400 mt-2">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}