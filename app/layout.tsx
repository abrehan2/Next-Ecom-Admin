// IMPORTS -
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// PACKAGES -
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next-Ecom-Bolt",
  description: "An ecommerce platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}

// 28:00
