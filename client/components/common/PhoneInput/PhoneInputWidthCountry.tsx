import React from "react";
import ReactCountryFlag from "react-country-flag";
import CountryDropdownPanel from "./CountryDropdownPanel";
import { PHONE_COUNTRIES, PhoneCountry } from "./phone-countries";
import { AsYouType, parsePhoneNumberFromString } from "libphonenumber-js";

type Props = {
  defaultIso2?: string; // e.g., "il"
  value?: string; // E.164 or raw national
  onChange?: (
    e164: string,
    meta: { country: PhoneCountry; national: string; valid: boolean },
  ) => void;
  className?: string;
};

export default function PhoneInputWithCountry({
  defaultIso2 = "il",
  value,
  onChange,
  className = "",
}: Props) {
  const initial = React.useMemo(
    () =>
      PHONE_COUNTRIES.find((c) => c.iso2 === defaultIso2) || PHONE_COUNTRIES[0],
    [defaultIso2],
  );

  const [country, setCountry] = React.useState<PhoneCountry>(initial);
  const [open, setOpen] = React.useState(false);
  const [national, setNational] = React.useState("");

  const wrapperRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!wrapperRef.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  function handleType(input: string) {
    const digits = input.replace(/[^\d]/g, "");
    const formatter = new AsYouType(country.iso2.toUpperCase() as any);
    const formatted = formatter.input(digits);
    setNational(formatted);

    const e164Raw = `+${country.dialCode.replace("+", "")}${digits}`;
    const parsed = parsePhoneNumberFromString(e164Raw);
    onChange?.(parsed?.number?.toString() ?? e164Raw, {
      country,
      national: digits,
      valid: Boolean(parsed?.isValid()),
    });
  }

  function pickCountry(c: PhoneCountry) {
    setCountry(c);
    setOpen(false);
    // keep existing national digits; do not clear user input
    handleType(national);
  }

  return (
    <div ref={wrapperRef} className={`relative ${className}`}>
      {/* Input group */}
      <div className="flex h-[52px] items-center  border-[0.6px] rounded-lg border-[#B1B1B1]">
        {/* Left trigger: flag + caret */}
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
          className="flex items-center gap-2 rounded-l-xl  bg-white px-3 text-[15px] text-gray-900 focus:outline-none "
        >
          <span className="h-7 w-7 overflow-hidden ">
            <ReactCountryFlag
              countryCode={country.iso2.toUpperCase()}
              svg
              style={{
                width: "100%",
                height: "100%",
                display: "block",
                objectFit: "cover",
                borderRadius: "999px",
              }}
              title={country.name}
            />
          </span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            className="text-gray-500"
          >
            <path fill="currentColor" d="M7 10l5 5 5-5z" />
          </svg>
        </button>

        {/* Phone input with dial code prefix */}
        <div className="relative flex-1">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[15px] text-gray-700">
            {country.dialCode}
          </span>
          <input
            value={national}
            onChange={(e) => handleType(e.target.value)}
            placeholder="Phone Number"
            className="w-[80%]  bg-white py-3 pl-[72px] pr-3 text-[15px]  placeholder-gray-400 focus:outline-none "
          />
        </div>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-20 mt-2">
          <CountryDropdownPanel
            countries={PHONE_COUNTRIES}
            onPick={pickCountry}
          />
        </div>
      )}
    </div>
  );
}
