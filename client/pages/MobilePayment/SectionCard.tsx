import { FC, ReactNode } from "react";
type Props = {
  title: string;
  subtitle: string;
  open: boolean;
  onToggle: () => void;
  children?: ReactNode;
};
const SectionCard: FC<Props> = ({
  title,
  subtitle,
  open,
  onToggle,
  children,
}) => {
  return (
    <section className="px-5">
      <div
        className={`rounded-xl2 shadow-card ${open ? "bg-primarySoft" : "bg-white"} transition-colors`}
      >
        <button
          onClick={onToggle}
          className={`w-full flex items-center justify-between px-5 py-4 rounded-xl2`}
        >
          <div>
            <h3
              className={`text-[18px] font-semibold ${open ? "text-white" : "text-primary"}`}
            >
              {title}
            </h3>
            <p
              className={`text-[13px] ${open ? "text-white/85" : "text-subText"} mt-1`}
            >
              {subtitle}
            </p>
          </div>
          <div
            className={`h-9 w-9 rounded-lg flex items-center justify-center ${
              open ? "bg-primary text-white" : "bg-[#E7ECFF] text-primary"
            }`}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              className={open ? "rotate-180" : ""}
            >
              <path fill="currentColor" d="M7 10l5 5 5-5z" />
            </svg>
          </div>
        </button>

        {open && (
          <div className="bg-white rounded-b-xl2 px-5 pb-5 pt-4">
            {children}
          </div>
        )}
      </div>
    </section>
  );
};
export default SectionCard;
