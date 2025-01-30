'use client';

import React, { useState } from 'react';
import { IoBagOutline } from "react-icons/io5";
import AddToCartModal from './addtoCart_model'; // Modal component
import { useCart } from './context/useCart'; // Cart context
import { toast } from 'react-toastify';

interface CartButtonProps {
  product: {
    id: number;
    name: string;
    price: number;
    images: string;
  };
}

const CartButton: React.FC<CartButtonProps> = ({ product }) => {
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1); // Default quantity is 1
  const { addToCart } = useCart();

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity); // Add product to cart with selected quantity
    toast.success(`${product.name} added to cart!`); // Toast notification
    handleCloseModal(); // Close modal
  };

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <>
      {/* Add to Cart Icon */}
      <button
        onClick={handleOpenModal}
        className="inline-block text-[24px] text-gray-500"
        aria-label={`Add ${product.name} to cart`}
      >
        <IoBagOutline size={24} />
      </button>

      {/* Modal */}
      {showModal && (
        <AddToCartModal
          isOpen={showModal}
          onClose={handleCloseModal}
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
};

export default CartButton;
