import { Link } from "react-router-dom";

interface AlertProps {
  variant: "success" | "error" | "warning" | "info";
  title: string;
  message: string | React.ReactNode;
  showLink?: boolean;
  linkHref?: string;
  linkText?: string;
  className?: string;
  onClose?: () => void;
  closable?: boolean;
}

const Alert: React.FC<AlertProps> = ({
  variant,
  title,
  message,
  showLink = false,
  linkHref = "#",
  linkText = "Learn more",
  className = "",
  onClose,
  closable = false,
}) => {
  // Tailwind classes for each variant
  const variantClasses = {
    success: {
      container: "border-emerald-500 bg-emerald-50 dark:border-emerald-500/30 dark:bg-emerald-500/10",
      icon: "text-emerald-500",
      text: "text-emerald-800 dark:text-emerald-200",
      link: "text-emerald-600 hover:text-emerald-700 dark:text-emerald-300 dark:hover:text-emerald-200",
    },
    error: {
      container: "border-red-500 bg-red-50 dark:border-red-500/30 dark:bg-red-500/10",
      icon: "text-red-500",
      text: "text-red-800 dark:text-red-200",
      link: "text-red-600 hover:text-red-700 dark:text-red-300 dark:hover:text-red-200",
    },
    warning: {
      container: "border-amber-500 bg-amber-50 dark:border-amber-500/30 dark:bg-amber-500/10",
      icon: "text-amber-500",
      text: "text-amber-800 dark:text-amber-200",
      link: "text-amber-600 hover:text-amber-700 dark:text-amber-300 dark:hover:text-amber-200",
    },
    info: {
      container: "border-blue-500 bg-blue-50 dark:border-blue-500/30 dark:bg-blue-500/10",
      icon: "text-blue-500",
      text: "text-blue-800 dark:text-blue-200",
      link: "text-blue-600 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200",
    },
  };

  // Icons for each variant
  const icons = {
    success: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
    error: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
      </svg>
    ),
    warning: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
      </svg>
    ),
    info: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
      </svg>
    ),
  };

  return (
    <div
      className={`relative rounded-lg border p-4 ${variantClasses[variant].container} ${className}`}
      role="alert"
    >
      <div className="flex items-start">
        <div className={`flex-shrink-0 mt-0.5 ${variantClasses[variant].icon}`}>
          {icons[variant]}
        </div>
        
        <div className="ml-3 flex-1">
          <h3 className={`text-sm font-medium ${variantClasses[variant].text}`}>
            {title}
          </h3>
          
          <div className={`mt-1 text-sm ${variantClasses[variant].text}`}>
            {message}
          </div>
          
          {showLink && (
            <div className="mt-2">
              <Link
                to={linkHref}
                className={`text-sm font-medium underline ${variantClasses[variant].link}`}
              >
                {linkText}
              </Link>
            </div>
          )}
        </div>
        
        {closable && (
          <button
            type="button"
            onClick={onClose}
            className={`ml-auto -mx-1.5 -my-1.5 rounded-lg p-1.5 inline-flex h-8 w-8 ${variantClasses[variant].icon} hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-offset-2`}
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default Alert;