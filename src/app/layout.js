import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

export const metadata = {
  title: "SMM Panel - Bangladesh",
  description: "Best SMM Panel in Bangladesh - Fast, Safe & Growth in Social Media.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=switzer@400,500,600,700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} ${bricolage.variable} font-sans antialiased bg-[#FFF9F3] text-[#232323]`}>
        {children}
      </body>
    </html>
  );
}
