import React from "react";
import "./FilterBar.css"
import Line from "./Line";

const DiscoverOurProducts = () => {
  return (
    <div className="bg-white text-center py-12">

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        DISCOVER OUR PRODUCTS
      </h1>

      {/* Subtitle */}
      <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. 
        Dolor integer scelerisque nibh amet mi ut elementum dolor.
      </p>

      {/* Line below */}
      <div className="line border-gray-300 w-28 mx-auto mt-6"></div>
    </div>
  );
};

export default DiscoverOurProducts;
