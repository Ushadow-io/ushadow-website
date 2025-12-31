import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ushadow - AI Orchestration Platform",
  description: "Service orchestration with Unodes, meeting recording, secret management, and easy add-on wizards. Deploy with Docker or Kubernetes.",
  keywords: ["AI", "orchestration", "Unodes", "Docker", "Kubernetes", "secrets", "recording", "Omi", "wearable"],
  authors: [{ name: "Ushadow Team" }],
  openGraph: {
    title: "Ushadow - AI Orchestration Platform",
    description: "Service orchestration, meeting recording, secrets, and easy add-ons.",
    url: "https://ushadow.io",
    siteName: "Ushadow",
    images: [
      {
        url: "/logo/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Ushadow Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ushadow - AI Orchestration Platform",
    description: "Service orchestration, meeting recording, secrets, and easy add-ons.",
    images: ["/logo/android-chrome-512x512.png"],
  },
  icons: {
    icon: [
      { url: "/logo/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/logo/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/logo/favicon.ico", sizes: "any" },
    ],
    apple: "/logo/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-surface-900 text-text-primary`}
      >
        <Header />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
