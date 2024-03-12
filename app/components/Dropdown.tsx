import React, { useState } from "react";

type DropdownProps = {
  options: string[];
  onSelect: (selectedOption: string) => void;
};

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div className="mb-4">
      <label
        htmlFor="dropdown"
        className="block text-sm font-medium text-gray-700"
      >
        Select an option:
      </label>
      <select
        id="dropdown"
        value={selectedOption || ""}
        onChange={(e) => handleSelect(e.target.value)}
        className="mt-1 p-2 border rounded-md w-full"
      >
        <option value="" disabled>
          Choose an option
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {selectedOption && (
        <p className="mt-2 text-sm text-gray-500">
          You selected: {selectedOption}
        </p>
      )}
    </div>
  );
};

export default Dropdown;
