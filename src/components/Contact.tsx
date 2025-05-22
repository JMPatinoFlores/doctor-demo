import { LuMessageCircle } from "react-icons/lu";

export function Contact() {
    const phoneNumber = "525652147607";
    const message = encodeURIComponent(
        "¡Hola! Me interesa conocer más sobre tus productos."
    );

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    return (
        <section className="py-10 px-4 bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-serif text-rose-800 mb-4">
                    ¿Te gusta lo que ves?
                </h2>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                    Envíanos un mensaje para conocer más sobre nuestros
                    productos, precios especiales o hacer un pedido
                    personalizado.
                </p>
                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-full shadow-lg transition-colors"
                >
                    <LuMessageCircle className="w-5 h-5 mr-2" />
                    Contáctanos por WhatsApp
                </a>
            </div>
        </section>
    );
}
