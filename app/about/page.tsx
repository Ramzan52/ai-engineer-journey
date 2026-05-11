import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
          About Me
        </p>

        <h1 className="text-5xl font-bold mb-8">
          I’m building my career toward AI engineering and full-stack product development.
        </h1>

        <div className="space-y-6 text-gray-400 text-lg leading-8">
          <p>
            I have a computer science background and hands-on experience working
            with software systems, debugging issues, maintaining applications,
            and supporting real users.
          </p>

          <p>
            My current focus is building modern web applications using Next.js,
            React, TypeScript, backend APIs, PostgreSQL, Docker, Redis, and AI
            tools such as OpenAI APIs and LangChain.
          </p>

          <p>
            I’m especially interested in AI-powered SaaS products, automation
            workflows, business dashboards, chat interfaces, and data-driven
            systems that solve practical problems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="border border-gray-800 p-6 rounded-2xl">
            <h2 className="text-2xl font-bold mb-3">Frontend</h2>
            <p className="text-gray-400">
              Next.js, React, TypeScript, Tailwind CSS, responsive UI, reusable components.
            </p>
          </div>

          <div className="border border-gray-800 p-6 rounded-2xl">
            <h2 className="text-2xl font-bold mb-3">Backend</h2>
            <p className="text-gray-400">
              API routes, database integration, authentication concepts, server-side logic.
            </p>
          </div>

          <div className="border border-gray-800 p-6 rounded-2xl">
            <h2 className="text-2xl font-bold mb-3">AI & Data</h2>
            <p className="text-gray-400">
              AI chat apps, automation, PostgreSQL, Redis, LangChain, OpenAI APIs.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}