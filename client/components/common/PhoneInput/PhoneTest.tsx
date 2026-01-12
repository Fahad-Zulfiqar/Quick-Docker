import React from "react";
import PhoneInputWithCountry from "./PhoneInputWidthCountry";

export default function Example() {
  const [val, setVal] = React.useState("");

  return (
    <div className="max-w-md">
      <PhoneInputWithCountry
        defaultIso2="il"
        onChange={(e164, meta) => {
          setVal(e164);
        }}
      />
    </div>
  );
}
