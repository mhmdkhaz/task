// src/hooks/useRewards.ts
import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "../utils/queryKeys";
import { fetchRewards } from "@/services/api";

export const useRewards = () => {
  return useQuery({
    queryKey: [QueryKeys.REWARDS],
    queryFn: fetchRewards,
  });
};
