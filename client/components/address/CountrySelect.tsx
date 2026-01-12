import React from "react";
import { COUNTRIES, CountryOpt } from "./countries";

type Props = {
  value?: CountryOpt | null;
  onChange?: (c: CountryOpt) => void;
  options?: CountryOpt[];
  label?: string;
};

export default function CountrySelect({
  value,
  onChange,
  options = COUNTRIES,
  label = "Country",
}: Props) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <div className="w-full" ref={ref}>
      <label className="mb-1 block text-xs font-medium text-gray-600">
        {label}
      </label>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((s) => !s)}
        className="flex h-12 w-full items-center justify-between rounded-xl border border-gray-300 bg-white px-4 text-left text-[15px] text-gray-800 focus:outline-none focus:ring-2 focus:ring-primaryColor"
      >
        <span>{value?.name ?? "Select a country"}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          className="text-gray-500"
        >
          <path fill="currentColor" d="M7 10l5 5 5-5" />
        </svg>
      </button>
      {open && (
        <div className="relative">
          <ul
            role="listbox"
            className="absolute z-20 mt-2 max-h-64 w-full overflow-y-auto rounded-xl border border-gray-200 bg-white py-1 shadow-lg"
          >
            {options.map((opt) => (
              <li
                key={opt.iso2}
                role="option"
                onMouseDown={(e) => {
                  e.preventDefault();
                  onChange?.(opt);
                  setOpen(false);
                }}
                className="cursor-pointer px-4 py-2 text-[15px] text-gray-800 hover:bg-gray-50"
              >
                {opt.name}
              </li>
            ))}
          </ul>
        </div>
      )}
         
    </div>
  );
}
