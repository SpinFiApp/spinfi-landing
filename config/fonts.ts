import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontOrbitron = localFont({
  src: [
    {
      path: "../styles/Orbitron-VariableFont_wght.ttf",
      weight: "400..900",
      style: "normal",
    },
  ],
  variable: "--font-orbitron",
  display: "swap",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});
