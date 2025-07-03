import { motion } from "framer-motion";

type Benefit = {
  id: string;
  title: string;
  icon: string;
  description: string;
  cta: string;
  isClaimed: boolean;
};

const BenefitCard = ({
  benefit,
  index,
  onClaim,
}: {
  benefit: Benefit;
  index: number;
  onClaim: (id: string) => void;
}) => {
  const colorMap = [
    { light: "from-blue-400 to-blue-600", dark: "dark:from-blue-500 dark:to-blue-700" },
    { light: "from-green-400 to-green-600", dark: "dark:from-green-500 dark:to-green-700" },
    { light: "from-purple-400 to-purple-600", dark: "dark:from-purple-500 dark:to-purple-700" },
    { light: "from-amber-400 to-amber-600", dark: "dark:from-amber-500 dark:to-amber-700" },
    { light: "from-pink-400 to-pink-600", dark: "dark:from-pink-500 dark:to-pink-700" },
    { light: "from-indigo-400 to-indigo-600", dark: "dark:from-indigo-500 dark:to-indigo-700" },
  ];

  const colors = colorMap[index % colorMap.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={`bg-gradient-to-br ${colors.light} ${colors.dark} 
        rounded-xl p-5 shadow-lg overflow-hidden relative group
        hover:shadow-xl transition-all duration-300`}
    >
      <div className="absolute -right-5 -top-5 w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm"></div>
      <div className="absolute -left-5 -bottom-5 w-16 h-16 rounded-full bg-white/5 backdrop-blur-sm"></div>

      <div className="relative z-10 h-full flex flex-col">
        <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 text-white text-3xl">
          {benefit.icon}
        </div>

        <h4 className="text-xl font-bold text-white mb-2">{benefit.title}</h4>
        <p className="text-white/90 mb-5 text-sm flex-grow">
          {benefit.description}
        </p>

        {benefit.isClaimed ? (
          <div className="px-4 py-2 bg-white/30 backdrop-blur-sm rounded-lg text-white text-sm font-medium text-center">
            Claimed
          </div>
        ) : (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onClaim(benefit.id)}
            className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white text-sm font-medium 
                      hover:bg-white/30 transition-all w-fit"
          >
            {benefit.cta}
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default BenefitCard;