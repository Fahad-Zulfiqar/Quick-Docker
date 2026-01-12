import React, { useState } from "react";

const ToggleSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center">
      <label className="w-[56px] h-[31px] relative">
        <input
          type="checkbox"
          className="custom_switch absolute w-[56px] h-[31px] opacity-0 z-10 cursor-pointer peer"
          id="custom_switch_checkbox1"
          checked={isChecked}
          onChange={handleToggle}
        />
        <span className="bg-[#ccc] dark:bg-dark block h-full rounded-full before:absolute before:left-0.5 before:top-0.5 before:bg-white dark:before:bg-white-dark dark:peer-checked:before:bg-white before:bottom-1 before:w-[27px] before:h-[27px] before:rounded-full peer-checked:before:left-7 peer-checked:bg-primary before:transition-all before:duration-300"></span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
