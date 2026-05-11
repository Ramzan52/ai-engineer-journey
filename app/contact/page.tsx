// app/contact/page.tsx
import Navbar from "../components/NavBar";

export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="max-w-xl mx-auto py-20 px-6">
        <h1 className="text-4xl font-bold mb-6">Contact Me</h1>

        <p className="text-gray-400 mb-8">
          Feel free to reach out for opportunities or collaboration.
        </p>

        <div className="space-y-4">
          <input
            placeholder="Your Name"
            className="w-full p-3 bg-gray-900 border border-gray-700 rounded-xl"
          />

          <input
            placeholder="Email"
            className="w-full p-3 bg-gray-900 border border-gray-700 rounded-xl"
          />

          <textarea
            placeholder="Message"
            className="w-full p-3 bg-gray-900 border border-gray-700 rounded-xl"
          />

          <button className="w-full bg-white text-black py-3 rounded-xl font-semibold">
            Send Message
          </button>
        </div>
      </section>
    </main>
  );
}