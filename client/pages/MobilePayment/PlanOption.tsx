import { FC } from "react";

type Props = {
  label: string;
  hint: string;
  selected: boolean;
  disabled?: boolean;
  onSelect: () => void;
};
const PlanOption: FC<Props> = ({
  label,
  hint,
  selected,
  disabled,
  onSelect,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onSelect}
      className={[
        "w-full text-left px-5 py-4 rounded-xl2 border",
        disabled
          ? "bg-[#F2F4F8] text-subText border-transparent"
          : "bg-white border-[#BFD0FF]",
        selected && "!border-primary !bg-white shadow-card",
      ].join(" ")}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[16px] font-medium text-textMain">{label}</p>
          <p className="text-[13px] text-subText mt-1">{hint}</p>
        </div>

        <span
          className={[
            "h-6 w-6 rounded-full border flex items-center justify-center",
            selected ? "border-primary" : "border-[#C9D3EB]",
          ].join(" ")}
        >
          {selected ? (
            <span className="h-3 w-3 rounded-full bg-primary" />
          ) : (
            <span className="h-3 w-3 rounded-full bg-transparent" />
          )}
        </span>
      </div>
    </button>
  );
};
export default PlanOption;
