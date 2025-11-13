import { Repeat, Users, Coins } from "lucide-react";

const UserInfoCard = () => {
  // Dummy values
  const wallet = 5400;
  const coins = 1200; // Added coins
  const dailySpinsLeft = 3;
  const referrals = 12;
  const lifetimeSpins = 120;

  const stats = [
    {
      icon: <Repeat size={24} className="text-yellow-400 mb-1" />,
      label: "Daily Spins",
      value: `${dailySpinsLeft} / 3`,
    },
    {
      icon: <Users size={24} className="text-yellow-400 mb-1" />,
      label: "Referrals",
      value: referrals,
    },
    {
      icon: <Coins size={24} className="text-yellow-400 mb-1" />,
      label: "Lifetime Spins",
      value: lifetimeSpins,
    },
  ];

  return (
    <div className="w-full max-w-md mb-5">
      {/* Balance Header Card */}
      <div className="bg-gradient-to-r from-yellow-700 to-yellow-500 text-white rounded-xl p-6 min-h-[140px] shadow-md flex justify-between items-center">
        <div>
          <p className="text-xs font-medium opacity-90 mb-2">Available Balance</p>
          <h2 className="text-3xl font-bold tracking-wide">₦{wallet.toLocaleString()}</h2>
          <p className="text-sm font-medium mt-1 flex items-center gap-1">
            <Coins size={16} /> {coins.toLocaleString()} Coins
          </p>
        </div>
        <div className="flex flex-col items-end gap-3">
          <button className="text-[12px] bg-white/20 hover:bg-white/30 transition px-4 py-2 rounded-full">
            Win History
          </button>
          <button className="text-[12px] bg-black/60 hover:bg-black/30 text-white transition px-4 py-2 rounded-full">
            How To Play
          </button>
        </div>
      </div>

      {/* Stats Row (Three Small Cards) */}
      <div className="grid grid-cols-3 gap-3 mt-4">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-[#131c2b] rounded-2xl p-4 flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform duration-200"
          >
            {stat.icon}
            <p className="text-white font-extrabold text-lg mt-1">{stat.value}</p>
            <span className="text-xs text-white/70">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserInfoCard;
