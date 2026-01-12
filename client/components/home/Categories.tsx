import React from "react";
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
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

type Props = {};

const Categories = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div>
      {/* Categories */}
      <section className="pb-16 bg-white">
        <div className="max-w-7xl lg:max-w-[1160px] p-4 mx-auto  lg:px-0 ">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-lg md:text-4xl font-bold md:text-primaryColor text-[#33384B]">
              Categories
            </h2>
            <Button
              onClick={() => navigate("/categories")}
              variant="link"
              className="text-primaryColor text-lg font-bold"
            >
              See All <ChevronRight className="w-4 hidden lg:block h-4 ml-1" />
            </Button>
          </div>

          <div className="grid grid-cols-4 px-3 md:px-0 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {[
              {
                icon: lungs,
                label: "Lung",
                color: "bg-primaryColor text-primaryColor",
                route: "services/home-health-care",
              },
              {
                icon: brain,
                label: "Brain",
                color: "bg-primaryColor text-primaryColor",
                route: "services/home-health-care",
              },
              {
                icon: psychiatrists,
                label: "Mental",
                color: "bg-primaryColor text-primaryColor",
                route: "services/home-health-care",
              },
              {
                icon: liver,
                label: "Liver",
                color: "bg-primaryColor text-primaryColor",
                route: "services/home-health-care",
              },
              {
                icon: heart,
                label: "Heart",
                color: "bg-primaryColor text-primaryColor",
                route: "services/home-health-care",
              },
              {
                icon: dentist,
                label: "Dental",
                color: "bg-primaryColor text-primaryColor",
                route: "services/home-health-care",
              },
              {
                icon: kidney,
                label: "Kidney",
                color: "bg-primaryColor text-primaryColor",
                route: "services/home-health-care",
              },
              {
                icon: stomach,
                label: "Stomach",
                color: "bg-primaryColor text-primaryColor",
                route: "services/home-health-care",
              },
            ].map((category, index) => (
              <div
                key={index}
                className="text-center group cursor-pointer  md:px-0"
              >
                <Link to={category.route}>
                  <div
                    className={`md:w-32 md:h-32 w-[72px] h-[72px] bg-[#F0F4FC] rounded-2xl flex flex-col gap-1 items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}
                  >
                    <img
                      src={category.icon}
                      className="md:w-10 w-7  h-7 md:h-10"
                    />
                    <p className="text-xs md:text-sm font-medium text-[#7D8A95]">
                      {category.label}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;
