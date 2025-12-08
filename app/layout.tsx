import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "WGSMS - Bulk SMS & USSD Solutions",
    template: "%s | WGSMS"
  },
  description: "Transform your business communication with cutting-edge SMS and USSD solutions. Reach customers through Bulk SMS, USSD, OTP Verification, and Developer APIs.",
  keywords: ["Bulk SMS", "USSD", "OTP Verification", "SMS Gateway", "Business Communication", "WGSMS"],
  authors: [{ name: "WGSMS" }],
  creator: "WGSMS",
  publisher: "WGSMS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://yourdomain.com'), // Replace with your actual domain
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com", // Replace with your actual domain
    siteName: "WGSMS",
    title: "WGSMS - Bulk SMS & USSD Solutions",
    description: "Transform your business communication with cutting-edge SMS and USSD solutions.",
    images: [
      {
        url: "/og-image.jpg", // Create an OG image for social sharing
        width: 1200,
        height: 630,
        alt: "WGSMS - Bulk SMS & USSD Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WGSMS - Bulk SMS & USSD Solutions",
    description: "Transform your business communication with cutting-edge SMS and USSD solutions.",
    images: ["/og-image.jpg"], // Same as OG image
    creator: "@wgsms", // Replace with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#2c73d2',
      },
    ],
  },
  manifest: "/manifest.json", // Optional: for PWA
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#2c73d2',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        suppressHydrationWarning={true}
        className="antialiased bg-white text-black"
      >
        {children}
      </body>
    </html>
  );
}