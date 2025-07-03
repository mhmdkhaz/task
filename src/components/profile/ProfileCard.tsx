import { motion } from "framer-motion";
import {
  FiAward,
  FiGift,
  FiStar,
  FiUser,
  FiZap,
  FiChevronRight,
} from "react-icons/fi";
import { SiLevelsdotfyi } from "react-icons/si";
import { IoDiamondOutline } from "react-icons/io5";
import React from "react";

const ProfileCard = ({
  userProfile,
}: {
  userProfile: {
    id: string;
    name: string;
    avatar: string;
    level: number;
    xp: number;
    xpToNextLevel: number;
    joinDate: string;
  };
}) => {
  const levelNames = [
    "Newbie",
    "Bronze",
    "Silver",
    "Gold",
    "Platinum",
    "Diamond",
  ];
  const levelColors = [
    "bg-gray-400",
    "bg-amber-600",
    "bg-gray-300",
    "bg-yellow-400",
    "bg-blue-400",
    "bg-purple-400",
  ];
  const levelName = levelNames[userProfile.level] || "Member";
  const levelColor = levelColors[userProfile.level] || "bg-gray-400";
  const xpProgress = Math.round(
    (userProfile.xp / userProfile.xpToNextLevel) * 100
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full rounded-2xl p-5 bg-gradient-to-br from-white/95 to-white/90 dark:from-gray-800/95 dark:to-gray-900/95 border border-white/40 dark:border-gray-700/60 shadow-md backdrop-blur-sm"
    >
      {/* Header with Avatar and Basic Info */}
      <div className="flex flex-col md:flex-row items-start gap-5 mb-6">
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="relative group"
        >
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#465FFF] to-[#8A2BE2] opacity-0 group-hover:opacity-70 blur-sm transition-opacity duration-300" />
          <div className="relative h-20 w-20 rounded-xl overflow-hidden border-3 border-white/50 dark:border-gray-700/50 shadow">
            <img
              src={userProfile.avatar}
              alt={userProfile.name}
              className="h-full w-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/default-avatar.jpg";
              }}
            />
          </div>
          <div
            className={`absolute -bottom-2 -right-2 ${levelColor} rounded-full p-1.5 shadow border-2 border-white dark:border-gray-800`}
          >
            <SiLevelsdotfyi className="h-4 w-4 text-white" />
          </div>
        </motion.div>

        <div className="flex-1">
          <motion.h2
            whileHover={{ x: 1 }}
            className="text-xl font-semibold bg-gradient-to-r from-[#465FFF] to-[#8A2BE2] bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400"
          >
            {userProfile.name}
          </motion.h2>

          <div className="mt-2 flex flex-wrap gap-2">
            <motion.div
              whileHover={{ y: -1 }}
              className="flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-100/80 to-amber-50 dark:from-amber-900/30 dark:to-amber-800/20 text-amber-800 dark:text-amber-300 text-xs font-medium shadow-xs"
            >
              <FiAward className="mr-1.5 text-xs" />
              <span>{levelName} Tier</span>
            </motion.div>

            <motion.div
              whileHover={{ y: -1 }}
              className="flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-100/80 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/20 text-blue-800 dark:text-blue-300 text-xs font-medium shadow-xs"
            >
              <IoDiamondOutline className="mr-1.5 text-xs" />
              <span>
                Member since {new Date(userProfile.joinDate).getFullYear()}
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* XP Progress Section */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
            <div className="mr-2 p-1.5 rounded-md bg-gradient-to-br from-blue-500/10 to-indigo-500/10 dark:from-blue-400/10 dark:to-indigo-400/10">
              <FiZap className="text-blue-500 dark:text-blue-400 text-sm" />
            </div>
            <span>Progress to Next Level</span>
          </div>
          <span className="text-base font-semibold bg-gradient-to-r from-[#465FFF] to-[#8A2BE2] bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">
            {xpProgress}%
          </span>
        </div>

        <div className="relative w-full h-2 rounded-full bg-gray-200/80 dark:bg-gray-700/80 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${xpProgress}%` }}
            transition={{ duration: 1.5, type: "spring", bounce: 0.3 }}
            className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-[#465FFF] to-[#8A2BE2] shadow-inner"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 dark:to-black/10" />
        </div>

        <div className="flex justify-between mt-1.5 text-xs text-gray-600 dark:text-gray-400">
          <span>{userProfile.xp} XP</span>
          <span>
            {userProfile.xpToNextLevel - userProfile.xp} XP to next level
          </span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {[
          { value: "1,248", label: "Points Earned", icon: <FiStar /> },
          { value: "24", label: "Badges", icon: <FiAward /> },
          { value: "8", label: "Active Offers", icon: <FiGift /> },
          { value: "Gold", label: "Next Tier", icon: <IoDiamondOutline /> },
        ].map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -3 }}
            className="p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 border border-white/30 dark:border-gray-700/50 shadow-xs backdrop-blur-sm"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-gradient-to-br from-blue-100/50 to-indigo-100/50 dark:text-white dark:to-indigo-900/20">
                {React.cloneElement(stat.icon, { className: "text-xl" })}
              </div>
              <div>
                <div className="text-lg font-semibold text-gray-800 dark:text-white">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <motion.button
        whileHover={{
          scale: 1.02,
          boxShadow: "0 5px 15px rgba(70, 95, 255, 0.2)",
        }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-3 px-5 rounded-lg bg-gradient-to-r from-[#465FFF] to-[#8A2BE2] text-white font-medium flex items-center justify-center gap-2 shadow-md hover:shadow-sm transition-all text-sm"
      >
        <FiGift className="h-4 w-4" />
        <span>Explore Premium Benefits</span>
        <FiChevronRight className="h-4 w-4" />
      </motion.button>
    </motion.div>
  );
};

export default ProfileCard;
