import React, { useState } from "react";
import "./FilterBar.css";
import Line from "./Line";
import OptionsBox from "./OptionsBox";

const FilterBar = () => {
  const [isFilterVisible, setFilterVisible] = useState(true);

  const toggleFilter = () => {
    setFilterVisible(!isFilterVisible);
  };

  return (
    <div className="bg-white line border-b border-gray-300">
        <Line></Line>
      <div className="filterBar flex flex-row justify-between px-6 md:px-16  text-gray-900 text-sm font-medium">
        {/* Left Section: Item Count */}
        <div className="filterBar space-between">
         <div>
         <span>3425 ITEMS</span>
         </div>
          <div
          onClick={toggleFilter}
          className="flex items-center mx-5 space-x-1 text-gray-500 cursor-pointer"
        >
          <span>&lt;</span>
          <span className="underline">
            {isFilterVisible ? "HIDE FILTER" : "SHOW FILTER"}
          </span>
        </div>
        </div>

        {/* Center Section: Filter Toggle */}
       

        {/* Right Section: Sort Dropdown */}
        <div className="text-gray-900 flex items-center space-x-1">
            <OptionsBox/>
        </div>
      </div>
      <Line/>
    </div>
  );
};

export default FilterBar;
