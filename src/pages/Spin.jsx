import { useState } from "react";
import { Wheel } from "react-custom-roulette";
import confetti from "canvas-confetti";
import Button from "../components/Button";
import { Coins } from "lucide-react";

const SpinPage = ({ userCoins = 1200, setUserCoins }) => {


  const data = [
    { option: "50 Coins", value: 50 },
    { option: "100 Coins", value: 100 },
    { option: "Try Again", value: 0 },
    { option: "200 Coins", value: 200 },
    { option: "₦500 Airtime", value: "airtime500" },
    { option: "150 Coins", value: 150 },
    { option: "Try Again", value: 0 },
    { option: "300 Coins", value: 300 },
  ];

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [result, setResult] = useState(null);

  const handleSpinClick = () => {
    if (mustSpin) return;
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
    setResult(null);
  };

  const handleStopSpinning = () => {
    setMustSpin(false);
    const win = data[prizeNumber];
    setResult(win);

    if (typeof win.value === "number" && win.value > 0) {
      setUserCoins((prev) => prev + win.value);
      confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
    }

    if (win.value === "airtime500") {
      confetti({ particleCount: 120, spread: 90, origin: { y: 0.6 } });
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#7A7656] via-[#9A977F] to-yellow-100 overflow-hidden p-6 pb-20">
      {/* Animated glow background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)] animate-pulse"></div>
      </div>

      {/* Header */}
      <h1 className="text-4xl font-extrabold text-white mb-3 drop-shadow-lg">
        Spin the Wheel 🎡
      </h1>
      <p className="text-white/80 text-sm mb-8">
        Try your luck and win rewards!
      </p>

      {/* User balance display */}
      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-white mb-6 shadow-lg">
        <Coins size={18} className="text-yellow-400" />
        <span className="text-sm font-semibold">{userCoins} Coins</span>
      </div>

      {/* Wheel Container */}
      <div className="relative bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-2xl flex flex-col items-center border border-white/40">
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-72 h-72 bg-gradient-to-br from-[#7A7656] via-[#9A977F] to-yellow-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>

        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          backgroundColors={["#FACC15", "#4F46E5", "#2563EB", "#22C55E"]}
          textColors={["#000"]}
          onStopSpinning={handleStopSpinning}
          outerBorderColor="#fff"
          radiusLineColor="#fff"
          fontSize={14}
        />

        <Button
          onClick={handleSpinClick}
          disabled={mustSpin}
          className="mt-8 bg-yellow-400 text-black px-10 py-3 rounded-xl font-extrabold text-lg shadow-lg hover:scale-105 transition-all active:scale-95"
        >
          {mustSpin ? "Spinning..." : "SPIN NOW"}
        </Button>
      </div>

      {/* Result */}
      {result && (
        <div className="mt-8 bg-white/90 backdrop-blur-md rounded-2xl px-6 py-5 text-center shadow-2xl border border-white/50 animate-fadeIn">
          <p className="text-xl font-bold text-gray-800">
            {result.value === 0
              ? "😢 Better luck next time!"
              : result.value === "airtime500"
              ? "🎉 You won ₦500 Airtime!"
              : `🎉 You won ${result.value} Coins!`}
          </p>
        </div>
      )}

    </div>
  );
};

export default SpinPage;
