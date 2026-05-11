// app/components/Navbar.tsx
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 border-b border-gray-800">
      <h1 className="text-xl font-bold">Ramzan.dev</h1>

      <div className="flex gap-6 text-gray-300">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/projects">Projects</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
}