// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Ramzan Portfolio",
  description: "AI Engineer Portfolio",
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