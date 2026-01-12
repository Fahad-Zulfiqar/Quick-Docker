import { Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";

type NotificationsProps = {
  onClickPath?: string; // optional string prop
};

const NotificationBell = ({ onClickPath }: NotificationsProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClickPath) {
      navigate(onClickPath);
    }
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <div className="border p-2 rounded-[8px] border-[#EDEDED1A]">
        <Bell />
      </div>
    </div>
  );
};

export default NotificationBell;
