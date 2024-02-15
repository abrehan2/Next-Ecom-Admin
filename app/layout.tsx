// IMPORTS -
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Hydrate from "./partials/Hydrate";
import "./globals.css";
import { StoreModal } from "@/components/modals/store-modal";

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
        <body className={inter.className}>
          <Hydrate>
            <StoreModal />
            {children}
            </Hydrate>
        </body>
      </html>
    </ClerkProvider>
  );
}

// 52:25
