import { ChevronDown } from "lucide-react";
import { useRef, useState } from "react";
import { useFormContext } from "react-hook-form";

interface OptionType {
  value: string;
  label: string;
}

interface DynamicSelectProps {
  name: string;
  options: OptionType[];
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
  icon?: React.ReactNode;
  value?: string;
}

export const CustomSelectUser = ({
  name,
  options,
  placeholder = "Select an option",
  error,
  disabled = false,
  onChange,
  icon,
  value,
}: DynamicSelectProps) => {
  const formContext = useFormContext();
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(opt => opt.value === value);

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (option: OptionType) => {
    if (formContext) {
      formContext.setValue(name, option.value, {
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true
      });
    }
    onChange?.(option.value);
    setIsOpen(false);
  };

  // ... (بقية الدوال كما هي)

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        className={`w-full text-left pl-3 pr-2 py-2 border rounded-lg flex items-center justify-between ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          {icon}
          <span>{selectedOption?.label || placeholder}</span>
        </div>
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
          <div className="p-2">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 text-sm border rounded"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
            />
          </div>
          <div className="max-h-60 overflow-y-auto">
            {filteredOptions.map(option => (
              <div
                key={option.value}
                className={`p-2 hover:bg-gray-100 cursor-pointer ${
                  value === option.value ? "bg-blue-50" : ""
                }`}
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};