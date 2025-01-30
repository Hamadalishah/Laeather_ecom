"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Size_Input from "./size_input";
import Measure_Button from "./measure_button";
import Slug_AddCart from "./slug_addCart";


type Product_Model_Types = {
  image: string;
  product_name: string;
  original_price: number;
  discounted_price?: number;
  reviews?: number;
  description?: string;
  id: number
};

export default function Product_Card_Model(props: Product_Model_Types) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Functions to open and close modal
  const openModal = (image: string) => {
    console.log(image);
    setIsModalOpen(true); // Open modal
    document.body.classList.add("no-scroll"); // Add no-scroll class to body
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove("no-scroll"); // Remove no-scroll class from body
  };

  useEffect(() => {
    // Cleanup on component unmount
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return (
    <>
      {/* Show Details Button */}
      <div
        onClick={() => openModal(props.image)} // Open modal with default image
        className="absolute inset-0 flex items-center justify-center z-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      >
        <div className="bg-black text-white px-4 py-2 rounded-md cursor-pointer pointer-events-auto">
          Show Details
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex">
          {/* Clickable Background to Close Modal */}
          <div onClick={closeModal} className="flex-1"></div>

          {/* Modal Content (Right Side) */}
          <div className="bg-white w-[400px] md:w-[500px] h-auto overflow-y-auto p-6 rounded-l-lg relative">
            {/* Close Button on Top-Left */}
            <button
              onClick={closeModal}
              className="absolute top-3 left-3 text-gray-700 hover:text-black"
            >
              ✖
            </button>

            {/* Dynamic Image */}
            <div className="flex flex-col items-center w-[300px] h-[300px]">
              <Image
                src={props.image}
                width={300}
                height={300}
                alt={props.product_name}
                className="w-full h-full rounded-md mb-4"
              />
              {/* Image Title */}
              <h2 className="text-lg font-semibold">{props.product_name}</h2>
            </div>
            {/* Description */}
            <div className="mt-10 text-xl font-semibold">

              <p className="text-gray-700 mt-4">discraption</p>
            </div>

            {/* Content Section */}
            <div className="mt-6 flex flex-col gap-4">
              <div className="flex items-center mt-6 gap-4">
                <span className=" text-red-500 text-xl font-bold">Price: ${props.original_price}</span>
                <span className="text-gray-500 text-lg font-bold"> <del>Old price: ${props.discounted_price}</del></span>
              </div>
              <div className="mt-2 text-yellow-500">
                ⭐⭐⭐⭐⭐ ({props.reviews} customer reviews)
              </div>


              {/* Size Selection */}
              <div className="mt-4">
                {/* size div */}
                <div>
                  <Size_Input />
                </div>
              </div>

              {/* Made to Measure Button */}
              <div className="mt-4 ">
                <Measure_Button />
              </div>

              {/* Additional Options */}
              <div>

                <Slug_AddCart product={{
                  id: props.id,           // Assuming props.id exists
                  name: props.product_name, // Assuming props.product_name exists
                  price: props.original_price,       // Assuming props.price exists
                  images: props.image,       // Assuming props.image exists
                }} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
