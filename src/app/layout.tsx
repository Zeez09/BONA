import type { Metadata } from "next";
import { Geist, Geist_Mono, Just_Another_Hand, Dancing_Script } from "next/font/google";
import "./globals.css";
import { ShootingStars } from "./components/ui/shooting-stars";
import { StarsBackground } from "./components/ui/stars-background";
import Music from "./components/music";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const justAnotherHand = Just_Another_Hand({
  subsets: ["latin"],
  weight: ['400'],
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bona",
  icons: {
    icon: "/Screenshot (287).png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className={`${dancingScript.className} relative min-h-screen overflow-hidden bg-black`}>
        <Music/>
        <ShootingStars />
        <StarsBackground />
        
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
