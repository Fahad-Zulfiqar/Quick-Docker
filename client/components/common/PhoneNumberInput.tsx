import React, { useState } from "react";
import { PhoneInput } from "react-international-phone";
import { Search } from "lucide-react";

export default function PhoneNumberInput() {
  const [phone, setPhone] = useState("");

  return (
    <div className="w-full max-w-md">
      <PhoneInput
        defaultCountry="il"
        value={phone}
        onChange={setPhone}
        className="w-full"
        countrySelectorStyleProps={{
          buttonStyle: {
            border: "none",
            borderRadius: "9999px", // Rounded flags
            padding: "2px",
          },
        }}
        inputStyle={{
          border: "1px solid #d1d5db", // Tailwind gray-300
          borderRadius: "0.375rem", // Tailwind rounded-md
          width: "100%",
          paddingLeft: "48px", // Adjust for flag width
        }}
      />
      <style>{`
        .react-international-phone-country-selector .react-international-phone-country-selector-dropdown {
          max-height: 300px;
          overflow-y: auto;
        }
        .react-international-phone-country-selector .react-international-phone-country-selector-dropdown input {
          display: block;
          width: 100%;
          padding: 8px;
          margin: 4px 0;
          border: 1px solid #d1d5db;
          border-radius: 0.375rem;
          box-sizing: border-box;
        }
        .react-international-phone-flag {
          border: none !important;
          border-radius: 9999px !important;
        }
      `}</style>
    </div>
  );
}
