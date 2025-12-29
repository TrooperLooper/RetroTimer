import React from "react";
import { useLocation } from "react-router-dom";

const defaultAvatar = "/assets/user_default.jpeg";


export const CurrentUserBadge: React.FC = () => {
  const [user, setUser] = React.useState<any>(
    JSON.parse(localStorage.getItem("currentUser") || "null")
  );
  const location = useLocation();

  // Update user when route changes (covers navigation)
  React.useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("currentUser") || "null"));
  }, [location]);

  // Poll localStorage every 500ms as a fallback (covers same-tab changes)
  React.useEffect(() => {
    const interval = setInterval(() => {
      const stored = JSON.parse(localStorage.getItem("currentUser") || "null");
      setUser((prev: any) => {
        if (JSON.stringify(prev) !== JSON.stringify(stored)) {
          return stored;
        }
        return prev;
      });
    }, 500);
    return () => clearInterval(interval);
  }, []);

  if (!user) return null;

  return (
    <div className="flex flex-col items-center justify-end mr-4">
      <img
        src={
          user.profilePicture && user.profilePicture.trim()
            ? user.profilePicture
            : defaultAvatar
        }
        alt="Profile"
        className="w-10 h-10 rounded-full object-cover border border-gray-300"
      />
      <span className="text-xs mt-1 text-white/50 font-semibold text-center">
        {user.firstName} {user.lastName}
      </span>
    </div>
  );
};

export default CurrentUserBadge;
