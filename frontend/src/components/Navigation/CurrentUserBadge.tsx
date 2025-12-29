import React from "react";

const defaultAvatar = "/assets/user_default.jpeg";

export const CurrentUserBadge: React.FC = () => {
  const [user, setUser] = React.useState<any>(
    JSON.parse(localStorage.getItem("currentUser") || "null")
  );

  React.useEffect(() => {
    const handleStorage = () => {
      setUser(JSON.parse(localStorage.getItem("currentUser") || "null"));
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
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
