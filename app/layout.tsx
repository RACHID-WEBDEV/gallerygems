import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";

const space_grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gallery Gems | Your Gateway to Stunning Visuals",
  description: "Your Gateway to Stunning Visuals",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={space_grotesk.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
