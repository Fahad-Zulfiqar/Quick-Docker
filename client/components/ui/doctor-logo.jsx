import { useNavigate } from "react-router-dom";
import Logo from "@/assets/quickDoctorLogo.svg";

export const DoctorLogo = ({ className = "" }) => {
  const navigate = useNavigate();
  return (
    <div className={`flex items-center gap-3  ${className}`}>
      {/* <div className="w-10 h-10 bg-doctor rounded-lg rotate-45 flex items-center justify-center overflow-hidden">
     
      <img
        src={QuickDoctorLogo}
        alt="Quick Doctor logo"
        className="w-40 h-40 -rotate-45 object-contain"
      />
    </div>

    <div>
      <h1 className="text-xl font-bold text-primaryColor">Quick Doctor</h1>
      <p className="text-sm text-primaryColor">Medical Services</p>
    </div> */}
      <img
        src={Logo}
        className="cursor-pointer"
        onClick={() => navigate("/")}
      />
    </div>
  );
};
