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
const rochester = localFont({
  src: "./fonts/Rochester-Regular.ttf",
  variable: "--font-rochester",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Instructor — Online Learning & LMS Platform",
  description:
    "Empower your educational journey with Instructor. Build, launch, and scale courses with modern interactive learning management tools.",
  keywords: ["Instructor", "Online LMS", "Learning Management System", "Education", "E-learning", "Courses"],
  icons: {
    icon: [
      {
        url: "/favicon_io/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon_io/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon_io/favicon.ico",
        sizes: "any",
      },
    ],
    apple: [
      {
        url: "/favicon_io/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "manifest",
        url: "/favicon_io/site.webmanifest",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        url: "/favicon_io/android-chrome-192x192.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        url: "/favicon_io/android-chrome-512x512.png",
      },
    ],
  },
  openGraph: {
    title: "Instructor — Online Learning & LMS Platform",
    description:
      "Empower your educational journey with Instructor. Build, launch, and scale courses with modern interactive learning management tools.",
    siteName: "Instructor",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Instructor — Online Learning & LMS Platform",
    description:
      "Empower your educational journey with Instructor. Build, launch, and scale courses with modern interactive learning management tools.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} ${rochester.variable} antialiased selection:bg-[#18191E] selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
