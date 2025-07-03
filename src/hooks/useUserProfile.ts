// src/hooks/useUserProfile.ts
import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "../utils/queryKeys";
import { fetchUserProfile } from "@/services/api";

export const useUserProfile = () => {
  return useQuery({
    queryKey: [QueryKeys.USER_PROFILE],
    queryFn: fetchUserProfile,
    staleTime: 1000 * 60 * 5
  });
};
