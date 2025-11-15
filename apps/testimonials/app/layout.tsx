import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muslim Settify — Training & Testimonials",
  description: "Training videos and testimonials from Muslim Settify",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

