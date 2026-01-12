import Categories from "@/components/home/Categories";
import OurServices from "@/components/home/OurServices";
import UpcomingAppointments from "@/components/home/UpcomingAppointments";
import React, { useEffect } from "react";
import MobileHomeHero from "@/components/home/MobileHomeHero";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@/store/hooks";

type Props = {};

const MobileHome = (props: Props) => {
  const { user } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate("/splash");
    }
  }, [user, navigate]);

  if (user === null) {
    return null;
  }

  return (
    <div>
      <MobileHomeHero user={user} />
      <OurServices showHeading={false} />
      <Categories />
      <UpcomingAppointments />
    </div>
  );
};

export default MobileHome;
