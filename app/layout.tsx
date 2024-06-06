import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Projeto Next",
  description: "Meu primeiro projeto Next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="dark" lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="px-8 py-20 max-w-6xl mx-auto">
        {children}
        </main>
        </body>
    </html>
  );
}
