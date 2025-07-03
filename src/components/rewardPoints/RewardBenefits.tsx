// RewardBenefits.tsx
import { motion } from "framer-motion";
import { FiZap } from "react-icons/fi";

const RewardBenefits = () => {
  const benefits = [
    "Free Shipping",
    "Exclusive Discounts",
    "Free Gifts",
    "Early Access",
  ];

  return (
    <div className="grid grid-cols-2 gap-2">
      {benefits.map((benefit, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -1 }}
          className="flex items-center gap-1.5 p-2 rounded-md bg-gray-50/80 dark:bg-gray-800/90 hover:bg-gray-100 dark:hover:bg-gray-700/90 transition-colors"
        >
          <div className="p-0.5 rounded-full bg-primary/10 dark:bg-primary/20">
            <FiZap className="w-3.5 h-3.5 text-amber-400" />
          </div>
          <span className="text-xs text-gray-700 dark:text-gray-200/90">
            {benefit}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default RewardBenefits;