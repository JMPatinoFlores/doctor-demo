"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export function ServicesShowcase() {
    const services = [
        {
            id: 1,
            name: "Consultas Generales",
            image: "/consulta.jpg",
        },
        {
            id: 2,
            name: "Control De Presión",
            image: "/presion.jpg",
        },
        {
            id: 3,
            name: "Certificados Médicos",
            image: "/certificado.jpg",
        },
        {
            id: 4,
            name: "Vacunación",
            image: "/vacunacion.jpg",
        },
        {
            id: 5,
            name: "Atención En Línea",
            image: "/atencionenlinea.jpg",
        },
    ];

    return (
        <section className="py-10 px-4 bg-white">
            <div className="container mx-auto">
                <h2 className="text-2xl text-center font-semibold mb-2">
                    Nuestros Servicios Destacados
                </h2>
                <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    breakpoints={{
                        680: { slidesPerView: 1 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="mx-10"
                >
                    {services.map((service) => (
                        <SwiperSlide key={service.id}>
                            <div className="bg-blue-100 rounded-xl p-4">
                                <Image
                                    src={service.image}
                                    alt={service.name}
                                    width={300}
                                    height={300}
                                    className="w-full h-full object-cover mb-4"
                                />
                                <h3 className="font-semibold text-blue-700 text-center">
                                    {service.name}
                                </h3>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
