const BenefitsSkeleton = () => {
  return (
    <div className="mt-10 px-4">
      <div className="flex items-center mb-6">
        <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 mr-2"></div>
        <div className="h-8 w-40 rounded-full bg-gray-200 dark:bg-gray-700"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="rounded-xl p-5 bg-gray-100 dark:bg-gray-800/50 shadow animate-pulse"
          >
            <div className="w-12 h-12 rounded-lg bg-gray-200 dark:bg-gray-700 mb-4"></div>
            <div className="h-6 w-3/4 rounded-full bg-gray-200 dark:bg-gray-700 mb-3"></div>
            <div className="h-4 w-full rounded-full bg-gray-200 dark:bg-gray-700 mb-2"></div>
            <div className="h-4 w-5/6 rounded-full bg-gray-200 dark:bg-gray-700 mb-5"></div>
            <div className="h-10 w-24 rounded-lg bg-gray-200 dark:bg-gray-700"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsSkeleton;
