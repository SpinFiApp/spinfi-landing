import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { fontSans, fontOrbitron } from "@/config/fonts";

export const metadata: Metadata = {
  title: {
    default: "SPINFI",
    template: `%s - SPINFI`,
  },
  description: "SPINFI - NFT Gacha Platform: Spin to win exclusive NFTs while depositors earn yield per spin",
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'manifest', url: '/site.webmanifest' },
    ],
  },
  manifest: '/site.webmanifest',
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
          "text-transparent font-sans antialiased",
          fontSans.variable,
          fontOrbitron.className,
        )}
      >
        {children}
      </body>
    </html>
  );
}
