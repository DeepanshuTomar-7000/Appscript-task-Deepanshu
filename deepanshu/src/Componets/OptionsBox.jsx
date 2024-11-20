import React, { useState } from "react";
import "./OptionsBox.css"

const OptionsBox = () => {
  // State to store the selected option
  const [selectedOption, setSelectedOption] = useState("Recommended");

  // Array of options
  const options = [
    "Recommended",
    "Newest First",
    "Popular",
    "Price: Low to High",
    "Price: High to Low",
  ];

  // Handle option selection
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="options-box">
      {/* Dropdown menu */}
      <select
        value={selectedOption}
        onChange={handleOptionChange}
        className="dropdown"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default OptionsBox;
