import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hours } from "@/components/Hours";
import { ServicesShowcase } from "@/components/ServicesShowcase";

export default function Home() {
    return (
        <div className="flex flex-col w-full min-h-screen">
            <Header />
            <main className="flex-1">
                <ServicesShowcase />
                <Hours />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
