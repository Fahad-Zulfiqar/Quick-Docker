import {
  MapPin,
  Clock,
  Users,
  Shield,
  Car,
  AlertTriangle,
  ChevronUp,
} from "lucide-react";
import {
  lungs,
  brain,
  psychiatrists,
  liver,
  heart,
  dentist,
  kidney,
  stomach,
} from "@/assets/icons/categories-icons";
import doctor from "@/assets/images/clinic-doctor.png";
import { Swiper, SwiperSlide } from "swiper/react";
import insurance from "@/assets/images/insurance.svg";
import { useState } from "react";

const InfoTab = () => {
  const [isTabsOpen, setIsTabsOpen] = useState({
    address: true,
    specialties: true,
  });

  const handleTabsClick = (tab: keyof typeof isTabsOpen) => {
    setIsTabsOpen((prev) => ({ ...prev, [tab]: !prev[tab] }));
  };
  const openingHours = [
    { day: "Tuesday", hours: "9:30AM - 12:30AM" },
    { day: "Wednesday", hours: "9:30AM - 12:30AM" },
    { day: "Friday", hours: "9:30AM - 12:30AM" },
    { day: "Saturday", hours: "9:30AM - 12:30AM" },
    { day: "Monday", hours: "9:30AM - 12:30AM" },
  ];

  const specialties = [
    { name: "Lung", icon: lungs },
    { name: "Brain", icon: brain },
    { name: "Mental", icon: psychiatrists },
    { name: "Liver", icon: liver },
    { name: "Heart", icon: heart },
    { name: "Dental", icon: dentist },
    { name: "Kidney", icon: kidney },
    { name: "Stomach", icon: stomach },
  ];

  const doctors = [
    { name: "Dr. Maha Ahmad", specialty: "Dental", image: doctor },
    { name: "Dr. Noha Ahmad", specialty: "Dental", image: doctor },
    { name: "Dr. Mahmoud Ahmad", specialty: "Dental", image: doctor },
    { name: "Dr. Maha Ahmad", specialty: "Dental", image: doctor },
    { name: "Dr. Noha Ahmad", specialty: "Dental", image: doctor },
    { name: "Dr. Maha Ahmad", specialty: "Dental", image: doctor },
    { name: "Dr. Noha Ahmad", specialty: "Dental", image: doctor },
    { name: "Dr. Mahmoud Ahmad", specialty: "Dental", image: doctor },
  ];

  const insuranceProviders = [
    { image: insurance, name: "GlobeMed" },
    { image: insurance, name: "NatHealth" },
    { image: insurance, name: "MedNet" },
    { image: insurance, name: "NatHealth" },
    { image: insurance, name: "MedNet" },
    { image: insurance, name: "MedNet" },
  ];

  return (
    <div className="space-y-2 lg:space-y-6">
      {/* Clinic Information */}
      <div className="lg:rounded-[20px] lg:shadow-sm bg-white pb-2 p-6">
        <h3 className="text-base relative font-bold text-primaryColor mb-1">
          Clinic Information
          <span
            onClick={() => handleTabsClick("address")}
            className={`absolute lg:hidden right-0 ${!isTabsOpen.address && "rotate-180"} transition-all`}
          >
            {<ChevronUp size={24} />}
          </span>
        </h3>
        <div
          className={` flex-col lg:flex-row items-start justify-between ${isTabsOpen.address ? "flex" : "hidden"}`}
        >
          {/* Address */}
          <div className="mb-6 lg:border-r lg:pr-6">
            <h4 className="font-bold text-base text-black mb-2">Address</h4>
            <p className="text-[#010247] font-normal mb-3 max-w-xs">
              Nablus, Eastern Ring Branch Road, Gate 3, Level 2
            </p>
            <div className="bg-gray-100 h-32 w-full rounded-lg flex items-center justify-center">
              {/* <div className="text-center text-gray-500">
              <MapPin className="w-8 h-8 mx-auto mb-2" />
              <span className="text-sm">Map Placeholder</span>
            </div> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49640.62458993728!2d-122.637785!3d38.957358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80838b954060c195%3A0xc16aeac6f3b5e9b6!2sClearlake%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1756308357204!5m2!1sen!2s"
                height="100%"
                className="rounded-xl w-full lg:w-[330px]"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="mb-6 w-full lg:pl-6">
            <h4 className="font-bold text-base mb-3">Opening Hours</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {openingHours.map((schedule, index) => (
                <div
                  key={index}
                  className="text-[13px] lg:block flex items-center justify-between bg-[#F2F2F5] rounded-lg p-3"
                >
                  <div className="font-medium mb-1">{schedule.day}</div>
                  <div className="text-[#333333] text-xs font-normal">
                    {schedule.hours}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Specialties Available */}
      <div className="lg:rounded-[20px] lg:shadow-sm bg-white p-6">
        <div className="border-b border-[#F4F4F6] pb-4 mb-4">
          <h3 className="text-base font-bold relative text-primaryColor mb-1">
            Clinic Information
            <span
              onClick={() => handleTabsClick("specialties")}
              className={`absolute lg:hidden right-0 ${!isTabsOpen.specialties && "rotate-180"} transition-all`}
            >
              {<ChevronUp size={24} />}
            </span>
          </h3>
          <div className={`${isTabsOpen.specialties ? "block" : "hidden"}`}>
            <h4 className="font-bold text-base text-black mb-4">
              Specialties Available
            </h4>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
              {specialties.map((specialty, index) => (
                <div
                  key={index}
                  className="flex lg:w-28 w-[72px] h-[72px] lg:h-28 flex-col items-center justify-center p-3 bg-[#F0F4FC] rounded-2xl hover:scale-105 transition-transform cursor-pointer"
                >
                  {/* <div className="text-2xl mb-2">{specialty.icon}</div> */}
                  <img
                    src={specialty.icon}
                    className="lg:w-10 w-[28px] h-[28px] lg:h-10 mb-1"
                  />
                  <span className="text-xs lg:text-base font-medium text-[#7D8A95] text-center">
                    {specialty.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Doctors List */}
            <div className="border-b border-[#F4F4F6] pb-4 my-4">
              <h4 className="font-bold text-base text-black mb-4">
                Doctors List
              </h4>

              <Swiper
                spaceBetween={16}
                slidesPerView={"auto"}
                grabCursor={true}
                freeMode={true}
              >
                {doctors.map((doctor, index) => (
                  <SwiperSlide key={index} style={{ width: "220px" }}>
                    <div className="p-4 bg-[#F2F2F2] rounded-lg lg:shadow-sm text-center">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-32 h-32 mx-auto rounded-full object-cover"
                      />
                      <div className="mt-3 font-bold text-[#33384B]">
                        {doctor.name}
                      </div>
                      <div className="text-sm text-[#7D8A95]">
                        {doctor.specialty}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Insurance List */}
            <div className="border-b border-[#F4F4F6] pb-4 my-6">
              <h4 className="font-bold text-base text-black mb-2">
                Insurance List
              </h4>
              <div className="flex   lg:justify-start gap-4 w-[90vw]  overflow-x-auto no-scrollbar">
                {insuranceProviders.map((provider, index) => (
                  <div
                    key={index}
                    className=" flex  flex-col gap-3 items-center justify-center  "
                  >
                    <div className=" border w-24 h-24 border-[#EAEAEA] rounded-lg">
                      <img src={provider.image} className="w-full h-full" />
                    </div>
                    <span className="text-sm text-center font-medium text-[#33384B]">
                      {provider.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Facilities */}
            <div className="mb-4">
              <h4 className="font-bold text-base text-black mb-2">
                Facilities
              </h4>
              <ol className="list-disc list-inside pl-2">
                <li className="text-[#5B5B5B]">wheelchair accessibility</li>
              </ol>
            </div>

            {/* Parking/Transportation */}
            <div className="mb-4">
              <h4 className="font-bold text-base text-black mb-2">
                Parking/Transportation
              </h4>
              <div>
                <p className="text-[#5B5B5B]">
                  Information on parking options or nearby public
                  transportation.
                </p>
              </div>
            </div>

            {/* Emergency Services */}
            <div className="mb-4">
              <h4 className="font-bold text-base text-black mb-2">
                Parking/Transportation
              </h4>

              <p className="text-[#5B5B5B]">
                practice provides emergency services or after-hours care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoTab;
