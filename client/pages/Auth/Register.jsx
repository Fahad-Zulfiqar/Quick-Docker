import { useState, useEffect } from "react";
import { DoctorLogo } from "@/components/ui/doctor-logo";
import { DoctorInput } from "@/components/ui/doctor-input";
import { DoctorButton } from "@/components/ui/doctor-button";
import { ChevronLeft, X } from "lucide-react";
import { useAppDispatch } from "@/store/hooks.ts";
import { useNavigate } from "react-router-dom";
import { setUser } from "@/store/slices/userSlice.ts";
import COUNTRIES from "@/components/common/PhoneInput/countries.js";
import Address from "@/components/address/Address.tsx";
import AddAddressModal from "@/components/address/AddAddressModal.tsx";
import Calendar from "@/assets/icons/calender.svg";

export default function Register() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    gender: "",
    dateOfBirth: "", // will be yyyy-mm-dd when complete
    email: "",
    addresses: [], // Array to store multiple addresses
  });

  // local parts for day/month/year selects
  const [dobParts, setDobParts] = useState({ day: "", month: "", year: "" });

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCountry, setModalCountry] = useState("Israel");
  const [modalStreet, setModalStreet] = useState("");

  // initialize dobParts if formData.dateOfBirth already set (e.g., edit)
  useEffect(() => {
    if (formData.dateOfBirth) {
      const [y, m, d] = formData.dateOfBirth.split("-");
      if (y && m && d) setDobParts({ day: d, month: m, year: y });
    }
  }, [formData.dateOfBirth]);

  // update formData.dateOfBirth when dobParts change
  useEffect(() => {
    const { day, month, year } = dobParts;
    if (day && month && year) {
      setFormData((prev) => ({
        ...prev,
        dateOfBirth: `${year}-${month}-${day}`,
      }));
    } else {
      // optional: clear dateOfBirth if not fully selected
      setFormData((prev) => ({ ...prev, dateOfBirth: "" }));
    }
  }, [dobParts]);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleDobChange = (field, value) => {
    // ensure two-digit day/month
    if (field === "day" || field === "month") {
      if (value) value = value.toString().padStart(2, "0");
    }
    setDobParts((prev) => ({ ...prev, [field]: value }));
  };

  const handleLogin = () => {
    const user = {
      name: "Dummy User",
      email: "user@mail.com",
      phone: "+923000000",
      profileImage: "",
      addresses: formData.addresses, // send full list
    };
    dispatch(setUser(user));
    navigate("/");
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalStreet("");
    setModalCountry("Israel");
  };

  const handleContinue = (data) => {
    console.log(data.country.name);
    // Create a new address object
    const newAddress = {
      street: data.street,
      country: data.country.name,
      full: `${data.street}, ${data.country.name || "Israel"}`,
    };
    console.log(newAddress);

    // Add to the addresses array
    setFormData((prev) => ({
      ...prev,
      addresses: [...prev.addresses, newAddress],
    }));

    // Reset modal fields
    setModalStreet("");
    setModalCountry("Israel");
    closeModal();
  };

  // helpers to create options
  const days = Array.from({ length: 31 }, (_, i) =>
    (i + 1).toString().padStart(2, "0"),
  );
  const months = Array.from({ length: 12 }, (_, i) =>
    (i + 1).toString().padStart(2, "0"),
  );
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 121 }, (_, i) =>
    (currentYear - i).toString(),
  );

  return (
    <div className="min-h-screen max-w-7xl mx-auto relative p-4 lg:p-8 mb-[50px]">
      <div className="hidden md:block absolute top-4 left-4 ">
        <DoctorLogo />
      </div>

      <div
        onClick={() => window.history.back()}
        className="md:hidden flex justify-start items-center p-4 bg-white pt-10 "
      >
        <button className="bg-[#EBEBEB99] w-[45px] h-[45px] place-content-center rounded-[15px]">
          <ChevronLeft className="mx-auto text-primaryColor" />
        </button>
        <button className="px-4 py-2 text-base font-bold text-primaryColor">
          Register
        </button>
      </div>

      <div className="flex flex-col items-center pt-2 md:pt-16 lg:pt-20">
        <div className="w-full max-w-7xl">
          <div className="hidden md:block text-center lg:text-left mb-6 lg:mb-10">
            <h2 className="text-4xl font-semibold text-black">Register</h2>
            <p className="text-lg text-black">
              Fill in the fields to complete the registration process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-[54px]">
            {/* Gender */}
            <div>
              <label className="block text-lg font-medium mb-2">Gender</label>
              <div className="relative">
                <select
                  value={formData.gender}
                  onChange={(e) => handleInputChange("gender", e.target.value)}
                  className="w-full p-3 text-lg border-[0.6px] border-[#B1B1B1] rounded-lg focus:outline-none focus:ring-2 focus:ring-doctor-blue focus:border-transparent appearance-none bg-white"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Email */}
            <DoctorInput
              label="Email Address (optional)"
              type="email"
              placeholder="Enter Email..."
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="text-black text-lg font-medium p-3"
            />

            {/* Addresses */}
            <div className="md:col-span-2">
              {/* Display all stored addresses */}
              {formData.addresses.length > 0 ? (
                <div className="space-y-2">
                  {formData.addresses.map((addr, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-3 border border-gray-200 rounded-lg bg-gray-50"
                    >
                      <span className="text-sm text-gray-700">{addr.full}</span>
                      <button
                        onClick={() => {
                          setFormData((prev) => ({
                            ...prev,
                            addresses: prev.addresses.filter(
                              (_, i) => i !== index,
                            ),
                          }));
                        }}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm"></p>
              )}
              <button
                onClick={openModal}
                className="text-lg font-medium p-3 bg-gray-100 text-black rounded-[8px] mb-2"
              >
                + Add Address
              </button>
            </div>
          </div>

          <div className="mt-6 lg:mt-10 flex justify-center">
            <DoctorButton className="w-80" onClick={handleLogin}>
              Register Now
            </DoctorButton>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        // <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        //   <div className="bg-white rounded-t-2xl md:rounded-2xl p-4 w-full max-w-md relative">

        //     <div className="flex justify-between items-center mb-4">
        //       <button onClick={closeModal}>
        //         <ChevronLeft className="w-6 h-6 text-gray-600" />
        //       </button>
        //       <h2 className="text-lg font-bold text-gray-800">
        //         Add New Address
        //       </h2>
        //       <button onClick={closeModal}>
        //         <X className="w-6 h-6 text-gray-600" />
        //       </button>
        //     </div>

        //     <div className="mb-4">
        //       <label className="block text-sm font-medium text-gray-700 mb-1">
        //         Country
        //       </label>
        //       <div className="relative">
        //         <select
        //           value={modalCountry}
        //           onChange={(e) => setModalCountry(e.target.value)}
        //           className="w-full p-3 border border-gray-300 rounded-lg appearance-none bg-white"
        //         >
        //           <option value="Israel">Israel</option>
        //           <option>United States</option>
        //           <option>United Kingdom</option>
        //           <option>Afghanistan</option>
        //           <option>Pakistan</option>
        //           <option>Other</option>
        //         </select>
        //         <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
        //           <svg
        //             className="w-5 h-5 text-gray-400"
        //             fill="none"
        //             stroke="currentColor"
        //             viewBox="0 0 24 24"
        //           >
        //             <path
        //               strokeLinecap="round"
        //               strokeLinejoin="round"
        //               strokeWidth={2}
        //               d="M19 9l-7 7-7-7"
        //             />
        //           </svg>
        //         </div>
        //       </div>
        //     </div>

        //     <div className="mb-4">
        //       <label className="block text-sm font-medium text-gray-700 mb-1">
        //         Street name and number
        //       </label>
        //       <div className="relative">
        //         <input
        //           type="text"
        //           value={modalStreet}
        //           onChange={(e) => setModalStreet(e.target.value)}
        //           placeholder="Street name and number"
        //           className="w-full p-3 border border-gray-300 rounded-lg"
        //         />
        //         <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
        //           <div className="w-5 h-5 bg-primaryColor rounded-full"></div>
        //         </div>
        //       </div>
        //     </div>

        //     <div className="mb-4">
        //       <iframe
        //         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093746!2d144.9537353153169!3d-37.816279742021675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727d4aab79f6a1!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2s!4v1614039071234!5m2!1sen!2s"
        //         width="100%"
        //         height="200"
        //         style={{ border: 0 }}
        //         allowFullScreen={true}
        //         loading="lazy"
        //         referrerPolicy="no-referrer-when-downgrade"
        //       ></iframe>
        //     </div>

        //     <button
        //       onClick={handleContinue}
        //       className="w-full bg-primaryColor text-white py-3 rounded-lg font-medium"
        //     >
        //       Continue
        //     </button>
        //   </div>
        // </div>

        <AddAddressModal
          open={open}
          onClose={() => setIsModalOpen(false)}
          onSubmit={(data) => {
            console.log("submitted:", data);

            handleContinue(data);
          }}
          initialCountry="US"
        />
      )}
    </div>
  );
}
