import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";

import heroimage from "@/assets/images/heroimage.png";
import heroimage2 from "@/assets/images/heroimage2.png";

const images = [
  { image: heroimage, alt: "hero-image1-slider" },
  { image: heroimage2, alt: "hero-image2-slider" },
];

export default function ImageSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="relative w-full h-full">
      {/* <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
        className="w-full h-full rounded-[20px]"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img.image}
              alt={img.alt}
              className="object-cover w-full h-full rounded-[20px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>

     
      <div className="absolute bottom-6 left-0 flex justify-start pl-2 space-x-1">
        <div className="w-4 h-2 bg-white/40 rounded-full"></div>
        <div
          className={`w-8 h-2 bg-white rounded-full transition-transform duration-500 ease-in-out ${
            currentSlide === 1 ? "translate-x-6" : ""
          }`}
        ></div>
        <div
          className={`w-4 h-2 bg-white/40 rounded-full transition-transform duration-500 ease-in-out ${
            currentSlide === 1 ? "-translate-x-8" : ""
          }`}
        ></div>
      </div> */}

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} custom-bullet"></span>`;
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        slidesPerView={1}
        className="rounded-md"
      >
        {images.map((image, idx) => (
          <SwiperSlide key={idx}>
            <img src={image.image} alt={`Slide ${idx + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination */}
      <div className="flex gap-1  mt-6 custom-pagination"></div>

      {/* Custom styles */}
      <style>{`
              .custom-bullet {
                display: inline-block;
                height: 8px;
                border-radius: 9999px;
                background-color: white; /* bg-primaryColor/50 */
                transition: width 0.3s ease, background-color 0.3s ease;
                width: 14px;
              }
      
              .swiper-pagination-bullet-active.custom-bullet {
                width: 40px; /* w-4 */
                background-color: white; /* bg-primaryColor */
              }
            `}</style>
    </div>
  );
}
