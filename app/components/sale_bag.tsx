"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const ImageWithMotion = () => {
  return (
    <div className="flex justify-center">
    <motion.div
      className="relative w-[370px] h-[314px] overflow-hidden"
      initial={{ x: 0, y: 0 }} // Starting position
      animate={{
        x: [0, 20, 0, -20, 0], // Moves left and right
        y: [0, 0, 0, 0, 0], // Moves up and down
      }}
      transition={{
        duration: 6, // Total duration for one complete cycle
        repeat: Infinity, // Loop the animation infinitely
        ease: "easeInOut", // Smooth easing
      }}
    >
      {/* Image */}
      <Image
        loading="lazy"
        decoding="async"
        width="370"
        height="314"
        src="/images/salenow_image.jpg"
        alt="Plate"
        className="object-cover w-full h-full"
      />
    </motion.div>
    </div>
  );
};

export default ImageWithMotion;



