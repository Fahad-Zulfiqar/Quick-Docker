import { useState } from "react";
import { cn } from "@/lib/utils";
import { IdCard } from "lucide-react";

export const FileUpload = ({
  label,
  className = "",
  onChange,
  accept = "image/*",
}) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      setFileName(file.name);
      onChange && onChange(file);
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      onChange && onChange(file);
    }
  };

  return (
    <div className={cn("mb-5", className)}>
      <label className="block text-lg  font-medium text-[#263A43] mb-2">
        {label}
      </label>
      <div
        className={cn(
          "relative border-2 border-dashed rounded-lg p-8 text-center transition-all duration-200 cursor-pointer hover:border-doctor-blue hover:bg-blue-50",
          isDragOver
            ? "border-doctor-blue bg-blue-50"
            : "border-[#253E96] bg-[#253E961A]",
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          type="file"
          accept={accept}
          onChange={handleFileSelect}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />

        {!fileName ? (
          <div className="flex flex-col items-center">
            <div className="w-12 h-12  rounded-lg flex items-center justify-center mb-3">
              <IdCard size={40} />
            </div>
            <p className="text-sm text-primaryColor">Update Images</p>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p className="text-sm text-gray-600 truncate max-w-full">
              {fileName}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
