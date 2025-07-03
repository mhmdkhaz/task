export const mockUserProfile = {
  id: "user-123",
  name: "Hiba Youssef",
  avatar:
    "https://static.vecteezy.com/system/resources/thumbnails/038/962/461/small/ai-generated-caucasian-successful-confident-young-businesswoman-ceo-boss-bank-employee-worker-manager-with-arms-crossed-in-formal-wear-isolated-in-white-background-photo.jpg",
  level: 3,
  xp: 750,
  xpToNextLevel: 1000,
  joinDate: "2023-01-15",
};

export const mockBenefits = [
  {
    id: "benefit-1",
    title: "20% Off on Clothing",
    icon: "👕",
    description:
      "Exclusive discount on all clothing products at participating stores",
    cta: "Use Now",
    isClaimed: false,
  },
  {
    id: "benefit-2",
    title: "Car Care Offer",
    icon: "🚗",
    description: "Free wash and polish with maintenance service",
    cta: "Get the Offer",
    isClaimed: true,
  },
  {
    id: "benefit-3",
    title: "Restaurant Vouchers",
    icon: "🍽️",
    description: "Get a free meal when you buy two meals",
    cta: "Order Now",
    isClaimed: false,
  },
];

export const mockRewards = {
  currentPoints: 1250,
  maxPoints: 2000,
  availableRewards: [
    { id: "r1", name: "Travel Voucher", points: 1500 },
    { id: "r2", name: "30% Discount", points: 1000 },
  ],
};
