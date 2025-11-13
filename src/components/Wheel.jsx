import { useState } from "react";
import { Coins, PhoneCall } from "lucide-react";

const rewards = [
  { label: "+100 Coins", type: "coins", amount: 100, color: "#FACC15" },
  { label: "₦200 Airtime", type: "airtime", amount: 200, color: "#4ADE80" },
  { label: "Try Again", type: "none", amount: 0, color: "#9CA3AF" },
  { label: "+500 Coins", type: "coins", amount: 500, color: "#FCD34D" },
  { label: "₦100 Airtime", type: "airtime", amount: 100, color: "#22C55E" },
  { label: "No Win", type: "none", amount: 0, color: "#A5B4FC" },
];

export default function Wheel({ onResult }) {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [result, setResult] = useState(null);

  const spin = () => {
    if (isSpinning) return;
    setIsSpinning(true);

    const randomIndex = Math.floor(Math.random() * rewards.length);
    const slice = 360 / rewards.length;
    const randomRotation =
      360 * 5 + (360 - randomIndex * slice - slice / 2); // random multiple spins

    setRotation(randomRotation);

    setTimeout(() => {
      const reward = rewards[randomIndex];
      setResult(reward);
      setIsSpinning(false);
      if (onResult) onResult(reward);
    }, 4000);
  };

  return (
    <div className="flex flex-col items-center text-center">
      {/* Wheel Container */}
      <div
        className="relative w-64 h-64 rounded-full border-[6px] border-white shadow-2xl overflow-hidden transition-transform duration-[4000ms] ease-out"
        style={{
          transform: `rotate(${rotation}deg)`,
        }}
      >
        {rewards.map((r, i) => (
          <div
            key={i}
            className="absolute w-1/2 h-1/2 origin-bottom-left"
            style={{
              backgroundColor: r.color,
              transform: `rotate(${(360 / rewards.length) * i}deg) skewY(-30deg)`,
            }}
          >
            <div
              className="absolute w-full text-xs font-semibold text-center text-black"
              style={{
                top: "30%",
                left: "70%",
                transform: "rotate(60deg)",
              }}
            >
              {r.label}
            </div>
          </div>
        ))}
      </div>

      {/* Pointer */}
      <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[20px] border-transparent border-b-yellow-400 -mt-2"></div>

      {/* Button */}
      <button
        onClick={spin}
        disabled={isSpinning}
        className={`mt-6 px-8 py-3 rounded-xl font-bold text-black transition transform hover:scale-105 shadow-lg ${
          isSpinning
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-yellow-400 hover:bg-yellow-300"
        }`}
      >
        {isSpinning ? "Spinning..." : "SPIN"}
      </button>

      {/* Result */}
      {result && (
        <div className="mt-6 p-4 bg-white/90 rounded-xl shadow-md backdrop-blur-md w-full max-w-xs">
          <h3 className="font-bold text-gray-800 mb-2">🎉 You got:</h3>
          <div className="flex items-center justify-center gap-2 text-lg font-semibold text-gray-700">
            {result.type === "coins" && <Coins className="text-yellow-500" />}
            {result.type === "airtime" && <PhoneCall className="text-green-500" />}
            <span>{result.label}</span>
          </div>
        </div>
      )}
    </div>
  );
}
