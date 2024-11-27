import React, { useState } from "react";

const Dropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelect = (option) => {
    setIsOpen(false);
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div className="relative inline-block w-full">
      <button
        className="bg-white border border-gray-300 px-4 py-2 w-full  text-gray-900 text-left rounded shadow"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption}
        <span className="float-right text-gray-800">&#9662;</span>
      </button>

      {isOpen && (
        <ul className="absolute bg-white border border-gray-300 w-full mt-1 rounded shadow-lg z-10">
          {options.map((option, index) => (
            <li
              key={index}
              className="px-4 py-2 bg-gray-800 hover:bg-gray-700 cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
