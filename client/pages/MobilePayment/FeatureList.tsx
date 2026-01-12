import { FC } from "react";

const Row: FC<{ text: string }> = ({ text }) => (
  <li className="flex items-start gap-3">
    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#C8D3EA]">
      <svg width="12" height="12" viewBox="0 0 24 24" className="text-tick">
        <path
          fill="currentColor"
          d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
        />
      </svg>
    </span>
    <span className="text-[15px] text-textMain">{text}</span>
  </li>
);

const FeatureList: FC = () => {
  return (
    <ul className="grid gap-3 px-5 py-2">
      <Row text="Over 1 Hours use per day" />
      <Row text="Communicate with 300+ doctors" />
      <Row text="10+ hours of video communication" />
      <Row text="You can distribute the hours" />
    </ul>
  );
};
export default FeatureList;
