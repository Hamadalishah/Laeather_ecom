"use client";

import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineX } from "react-icons/hi";


interface SideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideModal: React.FC<SideModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="2 inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Modal */}
          <motion.div
            className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 p-5"
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
              onClick={onClose}
              aria-label="Close Menu"
            >
              <HiOutlineX size={24} />
            </button>

            {/* Navigation Links */}
            <nav className="mt-10">
              <ul className="space-y-6">
                <li>
                  <a href="/page1" className="text-lg text-gray-800 hover:text-blue-500">
                    Page 1
                  </a>
                </li>
                <li>
                  <a href="/page2" className="text-lg text-gray-800 hover:text-blue-500">
                    Page 2
                  </a>
                </li>
                <li>
                  <a href="/page3" className="text-lg text-gray-800 hover:text-blue-500">
                    Page 3
                  </a>
                </li>
                {/* Aur pages yahan add karein */}
              </ul>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SideModal;
