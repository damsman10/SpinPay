import { CheckCircle, RotateCcw } from "lucide-react";

const MissionsCard = () => {
  const tasks = [
    { id: 1, title: "Spin the Wheel 3 times", progress: 2, goal: 3, reward: 1 },
    { id: 2, title: "Refer a Friend", progress: 1, goal: 1, reward: 2 },
    { id: 3, title: "Play Daily Quiz", progress: 0, goal: 1, reward: 1 },
  ];

  return (
    <div className="w-full max-w-md mt-6 rounded-2xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-700 to-yellow-500 text-white flex items-center justify-between px-5 py-3">
        <h2 className="text-lg font-semibold">Missions</h2>
        <button className="text-white/80 text-sm hover:text-white transition flex items-center gap-1">
          <RotateCcw size={16} /> Refresh
        </button>
      </div>

      {/* Task List */}
      <div className="bg-white p-4 space-y-3">
        {tasks.map((task) => {
          const isComplete = task.progress >= task.goal;
          return (
            <div
              key={task.id}
              className={`flex items-center justify-between p-3 rounded-xl shadow hover:scale-105 transition-transform duration-200 ${
                isComplete ? "bg-yellow-50" : "bg-gray-50"
              }`}
            >
              <div>
                <p className="font-medium text-gray-900">{task.title}</p>
                <p className="text-xs text-gray-500">
                  {task.progress} / {task.goal} completed
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold">
                  +{task.reward} Spin
                </span>
                {isComplete && <CheckCircle size={20} className="text-green-500" />}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MissionsCard;
