import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { useNavigate } from "react-router-dom";
import vector from "@/assets/images/Texture.svg";
import call from "@/assets/images/call-icon.png";
import NotificationBell from "@/components/common/NotificationBell";

const Calendar = () => {
  //   const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);

  // Mock data for appointments
  const Appointments = [
    {
      id: 1,
      type: "Doctor Call",
      appointmentType: "doctor-video-call",
      doctor: "Dr. Mohammad Ahmad",
      specialty: "Gynecologist",
      time: "02:00 PM",
      statusType: "in progress",
    },
    {
      id: 2,
      type: "Doctor Call",
      appointmentType: "doctor-video-call",
      doctor: "Dr. Mohammad Ahmad",
      specialty: "Gynecologist",
      time: "02:00 PM",
      statusType: "in progress",
    },
    {
      id: 3,
      type: "Doctor Call",
      appointmentType: "doctor-video-call",
      doctor: "Dr. Mohammad Ahmad",
      specialty: "Gynecologist",
      time: "02:00 PM",
      statusType: "in progress",
    },
    {
      id: 4,
      type: "Doctor Call",
      appointmentType: "doctor-video-call",
      doctor: "Dr. Mohammad Ahmad",
      specialty: "Gynecologist",
      time: "02:00 PM",
      statusType: "in progress",
    },
  ];
  const nextAppointments = [
    {
      id: 1,
      type: "Doctor Call",
      appointmentType: "doctor-video-call",
      doctor: "Dr. Mohammad Ahmad",
      specialty: "Gynecologist",
      date: "20-10-2023",
      time: "02:00 PM",
      statusType: "in progress",
    },
    {
      id: 2,
      type: "Doctor Call",
      appointmentType: "doctor-video-call",
      doctor: "Dr. Mohammad Ahmad",
      specialty: "Gynecologist",
      date: "20-10-2023",
      time: "02:00 PM",
      statusType: "in progress",
    },
    {
      id: 3,
      type: "Doctor Call",
      appointmentType: "doctor-video-call",
      doctor: "Dr. Mohammad Ahmad",
      specialty: "Gynecologist",
      date: "20-10-2023",
      time: "02:00 PM",
      statusType: "in progress",
    },
    {
      id: 4,
      type: "Doctor Call",
      appointmentType: "doctor-video-call",
      doctor: "Dr. Mohammad Ahmad",
      specialty: "Gynecologist",
      date: "20-10-2023",
      time: "02:00 PM",
      statusType: "in progress",
    },
  ];

  const comingAppointments = [
    {
      id: 5,
      type: "Doctor Call",
      appointmentType: "doctor-video-call",
      doctor: "Dr. Mohammad Ahmad",
      specialty: "Gynecologist",
      date: "20-10-2023",
      time: "02:00 PM",
      statusType: "in progress",
    },
    {
      id: 6,
      type: "Doctor Call",
      appointmentType: "doctor-video-call",
      doctor: "Dr. Mohammad Ahmad",
      specialty: "Gynecologist",
      date: "20-10-2023",
      time: "02:00 PM",
      statusType: "in progress",
    },
    {
      id: 7,
      type: "Doctor Call",
      appointmentType: "doctor-video-call",
      doctor: "Dr. Mohammad Ahmad",
      specialty: "Gynecologist",
      date: "20-10-2023",
      time: "02:00 PM",
      statusType: "in progress",
    },
    {
      id: 8,
      type: "Doctor Call",
      appointmentType: "doctor-video-call",
      doctor: "Dr. Mohammad Ahmad",
      specialty: "Gynecologist",
      date: "20-10-2023",
      time: "02:00 PM",
      statusType: "in progress",
    },
  ];

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
    if (day && !isPastDate(day)) {
      setSelectedDate(day);
    }
  };
  interface ChildProps {
    appointment: {
      id: number;
      type: string;
      appointmentType: string;
      doctor: string;
      specialty: string;
      date?: string;
      time: string;
      statusType: string;
    };
    upcoming?: boolean;
  }

  const AppointmentCard = ({ appointment, upcoming }: ChildProps) => (
    <div
      onClick={() =>
        navigate(`/detail/${appointment?.appointmentType}`, {
          state: appointment,
        })
      }
      className={`bg-white rounded-[8px] shadow-md    hover:shadow-lg transition-shadow cursor-pointer ${upcoming ? "border border-[#ECECEC]" : ""}`}
    >
      <div className="flex items-start border-b justify-between p-4 mb-3 ">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 flex items-center justify-center">
            <img src={call} alt="" className="w-6 h-6" />
          </div>
          <h3 className="text-sm font-semibold text-gray-900">
            {appointment.type}
          </h3>
        </div>
        <span
          className={`bg-[#F6D060] text-white text-xs font-medium px-2.5 py-1 rounded-full ${upcoming ? "hidden" : ""}`}
        >
          {appointment.statusType}
        </span>
      </div>

      <div className="space-y-1 p-4 pt-0">
        <p className="text-sm font-medium text-[#333333]">
          {appointment.doctor}
        </p>
        <p className="text-xs text-[#9B9B9B]">{appointment.specialty}</p>

        <div className="flex items-center gap-4 pt-2">
          {appointment.date && (
            <div className="flex items-center gap-1 text-xs text-[#9B9B9B]">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span>{appointment.date}</span>
            </div>
          )}
          {appointment.time && (
            <div
              className={`flex items-center gap-1 text-xs ${upcoming ? "text-primaryColor font-semibold" : "text-[#9B9B9B]"}`}
            >
              <Clock size={12} />
              <span>{appointment.time}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className=" bg-[#F2F2F2]">
      {/* Sub header */}
      <div className="bg-primaryColor hidden lg:block py-10 text-white relative">
        <div className="max-w-[1160px]  mx-auto">
          <div
            className="inline-flex cursor-pointer hover:underline text-base items-center absolute top-[20%] lg:top-[50%] translate-y-[-50%]"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft size={20} />
            Back
          </div>

          <p className="text-center text-5xl">Calendar</p>
          <img src={vector} className="absolute right-0 top-0 h-32 w-auto" />
        </div>
      </div>

      <div
        // onClick={() => navigate(-1)}
        className="flex items-center justify-between gap-4 py-4 bg-white  lg:hidden p-3"
      >
        {/* <div className="bg-[#EBEBEB99] text-primaryColor rounded-[15px] flex justify-center items-center w-[45px] h-[45px]">
          <ChevronLeft size={20} />
        </div> */}
        <p className="font-bold text-base text-primaryColor">Calendar</p>
        <NotificationBell onClickPath="/notifications" />
      </div>

      {/* Content Section */}
      <div className="max-w-[1160px]  mx-auto px-4 py-8">
        {/* Next Appointment Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Next Appointment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {nextAppointments.map((appointment) => (
              <AppointmentCard key={appointment.id} appointment={appointment} />
            ))}
          </div>
        </div>

        {/* Coming Next Appointment Section */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Coming Next Appoint
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {comingAppointments.map((appointment) => (
              <AppointmentCard key={appointment.id} appointment={appointment} />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#F2F2F2] lg:bg-white    mx-auto  py-8 ">
        {/* Calendar Section */}
        <div className="sm:flex gap-10  max-w-[1160px] mx-auto">
          <div className=" max-w-xl lg:border-r lg:pr-10 ">
            <div className="flex items-center bg-primaryColor lg:bg-white py-4 lg:py-0 justify-between mb-6">
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
              <h2 className="text-lg font-medium text-white lg:text-primaryColor">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h2>
              <button
                onClick={() => navigateMonth(1)}
                className="p-2 rounded-full bg-primaryColor text-white transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <div className="grid grid-cols-7 gap-1 mb-2 px-8 lg:px-0">
              {dayNames.map((day) => (
                <div
                  key={day}
                  className="text-center text-sm font-medium text-gray-700 py-2"
                >
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1 px-8 lg:px-0 bg-white py-2 lg:py-0">
              {calendarDays.map((day, index) => {
                if (!day) {
                  return <div key={index} className="w-12 h-12"></div>;
                }
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
                    className={`lg:w-[40px] lg:h-[40px] w-8 h-8 rounded-full text-sm font-medium transition-all duration-200 flex items-center justify-center ${
                      isSelected
                        ? "bg-primaryColor text-white shadow-md"
                        : isPast
                          ? "text-[#BFC9C9] cursor-not-allowed "
                          : ""
                    } ${isToday && !isSelected ? "ring-2 ring-primaryColor/20" : ""}`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="w-full bg-[#F2F2F2] lg:bg-white px-3 mt-4 sm:mt-0">
            {selectedDate && (
              <div className="mb-4 flex items-center justify-between px-4">
                <p className="text-lg font-semibold p-1 ">{`${selectedDate} ${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`}</p>
                {Appointments.length}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 bg-[#F2F2F2] lg:bg-white px-3 lg:px-0  lg:grid-cols-2 gap-4 lg:!pt-4 sm:mt-0">
              {Appointments?.map((appointment) => (
                <AppointmentCard
                  key={appointment.id}
                  appointment={appointment}
                  upcoming={true}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Dialog remains the same */}
      {/* <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/50 data-[state=open]:animate-overlayShow fixed inset-0" />
          <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 max-h-[85vh] w-[90vh] max-w-xs rounded-xl -translate-x-1/2 -translate-y-1/2 bg-white p-6 shadow-lg focus:outline-none">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <Dialog.Title className="text-xl font-bold text-gray-900 mb-2">
                Are you sure?
              </Dialog.Title>
              <Dialog.Description className="text-sm text-gray-600 mb-6">
                Are you sure you choose this service modal for sos buttons?
              </Dialog.Description>
              <div className="flex flex-col w-full gap-3">
                <Dialog.Close asChild>
                  <button
                    onClick={() => setOpen(false)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-600 transition-colors"
                  >
                    Yes I'm Sure
                  </button>
                </Dialog.Close>
                <Dialog.Close asChild>
                  <button
                    onClick={() => setOpen(false)}
                    className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                  >
                    Cancel
                  </button>
                </Dialog.Close>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root> */}
    </div>
  );
};

export default Calendar;
