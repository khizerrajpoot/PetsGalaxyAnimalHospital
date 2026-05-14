import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackgroundGlow } from "@/components/background-glow";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import { EmergencyCallFab } from "@/components/emergency-call-fab";
import { AppToaster } from "@/components/app-toaster";
import { siteConfig } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s · ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  icons: {
    icon: siteConfig.brandLogoSrc,
    apple: siteConfig.brandLogoSrc,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <div className="relative min-h-screen">
          <BackgroundGlow />
          <div className="relative">
            <Navbar />
            <main className="mx-auto w-full max-w-6xl px-4 pb-20 pt-10">
              {children}
            </main>
            <Footer />
            <WhatsAppFab />
            <EmergencyCallFab />
            <AppToaster />
          </div>
        </div>
      </body>
    </html>
  );
}
