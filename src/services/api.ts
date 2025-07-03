// src/services/api.ts

import { mockBenefits, mockRewards, mockUserProfile } from "@/mocks/data";

export const fetchUserProfile = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return mockUserProfile;
};

export const fetchBenefits = async () => {
  await new Promise((resolve) => setTimeout(resolve, 700));
  return mockBenefits;
};

export const fetchRewards = async () => {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return mockRewards;
};

export const claimBenefit = async (benefitId: string) => {
  await new Promise((resolve) => setTimeout(resolve, 400));
  // Find the benefit and mark it as claimed
  const updatedBenefits = mockBenefits.map((benefit) =>
    benefit.id === benefitId ? { ...benefit, isClaimed: true } : benefit
  );
  return { success: true, benefitId, benefits: updatedBenefits };
};
