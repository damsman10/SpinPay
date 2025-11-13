import { Coins, PhoneCall, Clock3, RotateCcw, Trophy } from "lucide-react";

const LatestWinsCard = ({ wins = [], onRefresh }) => {
  const sampleWins = [
    { id: 1, reward: 200, type: "coins", time: "2 mins ago" },
    { id: 2, reward: 100, type: "coins", time: "10 mins ago" },
    { id: 3, reward: 50, type: "airtime", time: "1 hour ago" },
    { id: 4, reward: 500, type: "coins", time: "3 hours ago" },
  ];

  const latestWins = wins.length > 0 ? wins : sampleWins;

  return (
    <div className="w-full max-w-md mt-4 mb-20">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 bg-gradient-to-r from-gray-900/80 to-gray-800/80 rounded-t-2xl">
        <div className="flex items-center gap-2 text-white">
          <Trophy size={22} className="text-yellow-400" />
          <h2 className="text-lg font-semibold tracking-wide">Latest Wins</h2>
        </div>
        <button
          onClick={onRefresh}
          className="text-white/70 text-sm flex items-center gap-1 hover:text-white transition"
        >
          <RotateCcw size={16} /> Refresh
        </button>
      </div>

      {/* List */}
      <div className="bg-[#131c2b] rounded-b-2xl shadow-lg overflow-hidden">
        {latestWins.map((win) => (
          <div
            key={win.id}
            className="flex items-center justify-between p-4 hover:bg-gray-800 transition rounded-b-lg"
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  win.type === "coins" ? "bg-yellow-400/20" : "bg-green-400/20"
                }`}
              >
                {win.type === "coins" ? (
                  <Coins className="text-yellow-400" size={20} />
                ) : (
                  <PhoneCall className="text-green-400" size={20} />
                )}
              </div>

              <div>
                <p className="font-medium text-white">
                  {win.type === "coins"
                    ? `+${win.reward} Coins`
                    : `₦${win.reward} Airtime`}
                </p>
                <div className="flex items-center gap-1 text-xs text-white/60">
                  <Clock3 size={12} /> <span>{win.time}</span>
                </div>
              </div>
            </div>
            <span className="text-yellow-400 font-bold text-sm">✔</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestWinsCard;
