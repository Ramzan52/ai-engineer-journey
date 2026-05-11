import Navbar from "../components/NavBar";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
          Contact
        </p>

        <h1 className="text-5xl font-bold mb-6">
          Let’s build something useful.
        </h1>

        <p className="text-gray-400 text-lg mb-10">
          Reach out for full-stack development, AI apps, automation workflows,
          backend systems, or collaboration opportunities.
        </p>

        <ContactForm />
      </section>

      <Footer />
    </main>
  );
}