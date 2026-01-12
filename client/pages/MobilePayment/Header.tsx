import { FC } from "react";

type HeaderProps = { title: string; onBack?: () => void };

const Header: FC<HeaderProps> = ({ title, onBack }) => {
  return (
    <header className="sticky top-0 z-20 bg-white">
      <div className="h-4" />
      <div className="flex items-center gap-3 px-5 py-4">
        <button
          aria-label="Back"
          onClick={onBack}
          className="h-9 w-9 rounded-full bg-[#EEF2FF] flex items-center justify-center"
        >
          {/* simple chevron */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            className="text-primary"
          >
            <path fill="currentColor" d="M15.5 19L8.5 12l7-7" />
          </svg>
        </button>
        <h1 className="text-[17px] font-semibold text-primary">Select Plan</h1>
      </div>
      <div className="h-[10px] bg-white" />
    </header>
  );
};

export default Header;
