import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WGSMS",
  description: "Get connected with our SMS solution at ease.",
  icons: {
    icon: [
      { url: "/po1.png", sizes: "16x16", type: "image/png" },
      { url: "/po1.png", sizes: "32x32", type: "image/png" },
      { url: "/po1.png", sizes: "any" },
    ],
    apple: [{ url: "/po1.png", sizes: "180x180", type: "image/png" }],
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
        suppressHydrationWarning={true}
        className="bg-white text-black"
      >
        {children}
      </body>
    </html>
  );
}
