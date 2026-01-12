import React, { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router-dom";
import { Calendar } from "lucide-react"; // For the progress sidebar icon

interface SelectDateAndTimeProps {
  serviceType:
    | "home-health-care"
    | "clinic-visit"
    | "call"
    | "video-call"
    | "chat"
    | "doctor-profile";
}

const SelectDateAndTime: React.FC<SelectDateAndTimeProps> = ({
  serviceType,
}) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Service-specific logic for available dates and time slots
  const getAvailableDates = () => {
    if (serviceType === "clinic-visit") {
      return [14, 15, 16, 18]; // Fewer dates for clinic visits
    }
    return [14, 15, 16, 18, 20, 21, 25, 26, 27, 28, 29, 30];
  };

  const getTimeSlots = (date: number) => {
    const defaultSlots = {
      Afternoon: [
        { time: "1:00 PM", available: true },
        { time: "1:30 PM", available: false },
        { time: "2:00 PM", available: true },
        { time: "2:30 PM", available: true },
        { time: "3:00 PM", available: true },
        { time: "3:30 PM", available: true },
        { time: "4:00 PM", available: false },
      ],
      Evening: [
        { time: "5:00 PM", available: true },
        { time: "5:30 PM", available: true },
        { time: "6:00 PM", available: true },
        { time: "6:30 PM", available: true },
        { time: "7:00 PM", available: false },
      ],
    };

    if (serviceType === "clinic-visit") {
      return {
        Morning: [
          { time: "9:00 AM", available: true },
          { time: "9:30 AM", available: true },
          { time: "10:00 AM", available: false },
        ],
        Afternoon: [
          { time: "2:00 PM", available: true },
          { time: "2:30 PM", available: true },
        ],
      };
    }

    return defaultSlots;
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const navigateMonth = (direction: number) => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const isPreviousMonthDisabled = () => {
    const today = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    return (
      currentYear < today.getFullYear() ||
      (currentYear === today.getFullYear() && currentMonth <= today.getMonth())
    );
  };

  const isPastDate = (day: number) => {
    const today = new Date();
    const dateToCheck = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day,
    );
    return (
      dateToCheck <
      new Date(today.getFullYear(), today.getMonth(), today.getDate())
    );
  };

  const calendarDays = useMemo(() => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days: (number | null)[] = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    return days;
  }, [currentDate]);

  const handleDateSelect = (day: number) => {
    if (day && getAvailableDates().includes(day) && !isPastDate(day)) {
      setSelectedDate(day);
      setSelectedTime(null);
    }
  };

  const handleContinue = () => {
    if (!selectedDate || !selectedTime) {
      alert("Please select both a date and time.");
      return;
    }
    // Navigate to the next step (Patient's Condition)
    navigate(`/services/${serviceType}/book/${id}/patient-condition`);
  };

  const getSelectedDateDisplay = () => {
    if (!selectedDate) return "---";
    const selectedDateObj = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      selectedDate,
    );
    const dayName = dayNames[selectedDateObj.getDay()];
    const monthName = monthNames[currentDate.getMonth()];
    return `${dayName}, ${selectedDate}. ${monthName}`;
  };

  // Helper function to get mobile date options
  const getMobileDateOptions = () => {
    const today = new Date();
    const options = [];

    // Get all days from today for the next 30 days
    for (let i = 0; i < 30; i++) {
      const currentDay = new Date(today);
      currentDay.setDate(today.getDate() + i);

      const day = currentDay.getDate();
      const month = currentDay.getMonth();
      const year = currentDay.getFullYear();

      // Check if this day is available
      const dayAvailable =
        getAvailableDates().includes(day) && !isPastDate(day);
      const daySlots = dayAvailable ? getTimeSlots(day) : {};
      const availableCount = dayAvailable
        ? Object.values(daySlots)
            .flat()
            .filter((slot: any) => slot.available).length
        : 0;

      // Generate label
      let label = "";
      if (i === 0) {
        label = "Today";
      } else if (i === 1) {
        label = "Tomorrow";
      } else {
        label = dayNames[currentDay.getDay()].substring(0, 3);
      }

      options.push({
        day: day,
        label: label,
        date: `${day} ${monthNames[month].substring(0, 3)}`,
        available: dayAvailable,
        slotsCount: availableCount,
        fullDate: currentDay,
      });
    }

    return options;
  };

  const timeSlots = selectedDate ? getTimeSlots(selectedDate) : {};

  return (
    <div>
      <div className="bg-[#F2F2F2] lg:bg-white lg:rounded-[20px] lg:p-6 p-4 lg:shadow-md">
        <h1 className="text-2xl hidden lg:block font-semibold mb-6 text-gray-900">
          Select Time
        </h1>
        <div className="flex flex-col lg:flex-row bg-[#F2F2F2] lg:bg-white  lg:gap-6">
          {/* Calendar Section - Desktop */}
          <div className="hidden lg:block lg:w-96 w-full lg:border-r lg:pr-4 border-dashed">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => navigateMonth(-1)}
                disabled={isPreviousMonthDisabled()}
                className={`p-2 rounded-full transition-colors ${
                  isPreviousMonthDisabled()
                    ? "bg-primaryColor/10 text-[#BDC6C6] cursor-not-allowed"
                    : "bg-primaryColor text-white"
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <h2 className="text-lg font-medium text-primaryColor">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h2>
              <button
                onClick={() => navigateMonth(1)}
                className="p-2 rounded-full bg-primaryColor text-white transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <div className="grid grid-cols-7 gap-1 mb-2">
              {dayNames.map((day) => (
                <div
                  key={day}
                  className="text-center text-sm font-medium text-gray-700 py-2"
                >
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {calendarDays.map((day, index) => {
                if (!day) {
                  return <div key={index} className="w-12 h-12"></div>;
                }
                const isAvailable =
                  getAvailableDates().includes(day) && !isPastDate(day);
                const isSelected = selectedDate === day;
                const isToday =
                  day === new Date().getDate() &&
                  currentDate.getMonth() === new Date().getMonth() &&
                  currentDate.getFullYear() === new Date().getFullYear();
                const isPast = isPastDate(day);

                return (
                  <button
                    key={day}
                    onClick={() => handleDateSelect(day)}
                    disabled={!isAvailable}
                    className={`lg:w-12 lg:h-12 w-8 h-8 rounded-full text-lg font-medium transition-all duration-200 flex items-center justify-center ${
                      isSelected
                        ? "bg-primaryColor text-white shadow-md"
                        : isAvailable
                          ? "bg-primaryColor/10 text-primaryColor hover:bg-primaryColor/30"
                          : isPast
                            ? "text-[#BFC9C9] cursor-not-allowed "
                            : "text-[#BFC9C9] cursor-not-allowed "
                    } ${isToday && !isSelected ? "ring-2 ring-primaryColor/20" : ""}`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile Date Selection */}
          <div className="block lg:hidden mb-6">
            <h2 className="text-lg font-semibold mb-4 text-[#33384B]">
              Select Date
            </h2>
            <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
              {getMobileDateOptions().map((option, index) => (
                <button
                  key={index}
                  onClick={() =>
                    option.available && handleDateSelect(option.day)
                  }
                  disabled={!option.available}
                  className={`flex-shrink-0 rounded-[6px] p-2 min-w-[150px] text-center transition-all duration-200 ${
                    selectedDate === option.day
                      ? "bg-primaryColor text-white shadow-lg"
                      : option.available
                        ? "bg-white text-[#677294]  border border-[#6772941A]"
                        : "bg-[#D8D8D8] text-[#909090] cursor-not-allowed border border-[#6772941A]"
                  }`}
                >
                  <div className="flex flex-col">
                    <span
                      className={`text-[15px] font-medium text-center ${
                        selectedDate === option.day
                          ? "text-white"
                          : "text-gray-600"
                      }`}
                    >
                      {option.label}, {option.date}
                    </span>
                    <span
                      className={`text-[10px] mt-1 text-center ${
                        selectedDate === option.day
                          ? "text-white"
                          : option.available
                            ? "text-gray-500"
                            : "text-gray-400"
                      }`}
                    >
                      {option.available
                        ? `${option.slotsCount} slots available`
                        : "No slots available"}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Time Slots Section */}
          <div className="flex-1">
            <div className="mb-6">
              <h3 className="text-base text-center lg:text-start font-medium  mb-1">
                {getSelectedDateDisplay()}
              </h3>
              {/* {selectedDate && (
              <p className="text-sm text-gray-500">
                Select your preferred time slot
              </p>
            )} */}
            </div>
            {selectedDate ? (
              <div className="space-y-6">
                {Object.entries(timeSlots).map(
                  ([period, slots]: [
                    string,
                    { time: string; available: boolean }[],
                  ]) => (
                    <div key={period}>
                      <h4 className="text-sm font-medium text-[#333333] mb-3">
                        {period} {slots.filter((slot) => slot.available).length}{" "}
                        slots
                      </h4>
                      <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {slots.map(({ time, available }) => (
                          <button
                            key={time}
                            disabled={!available}
                            onClick={() => available && setSelectedTime(time)}
                            className={`py-3  text-sm font-medium rounded-sm lg:rounded-lg transition-all duration-200 ${
                              !available
                                ? "bg-[#D8D8D8] text-[#909090] cursor-not-allowed"
                                : selectedTime === time
                                  ? "bg-primaryColor text-white shadow-md"
                                  : "bg-white lg:bg-[#F7F7F7] text-primaryColor hover:bg-primaryColor/20 hover:shadow-sm"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  ),
                )}
              </div>
            ) : (
              <div className="flex items-center justify-center h-40 text-gray-400">
                <p>Please select a date to view available time slots</p>
              </div>
            )}
          </div>
        </div>
      </div>
      {[
        "home-health-care",
        "clinic-visit",
        "call",
        "video-call",
        "chat",
      ].includes(serviceType) && (
        <div className="my-8 lg:flex justify-end hidden">
          <button
            onClick={handleContinue}
            disabled={!selectedDate || !selectedTime}
            className={`py-3 px-10 w-[280px] rounded-[15px] font-medium transition-all
              ${selectedDate && selectedTime ? "bg-primaryColor text-white hover:shadow-lg" : "bg-primaryColor/90 text-white cursor-not-allowed"}
            `}
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
};

export default SelectDateAndTime;
