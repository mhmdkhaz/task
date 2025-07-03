// RedeemButton.tsx
import { motion } from "framer-motion";
import { FiGift, FiChevronRight } from "react-icons/fi";

const RedeemButton = () => (
  <motion.button
    whileHover={{ scale: 1.01 }}
    whileTap={{ scale: 0.99 }}
    className="w-full mt-3 py-2.5 px-5 rounded-lg flex items-center justify-between bg-gradient-to-r from-[#5a67bf] to-[#465FFF] hover:from-primary/90 hover:to-indigo-500 text-white font-medium text-sm shadow-md transition-all"
  >
    <span className="flex items-center gap-1.5">
      <FiGift className="w-4 h-4" />
      Redeem Points
    </span>
    <FiChevronRight className="w-4 h-4" />
  </motion.button>
);

export default RedeemButton;