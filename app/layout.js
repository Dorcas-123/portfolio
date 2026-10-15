import { Fraunces, DM_Sans, Caveat } from "next/font/google";
import "./globals.css";
import { profile } from "./data";

// Headings
const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
});

// Body text
const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

// Handwritten accents
const hand = Caveat({
  variable: "--font-hand",
  subsets: ["latin"],
});

// This is the title shown in the browser tab and in Google search results.
export const metadata = {
  title: `${profile.name} | Portfolio`,
  description: profile.intro,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${hand.variable}`}>
      <body>{children}</body>
    </html>
  );
}
