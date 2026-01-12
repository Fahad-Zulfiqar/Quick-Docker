import { Bell, Search } from "lucide-react";
import React from "react";
import dummyUser from "@/assets/images/dummy-user.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import medicalTeam from "@/assets/images/medical-team.png";
import texture from "@/assets/images/mobile-texture.svg";
import homeFilter from "@/assets/icons/homeFilter.svg";
import heroimage from "@/assets/images/hero-image.jpeg";
import NotificationBell from "../common/NotificationBell";
import { useNavigate } from "react-router-dom";
type Props = {};

const MobileHomeHero = ({ user }) => {
  const name = user ? user.name : "user";
  const navigate = useNavigate();
  console.log(name);
  return (
    <div>
      <div className="bg-gradient-to-b from-[#3F56A6] to-primaryColor text-white p-6 h-[300px] relative ">
        <div className="flex mb-4 items-center justify-between">
          <div className="flex gap-2">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white">
              <img src={dummyUser} alt="user" className="w-10 h-10 " />
            </div>
            <div>
              <p>Hello, Welcome</p>
              <p className="text-base font-bold">{name}</p>
            </div>
          </div>
          <NotificationBell onClickPath="/notifications" />
        </div>

        <div className="border flex justify-between items-center p-4 border-white rounded-2xl bg-transparent">
          <Search />
          <input
            type="text"
            placeholder="Search Doctor..."
            className="bg-transparent ml-2 w-full focus:outline-none"
          />
          <img src={homeFilter} />
        </div>

        <img
          src={texture}
          className="absolute top-0 right-0 pointer-events-none"
        />
      </div>
      <div className="-mt-28 px-4  relative z-20">
        <Swiper
          modules={[Pagination]}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} custom-bullet"></span>`;
            },
          }}
          spaceBetween={20}
          slidesPerView={1}
          className="rounded-md"
        >
          {[...Array(3)].map((_, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={heroimage}
                alt={`Slide ${idx + 1}`}
                className="w-full h-auto object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination */}
        <div className="flex items-center gap-1 justify-center mt-6 custom-pagination"></div>

        {/* Custom styles */}
        <style>{`
        .custom-bullet {
          display: inline-block;
          height: 4px;
          border-radius: 9999px;
          background-color: #253E9680; /* bg-primaryColor/50 */
          transition: width 0.3s ease, background-color 0.3s ease;
          width: 4px;
        }

        .swiper-pagination-bullet-active.custom-bullet {
          width: 16px; /* w-4 */
          background-color: #253E96; /* bg-primaryColor */
        }
      `}</style>
      </div>
    </div>
  );
};

export default MobileHomeHero;
