import { cn } from "@/lib/utils";

export const DoctorInput = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  className = "",
  error = false,
  disabled = false,
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-lg font-medium text-textColor mb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={cn(
          "w-full px-4 py-3 !border-[0.6px] !border-[#B1B1B1] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-doctor-blue focus:border-transparent disabled:bg-gray-50 disabled:cursor-not-allowed",
          error && "border-red-500 focus:ring-red-500",
          className,
        )}
        {...props}
      />
    </div>
  );
};

export const DoctorOTPInput = ({
  value = "",
  onChange,
  length = 4,
  className = "",
}) => {
  const handleChange = (e, index) => {
    const newValue = e.target.value;
    if (newValue.length <= 1) {
      const newOTP = value.split("");
      newOTP[index] = newValue;
      onChange(newOTP.join(""));

      // Auto focus next input
      if (newValue && index < length - 1) {
        const nextInput = e.target.parentNode.children[index + 1];
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    // Handle backspace
    if (e.key === "Backspace" && !value[index] && index > 0) {
      const prevInput = e.target.parentNode.children[index - 1];
      if (prevInput) prevInput.focus();
    }
  };

  return (
    <div className={cn("flex gap-2 sm:gap-3 justify-center", className)}>
      {Array.from({ length }, (_, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          value={value[index] || ""}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className="w-12 h-12 sm:w-[76px] sm:h-[87px] border !border-[#D7D7D7] rounded-lg text-center text-lg font-semibold focus:outline-none focus:border-doctor-blue focus:ring-2 focus:ring-doctor-blue"
        />
      ))}
    </div>
  );
};
