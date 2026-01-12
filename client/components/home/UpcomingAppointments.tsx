import { Calendar, Clock, MoreVertical } from "lucide-react";
import React from "react";
import Rating from "../ui/Rating";
import drProfile from "@/assets/images/dummy-dr.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";

const dummyAppointments = [
  {
    id: "1",
    drProfile: drProfile,
    drName: "Sarah Ahmad",
    drSpecialization: "Pediatrician",
    rating: "4.8",
    appointmentDate: "8-11-2024",
    appointmentTime: "10:30pm",
  },
  {
    id: "2",
    drProfile: drProfile,
    drName: "Dr. Ali Khan",
    drSpecialization: "Cardiologist",
    rating: "4.9",
    appointmentDate: "10-11-2024",
    appointmentTime: "2:00pm",
  },
  {
    id: "3",
    drProfile: drProfile,
    drName: "Dr. Mehwish Tariq",
    drSpecialization: "Dermatologist",
    rating: "4.7",
    appointmentDate: "12-11-2024",
    appointmentTime: "9:00am",
  },
  {
    id: "4",
    drProfile: drProfile,
    drName: "Dr. Faisal Raza",
    drSpecialization: "Neurologist",
    rating: "4.6",
    appointmentDate: "14-11-2024",
    appointmentTime: "4:45pm",
  },
];

const UpcomingAppointments = () => {
  const isMobile = useIsMobile();

  const renderCard = (appointment: (typeof dummyAppointments)[0]) => (
    <div
      key={appointment.id}
      className="bg-primaryColor rounded-2xl mb-4 p-4 w-[281px] space-y-4"
    >
      <Link to={`/history`}>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <img
              src={appointment.drProfile}
              className="border border-[#F4F4F6] rounded-full object-cover w-8 h-8"
              alt="Doctor"
            />
            <div>
              <p className="text-sm font-semibold text-white">
                {appointment.drName}
              </p>
              <p className="text-[#C0D4FB] font-medium">
                {appointment.drSpecialization}
              </p>
              <Rating rating={appointment.rating} />
            </div>
          </div>
          <MoreVertical className="text-white w-5 h-5" />
        </div>
      </Link>

      <div className="flex gap-6 text-white">
        <div className="flex items-center gap-2">
          <Calendar size={18} />
          <p>{appointment.appointmentDate}</p>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={18} />
          <p>{appointment.appointmentTime}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <section className="pb-16 bg-white">
        <div className="max-w-7xl lg:max-w-[1160px] p-4 mx-auto lg:px-0 space-y-4 lg:space-y-8">
          <h2 className="text-lg md:text-4xl font-bold md:text-primaryColor text-[#33384B]">
            Upcoming Appointments
          </h2>

          {isMobile ? (
            <Swiper spaceBetween={20} slidesPerView={1.2} className="!pl-1">
              {dummyAppointments.map((appointment) => (
                <SwiperSlide key={appointment.id}>
                  {renderCard(appointment)}
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {dummyAppointments.map((appointment) => renderCard(appointment))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default UpcomingAppointments;
