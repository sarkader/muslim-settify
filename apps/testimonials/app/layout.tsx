import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Muslim Settify — Training & Testimonials",
  description: "Training videos and testimonials from Muslim Settify",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteVariant = process.env.NEXT_PUBLIC_SITE_VARIANT || "default";
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
        data-variant={siteVariant}
      >
        {children}
      </body>
    </html>
  );
}
