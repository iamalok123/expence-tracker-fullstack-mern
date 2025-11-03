import React, { useContext } from "react";
import { SIDE_MENU_DATA } from "../../utils/data";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import CharAvatar from "../Cards/CharAvatar";

const SideMenu = ({ activeMenu }) => {
    const { user, clearUser } = useContext(UserContext)
    const navigate = useNavigate();

    // ✅ Fixed typo: handleLogout instead of handelLogout
    const handleLogout = () => {
        localStorage.clear();
        clearUser();
        navigate("/login");
    };

    const handleClick = (route) => {
        if (route === "logout") {
            handleLogout(); // ✅ updated name
            return;
        }
        navigate(route);
    };

    return (
        <div className="w-64 h-[calc(100vh-61px)] bg-white border-r border-gray-200/50 p-4 sticky top-[61px] z-20">
            <div className="flex flex-col items-center justify-center gap-3 mt-3 mb-5">
                {user?.profileImageUrl ? (
                    <img
                        src={user.profileImageUrl}
                        alt={`${user.fullName || "User"}'s Profile`}
                        className="w-20 h-20 bg-slate-400 rounded-full object-cover"
                    />
                ) : (
                    // // Added fallback default avatar
                    // <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-medium text-xl">
                    //     {user?.fullName ? user.fullName.charAt(0).toUpperCase() : "U"}
                    // </div>

                    // OR

                    // Component for default avatar if no avatar uploaded
                    <CharAvatar
                        fullName={user?.fullName}
                        width="w-20"
                        height="h-20"
                        style="text-xl"
                    />
                )}

                <h5 className="text-gray-700 font-medium leading-6 text-center">
                    {user?.fullName || "User"}
                </h5>
            </div>

            {SIDE_MENU_DATA.map((item, index) => (
                <button
                    key={`menu_${index}`}
                    className={`w-full flex items-center gap-4 text-[15px] py-3 px-6 rounded-lg mb-2 transition-colors ${
                        activeMenu === item.label
                        ? "bg-primary text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => handleClick(item.path)}
                >
                    <item.icon className="text-2xl" />
                    {item.label}
                </button>
            ))}
        </div>
    );
};

export default SideMenu;
