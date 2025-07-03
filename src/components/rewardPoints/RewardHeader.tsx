// RewardHeader.tsx
import { FiAward } from "react-icons/fi";

const RewardHeader = () => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <div className="p-1.5 rounded-lg bg-primary/10 dark:bg-primary/20">
        <FiAward className="w-6 h-6 text-amber-400" />
      </div>
      <h3 className="text-md font-semibold text-[#465FFF] dark:text-white/90">
        Reward Points
      </h3>
    </div>

    <div className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary dark:bg-primary/20 dark:text-white">
      Tier: Platinum
    </div>
  </div>
);

export default RewardHeader;