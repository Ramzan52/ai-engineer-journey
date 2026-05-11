// app/page.tsx
import Navbar from "./components/NavBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="text-center py-28 px-6">
        <h1 className="text-6xl font-bold mb-4">
          AI Engineer & Full Stack Developer
        </h1>

        <p className="text-gray-400 text-xl max-w-2xl mx-auto">
          I build modern AI-powered applications using Next.js, automation tools,
          backend systems, and scalable architectures.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a className="bg-white text-black px-6 py-3 rounded-xl">
            View Projects
          </a>

          <a className="border border-white px-6 py-3 rounded-xl">
            Contact Me
          </a>
        </div>
      </section>
    </main>
  );
}