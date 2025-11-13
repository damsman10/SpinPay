// src/pages/Dashboard.jsx
import { useState } from "react";
import Header from "../components/Header";
import UserInfoCard from "../components/UserInfoCard";
import SpinCard from "../components/SpinCard";
import LatestWins from "../components/LatestWinsCard";
import MissionsCard from "../components/MissionsCard";
import LeaderboardCard from "../components/LeaderboardCard";

export default function Dashboard() {
  // Temporary demo data (to be replaced with Firebase later)
  const [user] = useState({ name: "Damilola Oni", phone: "+234 801 234 5678" });
  const [coins] = useState(1200);
  const [wallet] = useState(5400);
  const [referrals] = useState(15);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#7A7656] via-[#9A977F] to-yellow-100 flex flex-col items-center p-4 pb-24">
      {/* Header */}
      <Header user={user} />

      {/* User Info & Stats */}
      <UserInfoCard user={user} coins={coins} wallet={wallet} referrals={referrals} />

      {/* Spin Card */}
      <SpinCard spinsLeft={3} />

      {/* Recent Wins */}
      <LatestWins />

      {/* Missions / Tasks */}
      <MissionsCard />

      {/* Leaderboard */}
      <LeaderboardCard />

    </div>
  );
}
