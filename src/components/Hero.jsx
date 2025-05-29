import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/Hero.css";

function Hero() {
    return (
        <section className="hero">
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                navigation
                pagination={{ clickable: true }}
                className="hero-slider"
            >
                <SwiperSlide>
                    <img src="/images/slide1.png" alt="Delicious Dish 1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/slide2.jpg" alt="Delicious Dish 2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/slide3.jpg" alt="Delicious Dish 3" />
                </SwiperSlide>
            </Swiper>

            <div className="hero-overlay">
                <div className="hero-text">
                    <h1>Welcome to <span>🍽️ Park Hotel & Restaurant</span></h1>
                    <p>Experience mouthwatering dishes in a warm, inviting atmosphere.</p>
                    <a href="#menu" className="hero-btn">Explore Menu</a>
                </div>
            </div>
        </section>
    );
}

export default Hero;
