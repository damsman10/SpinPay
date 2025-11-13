import { useState } from "react";
import Button from "../components/Button";
import { Copy, Users } from "lucide-react";

const Referral = ({ referralCode = "ABC123", referrals = [] }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-[#7A7656] via-[#9A977F] to-yellow-100 p-6">
      <h1 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">Referral Program</h1>

      {/* Referral Code */}
      <div className="flex items-center justify-between w-full max-w-md bg-white/90 backdrop-blur-md border border-white/30 px-6 py-4 rounded-xl shadow-lg mb-8">
        <span className="text-lg font-semibold text-gray-800">Code: {referralCode}</span>
        <Button
          onClick={handleCopy}
          className="flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:scale-105 transition-all active:scale-95"
        >
          <Copy size={16} />
          {copied ? "Copied!" : "Copy"}
        </Button>
      </div>

      {/* Referred Friends */}
      <div className="w-full max-w-md bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30 p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Users size={20} /> My Referrals
        </h2>

        {referrals.length === 0 ? (
          <p className="text-gray-600 text-center">You haven’t referred anyone yet.</p>
        ) : (
          <ul className="space-y-3">
            {referrals.map((friend, index) => (
              <li
                key={index}
                className="flex justify-between p-3 rounded-lg bg-green-100/50"
              >
                <span className="font-medium text-gray-800">{friend.name}</span>
                <span className="font-bold text-gray-900">{friend.coins} Coins</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Referral;
