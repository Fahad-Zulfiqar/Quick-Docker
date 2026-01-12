import React from "react";
import AddressMap from "./AddressMap";
import { COUNTRIES } from "./countries";
import { reverseGeocode } from "@/utils/reverseGeocode.js";
import { ChevronLeft, X } from "lucide-react";

export default function AddAddressModal({
  open,
  onClose,
  onSubmit,
  initialCountry,
}) {
  const [country, setCountry] = React.useState(initialCountry || COUNTRIES[0]);
  const [street, setStreet] = React.useState("");
  const [loc, setLoc] = React.useState(null); // [lat, lon]
  const [busy, setBusy] = React.useState(null); // "geoloc" | "geocode" | null

  React.useEffect(() => {
    if (!open) {
      setStreet("");
      setLoc(null);
      setBusy(null);
      setCountry(initialCountry || COUNTRIES[0]);
    }
  }, [open, initialCountry]);

  if (!open) return null;

  const valid = country && street.trim().length > 0;

  const locateMe = () => {
    if (!navigator.geolocation) return;
    setBusy("geoloc");
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const coords = [pos.coords.latitude, pos.coords.longitude];
        setLoc(coords);
        setBusy("geocode");
        try {
          const text = await reverseGeocode(coords[0], coords[1]);
          setStreet(text);
        } finally {
          setBusy(null);
        }
      },
      () => setBusy(null),
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 },
    );
  };

  const handleMapPick = async (p) => {
    setLoc(p);
    setBusy("geocode");
    try {
      const text = await reverseGeocode(p[0], p[1]);
      setStreet(text);
    } finally {
      setBusy(null);
    }
  };

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/40 " onClick={onClose} />

      {/* Sheet */}
      <div
        className="fixed inset-0 grid place-items-center z-60"
        aria-modal="true"
        role="dialog"
      >
        <div className="w-[min(560px,92vw)] bg-white rounded-2xl p-6 shadow-[0_20px_40px_rgba(0,0,0,0.18)] border border-black/5">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <button
              className="w-8 h-8 grid place-items-center rounded-full bg-gray-200 hover:bg-primaryColor hover:text-white"
              onClick={onClose}
              aria-label="Back"
            >
              <ChevronLeft />
            </button>

            <button
              className="w-8 h-8 grid place-items-center rounded-full bg-gray-200 hover:bg-primaryColor hover:text-white"
              onClick={onClose}
              aria-label="Close"
            >
              <X />
            </button>
          </div>
          <h2 className="m-0 text-3xl  font-extrabold">Add new address</h2>

          {/* Country select */}
          <div className="mt-4">
            <label className="block text-xs text-gray-500 mb-1.5">
              Country
            </label>
            <select
              className="w-full h-12 rounded-xl border border-gray-300 px-3.5 text-[15px] text-gray-900 outline-none focus:ring-2 focus:ring-primaryColor focus:border-primaryColor"
              value={country.name}
              onChange={(e) => {
                const next = COUNTRIES.find((c) => c.name === e.target.value);
                setCountry(next || COUNTRIES[0]);
              }}
            >
              {COUNTRIES.map((c) => (
                <option key={c.iso2} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          {/* Street input */}
          <div className="mt-4 relative">
            <label className="block text-xs text-gray-500 mb-1.5">
              Street name and number
            </label>
            <input
              className="w-full h-12 rounded-xl border border-gray-300 px-3.5 text-[15px] text-gray-900 outline-none focus:ring-2 focus:ring-primaryColor focus:border-primaryColor"
              placeholder="Street name and number"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
            <button
              type="button"
              className="absolute right-2 bottom-2 w-8 h-8 rounded-full border-none  text-white grid place-items-center cursor-pointer disabled:bg-primaryColor"
              onClick={locateMe}
              disabled={!!busy}
              title="Use current location"
              aria-label="Use current location"
            >
              {busy ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="animate-spin"
                >
                  <path
                    fill="#253E96"
                    d="M12 4a8 8 0 1 0 8 8h-2A6 6 0 1 1 12 6V4Z"
                  />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path
                    fill="#253E96"
                    d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm9 3h-2.07A7.004 7.004 0 0 0 13 5.07V3h-2v2.07A7.004 7.004 0 0 0 5.07 11H3v2h2.07A7.004 7.004 0 0 0 11 18.93V21h2v-2.07A7.004 7.004 0 0 0 18.93 13H21v-2Z"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Map */}
          <div className="mt-4 border border-gray-200 rounded-xl overflow-hidden">
            <AddressMap position={loc} onPick={handleMapPick} />
          </div>

          {/* Actions */}
          <div className="mt-4">
            <button
              className="w-full h-12 rounded-xl bg-[#253E96] text-white font-semibold cursor-pointer disabled:bg-primaryColor disabled:cursor-not-allowed"
              disabled={!valid}
              onClick={() =>
                valid &&
                onSubmit &&
                onSubmit({
                  country,
                  street: street.trim(),
                  location: loc ? { lat: loc[0], lon: loc[1] } : undefined,
                })
              }
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
