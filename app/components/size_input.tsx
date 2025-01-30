"use client"
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

export default function SizeInput() {
  const [showDropdown, setShowDropdown] = useState(false); // Dropdown toggle ke liye state

  const sizes = [
    "XS (34 US)",
    "S (36 US)",
    "M (38 US)",
    "L (40 US)",
    "XL (42 US)",
    "2XL (44 US)",
    "3XL (46 US)",
    "4XL (48 US)",
  ];

  return (
    <>
      <div className="text-2xl font-semibold py-2">Size:</div>
      <div className="relative">
        <input
          type="text"
          placeholder="US (US 34)"
          className="w-full border border-gray-300 h-[40px]"
          readOnly // User ko manually input karne se roknay ke liye
        />
        <div
          className="text-xl absolute top-2 cursor-pointer right-2"
          onClick={() => setShowDropdown(!showDropdown)} // Dropdown toggle
        >
          <IoIosArrowDown />
        </div>

        {/* Dropdown list */}
        {showDropdown && (
          <div className="absolute top-[45px] left-0 w-full border border-gray-300 bg-white z-10">
            {sizes.map((size, index) => (
              <div
                key={index}
                className="p-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => {
                  // Input field mein size set karne ke liye
                  const input = document.querySelector("input");
                  if (input) input.value = size;
                  setShowDropdown(false); // Dropdown close karna
                }}
              >
                {size}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

