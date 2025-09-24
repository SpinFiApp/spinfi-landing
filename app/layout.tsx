import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { fontSans, fontOrbitron } from "@/config/fonts";

export const metadata: Metadata = {
  title: {
    default: "SPINFI",
    template: `%s - SPINFI`,
  },
  description: "SPINFI - Revolutionary crypto trading platform",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen text-transparent font-sans antialiased",
          fontSans.variable,
          fontOrbitron.className,
        )}
      >
        {children}
      </body>
    </html>
  );
}
