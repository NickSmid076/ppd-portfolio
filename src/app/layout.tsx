import "../styles/globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "PPD Portfolio – International Business",
  description:
    "A portfolio showcasing personal and professional development, assignments, and internship reflections from Nick Smid's journey in finance, strategy, and technology.",
  keywords: [
    "PPD",
    "Portfolio",
    "Internship",
    "International Business",
    "Finance",
    "Strategy",
    "Technology",
    "Personal Development",
    "Professional Development",
    "Dialog Group",
    "STARR",
  ],
  authors: [{ name: "Nick Smid" }],
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"),
  openGraph: {
    title: "PPD Portfolio – Nick Smid",
    description:
      "A comprehensive portfolio documenting growth, learning, and achievements across assignments, logbook, and professional branding.",
    url: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
    type: "website",
    locale: "en_US",
    siteName: "PPD Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "PPD Portfolio – Nick Smid",
    description: "Personal and Professional Development Portfolio",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full bg-slate-950 text-slate-100" suppressHydrationWarning>
      <body
        className="min-h-full antialiased selection:bg-cyan-300/20 selection:text-cyan-200"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
