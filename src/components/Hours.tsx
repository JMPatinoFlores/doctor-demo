import { LuClock } from "react-icons/lu";

export function Hours() {
    return (
        <section className="py-10 px-4">
            <div className="container mx-auto max-w-md">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center justify-center mb-4">
                        <LuClock className="w-6 h-6 text-rose-700 mr-2" />
                        <h2 className="text-2xl font-serif text-rose-800">
                            Horarios de Atención
                        </h2>
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <span className="font-medium">
                                Lunes - Viernes:
                            </span>
                            <span>10:00 AM - 7:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">Sábado:</span>
                            <span>11:00 AM - 5:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">Domingo:</span>
                            <span>Cerrado</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
