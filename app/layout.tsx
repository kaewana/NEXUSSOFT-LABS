import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AIAssistant from "@/components/AIAssistant";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nexussoft Labs — Hybrid software studio",
  description: "A hybrid software studio for product teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <AIAssistant />
      </body>
    </html>
  );
}
