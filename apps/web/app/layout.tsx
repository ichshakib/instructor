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
  title: "OnlineLMS — Join with your own online LMS Platform",
  description:
    "Build, launch, and scale your own e-learning academy with OnlineLMS. Join thousands of happy learners worldwide.",
  keywords: ["Online LMS", "Learning Management System", "E-learning", "Courses", "Education"],
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
