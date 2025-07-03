// components/BenefitsSection.tsx
import { motion } from "framer-motion";
import { FiGift } from "react-icons/fi";
import BenefitsSkeleton from "@/components/benfit/BenefitsSkeleton";
import BenefitCard from "@/components/benfit/BenefitCard";
import { useBenefits, useClaimBenefit } from "@/hooks/useBenefits.ts";


const BenefitsSection = () => {
  const { data: benefits, isLoading, isError } = useBenefits();
  const { mutate: claimBenefit } = useClaimBenefit();

  if (isLoading) return <BenefitsSkeleton />;
  if (isError) return <div>Error loading benefits</div>;

  const handleClaim = (benefitId: string) => {
    claimBenefit(benefitId);
  };

  return (
    <div className="mt-8 px-4">
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-lg font-bold text-gray-800 dark:text-white mb-6 flex items-center"
      >
        <FiGift className="mr-2 text-[#f59e0b]" />
        Your Membership Benefits
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {benefits && benefits.map((benefit: any, index: any) => (
          <BenefitCard 
            key={benefit.id} 
            benefit={benefit} 
            index={index}
            onClaim={handleClaim}
          />
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection;