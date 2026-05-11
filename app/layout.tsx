import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Affirm. Account Brief by Jovan Marrero",
  description:
    "A custom research brief on Affirm, prepared for GitLab by Jovan Marrero.",
  authors: [{ name: "Jovan Marrero" }],
  openGraph: {
    title: "Affirm. Account Brief by Jovan Marrero",
    description:
      "A custom research brief on Affirm, prepared for GitLab by Jovan Marrero.",
    type: "article",
    siteName: "Affirm Account Brief",
  },
  twitter: {
    card: "summary_large_image",
    title: "Affirm. Account Brief by Jovan Marrero",
    description:
      "A custom research brief on Affirm, prepared for GitLab by Jovan Marrero.",
  },
  robots: { index: false, follow: false },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#141110",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="font-sans bg-cream text-ink antialiased grain">
        {children}
      </body>
    </html>
  );
}
