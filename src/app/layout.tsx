import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://lecia-cheng.github.io";

export const metadata: Metadata = {
  title: "Lecia Cheng - Portfolio",
  description: "Portfolio website for Lecia Cheng - Engineer, Product Builder, Problem Solver",
  metadataBase: new URL(baseUrl),
  openGraph: {
    title: "Lecia Cheng - Portfolio",
    description: "Portfolio website for Lecia Cheng - Engineer, Product Builder, Problem Solver",
    url: baseUrl,
    siteName: "Lecia Cheng Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lecia Cheng Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lecia Cheng - Portfolio",
    description: "Portfolio website for Lecia Cheng - Engineer, Product Builder, Problem Solver",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
