import React from "react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import notificationGif from "@/assets/images/notificationBell.gif";

type Notification = {
  date: string;
  subject: string;
  description: string;
};

const notifications: Notification[] = [
  {
    date: "13-05-2025",
    subject: "Notification Subject",
    description: "Lorem Ipsum simply Dummy Text",
  },
  {
    date: "13-05-2025",
    subject: "Notification Subject",
    description: "Lorem Ipsum simply Dummy Text",
  },
];

const NotificationsPage = () => {
  const navigate = useNavigate();

  const BackHeader = () => (
    <div
      onClick={() => navigate(-1)}
      className="md:hidden flex items-center p-4 bg-white cursor-pointer"
    >
      <button className="bg-[#EBEBEB99] w-[45px] h-[45px] grid place-content-center rounded-[15px]">
        <ChevronLeft className="mx-auto text-primaryColor" />
      </button>
      <span className="px-4 py-2 text-base font-bold text-primaryColor">
        Notifications
      </span>
    </div>
  );

  if (notifications.length === 0) {
    return (
      <div className="bg-[#F2F2F2] min-h-screen flex flex-col">
        <BackHeader />
        <div className="flex flex-col flex-1 items-center justify-center">
          <img
            className="w-48 h-52"
            src={notificationGif}
            alt="No notifications"
          />
          <p className="max-w-56 text-center mt-4">
            You currently do not have any notifications
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F2F2F2] min-h-screen">
      <BackHeader />
      <div className="px-4 mt-4 pb-6 overflow-y-auto h-[calc(100vh-93px)]">
        {notifications.map((notification, index) => (
          <div key={index} className="mb-6">
            <div className="mb-2 text-base font-medium">
              {notification.date}
            </div>
            <div className="bg-white border border-[#DADADA] rounded-lg p-3">
              <h4 className="text-base font-semibold mb-2">
                {notification.subject}
              </h4>
              <p className="text-[#6E7177]">{notification.description}</p>
              <div className="flex justify-between items-center mt-3">
                <button className="text-primaryColor border-none bg-transparent">
                  Read more
                </button>
                <p className="text-[#6E7177] text-xs">54 min ago</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsPage;
