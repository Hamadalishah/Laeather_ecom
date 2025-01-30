import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GrStatusGood } from "react-icons/gr";
import Image from "next/image";

interface AddToCartModalTypes {
  isOpen: boolean; // Determines if the modal is open
  onClose: () => void; // Function to close the modal
  quantity: number; // Current quantity of the product
  increaseQuantity: () => void; // Function to increase quantity
  decreaseQuantity: () => void; // Function to decrease quantity
  image: string;
  name: string;
  price: number; // Price per item
  onAddToCart: () => void; // Function to add product to cart
}

export default function AddToCartModal({
  isOpen,
  onClose,
  quantity,
  increaseQuantity,
  decreaseQuantity,
  image,
  name,
  price,
  onAddToCart,
}: AddToCartModalTypes) {
  if (!isOpen) return null; // Don't render the modal if not open

  const pricePerItem = price;
  const totalPrice = pricePerItem * quantity;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
      <div className="bg-white w-full max-w-[95%] sm:max-w-[600px] lg:max-w-[800px] h-auto p-4 sm:p-6 rounded-lg shadow-lg relative">
        {/* Close Icon */}
        <button
          className="absolute top-4 right-4 text-black text-xl"
          onClick={onClose}
        >
          <AiOutlineClose />
        </button>

        {/* Success Message */}
        <div className="bg-green-700 mt-4 text-white p-2 rounded-md mb-4 flex items-center justify-center text-sm sm:text-base">
          <GrStatusGood />
          <span className="ml-2 text-center">{name} has been added to your cart.</span>
        </div>

        {/* Modal Content */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Product Image */}
          <div className="flex justify-center">
            <Image
              src={image}
              alt="Product"
              height={80}
              width={100}
              className="w-24 h-24 sm:w-32 sm:h-32 object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col w-full">
            <h2 className="text-lg sm:text-xl font-semibold text-center sm:text-start">
              {name}
            </h2>
            <p className="text-gray-500 text-sm sm:text-lg text-center sm:text-start">
              Vendor: Wilsons
            </p>
            <button className="text-red-500 text-center sm:text-start text-sm sm:text-lg mt-2 underline">
              Remove
            </button>

            {/* Quantity and Price */}
            <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-4 mt-4">
              <button
                className="border border-gray-200 text-black px-2 py-1 rounded-md"
                onClick={decreaseQuantity}
              >
                -
              </button>
              <span className="text-lg sm:text-xl font-semibold">{quantity}</span>
              <button
                className="border border-gray-200 text-black px-2 py-1 rounded-md"
                onClick={increaseQuantity}
              >
                +
              </button>
              <span className="text-gray-700 text-lg sm:text-xl font-bold">
                x ${pricePerItem.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* Subtotal */}
        <div className="mt-8 sm:mt-12 flex justify-between items-center border-t pt-4">
          <span className="text-sm sm:text-lg font-semibold">Subtotal</span>
          <span className="text-sm sm:text-lg font-bold">${totalPrice.toFixed(2)}</span>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 sm:mt-10 flex justify-center">
          <button
            className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-green-700"
            onClick={onAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
