'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppContext } from "@/contexts";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>PicPay</title>
      </head>
      <body className={(cn("h-full antialiased scroll-smooth "))}>
        <AppContext>
          <Toaster richColors />
          {children}
        </AppContext>
      </body>
    </html>
  );
}
