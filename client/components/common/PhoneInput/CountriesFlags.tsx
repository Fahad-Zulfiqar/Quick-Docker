import React from "react";
import ReactCountryFlag from "react-country-flag";
import PhoneCountry from "./countries";

type Props = {
  countries: PhoneCountry[];
  onPick: (c: PhoneCountry) => void;
  className?: string;
};

export default function CountryDropdownPanel({
  countries,
  onPick,
  className = "",
}: Props) {
  const [q, setQ] = React.useState("");
  const [active, setActive] = React.useState(0);
  const listRef = React.useRef<HTMLUListElement>(null);

  const filtered = React.useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return countries;
    return countries.filter(
      (c) =>
        c.name.toLowerCase().includes(s) ||
        c.iso2.toLowerCase().startsWith(s) ||
        c.dialCode.replace("+", "").startsWith(s),
    );
  }, [q, countries]);

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, filtered.length - 1));
      listRef.current?.children
        ?.item(Math.min(active + 1, filtered.length - 1))
        ?.scrollIntoView({ block: "nearest" });
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
      listRef.current?.children
        ?.item(Math.max(active - 1, 0))
        ?.scrollIntoView({ block: "nearest" });
    } else if (e.key === "Enter") {
      e.preventDefault();
      const c = filtered[active];
      if (c) onPick(c);
    }
  }

  return (
    <div
      className={`w-[340px] rounded-2xl border border-[#d9eef3] bg-white shadow-[0_6px_20px_rgba(0,0,0,0.08)] ${className}`}
    >
      {/* Search */}
      <div className="px-3 pt-3">
        <div className="relative">
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Search"
            className="w-full rounded-xl border border-[#e6edf0] bg-white py-2.5 pl-9 pr-3 text-[15px] text-gray-800 placeholder-gray-400 focus:border-[#9fd3dd] focus:outline-none"
          />
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          >
            <path
              fill="currentColor"
              d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28h.79L20 21.5 21.5 20 15.5 14zM9.5 14A4.5 4.5 0 1 1 14 9.5 4.5 4.5 0 0 1 9.5 14"
            />
          </svg>
        </div>
      </div>

      <div className="mt-3 h-px w-full bg-[#e9f1f4]" />

      {/* List */}
      <ul
        ref={listRef}
        role="listbox"
        className="max-h-[280px] overflow-y-auto px-1 py-1"
      >
        {filtered.map((c, idx) => {
          const isActive = idx === active;
          return (
            <li
              key={c.iso2}
              role="option"
              aria-selected={isActive}
              onMouseEnter={() => setActive(idx)}
              onMouseDown={(e) => {
                e.preventDefault();
                onPick(c);
              }}
              className={`flex cursor-pointer items-center justify-between rounded-xl px-3 py-2.5 hover:bg-[#f6fafb] ${isActive ? "bg-[#f6fafb]" : ""}`}
            >
              <div className="flex items-center gap-3">
                <span className="h-7 w-7 overflow-hidden rounded-full ring-1 ring-gray-200">
                  <ReactCountryFlag
                    countryCode={c.iso2.toUpperCase()}
                    svg
                    style={{ width: "100%", height: "100%", display: "block" }}
                    title={c.name}
                  />
                </span>
                <span className="text-[15px] text-gray-900">{c.name}</span>
              </div>
              <span className="text-[15px] text-gray-700">{c.dialCode}</span>
            </li>
          );
        })}
        {filtered.length === 0 && (
          <li className="px-3 py-4 text-sm text-gray-500">No matches</li>
        )}
      </ul>
    </div>
  );
}
