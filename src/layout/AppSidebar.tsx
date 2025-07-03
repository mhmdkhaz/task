import { BadgePercentIcon, GiftIcon, UserIcon } from "lucide-react";
import { useCallback } from "react";
import { Link, useLocation } from "react-router";
import { useSidebar } from "../context/SidebarContext";
import { useLocaliztionStore } from "@/store/useLocaliztionStore";

type NavItem = {
  name: string;
  icon: React.ReactNode;
  path?: string;
  permissionKey?: string;
  subItems?: {
    name: string;
    path: string;
    permissionKey?: string;
    pro?: boolean;
    new?: boolean;
    addPath?: string;
  }[];
};

const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered } = useSidebar();
  const { direction } = useLocaliztionStore();
  const iconSize = 17;

  const navItems: NavItem[] = [
    {
      icon: (
        <UserIcon
          size={iconSize}
          className="text-gray-600 group-hover:text-[#465FFF]"
        />
      ),
      name: "User Profile",
      path: "/Profile",
    },
    {
      icon: (
        <GiftIcon
          size={iconSize}
          className="text-gray-600 group-hover:text-[#465FFF]"
        />
      ),
      name: "Benefits Section",
      path: "/Bene",
    },
    {
      icon: (
        <BadgePercentIcon
          size={iconSize}
          className="text-gray-600 group-hover:text-[#465FFF]"
        />
      ),
      name: "Reward Points",
      path: "/Reward",
    },
  ];

  const location = useLocation();

  const isActive = useCallback(
    (path: string) => location.pathname === path,
    [location.pathname]
  );

  return (
    <aside
      className={`fixed mt-12 flex flex-col lg:mt-0 top-0 z-[99999] lg:z-auto bg-white shadow-md transition-all border-r h-screen dark:border-r-gray-700 dark:text-gray-400 dark:bg-gray-900 ${
        isExpanded || isMobileOpen
          ? direction === "rtl"
            ? "w-[184px] left-auto right-0"
            : "w-[184px] left-0 right-auto"
          : direction === "rtl"
          ? "w-[80px] left-auto right-0"
          : "w-[80px] left-0 right-auto"
      } ${
        isMobileOpen
          ? "translate-x-0"
          : direction === "rtl"
          ? "translate-x-full"
          : "-translate-x-full"
      } lg:translate-x-0`}
    >
      <div
        className={`lg:py-3 px-6 w-full flex ${
          !isExpanded && !isHovered ? "lg:justify-center" : "justify-center"
        }`}
      >
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-[#465FFF] flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-white">
              <path
                fill="currentColor"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z"
              />
            </svg>
          </div>
          {(isExpanded || isHovered || isMobileOpen) && (
            <span className="font-bold text-[#465FFF] text-xl">Garage</span>
          )}
        </Link>
      </div>
      <div className="flex flex-col px-2 overflow-y-auto duration-300 ease-linear no-scrollbar">
        <nav className="mb-6">
          <div className="flex flex-col gap-4">
            <div>
              <nav className={`p-1 flex flex-col gap-0`}>
                {navItems.map((nav, index) => (
                  <div
                    key={nav.name}
                    className={`px-2 ${
                      direction === "rtl" ? "lg:px-5 " : "px-2"
                    }`}
                  >
                    <Link
                      to={nav.path || ""}
                      className={`group flex items-center gap-2 p-2 px-3 mx-[-8px] w-[calc(100%+16px)] hover:bg-[#465FFF]/10 dark:hover:bg-[#465FFF]/10 rounded-md text-[13px] ${
                        isActive(nav.path || "")
                          ? "bg-[#465FFF]/10 text-[#465FFF] dark:bg-[#465FFF]/10 dark:text-[#465FFF]"
                          : ""
                      } ${direction === "rtl" ? "flex-row" : ""}`}
                    >
                      {nav.icon}
                      {(isExpanded || isMobileOpen) && (
                        <span
                          className={`text-[13px] ${
                            isActive(nav.path || "")
                              ? "text-[#465FFF] dark:text-[#465FFF]"
                              : "text-gray-700 group-hover:text-[#465FFF] dark:text-gray-200 dark:group-hover:text-[#465FFF]"
                          }`}
                        >
                          {nav.name}
                        </span>
                      )}
                    </Link>
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default AppSidebar;
