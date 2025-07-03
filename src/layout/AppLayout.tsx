import { Outlet, useLocation } from "react-router";
import { SidebarProvider, useSidebar } from "../context/SidebarContext";
import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";
import { useLocaliztionStore } from "@/store/useLocaliztionStore";

const LayoutContent: React.FC = () => {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();
  const location = useLocation();
  const { direction } = useLocaliztionStore();

  const isSettingsPage = location.pathname.startsWith("/settings");

  return (
    <div className="min-h-screen xl:flex" dir={direction}>
      {!isSettingsPage && (
        <div>
          <AppSidebar />
        </div>
      )}

      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${
          !isSettingsPage
            ? isExpanded || isHovered
              ? direction === "rtl"
                ? "lg:mr-[184px]"
                : "lg:ml-[184px]"
              : direction === "rtl"
              ? "lg:mr-[80px]"
              : "lg:ml-[80px]"
            : "m-0"
        } ${isMobileOpen ? "m-0" : ""}`}
      >
        <AppHeader />
        <div className="p-2 mx-auto max-w-screen-2xl md:p-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const AppLayout: React.FC = () => {
  return (
    <SidebarProvider>
      <LayoutContent />
    </SidebarProvider>
  );
};

export default AppLayout;
