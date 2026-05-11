export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col items-center justify-center">
      
      <h1 className="text-6xl font-bold mb-4">
        Ramzan's AI Engineer Journey
      </h1>

      <p className="text-gray-400 text-xl mb-8">
        Building AI products with Next.js
      </p>

      <div className="flex gap-4">
        <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
          View Projects
        </button>

        <button className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition">
          Contact Me
        </button>
      </div>

    </main>
  );
}