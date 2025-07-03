import { ThemeToggleButton } from "@/components/common/ThemeToggleButton";
import { useLocaliztionStore } from "@/store/useLocaliztionStore";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useSidebar } from "../context/SidebarContext";

// import PWAInstallPrompt from "@/components/pwa/pwa";

const AppHeader: React.FC = () => {
  const [dir] = useState<"ltr" | "rtl">("ltr");
  const navigate = useNavigate();
  const location = useLocation();

  const isSettingsPage = location.pathname.startsWith("/settings");
  const isInvoiceTemplatePage =
    location.pathname.startsWith("/invoice/invoice");

  const [isApplicationMenuOpen, setApplicationMenuOpen] = useState(false);

  const { direction, setLanguage } = useLocaliztionStore();

  useEffect(() => {
    document.documentElement.setAttribute("dir", direction);
  }, [direction]);

  const { isMobileOpen, toggleSidebar, toggleMobileSidebar } = useSidebar();

  const handleToggle = () => {
    if (window.innerWidth >= 991) {
      toggleSidebar();
    } else {
      toggleMobileSidebar();
    }
  };

  const toggleApplicationMenu = () => {
    setApplicationMenuOpen(!isApplicationMenuOpen);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("dir", dir);
  }, [dir]);

  return (
    <header
      className={`sticky top-0 flex w-full bg-white border-b  border-gray-200 z-50 dark:border-gray-800 dark:bg-gray-900 lg:border-b h-12 shadow-md ${
        direction === "rtl" ? "text-right" : "text-left"
      }`}
    >
      {" "}
      <div className="flex flex-col items-center justify-between flex-grow lg:flex-row lg:px-6 ">
        <div className="flex items-center justify-between w-full gap-1  px-3 py-1 border-b border-gray-200 dark:border-gray-800 sm:gap-4 lg:justify-normal lg:border-b-0 lg:px-0 lg:py-4">
          {(isSettingsPage || isInvoiceTemplatePage) && (
            <Link to="/" className="flex items-center justify-center mr-20">
              <img
                src="/images/logo/SANN.png"
                alt="Logo"
                width={50}
                height={26}
              />
              <span
                className="text-xl font-bold text-[#465FFF] hidden sm:block"
                style={{ fontFamily: "sans-serif" }}
              >
                Books
              </span>
            </Link>
          )}

          {!(isSettingsPage || isInvoiceTemplatePage) && (
            <button
              className="w-8 h-8 flex items-center justify-center text-gray-500 rounded-lg hover:bg-gray-100 z-99999"
              onClick={handleToggle}
              aria-label="Toggle Sidebar"
            >
              {isMobileOpen ? "✖" : "☰"}
            </button>
          )}

          <button
            onClick={toggleApplicationMenu}
            className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg z-99999 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 lg:hidden"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.99902 10.4951C6.82745 10.4951 7.49902 11.1667 7.49902 11.9951V12.0051C7.49902 12.8335 6.82745 13.5051 5.99902 13.5051C5.1706 13.5051 4.49902 12.8335 4.49902 12.0051V11.9951C4.49902 11.1667 5.1706 10.4951 5.99902 10.4951ZM17.999 10.4951C18.8275 10.4951 19.499 11.1667 19.499 11.9951V12.0051C19.499 12.8335 18.8275 13.5051 17.999 13.5051C17.1706 13.5051 16.499 12.8335 16.499 12.0051V11.9951C16.499 11.1667 17.1706 10.4951 17.999 10.4951ZM13.499 11.9951C13.499 11.1667 12.8275 10.4951 11.999 10.4951C11.1706 10.4951 10.499 11.1667 10.499 11.9951V12.0051C10.499 12.8335 11.1706 13.5051 11.999 13.5051C12.8275 13.5051 13.499 12.8335 13.499 12.0051V11.9951Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isApplicationMenuOpen ? "flex" : "hidden"
          } items-center justify-between w-full gap-4 px-5  lg:flex shadow-theme-md lg:justify-end lg:px-0 lg:shadow-none bg-white dark:bg-gray-900`}
        >
          <div className="flex items-center gap-1 2xsm:gap-3"></div>
          <div className="flex items-center gap-1 2xsm:gap-3">
            <ThemeToggleButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
