import React from "react";
import { useLocation } from "react-router-dom";
import DoctorCard from "./DoctorCard";
import ClinicBook from "./ClinicBook";
import activeLine from "@/assets/active-line.svg";
import inactiveLine from "@/assets/non-active-line.svg";

const User = ({ isActive, isCompleted }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill={`${isActive ? "white" : isCompleted ? "#253E96" : "#BDC6C6"}`}
      d="M5.59426 4.98104C5.59426 4.11892 5.84991 3.27616 6.32888 2.55933C6.80785 1.8425 7.48862 1.2838 8.28512 0.953879C9.08162 0.623959 9.95807 0.537637 10.8036 0.705829C11.6492 0.874021 12.4259 1.28917 13.0355 1.89879C13.6451 2.5084 14.0603 3.28509 14.2284 4.13065C14.3966 4.97621 14.3103 5.85265 13.9804 6.64915C13.6505 7.44565 13.0918 8.12643 12.3749 8.6054C11.6581 9.08437 10.8154 9.34002 9.95323 9.34002C8.79716 9.34002 7.68844 8.88077 6.87097 8.0633C6.0535 7.24584 5.59426 6.13712 5.59426 4.98104ZM17.2182 19.511H2.68828C2.11024 19.511 1.55588 19.2813 1.14715 18.8726C0.738413 18.4639 0.508789 17.9095 0.508789 17.3315C0.508789 15.5974 1.19766 13.9343 2.42386 12.7081C3.65006 11.4819 5.31314 10.793 7.04725 10.793H12.8592C14.5933 10.793 16.2564 11.4819 17.4826 12.7081C18.7088 13.9343 19.3977 15.5974 19.3977 17.3315C19.3977 17.9095 19.168 18.4639 18.7593 18.8726C18.3506 19.2813 17.7962 19.511 17.2182 19.511Z"
    />
  </svg>
);
const Calendar = ({ isActive, isCompleted }) => (
  <svg
    width="21"
    height="21"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill={`${isActive ? "white" : isCompleted ? "#253E96" : "#BDC6C6"}`}
      d="M5.95296 18.3996H15.953C17.7914 18.3996 19.2863 16.9042 19.2863 15.0662V6.73291C19.2863 4.89491 17.7914 3.39958 15.953 3.39958H15.1196V2.56624C15.1196 2.10608 14.7469 1.73291 14.2863 1.73291C13.8257 1.73291 13.453 2.10608 13.453 2.56624V3.39958H8.45296V2.56624C8.45296 2.10608 8.0798 1.73291 7.61963 1.73291C7.15946 1.73291 6.7863 2.10608 6.7863 2.56624V3.39958H5.95296C4.11496 3.39958 2.61963 4.89491 2.61963 6.73291V15.0662C2.61963 16.9042 4.11496 18.3996 5.95296 18.3996ZM4.2863 9.23291H17.6196V15.0662C17.6196 15.9854 16.8717 16.7329 15.953 16.7329H5.95296C5.0338 16.7329 4.2863 15.9854 4.2863 15.0662V9.23291Z"
    />
  </svg>
);

const Check = ({ isActive, isCompleted }) => (
  <svg
    width="21"
    height="15"
    viewBox="0 0 21 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_778_21583)">
      <path
        fill={`${isActive ? "white" : isCompleted ? "#253E96" : "#BDC6C6"}`}
        d="M0.394061 7.78961C0.382318 7.69714 0.382318 7.49116 0.394061 7.39917C0.543778 6.2303 1.92402 5.6236 2.89082 6.28803L7.5986 10.9532L17.9301 0.663355C19.6 -0.344546 21.241 1.77009 19.8803 3.16109C16.0508 6.94611 12.3034 10.8236 8.42645 14.5553C7.81682 14.912 7.1108 14.8518 6.5633 14.4114L0.76444 8.61012C0.600534 8.40658 0.426842 8.0455 0.394061 7.78912V7.78961Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_778_21583">
        <rect
          width="20"
          height="14.3871"
          fill="white"
          transform="translate(0.385254 0.400146)"
        />
      </clipPath>
    </defs>
  </svg>
);
// Define the steps with their corresponding path segments.
// For the first step (Select Time), the path segment corresponds to the base '/book/:id' route.
const steps = [
  { name: "Select Time", path: "book", icon: Calendar },
  { name: "Patient's condition", path: "patient-condition", icon: User },
  { name: "Checkout details", path: "payment", icon: Check },
];

