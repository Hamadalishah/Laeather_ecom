"use client"
import { useState } from "react";
import Image from "next/image";

export default function SlugImage() {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent) => {
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - left) / width) * 100;
    const y = ((event.clientY - top) / height) * 100;
    setCursorPosition({ x, y });
  };

  return (
    <div
      className="relative w-full md:w-[750px] h-[400px] md:h-[1000px] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <Image
        src="/card images/cardimage4.webp"
        width={500}
        height={500}
        alt="Product Image"
        className={`transition-transform duration-300 ease-out w-full h-full object-cover ${
          isHovered ? "scale-125" : "scale-100"
        }`}
        style={{
          transformOrigin: `${cursorPosition.x}% ${cursorPosition.y}%`, // Adjust the zoom center based on cursor position
        }}
      />
    </div>
  );
}
