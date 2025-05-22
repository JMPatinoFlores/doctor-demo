"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export function ProductsShowcase() {
    const products = [
        {
            id: 1,
            name: "Aretes Dorados",
            image: "/aretes.jpg",
        },
        {
            id: 2,
            name: "Bolso café",
            image: "/bolso1.jpg",
        },
        {
            id: 3,
            name: "Vestido Rosa",
            image: "/vestidorosa.jpg",
        },
        {
            id: 4,
            name: "Collar de corazón",
            image: "/collar.jpg",
        },
        {
            id: 5,
            name: "Bolso de mano",
            image: "/bolso2.jpg",
        },
    ];

    return (
        <section className="py-10 px-4 bg-white">
            <div className="container mx-auto">
                <h2 className="text-2xl font-serif text-center text-rose-800 mb-6">
                    Nuestros Productos Destacados
                </h2>
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
                    {products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={300}
                                height={300}
                                className="w-full h-full object-cover"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
