import { FC, ReactNode } from "react";

type Props = {
  title: string;
  price: string;
  note: string;
  muted?: string; // small tag inside
  selected?: boolean;
  onSelect?: () => void;
  rightBadge?: ReactNode;
};

const PriceCard: FC<Props> = ({
  title,
  price,
  note,
  muted,
  selected,
  onSelect,
  rightBadge,
}) => {
  return (
    <button
      onClick={onSelect}
      className={[
        "text-left rounded-xl2 border px-5 py-5 min-w-[160px] flex-1",
        selected
          ? "border-[#4462D5] bg-white shadow-card"
          : "border-[#E7ECFF] bg-white/80",
      ].join(" ")}
    >
      <div className="flex justify-between items-start">
        <p className="text-[14px] text-subText">{title}</p>
        {selected ? (
          <span className="h-5 w-5 rounded-full border border-primary flex items-center justify-center mt-0.5">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
          </span>
        ) : (
          rightBadge
        )}
      </div>

      <p className="text-[28px] font-semibold text-textMain mt-1">{price}</p>
      {muted && (
        <div className="mt-2 inline-flex rounded-md bg-[#F3F6FF] px-3 py-1 text-[12px] text-subText">
          {muted}
        </div>
      )}
      <p className="text-[13px] text-subText mt-3">{note}</p>
    </button>
  );
};

export default PriceCard;
