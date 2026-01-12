import HeroSection from "@/components/home/HeroSection";
import OurServices from "@/components/home/OurServices";
import Categories from "@/components/home/Categories";
import AboutUs from "@/components/home/AboutUs";
import MobileAppSection from "@/components/home/MobileAppSection";
import { useAppSelector } from "@/store/hooks";
import UpcomingAppointments from "@/components/home/UpcomingAppointments";

export default function QuickDoctorHomepage() {
  const { user } = useAppSelector((state) => state.user);
  return (
    <div className="min-h-screen  bg-white">
      <HeroSection />
      <OurServices />
      <Categories />
      {user && <UpcomingAppointments />}
      <AboutUs />
      <MobileAppSection />
    </div>
  );
}
