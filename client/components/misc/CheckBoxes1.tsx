const CheckBoxes1 = () => {
  return (
    <div className="flex flex-col items-start gap-6">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          className="w-5 h-5 rounded-sm accent-primaryColor !border !border-[#E7E7E7] "
        />
        <span className="text-[#606060] font-medium">All</span>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          className="w-5 h-5 rounded-sm accent-primaryColor !border !border-[#E7E7E7] "
        />
        <span className="text-[#606060] font-medium">General Practitioner</span>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          className="w-5 h-5 rounded-sm accent-primaryColor !border !border-[#E7E7E7] "
        />
        <span className="text-[#606060] font-medium">Pediatrics</span>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          className="w-5 h-5 rounded-sm accent-primaryColor !border !border-[#E7E7E7] "
        />
        <span className="text-[#606060] font-medium">Dietitian</span>
      </div>
    </div>
  );
};

export default CheckBoxes1;
