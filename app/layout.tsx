import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const inter = localFont({
  src: "./fonts/InterVF.ttf",
  variable: "--font-inter",
  weight: "100 200 300 400 500 600 700 800 900",
});

const spaceGroteskVF = localFont({
  src: "./fonts/SpaceGroteskVF.ttf",
  variable: "--font-space-grotesk",
  weight: "300 400 500 600 700",
  // variable -- will be chosen as variable
  // className will be default
});

export const metadata: Metadata = {
  // Useful for SEO
  title: "Code Query",
  description:
    "A collaborative platform for developers to ask and answer technical questions, share knowledge, and build a community around coding solutions.",
  icons: {
    icon: "/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${spaceGroteskVF.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
