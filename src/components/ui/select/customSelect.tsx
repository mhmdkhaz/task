import { Check, ChevronDown, Search, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";

interface OptionType<T = string | number> {
  value: T;
  label: string;
  shortLabel?: string;
  prefix_code?: string;
  isParent?: boolean;
  children?: OptionType<T>[];
}

interface CustomSelectProps<T = string | number> {
  name?: string;
  options: OptionType<T>[];
  placeholder?: string;
  searchPlaceholder?: string;
  error?: string;
  className?: string;
  disabled?: boolean;
  onChange: (value: T) => void;
  icon?: React.ReactNode;
  value?: T;
  createButton?: boolean;
  createItemLabel?: string;
  createPath?: string;
  isRequired?: boolean;
  compactMode?: boolean;
  defaultValue?: string;
}

export const CustomSelect = <T extends string | number = string>({
  name,
  options,
  placeholder = "Select an option",
  searchPlaceholder = "Search...",
  error,
  className = "",
  disabled = false,
  onChange,
  icon,
  value,
  createButton = false,
  createItemLabel,
  createPath,
  isRequired = false,
  compactMode = false,
  defaultValue
}: CustomSelectProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState<OptionType<T> | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (value !== undefined && options && options.length > 0) {
      const findOption = (opts: OptionType<T>[]): OptionType<T> | undefined => {
        for (const opt of opts) {
          if (String(opt.value) === String(value)) {
            return opt;
          }
          if (opt.children) {
            const found = findOption(opt.children);
            if (found) return found;
          }
        }
        return undefined;
      };

      const option = findOption(options);
      setSelectedOption(option || null);
    } else {
      setSelectedOption(null);
    }
  }, [value, options]);

  const filteredOptions = options && options.filter((option) => {
    const searchTermLower = searchTerm.toLowerCase();
    const optionLabelLower = String(option?.label || "").toLowerCase();

    if (option.isParent) {
      return (
        optionLabelLower.includes(searchTermLower) ||
        option.children?.some((child: any) =>
          (child.label || "").toLowerCase().includes(searchTermLower)
        )
      );
    }
    return optionLabelLower.includes(searchTermLower);
  });

  const handleSelect = (option: OptionType<T>) => {
    if (option.isParent) return;

    setSelectedOption(option);
    onChange(option.value);
    setIsOpen(false);
    setSearchTerm("");
  };

  const handleClear = () => {
    setSelectedOption(null);
    onChange("" as T);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const renderOptions = (opts: OptionType<T>[]) => {
    return opts.map((option) => (
      <div key={String(option.value)}>
        {option.isParent ? (
          <div className="px-3 py-2 text-sm font-medium text-gray-500 bg-gray-50 dark:bg-gray-700 dark:text-gray-300">
            {option.label}
          </div>
        ) : (
          <button
            type="button"
            className={`w-full text-left px-3 py-2 text-sm flex items-center justify-between hover:bg-blue-50 dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-colors ${
              selectedOption?.value === option.value
                ? "bg-blue-50 text-blue-600 dark:text-blue-900 dark:bg-blue-400"
                : "text-gray-700 dark:text-gray-400"
            }`}
            onClick={() => handleSelect(option)}
          >
            <div className="flex flex-col">
              <span>{option.label}</span>
              {option.prefix_code && (
                <span className="text-xs text-gray-500 dark:text-gray-300">
                  Code: {option.prefix_code}
                </span>
              )}
            </div>
            {selectedOption?.value === option.value && (
              <Check className="w-4 h-4 text-blue-500 dark:text-gray-800" />
            )}
          </button>
        )}
        {option.children && (
          <div className="pl-4">{renderOptions(option.children)}</div>
        )}
      </div>
    ));
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        type="button"
        className={`w-full ${compactMode ? 'min-w-[80px]' : ''} dark:bg-gray-900 dark:text-gray-400 dark:border-gray-700 text-left pl-3 pr-2 py-1 border rounded-[8px] flex items-center justify-between transition-all duration-200 ${
          error
            ? "border-red-400 focus:border-red-500"
            : "border-gray-200 hover:border-gray-300 focus:border-blue-400"
        } ${
          disabled
            ? "bg-gray-50 cursor-not-allowed text-gray-400"
            : "bg-white text-gray-700"
        } shadow-sm text-sm`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
      >
        <div className="flex items-center">
          {icon && <span className="mr-2 text-gray-400">{icon}</span>}
          <span className={`truncate ${!selectedOption ? "text-gray-400" : ""}`}>
            {selectedOption ? (selectedOption.shortLabel || selectedOption.label) : placeholder}
          </span>
        </div>
        <div className="flex items-center space-x-1">
          {selectedOption && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleClear();
              }}
              className="p-1 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <ChevronDown
            className={`w-4 h-4 text-gray-400 transition-transform ${
              isOpen ? "transform rotate-180" : ""
            }`}
          />
        </div>
      </button>

      {isOpen && (
        <div 
          className={`absolute z-9 mt-1 dark:bg-gray-800 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden ${
            compactMode ? 'min-w-[200px]' : 'w-full'
          }`}
          style={{ left: 0 }}
        >
          <div className="p-2 border-b border-gray-100 dark:bg-gray-800 dark:text-gray-200 bg-gray-50">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder={searchPlaceholder}
                className="w-full pl-9 pr-3 py-2 text-sm border dark:text-gray-400 dark:bg-gray-800 border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-blue-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                autoFocus
              />
            </div>
          </div>

          <div className="max-h-60 overflow-y-auto">
            {filteredOptions && filteredOptions.length > 0 ? (
              renderOptions(filteredOptions)
            ) : (
              <div className="px-3 py-3 text-sm text-gray-500 text-center">
                No options found
              </div>
            )}
          </div>

          {createButton && createItemLabel && (
            <div className="pl-2 pr-2 border-t border-gray-200">
              <button
                type="button"
                onClick={() => navigate(`${createPath}`)}
                className="flex items-center gap-2 w-full justify-left py-2 text-xs text-blue-600 hover:text-blue-700 transition-all font-medium"
              >
                <span className="flex items-center justify-center w-4 h-4 rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all">
                  +
                </span>
                {createItemLabel}
              </button>
            </div>
          )}
        </div>
      )}

      {error && (
        <p className="mt-1.5 text-xs text-red-500 flex items-center">{error}</p>
      )}
    </div>
  );
};