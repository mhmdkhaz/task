export type User = {
  id: number;
  name: string;
  avatar: string;
  level: "Bronze" | "Silver" | "Gold" | "Platinum";
  xp: number;
  maxXp: number;
};

export type Benefit = {
  id: number;
  title: string;
  icon: string;
  description: string;
  cta: "Claim" | "View" | "Redeem";
};

export type RewardPoints = {
  points: number;
  maxPoints: number;
  tier: string;
};