const steps2 = [
  { name: "Select Time", path: "book", icon: Calendar },
  { name: "Patient's condition", path: "patient-condition", icon: User },
];
const SvgImage = ({ isCompleted, isActive }) => {
  return (
    <svg
      className="absolute left-[3px] top-10"
      width="35"
      height="48"
      viewBox="0 0 35 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="17.2866"
        cy="3.39917"
        r="2.5"
        stroke={
          isCompleted ? "#253E96" : isActive === 0 ? "#253E96" : "#BDC6C6"
        }
      />
      <path
        d="M17.2866 10.3992V38.3992"
        stroke={
          isCompleted ? "#253E96" : isActive === 0 ? "#253E96" : "#BDC6C6"
        }
        strokeDasharray="3 3"
      />
      <circle
        cx="17.2866"
        cy="45.3992"
        r="2.5"
        stroke={
          isCompleted ? "#253E96" : isActive === 0 ? "#253E96" : "#BDC6C6"
        }
      />
    </svg>
  );
};
const ProgressSidebar: React.FC = () => {
  const location = useLocation();

  // Logic to determine the current active step index based on the URL
  const getCurrentStepIndex = () => {
    const pathname = location.pathname;

    // Normalize pathname: remove trailing slash if present (unless it's just '/')
    // This ensures consistent matching regardless of whether the URL has a trailing slash.
    // Examples: "/book/123/" -> "/book/123", "/book/123/payment/" -> "/book/123/payment"
    const normalizedPathname =
      pathname.endsWith("/") && pathname.length > 1
        ? pathname.slice(0, -1)
        : pathname;

    // 1. Check for the first step: "/book/:id"
    // This regex ensures it matches exactly '/book/some_id' and not '/book/some_id/something_else'
    const bookOnlyRegex = /^\/book\/\d+$/;
    if (bookOnlyRegex.test(normalizedPathname)) {
      return 0; // Index for "Select Time"
    }

    // 2. Check for subsequent steps: "/book/:id/:stepPath"
    // Extract the last segment of the normalized path (e.g., "patient-condition" or "payment")
    const pathSegments = normalizedPathname.split("/");
    const lastSegment = pathSegments[pathSegments.length - 1];

    // Find the index of the step that matches this last segment's `path` property.
    // We start searching from index 1 as the first step (index 0) is handled separately.
    for (let i = 1; i < steps.length; i++) {
      if (steps[i].path === lastSegment) {
        return i;
      }
    }

    // If no specific step path matches (e.g., on an invalid path or initial load if not /book/:id),
    // default to the first step.
    return 0;
  };

  const currentStepIndex = getCurrentStepIndex();

  return (
    <div className="w-72 max-h-fit bg-white p-6 rounded-2xl shadow-md">
      {/* Doctor Card */}

      {location.pathname.split("/")[1] +
        "/" +
        location.pathname.split("/")[2] +
        "/" +
        location.pathname.split("/")[3] ===
      "services/clinic-visit/book" ? (
        <ClinicBook />
      ) : (
        <DoctorCard />
      )}

      <hr className="my-4" />

      {location.pathname.split("/")[1] +
        "/" +
        location.pathname.split("/")[2] +
        "/" +
        location.pathname.split("/")[3] ===
      "services/clinic-visit/book" ? (
        <div className="relative">
          {/* Map through steps2 to render each progress indicator */}
          {steps2.map((step, index) => {
            const isActive = index === currentStepIndex;
            const isCompleted = index < currentStepIndex;
            const Icon = step.icon;

            return (
              <div
                key={step.name}
                className="flex items-center relative mb-12 "
              >
                {/* Icon Circle */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-200 ${
                    isActive
                      ? "bg-primaryColor text-white border-primaryColor" // Active state
                      : isCompleted
                        ? "bg-transparent text-white border-primaryColor"
                        : "bg-gray-100 text-gray-400 border-gray-300"
                  }`}
                >
                  <Icon isActive={isActive} isCompleted={isCompleted} />
                </div>

                {/* Step Name */}
                <span
                  className={`ml-3 text-sm font-medium transition-all ${
                    isActive
                      ? "text-primaryColor" // Active text color
                      : isCompleted
                        ? "text-primaryColor" // Completed text color
                        : "text-[#BDC6C6]" // Inactive/Future text color
                  }`}
                >
                  {step.name}
                </span>

                {/* Connector Line (only show if not the last step) */}
                {index < steps2.length - 1 && (
                  <SvgImage isCompleted={isCompleted} isActive={isActive} />
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="relative py-6">
          {steps.map((step, index) => {
            const isActive = index === currentStepIndex;
            const isCompleted = index < currentStepIndex;
            const Icon = step.icon;

            return (
              <div key={step.name} className="flex items-center relative mb-12">
                {/* Icon Circle */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-200 z-10
                  ${
                    isActive
                      ? "bg-primaryColor text-white border-primaryColor"
                      : isCompleted
                        ? "bg-transparent  border-primaryColor"
                        : "bg-gray-100 text-gray-400 border-gray-300"
                  }`}
                >
                  <Icon isActive={isActive} isCompleted={isCompleted} />
                </div>

                {/* Step Name */}
                <span
                  className={`ml-3 text-sm font-medium transition-all ${
                    isActive
                      ? "text-primaryColor"
                      : isCompleted
                        ? "text-primaryColor"
                        : "text-[#BDC6C6]"
                  }`}
                >
                  {step.name}
                </span>

                {/* Custom SVG Connector (only render if not last step) */}
                {index < steps.length - 1 && (
                  <SvgImage isCompleted={isCompleted} isActive={index} />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProgressSidebar;
