import { Navigate, Route, Routes } from "react-router";
import AppLayout from "../layout/AppLayout";
import { lazy } from "react";

const BenefitsSection = lazy(
  () => import("../pages/BenefitsSection/BenefitsSection")
);

const Profile = lazy(
  () => import("../pages/UserProfileSummary/UserProfileSummary")
);

const RewardPointsProgress = lazy(
  () => import("../pages/RewardPointsProgress/RewardPointsProgress")
);

const RoutesComponent = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Navigate to="/profile" replace />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Bene" element={<BenefitsSection />} />
        <Route path="/Reward" element={<RewardPointsProgress />} />
      </Route>

      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default RoutesComponent;
