import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Instructor — Online Learning & LMS Platform",
  description:
    "Empower your educational journey with Instructor. Build, launch, and scale courses with modern interactive learning management tools.",
  keywords: ["Instructor", "Online LMS", "Learning Management System", "Education", "E-learning", "Courses"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-[#18191E] selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
