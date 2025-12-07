import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageWrapper from "@/components/layout/PageWrapper";
import "@/styles/globals.css";
import "@/styles/variables.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "PPD Portfolio | Personal Professional Development",
  description: "A comprehensive portfolio showcasing my personal and professional development journey",
  keywords: ["portfolio", "professional development", "PPD", "personal growth"],
  authors: [{ name: "Nick Smid" }],
  openGraph: {
    title: "PPD Portfolio",
    description: "Personal Professional Development Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
