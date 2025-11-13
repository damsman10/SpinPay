// src/components/NavBottom.jsx
import { Link, useLocation } from "react-router-dom";
import {
  Coins,
  Wallet,
  Gift,
  Home,
  Settings,
} from "lucide-react";

export default function NavBottom() {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { path: "/dashboard", label: "Home", icon: Home },
    { path: "/spin", label: "Spin", icon: Coins },
    { path: "/wallet", label: "Wallet", icon: Wallet },
    { path: "/referral", label: "Referrals", icon: Gift },
    { path: "/settings", label: "Settings", icon: Settings },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 text-white shadow-[0_-2px_10px_rgba(0,0,0,0.2)] flex justify-around py-2 text-xs font-medium rounded-t-2xl backdrop-blur-md z-50">
      {navItems.map(({ path, label, icon: Icon }) => {
        const active = currentPath === path;

        return (
          <Link
            key={path}
            to={path}
            className={`flex flex-col items-center justify-center transition-transform duration-200 ${
              active ? "scale-110 text-white" : "text-white/70 hover:text-white"
            }`}
          >
            <div
              className={`p-2 rounded-full ${
                active
                  ? "bg-white/25 shadow-md"
                  : "bg-transparent"
              }`}
            >
              <Icon
                size={22}
                className={`transition-all duration-200 ${
                  active ? "fill-yellow-200 text-yellow-50 drop-shadow-md" : ""
                }`}
              />
            </div>
            <span className={`mt-0.5 ${active ? "font-semibold" : "font-normal"}`}>
              {label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
