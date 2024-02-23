// IMPORTS -
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

// COMPONENTS -
import { StoreModal } from "@/components/modals/store-modal";
import Hydrate from "./partials/Hydrate";
import { Toaster } from "react-hot-toast";

// CODE STARTS HERE -
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
            <Toaster />
            <StoreModal />
            {children}
          </Hydrate>
        </body>
      </html>
    </ClerkProvider>
  );
}

// 3:34:35
// npx prisma generate - Allows to use all the query methods e.g find
// npx prisma db push - Allows to check if we have successfully setup the db connection string
// npx prisma migrate reset - resets the entire database
