// RewardLinearProgress.tsx
import { motion } from "framer-motion";

const RewardLinearProgress = ({ 
  progress, 
  currentPoints,
  maxPoints
}: { 
  progress: number | undefined;
  currentPoints: number;
  maxPoints: number;
}) => (
  <div className="space-y-1.5">
    <div className="flex justify-between text-xs">
      <span className="text-gray-600/90 dark:text-gray-300/90">{currentPoints} Points</span>
      <span className="font-medium text-primary/90 dark:text-white">
        {progress}% Complete
      </span>
    </div>

    <div className="relative h-2 w-full rounded-full overflow-hidden">
      <div className="absolute inset-0 bg-gray-200/80 dark:bg-gray-700/80" />
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 h-full bg-gradient-to-r from-[#5a67bf]/90 to-[#465FFF]/90 dark:to-indigo-400/90 rounded-full"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent via-white/10 dark:via-black/5" />
    </div>

    <div className="text-[0.65rem] text-gray-500/80 dark:text-gray-400/80">
      You need {maxPoints - currentPoints} more points to reach your goal ({maxPoints} points)
    </div>
  </div>
);

export default RewardLinearProgress;