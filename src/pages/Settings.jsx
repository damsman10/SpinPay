import { useState } from "react";
import Button from "../components/Button";
import { Bell, Moon, User, LogOut } from "lucide-react";

const SettingsPage = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-[#7A7656] via-[#9A977F] to-yellow-100 p-6">
      <h1 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">Settings</h1>

      <div className="w-full max-w-md bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30 p-6 space-y-6">
        {/* Account Section */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <User size={20} className="text-gray-700" />
            <span className="text-gray-800 font-semibold">Account</span>
          </div>
          <Button className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:scale-105 transition-all active:scale-95">
            Edit
          </Button>
        </div>

        {/* Notifications Toggle */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Bell size={20} className="text-gray-700" />
            <span className="text-gray-800 font-semibold">Notifications</span>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-yellow-400 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
          </label>
        </div>

        {/* Dark Mode Toggle */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Moon size={20} className="text-gray-700" />
            <span className="text-gray-800 font-semibold">Dark Mode</span>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-yellow-400 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
          </label>
        </div>

        {/* Logout */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LogOut size={20} className="text-gray-700" />
            <span className="text-gray-800 font-semibold">Logout</span>
          </div>
          <Button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:scale-105 transition-all active:scale-95">
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
