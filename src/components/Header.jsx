import { Bell, Headphones } from "lucide-react";

const Header = ({ user }) => {
  const firstName = user?.name?.split(" ")[0] || "User";

  return (
    <header className="w-full max-w-md flex items-center justify-between px-4 py-2 text-white mt-1 mb-2">
      {/* Left: Avatar + Greeting */}
      <div className="flex items-center gap-3">
        {/* Avatar image */}
        <img
          src={user?.avatar || "/avatar-gold.png"} // fallback image
          alt="User avatar"
          className="w-10 h-10 rounded-full bg-white object-cover border-2 border-white/20"
        />

        {/* Greeting on one line */}
        <h2 className="text-base font-semibold">
          Hi, <span className="uppercase">{firstName}</span>
        </h2>
      </div>

      {/* Right: Icons directly on background */}
      <div className="flex items-center gap-4">
        <button className="active:scale-90 transition-transform">
          <Headphones size={22} className="text-white" />
        </button>
        <button className="relative active:scale-90 transition-transform">
          <Bell size={22} className="text-white" />
          {/* notification dot */}
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
