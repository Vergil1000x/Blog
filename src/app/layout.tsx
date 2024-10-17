import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Roboto_Mono, Spectral } from "next/font/google";
import "./globals.css";

// Import Google Fonts
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"], // Corrected property
  variable: "--font-roboto-mono",
});
const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "700"], // Corrected property
  variable: "--font-spectral",
});

export const metadata: Metadata = {
  title: "Vergil1000's Blogs",
  description:
    "Unlock the full potential of Next.js with our SEO-friendly tutorials and resources. From beginner-friendly guides on server-side rendering and static site generation to advanced techniques for building high-performance web applications, our content covers everything you need to excel. Stay updated with the latest Next.js features, best practices, and community insights to enhance your development skills.",
  keywords:
    "Next.js, Next.js tutorials, web development, JavaScript frameworks, React, server-side rendering, static site generation, API routes, high-performance web apps, web development resources, Next.js best practices, Web Development, Vergil1000's Blogs",
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Vergil1000's Blogs",
    description:
      "Unlock the full potential of Next.js with our SEO-friendly tutorials and resources. From beginner-friendly guides on server-side rendering and static site generation to advanced techniques for building high-performance web applications, our content covers everything you need to excel. Stay updated with the latest Next.js features, best practices, and community insights to enhance your development skills.",
    url: "https://blog-by-vergil.vercel.app", // Replace with your actual URL
    siteName: "Vergil1000's Blogs",
    images: [
      {
        url: "https://blog-by-vergil.vercel.app/og-image.png", // Replace with your actual image URL
        width: 800,
        height: 600,
        alt: "Open Graph Image",
      },
    ],
    /*
    videos: [
      {
        url: "https://blog-by-vergil.vercel.app/intro-video.mp4", // Optional: add a video
        width: 1280,
        height: 720,
      },
    ],
    */
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@YourTwitterHandle",
    title: "Vergil1000's Blogs",
    description:
      "Unlock the full potential of Next.js with our SEO-friendly tutorials and resources. From beginner-friendly guides on server-side rendering and static site generation to advanced techniques for building high-performance web applications, our content covers everything you need to excel. Stay updated with the latest Next.js features, best practices, and community insights to enhance your development skills.",
    images: [
      "https://blog-by-vergil.vercel.app/og-image.png", // Replace with your actual Twitter image URL
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Do not export themeColor and viewport here

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoMono.variable} ${spectral.variable} antialiased flex flex-col justify-between items-center w-full min-h-screen h-full`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
