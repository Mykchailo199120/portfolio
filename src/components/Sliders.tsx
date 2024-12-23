import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Масив фото
const photos = [
    "/images/9B698DCF-60F4-40D7-9304-5A0015BAEF4D.JPG",
    "/images/AFCF5B36-6E22-4581-AD28-964730098F7A.JPG",
    "/images/DCF85616-D9FA-40CA-A2C7-826FF0D623DD.JPG",
    "/images/F8AE9798-3118-4004-A208-C483323C2F12.JPG",
    "/images/6C15A266-D2BD-4F14-AA76-0E1ED2BFA3C3.JPG",
    "/images/25D48A95-BB90-479E-9133-2302AB3F2468.JPG",
    "/images/F8AE9798-3118-4004-A208-C483323C2F12.JPG",
    "/images/3B6EEA21-F787-4B56-AB3A-79602D406B55.JPG",
    "/images/9B616D42-F463-4506-A74E-014B631F2DBE.JPG",
    "/images/9B616D42-F463-4506-A74E-014B631F2DBE.JPG",
];

// Масив YouTube посилань
const videos = [
    "https://www.youtube.com/embed/video1_id",
    "https://www.youtube.com/embed/video2_id",
    "https://www.youtube.com/embed/video3_id",
];

const Sliders: React.FC = () => {
    return (
        <section className="min-h-screen">
            {/* Слайдер із фото */}
            <div className="py-12">
                <h2 className="font-Allura text-6xl font-light text-center mb-6">Photo</h2>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    spaceBetween={20}
                    slidesPerView={3}
                    loop
                    className="w-full h-[600px] object-cover rounded-lg shadow-m"
                >
                    {photos.map((photo, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={photo}
                                alt={`Slide ${index + 1}`}
                                className=""
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Слайдер із відео */}
            <div className="py-12">
                <h2 className="font-Allura text-5xl font-light text-center mb-6">Video</h2>
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop
                    className="max-w-6xl mx-auto"
                >
                    {videos.map((video, index) => (
                        <SwiperSlide key={index}>
                            <div className="aspect-w-16 aspect-h-9">
                                <iframe
                                    src={video}
                                    title={`Video ${index + 1}`}
                                    frameBorder="0"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                    className="w-full h-[600px] object-cover rounded-lg shadow-md"
                                ></iframe>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Sliders;
