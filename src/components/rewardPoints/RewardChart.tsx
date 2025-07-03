// RewardChart.tsx
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

const RewardChart = ({ progress }: { progress: number | undefined }) => {
  const chartData = [
    {
      name: "Progress",
      value: progress,
      fill: "#465FFF",
    },
  ];

  return (
    <div className="relative w-40 h-40">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          innerRadius="80%"
          outerRadius="100%"
          data={chartData}
          startAngle={90}
          endAngle={-270}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            dataKey="value"
            cornerRadius={6}
            animationDuration={1500}
          />
        </RadialBarChart>
      </ResponsiveContainer>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold text-gray-900 dark:text-white/90"
        >
          {progress}%
        </motion.div>
        <div className="text-xs font-medium text-primary/80 dark:text-white">
          Your Progress
        </div>
      </div>
    </div>
  );
};

export default RewardChart;