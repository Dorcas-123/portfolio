import { Geist } from "next/font/google";
import "./globals.css";
import { profile } from "./data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// This is the title shown in the browser tab and in Google search results.
export const metadata = {
  title: `${profile.name} — Portfolio`,
  description: profile.intro,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body>{children}</body>
    </html>
  );
}
