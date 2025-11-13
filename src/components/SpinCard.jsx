import { Link } from "react-router-dom";
import wheelbg from "../assets/wheelbg.jpg";
import { RotateCcw } from "lucide-react";

const SpinCard = ({ spinsLeft = 3 }) => {
  return (
    <div className="w-full max-w-md relative rounded-3xl overflow-hidden shadow-xl mt-4">
      {/* Background Image */}
      <img
        src={wheelbg}
        alt="Spin background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-yellow-700/40 backdrop-blur-xs"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between px-6 py-8">
        {/* Left: Info */}
        <div className="flex flex-col justify-center text-white">
          <p className="text-6xl font-extrabold leading-none drop-shadow-lg">
            {spinsLeft.toString().padStart(2, "0")}
          </p>
          <p className="text-sm uppercase tracking-wider text-white/80 mt-1">
            Spins Left Today
          </p>
          <p className="text-base mt-2 text-white/90 font-medium">
            Spin the Wheel & Win
          </p>
        </div>

        {/* Right: Button */}
        <Link
          to="/spin"
          className="bg-gradient-to-r from-yellow-600 to-yellow-400 text-black font-bold px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition flex items-center gap-2"
        >
          <RotateCcw size={20} />
          SPIN
        </Link>
      </div>
    </div>
  );
};

export default SpinCard;
