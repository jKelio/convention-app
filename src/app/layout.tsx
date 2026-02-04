import type { Metadata, Viewport } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: "Recruiting App",
  description: "Bewerbungsprofile gemeinsam erstellen",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Recruiting App",
  },
};

export const viewport: Viewport = {
  themeColor: "#0070f3",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <link rel="manifest" href={`${basePath}/manifest.json`} />
        <link rel="apple-touch-icon" href={`${basePath}/icons/icon.svg`} />
      </head>
      <body className="bg-gray-50 min-h-screen">{children}</body>
    </html>
  );
}
