// components/RewardPointsSkeleton.tsx
const RewardPointsSkeleton = () => (
  <div className="rounded-3xl p-6 bg-gray-100/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 animate-pulse">
    <div className="flex flex-col lg:flex-row gap-8 items-center">
      <div className="w-48 h-48 rounded-full bg-gray-300/50 dark:bg-gray-700/50" />

      <div className="flex-1 w-full space-y-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gray-300/50 dark:bg-gray-700/50" />
            <div className="h-6 w-32 rounded-full bg-gray-300/50 dark:bg-gray-700/50" />
          </div>
          <div className="h-6 w-24 rounded-full bg-gray-300/50 dark:bg-gray-700/50" />
        </div>

        <div className="space-y-3">
          <div className="flex justify-between">
            <div className="h-4 w-20 rounded-full bg-gray-300/50 dark:bg-gray-700/50" />
            <div className="h-4 w-16 rounded-full bg-gray-300/50 dark:bg-gray-700/50" />
          </div>
          <div className="h-3 w-full rounded-full bg-gray-300/50 dark:bg-gray-700/50" />
          <div className="h-3 w-3/4 rounded-full bg-gray-300/50 dark:bg-gray-700/50" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="h-12 rounded-lg bg-gray-300/50 dark:bg-gray-700/50"
            />
          ))}
        </div>

        <div className="h-12 w-full rounded-xl bg-gray-300/50 dark:bg-gray-700/50 mt-4" />
      </div>
    </div>
  </div>
);

export default RewardPointsSkeleton;
