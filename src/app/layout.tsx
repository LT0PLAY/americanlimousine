// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { Inter, Bodoni_Moda } from "next/font/google";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontDisplay = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Limousinenservice München – American Limousine Service",
  description:
    "Exklusiver Limousinenservice in München. Stretchlimousinen & Chauffeurservice für Hochzeiten, Events, Business & Flughafen-Transfer.",

  metadataBase: new URL("https://americanlimousine.de"),

  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://americanlimousine.de",
    siteName: "American Limousine Service",
    title: "Limousinenservice München – Ihre Traum-Limousine",
    description:
      "Stretchlimousinen & exklusive Chauffeurservices für Hochzeiten, Events, Business & Flughafen-Transfers in München.",
    images: [
      {
        url: "/images/share/americanlimousine-share.jpg",
        width: 1200,
        height: 630,
        alt: "American Limousine Service München",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Limousinenservice München – American Limousine Service",
    description:
      "Exklusive Limousinen & Chauffeurservice in München für Events, Hochzeiten & Business.",
    images: ["/images/share/americanlimousine-share.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${fontSans.variable} ${fontDisplay.variable}`}>
      <body>
        <Navbar />
        <main style={{ paddingTop: 74, flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}