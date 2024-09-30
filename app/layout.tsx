import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gabriel Bustos",
  description: "Personal website of Gabriel Bustos - Portfolio and blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={urbanist.className}
      >
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  );
}
