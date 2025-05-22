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
    title: "ClinicCare | Atención Médica General y Familiar",
    description:
        "En ClinicCare ofrecemos atención médica confiable, cercana y profesional. Agenda tu consulta hoy y cuida tu salud con nosotros.",
    keywords:
        "consulta médica, doctor general, salud familiar, atención médica, clínica médica, medicina general",
    openGraph: {
        title: "ClinicCare | Tu salud en buenas manos",
        description:
            "Atención médica general y familiar en ClinicCare. Calidad, confianza y cercanía en cada consulta.",
        url: "https://cliniccare-demo.vercel.app/",
        siteName: "ClinicCare",
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
