import { cn } from "@/lib/utils";

export const SegmentedControl = ({
  options = [],
  value,
  onChange,
  className = "",
  colors = {},
}) => {
  const currentIndex = options.findIndex((option) => option.value === value);
  const selectedOption = options[currentIndex];
  const selectedColor = selectedOption
    ? colors[selectedOption.value]
    : "#6b7280";

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className="text-base text-[#4B4B4B]">{options[0]?.label}</span>

      <div className="relative">
        {/* Hidden radio inputs for accessibility */}
        {options.map((option) => (
          <input
            key={option.value}
            type="radio"
            name="segmented-control"
            value={option.value}
            checked={value === option.value}
            onChange={(e) => onChange(e.target.value)}
            className="sr-only"
          />
        ))}

        {/* Toggle Switch */}
        <button
          type="button"
          onClick={() => {
            const nextIndex = currentIndex === 0 ? 1 : 0;
            if (options[nextIndex]) {
              onChange(options[nextIndex].value);
            }
          }}
          className="relative inline-flex w-12 h-6 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          style={{
            backgroundColor: selectedColor,
          }}
        >
          {/* Sliding indicator */}
          <span
            className={cn(
              "inline-block w-5 h-5 rounded-full bg-white shadow transform transition-transform duration-200 translate-y-0.5",
              currentIndex === 0 ? "translate-x-0.5" : "translate-x-6",
            )}
          />
        </button>
      </div>

      <span className="text-base text-[#4B4B4B]">{options[1]?.label}</span>
    </div>
  );
};
