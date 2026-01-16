import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavigationProvider } from "./components/layout/NavigationProvider";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Messy Wonders - Creative Games for Kids",
    description: "A creative platform for kids, starting with games that help raise funds for schools in need.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
        >
        {/* Background Decor - Dot Pattern */}
        <div
            className="fixed inset-0 pointer-events-none opacity-[0.03] z-0"
            style={{
                backgroundImage: 'radial-gradient(#000 2px, transparent 2px)',
                backgroundSize: '40px 40px'
            }}
        />

        <NavigationProvider>
            <div className="relative z-10">
                <Header />
                <main className="pt-20 md:pt-24">
                    {children}
                </main>
                <Footer />
            </div>
        </NavigationProvider>
        </body>
        </html>
    );
}
