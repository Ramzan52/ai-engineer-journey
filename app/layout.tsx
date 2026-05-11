import "./globals.css";

import "./globals.css";

export const metadata = {
  title: "Ramzan Arif | AI Engineer",
  
  description:
    "AI Engineer & Full Stack Developer building modern AI-powered applications using Next.js, LangChain, automation systems, and scalable backend technologies.",

  openGraph: {
    title: "Ramzan Arif | AI Engineer",
    
    description:
      "Building modern AI products with Next.js, AI SDKs, automation, and scalable backend systems.",

    url: "https://ramzanarif.vercel.app/",

    siteName: "Ramzan Portfolio",

    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Ramzan Arif | AI Engineer",

    description:
      "Modern AI Engineer portfolio built using Next.js and AI technologies.",

    images: ["/profile.jpg"],
  },
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