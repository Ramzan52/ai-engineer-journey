export default function Navbar() {
    return (
        <nav className="flex flex-wrap gap-4 justify-between items-center px-4 md:px-8 py-5 border-b border-white/10 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
            <a href="/" className="group flex items-center gap-3">
                <span className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-purple-900/40 transition group-hover:scale-110">
                    <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-pink-500 blur opacity-60 group-hover:opacity-100 transition" />
                    <span className="relative font-black text-white">R</span>
                </span>

                <span className="flex flex-col leading-tight">
                    <span className="text-lg md:text-xl font-extrabold gradient-text">
                        Ramzan Arif
                    </span>
                    <span className="text-[11px] md:text-xs text-gray-400 tracking-widest uppercase">
                        AI Full Stack
                    </span>
                </span>
            </a>

            <div className="order-3 w-full md:order-2 md:w-auto flex justify-center md:justify-start gap-4 md:gap-6 text-sm md:text-base text-gray-300">
                <a href="/" className="hover:text-blue-400 transition">
                    Home
                </a>

                <a href="/about" className="hover:text-purple-400 transition">
                    About
                </a>

                <a href="/projects" className="hover:text-pink-400 transition">
                    Projects
                </a>

                <a href="/contact" className="hover:text-blue-400 transition">
                    Contact
                </a>
            </div>

            <a
                href="#ai-assistant"
                className="order-2 md:order-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 md:px-5 py-2 rounded-xl font-semibold text-sm hover:scale-105 transition"
            >
                Ask AI
            </a>
        </nav>
    );
}