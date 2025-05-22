import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hours } from "@/components/Hours";
import { ProductsShowcase } from "@/components/ProductsShowcase";

export default function Home() {
    return (
        <div className="flex flex-col w-full min-h-screen bg-rose-50">
            <Header />
            <main className="flex-1">
                <ProductsShowcase />
                <Hours />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
