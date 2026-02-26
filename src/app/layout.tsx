import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { MenuProvider } from "@/contexts/menuContext";
import MenuOverlay from "@/components/menu/MenuOverlay";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";

const neueHaasGrotesk = localFont({
  src: [
    {
      path: "../../public/fonts/nHaasGrotDisp/NeueHaasGrotDisp-55Roman.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/nHaasGrotDisp/NeueHaasGrotDisp-65Medium.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/nHaasGrotDisp/NeueHaasGrotDisp-75Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-neue-haas-grotesk-display-pro",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Faried Idris — Full Stack Developer & Designer",
    template: "%s | Faried Idris",
  },
  description:
    "Portfolio of Faried Idris, a full stack web developer and digital creative based in Australia. Specialising in Laravel, Next.js, and modern web experiences.",
  keywords: [
    "Faried Idris",
    "Full stack developer",
    "Full stack developer Perth",
    "Laravel developer",
    "Next.js developer",
    "Web developer Australia",
    "Freelance web designer",
    "Digital creative",
    "Web design portfolio",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Faried Idris — Full Stack Developer & Designer",
    description:
      "Portfolio of Faried Idris, a developer building fast, reliable web applications and digital experiences.",
    url: "https://fariedidris.com",
    siteName: "Faried Idris",
    images: [
      {
        url: "https://fariedidris.com/opengraph.webp",
        width: 1200,
        height: 630,
        alt: "Faried Idris Portfolio",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faried Idris — Full Stack Developer & Designer",
    description:
      "Building scalable web apps and brand experiences using Laravel, Next.js, and TypeScript.",
    images: ["https://fariedidris.com/opengraph.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${neueHaasGrotesk.variable} relative antialiased`}>
        <MenuProvider>
          <SmoothScroll>
            <MenuOverlay />
            <Navbar />
            {children}
            <Footer />
          </SmoothScroll>
        </MenuProvider>

        <CustomCursor />
      </body>
    </html>
  );
}
