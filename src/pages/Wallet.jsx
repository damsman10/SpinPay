import { useState } from "react";
import Button from "../components/Button";
import { Coins } from "lucide-react";

const Wallet = ({ userCoins = 1200, setUserCoins }) => {
  const [transactions, setTransactions] = useState([
    { id: 1, type: "Credit", amount: 500, desc: "Won from Spin Wheel" },
    { id: 2, type: "Debit", amount: 200, desc: "Airtime purchase" },
  ]);

  const handleAddCoins = () => {
    const amount = 100; // example add coins
    setUserCoins((prev) => prev + amount);
    setTransactions((prev) => [
      { id: prev.length + 1, type: "Credit", amount, desc: "Added Coins" },
      ...prev,
    ]);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-[#7A7656] via-[#9A977F] to-yellow-100 p-6">
      <h1 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">My Wallet</h1>

      {/* Coin Balance */}
      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full text-white mb-8 shadow-lg">
        <Coins size={20} className="text-yellow-400" />
        <span className="text-lg font-semibold">{userCoins} Coins</span>
      </div>

      {/* Add Coins Button */}
      <Button
        onClick={handleAddCoins}
        className="mb-8 bg-yellow-400 text-black px-8 py-3 rounded-xl font-bold shadow-lg hover:scale-105 transition-all active:scale-95"
      >
        Add 100 Coins
      </Button>

      {/* Transactions */}
      <div className="w-full max-w-md bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30 p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Transactions</h2>
        {transactions.length === 0 && (
          <p className="text-gray-600 text-center">No transactions yet.</p>
        )}
        <ul className="space-y-3">
          {transactions.map((tx) => (
            <li
              key={tx.id}
              className={`flex justify-between p-3 rounded-lg ${
                tx.type === "Credit" ? "bg-green-100/50" : "bg-red-100/50"
              }`}
            >
              <span className="font-medium text-gray-800">{tx.desc}</span>
              <span className="font-bold text-gray-900">
                {tx.type === "Credit" ? "+" : "-"}
                {tx.amount} Coins
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Wallet;
