import { cn } from "@/lib/utils";

const doctorButtonVariants = {
  default:
    "bg-doctor-blue text-white hover:bg-primaryColor focus:ring-doctor-blue",
  outline:
    "border border-doctor-blue text-doctor-blue bg-white hover:bg-doctor-blue-50",
  toggle: "bg-white text-[#263A43] hover:bg-primaryColor hover:text-white",
  toggleActive: "bg-primaryColor text-white",
};

export const DoctorButton = ({
  children,
  variant = "default",
  className = "",
  disabled = false,
  ...props
}) => {
  return (
    <button
      className={cn(
        "px-4 py-3 rounded-[9px]  font-medium text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
        doctorButtonVariants[variant],
        className,
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
