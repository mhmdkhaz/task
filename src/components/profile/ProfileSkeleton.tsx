import { motion } from "framer-motion";

const ProfileSkeleton = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="w-full rounded-3xl p-6 bg-white/70 dark:bg-gray-800/70 border border-white/30 dark:border-gray-700/50 shadow-xl backdrop-blur-sm"
  >
    {/* Header Skeleton */}
    <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
      <div className="relative h-28 w-28 rounded-2xl bg-gray-200/70 dark:bg-gray-700/70 animate-pulse" />
      <div className="flex-1 space-y-4">
        <div className="h-9 w-3/4 rounded-full bg-gray-200/70 dark:bg-gray-700/70 animate-pulse" />
        <div className="flex gap-3">
          <div className="h-8 w-24 rounded-full bg-gray-200/70 dark:bg-gray-700/70 animate-pulse" />
          <div className="h-8 w-32 rounded-full bg-gray-200/70 dark:bg-gray-700/70 animate-pulse" />
        </div>
      </div>
    </div>

    {/* Progress Skeleton */}
    <div className="mb-8 space-y-4">
      <div className="flex justify-between">
        <div className="h-6 w-40 rounded-full bg-gray-200/70 dark:bg-gray-700/70 animate-pulse" />
        <div className="h-6 w-16 rounded-full bg-gray-200/70 dark:bg-gray-700/70 animate-pulse" />
      </div>
      <div className="w-full h-3 rounded-full bg-gray-200/70 dark:bg-gray-700/70 animate-pulse" />
      <div className="flex justify-between">
        <div className="h-4 w-20 rounded-full bg-gray-200/70 dark:bg-gray-700/70 animate-pulse" />
        <div className="h-4 w-32 rounded-full bg-gray-200/70 dark:bg-gray-700/70 animate-pulse" />
      </div>
    </div>

    {/* Stats Grid Skeleton */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="p-4 rounded-xl bg-gray-200/50 dark:bg-gray-700/50 animate-pulse h-20" />
      ))}
    </div>

    {/* Button Skeleton */}
    <div className="w-full py-4 rounded-xl bg-gray-200/70 dark:bg-gray-700/70 animate-pulse" />
  </motion.div>
);

export default ProfileSkeleton;