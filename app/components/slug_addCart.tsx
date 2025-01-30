"use client";

import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineShoppingBag } from "react-icons/md";
import Link from "next/link";
import { toast } from 'react-toastify';
import AddToCartModal from './addtoCart_model'; // Modal component
import { useCart } from './context/useCart'; // Cart context
interface Product {
  id: number;
  name: string;
  price: number;
  images: string;
}

interface CartButtonProps {
  product: Product;
}

export default function Slug_AddCart({ product }: CartButtonProps) {
  const [quantity, setQuantity] = useState(1); // State to manage the quantity
  const [isModalOpen, setIsModalOpen] = useState(false); // State to toggle modal
  const { addToCart } = useCart();

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
   const handleAddToCart = () => {
      addToCart(product, quantity); // Add product to cart with selected quantity
      toast.success(`${product.name} added to cart!`); // Toast notification
      closeModal(); // Close modal
    };

  return (
    <>
      <div className="flex flex-col gap-4">
        {/* Add to Cart Section */}
        <div className="flex flex-col md:flex-row gap-4 items-center">
          {/* Plus and Minus Buttons */}
          <div className="flex items-center space-x-4 mt-4">
            <div className="md:hidden flex text-xl font-medium">Quantity:</div>
            <div className="w-[100px] flex justify-between items-center border border-gray-200">
              <button
                className="border border-gray-200 font-semibold text-xl text-black px-2 py-1"
                onClick={decreaseQuantity}
              >
                -
              </button>
              <span className="text-xl font-semibold">{quantity}</span>
              <button
                className="border font-semibold border-gray-200 text-black px-2 py-1 text-xl"
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
          </div>
          {/* Add to Cart Button */}
          <div className="mt-4 w-full">
            <button
              onClick={openModal} // Open modal on click
              className="flex hover:bg-orange-500 items-center justify-center bg-black text-white w-full md:w-[400px] h-[50px] cursor-pointer uppercase gap-2 text-xl"
            >
              <MdOutlineShoppingBag />
              Add to Cart
            </button>
          </div>
        </div>

        {/* OR Divider */}
        <div className="flex justify-center text-lg font-semibold">OR</div>

        {/* Buy Now Button */}
        <div>
          <Link href="/checkout">
            <button className="bg-orange-500 hover:bg-black w-full h-[50px] flex items-center justify-center text-white cursor-pointer uppercase gap-2 text-xl">
              <FiShoppingCart />
              Buy Now
            </button>
          </Link>
        </div>
      </div>

      {/* Modal Component */}
      {isModalOpen && (
        <AddToCartModal
          isOpen={isModalOpen}
          onClose={closeModal}
          quantity={quantity}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          image={product.images}
          name={product.name}
          price={product.price}
          onAddToCart={handleAddToCart}
        />
      )}
    </>
  );
}
