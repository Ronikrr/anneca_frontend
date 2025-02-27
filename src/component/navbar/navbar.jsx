import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const Navbar  = () => {
    const slides = [
        "Styled more than 100,000 Clients",
        "Seamless Video Shopping Experience",
        "New Arrivals: Shop the Latest Trends"
    ];

    return (
        <div style={{ backgroundColor: '#b20570', padding: '5px 0' }}>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{ 
                    delay: 5000, // 5 seconds delay between slides
                    disableOnInteraction: false 
                }}
                loop={true} // Infinite loop
                speed={1500} // Transition speed of 1.5 seconds
                style={{ textAlign: 'center', color: '#fff', fontSize: '1.2rem' }}
            >
                {slides.map((text, index) => (
                    <SwiperSlide key={index}>
                        <p style={{ marginBottom: '0', color:'#fff', }}>{text}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Navbar ;
