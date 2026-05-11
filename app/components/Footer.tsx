export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20 bg-black/30">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold gradient-text mb-3">
            Ramzan Arif
          </h3>

          <p className="text-gray-400 leading-7">
            AI-focused full-stack developer building modern web apps,
            automation systems, backend APIs, and data-driven products.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>

          <div className="space-y-2 text-gray-400">
            <p><a href="/projects" className="hover:text-blue-400">Projects</a></p>
            <p><a href="/contact" className="hover:text-purple-400">Contact</a></p>
            <p><a href="https://github.com/Ramzan52" className="hover:text-white">GitHub</a></p>
            <p><a href="https://www.linkedin.com/in/ramzan-arif/" className="hover:text-white">LinkedIn</a></p>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact</h4>

          <div className="space-y-2 text-gray-400">
            <p>rarifkhalil123@gmail.com</p>
            <p>03314115573</p>
            <p>Lahore, Pakistan</p>
            <p>$20 – $30/hour</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 text-center py-5 text-gray-500">
        © 2026 Ramzan.dev — AI Engineer & Full Stack Developer
      </div>
    </footer>
  );
}