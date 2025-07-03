import { useState } from "react";

type LabelType = string | number | any;

interface OptionType<T = any> {
  label: LabelType;
  value: T;
  isParent?: boolean;
  children?: OptionType<T>[];
}

interface CustomSelectProps<T> {
  options: OptionType<T>[];
  onChange: (selected: OptionType<T> | null) => void;
  placeholder?: string;
}

export function CustomTaskSelect<T>({ options, onChange, placeholder = "Select..." }: CustomSelectProps<T>) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<OptionType<T> | null>(null);

  const getLabelText = (label: LabelType) => {
    if (typeof label === "string" || typeof label === "number") {
      return String(label);
    }
    return "";
  };

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleOptionClick = (option: OptionType<T>) => {
    setSelected(option);
    onChange(option);
    setIsOpen(false);
    setSearchTerm(""); // Reset search
  };

  const filteredOptions = options.filter((option) => {
    const searchTermLower = searchTerm.toLowerCase();
    const optionLabelText = getLabelText(option.label).toLowerCase();

    if (option.isParent && Array.isArray(option.children)) {
      return (
        optionLabelText.includes(searchTermLower) ||
        option.children.some((child) =>
          getLabelText(child.label).toLowerCase().includes(searchTermLower)
        )
      );
    }

    return optionLabelText.includes(searchTermLower);
  });

  return (
    <div className="relative w-64">
      <button
        type="button"
        className="w-full bg-white border border-gray-300 rounded-lg shadow-sm pl-4 pr-10 py-2 text-left cursor-pointer focus:outline-none"
        onClick={toggleDropdown}
      >
        <span className="block truncate">{selected ? getLabelText(selected.label) : placeholder}</span>
        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="none" stroke="currentColor">
            <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-full rounded-md bg-white shadow-lg">
          <div className="p-2">
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <ul className="max-h-60 overflow-auto py-1">
            {filteredOptions.length === 0 && (
              <li className="text-gray-500 px-4 py-2">No results found.</li>
            )}
            {filteredOptions.map((option, index) => (
              <div key={index}>
                <li
                  className="cursor-pointer select-none relative px-4 py-2 hover:bg-gray-100 font-bold"
                  onClick={() => handleOptionClick(option)}
                >
                  {option.label}
                </li>
                {option.isParent && Array.isArray(option.children) && (
                  <ul className="pl-6">
                    {option.children.map((child, childIdx) => (
                      <li
                        key={`${index}-${childIdx}`}
                        className="cursor-pointer select-none relative px-4 py-2 hover:bg-gray-100 text-sm"
                        onClick={() => handleOptionClick(child)}
                      >
                        {child.label}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
