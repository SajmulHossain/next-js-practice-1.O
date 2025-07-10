import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/sharedComponents/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sajmul | Home",
  description:
    "This is Sajmul Hossain portfolio web app. Sajmul Hossain is a FullStack Web Developer. For Frontend he use Next.js and for backend he use express PostgreSql and MongoDB as database. He so passionate about developing software and programming",
  authors: [{ name: "Sajmul Hossain", url: "https://sajmul.com" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
