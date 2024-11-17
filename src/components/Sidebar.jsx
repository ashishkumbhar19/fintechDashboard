import React, { useState } from "react";

function Sidebar({ setSelectedRegion }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (region) => {
    setSelectedRegion(region);
    setSelectedCountry(region.split(" - ")[1]); // Set selected country
  };

  return (
    <div className="w-1/5 bg-gray-800 text-white p-4">
      <ul>
        <li
          onClick={toggleDropdown}
          className="cursor-pointer font-semibold py-2"
        >
          Africa
        </li>
        {isOpen && (
          <ul className="pl-4">
            <li
              onClick={() => handleSelect("Africa - Nigeria")}
              className="cursor-pointer py-2 hover:bg-gray-600"
            >
              Nigeria
            </li>
            <li
              onClick={() => handleSelect("Africa - Kenya")}
              className="cursor-pointer py-2 hover:bg-gray-600"
            >
              Kenya
            </li>
          </ul>
        )}

        <li
          onClick={toggleDropdown}
          className="cursor-pointer font-semibold py-2 mt-4"
        >
          America
        </li>
        {isOpen && (
          <ul className="pl-4">
            <li
              onClick={() => handleSelect("America - USA")}
              className="cursor-pointer py-2 hover:bg-gray-600"
            >
              USA
            </li>
            <li
              onClick={() => handleSelect("America - Canada")}
              className="cursor-pointer py-2 hover:bg-gray-600"
            >
              Canada
            </li>
          </ul>
        )}
      </ul>
    </div>
  );
}

export default Sidebar;
