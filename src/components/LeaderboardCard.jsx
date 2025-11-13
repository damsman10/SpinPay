import { Users } from "lucide-react";

const LeaderboardCard = () => {
  const leaderboard = [
    { id: 1, name: "Damilola Oni", coins: 5400 },
    { id: 2, name: "Chinedu Okeke", coins: 4800 },
    { id: 3, name: "Funke Adebayo", coins: 4300 },
    { id: 4, name: "Tunde Balogun", coins: 3900 },
    { id: 5, name: "Ngozi Eze", coins: 3500 },
  ];

  return (
    <div className="w-full max-w-md mt-6 rounded-2xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-700 to-yellow-500 text-white flex items-center justify-between px-5 py-3">
        <div className="flex items-center gap-2">
          <Users size={22} />
          <h2 className="text-lg font-semibold">Leaderboard</h2>
        </div>
        <button className="text-white/80 text-sm hover:text-white transition">
          See All
        </button>
      </div>

      {/* List */}
      <div className="bg-white p-4 space-y-2">
        {leaderboard.map((user, idx) => (
          <div
            key={user.id}
            className="flex items-center justify-between p-3 rounded-xl shadow hover:scale-105 transition-transform duration-200"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-yellow-200 flex items-center justify-center font-bold text-yellow-800">
                {idx + 1}
              </div>
              <div>
                <p className="font-medium text-gray-900">{user.name}</p>
              </div>
            </div>
            <p className="font-semibold text-gray-800">{user.coins.toLocaleString()} Coins</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderboardCard;
