"use client";

import { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import SideModal from "./side_model";

export default function Nav_Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Open Button */}
      <button
        className="fixed top-5 right-5 z-50 text-white hover:text-gray-900"
        onClick={toggleModal}
        aria-label="Open Menu"
      >
        <HiOutlineBars3 size={30} />
      </button>

      {/* Side Modal */}
      <SideModal isOpen={isOpen} onClose={closeModal} />

      
      
    </div>
  );
}
