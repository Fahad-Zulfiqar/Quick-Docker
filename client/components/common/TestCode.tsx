import React from "react";

type Specialty = {
  key: string;
  label: string;
};

type Props = {
  /** Optional custom list; defaults match the design structure */
  specialties?: Specialty[];
  /** Optional fixed width for pixel-perfect layout (default 375) */
  frameWidth?: number;
};

const DEFAULT_SPECIALTIES: Specialty[] = [
  { key: "cardio", label: "Heart" },
  { key: "dental", label: "Dental" },
  { key: "nephro", label: "Kidney" },
  { key: "neuro", label: "Brain" },
  { key: "gastro", label: "Stomach" },
  { key: "pulmo", label: "Lung" },
  { key: "psych", label: "Mental" },
  { key: "hepato", label: "Liver" },
];

export default function HomeHealthCare({
  specialties = DEFAULT_SPECIALTIES,
  frameWidth = 375,
}: Props) {
  return (
    <div
      className="min-h-[1001px] bg-[#F2F2F2] text-[#05141F] font-sans"
      style={{ width: frameWidth }}
    >
      {/* Header */}
      <div className="h-[53px] bg-white flex items-center gap-4 px-6 border-b border-black/5">
        {/* Back button placeholder; replace with your icon */}
        <button
          type="button"
          aria-label="Go back"
          className="w-[45px] h-[45px] rounded-[15px] bg-[#EBEBEB]/60 grid place-items-center"
        >
          <span className="sr-only">Back</span>
          <div className="w-5 h-5" aria-hidden="true" />
        </button>

        <h1 className="text-[#253E96] text-[16px] tracking-[-0.3px] font-bold">
          Home Health Care
        </h1>
      </div>

      {/* Search */}
      <div className="bg-white px-6 pt-6">
        <div className="relative">
          {/* search icon placeholder */}
          <div
            className="absolute left-[12px] top-1/2 -translate-y-1/2 w-[13px] h-[13px]"
            aria-hidden="true"
          />
          <input
            aria-label="Search"
            placeholder="Search ..."
            className="w-full h-[46px] rounded-[10px] bg-[#F0F0F0] pl-9 pr-3 text-[15px] tracking-[-0.3px] placeholder:text-[#677294] outline-none"
          />
        </div>

        {/* divider */}
        <div className="h-px bg-black/5 mt-6" />
      </div>

      {/* Section title */}
      <div className="mt-2 px-6 text-[#05141F] text-[16px] leading-6 font-bold">
        Select Doctor&apos;s specialty
      </div>

      {/* Featured card */}
      <div className="relative mx-5 mt-3 h-40 rounded-lg bg-white shadow-[0_0_20px_rgba(0,0,0,0.08)] overflow-hidden">
        {/* image placeholder area (left) */}
        <div
          className="absolute left-5 top-[19px] w-[127px] h-[126px] rounded-md bg-[#EDEFF5]"
          aria-hidden="true"
        />
        {/* label */}
        <div className="absolute left-[173px] top-[90px] text-[#333] text-[14px] tracking-[-0.3px]">
          General Practitioner
        </div>
      </div>

      {/* More specialty row */}
      <div className="mt-4 mx-5 h-6 flex items-center gap-2">
        <span className="text-[#253E96] text-[16px] leading-6 font-bold">
          More specialty
        </span>
        {/* chevron placeholder */}
        <div className="w-5 h-5 rotate-90" aria-hidden="true" />
      </div>

      {/* List */}
      <ul className="grid gap-2 mx-[22px] my-3">
        {specialties.map((s) => (
          <li
            key={s.key}
            className="h-[49px] flex items-center gap-4 rounded-[10px] bg-white px-3"
          >
            {/* left icon placeholder box */}
            <div
              className="w-7 h-7 rounded-md bg-[#EDEFF5] flex-none"
              aria-hidden="true"
            />
            <span className="text-[#7D8A95] text-[14px] leading-[1.3]">
              {s.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
