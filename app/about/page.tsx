// app/about/page.tsx
import Navbar from "../components/NavBar";

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="max-w-4xl mx-auto py-20 px-6">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>

        <p className="text-gray-400 text-lg leading-7">
          I am a Computer Science graduate with experience in full-stack development
          and AI-powered systems. I specialize in building modern web applications
          using Next.js, backend APIs, and automation tools.
        </p>

        <p className="text-gray-400 text-lg mt-4">
          My focus is now shifting towards AI Engineering — building intelligent
          systems, agents, and scalable SaaS products.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-gray-300">
          <div>✔ Next.js Development</div>
          <div>✔ AI Integrations</div>
          <div>✔ Backend APIs</div>
          <div>✔ Automation Systems</div>
        </div>
      </section>
    </main>
  );
}