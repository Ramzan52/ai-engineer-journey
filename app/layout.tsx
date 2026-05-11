import "./globals.css";

export const metadata = {
  title: "Ramzan | AI Engineer & Full Stack Developer",
  description:
    "Portfolio of Ramzan - AI Engineer and Full Stack Developer focused on Next.js, AI apps, automation, backend systems, and data-driven products.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}