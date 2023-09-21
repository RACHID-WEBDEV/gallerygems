import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/components/Form/AuthProvider";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/Footer";

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
        <AuthProvider>
          <Navbar />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
