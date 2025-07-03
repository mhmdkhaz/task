// src/hooks/useBenefits.ts
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { QueryKeys } from "../utils/queryKeys";
import { claimBenefit, fetchBenefits } from "@/services/api";

export const useBenefits = () => {
  return useQuery({
    queryKey: [QueryKeys.BENEFITS],
    queryFn: fetchBenefits,
  });
};

export const useClaimBenefit = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: claimBenefit,
    onSuccess: (data) => {
      queryClient.setQueryData([QueryKeys.BENEFITS], data.benefits);
    },
  });
};
