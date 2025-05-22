import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "D' Moda Accesorios | Tienda de Ropa y Accesorios",
    description:
        "Descubre los mejores accesorios y prendas de moda en D'Moda Accesorios. Calidad y estilo en cada detalle.",
    keywords: "accesorios de moda, ropa casual, tienda de ropa, moda femenina",
    openGraph: {
        title: "D' Moda Accesorios | Moda y Estilo",
        description:
            "Encuentra accesorios y ropa con estilo en nuestra tienda. Calidad y tendencia al mejor precio.",
        url: "https://dmoda-accesorios-demo.vercel.app/",
        siteName: "D' Moda Accesorios",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
