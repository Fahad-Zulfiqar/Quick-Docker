import logo from "@/assets/quickDoctorLogo.svg";
import texture from "@/assets/logo/splashTexture.svg";
import splashLogo from "@/assets/logo/splashLogo.svg";
import splashText from "@/assets/logo/splashText.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const MobileSplash = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="h-[50vh] bg-gradient-to-b  from-[#3F56A6] to-[#13276B]  flex flex-col justify-center  items-center text-white relative">
        <img
          src={texture}
          className="absolute right-0 top-0 h-full w-full pointer-events-none"
        />
        <div className="flex flex-col justify-center items-center">
          <img src={splashLogo} />
          <img src={splashText} />
        </div>
      </div>
      <div className="w-full">
        <div className="p-6 mt-4">
          <h3 className="text-primaryColor font-semibold text-[35px]">
            Welcome
          </h3>
          <p className="font-semibold text-base">
            To The Quick Doctor Application
          </p>
        </div>
        <div className="flex items-center justify-center mt-6 gap-4 px-4">
          <button
            onClick={() => navigate("/login")}
            className="bg-primaryColor text-white px-6 py-2 rounded-2xl w-full h-[54px]"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/register-simple")}
            className="bg-primaryColor text-white px-6 py-2 rounded-2xl w-full h-[54px]"
          >
            Sign Up
          </button>
        </div>
        <div className="w-full place-content-center">
          <button onClick={()=>navigate('/terms')} className="text-primaryColor text-center w-full mt-4">
            {" "}
            Terms & Conditions
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileSplash;
