"use client"
import { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { supabaseKey } from "../utils/config";
import ReactImageMagnify from 'react-image-magnify';

interface Image1 {
  images: { id: number; filename: string }[];
}
interface ProductImage {
  id: number;
  imageSrc: string;
  altText: string;
}

const ProductImage = (props: Image1) => {
  const [selectedImage, setSelectedImage] = useState(
    props.images.length > 0 ? `${supabaseKey}${props.images[0].filename}` : "" // Use the first image from backend or default to an empty string
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0); // For modal navigation
  const [thumbnailStart, setThumbnailStart] = useState(0); // For thumbnail pagination

  // Initialize dynamic images using backend data
  const relatedImages: ProductImage[] = props.images.map((image: { id: number; filename: string }) => ({
    id: image.id,
    imageSrc: `${supabaseKey}${image.filename}`, // Construct full image URL
    altText: `Image ${image.id}`, // Optional: Add a meaningful alt text based on your backend data
  }));

  const thumbnailsPerPage = 4; // Number of thumbnails visible at a time

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const showNextImage = () => {
    const nextIndex = (currentIndex + 1) % relatedImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(relatedImages[nextIndex].imageSrc);
  };

  const showPreviousImage = () => {
    const prevIndex = (currentIndex - 1 + relatedImages.length) % relatedImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(relatedImages[prevIndex].imageSrc);
  };

  const nextThumbnailPage = () => {
    if (thumbnailStart + thumbnailsPerPage < relatedImages.length) {
      setThumbnailStart(thumbnailStart + thumbnailsPerPage);
    }
  };

  const previousThumbnailPage = () => {
    if (thumbnailStart > 0) {
      setThumbnailStart(thumbnailStart - thumbnailsPerPage);
    }
  };

  return (
    <div className="relative w-full flex flex-col md:flex-row md:w-[950px] h-auto md:h-[1000px]">
      {/* Thumbnails for Desktop (Left Sidebar) */}
      {relatedImages.length > 0 && (
        <div className="hidden md:flex flex-col gap-2 mr-4">
          {relatedImages.map((image, index) => (
            <div
              key={image.id}
              className={`w-[100px] h-[100px] cursor-pointer border ${selectedImage === image.imageSrc ? "border-black" : "border-gray-300"
                }`}
              onClick={() => {
                setSelectedImage(image.imageSrc);
                setCurrentIndex(index);
              }}
            >
              <Image
                src={image.imageSrc}
                alt={image.altText}
                width={500}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      )}

      {/* Main Image */}
      <div
        className="relative w-full h-[300px] md:h-full "
        onClick={openModal}
      >
        <ReactImageMagnify {...{
          smallImage: {
            alt: 'Wristwatch by Ted Baker London',
            isFluidWidth: true,
            src: selectedImage,
          },
          largeImage: {
            src: selectedImage,
            width: 1200,
            height: 1800,
          }
        }} />
      </div>

      {/* Thumbnails for Mobile */}
      {relatedImages.length > 0 && (
        <div className="flex md:hidden items-center w-full mt-4">
          {/* Left Navigation Button */}
          <button
            onClick={previousThumbnailPage}
            className={`text-black bg-white p-2 rounded-full shadow-md hover:bg-gray-100 ${thumbnailStart > 0 ? "block" : "hidden"
              }`}
          >
            <FaChevronLeft size={24} />
          </button>

          {/* Thumbnail Images */}
          <div className="flex gap-2 overflow-x-auto w-full mx-2">
            {relatedImages
              .slice(thumbnailStart, thumbnailStart + thumbnailsPerPage)
              .map((image, index) => (
                <div
                  key={image.id}
                  className={`w-[60px] h-[60px] cursor-pointer border flex-shrink-0 ${selectedImage === image.imageSrc ? "border-black" : "border-gray-300"
                    }`}
                  onClick={() => {
                    setSelectedImage(image.imageSrc);
                    setCurrentIndex(index);
                  }}
                >
                  <Image
                    src={image.imageSrc}
                    alt={image.altText}
                    width={60}
                    height={60}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
          </div>

          {/* Right Navigation Button */}
          <button
            onClick={nextThumbnailPage}
            className={`text-black bg-white p-2 rounded-full shadow-md hover:bg-gray-100 ${thumbnailStart + thumbnailsPerPage < relatedImages.length ? "block" : "hidden"
              }`}
          >
            <FaChevronRight size={24} />
          </button>
        </div>
      )}

      {/* Modal for Enlarged Image */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div
            className="relative bg-white rounded-md shadow-lg overflow-hidden flex justify-center items-center"
            style={{
              width: "90%",
              maxWidth: "500px",
              height: "90%",
              maxHeight: "500px",
            }}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-black text-xl md:text-2xl font-bold z-10"
            >
              &times;
            </button>

            {/* Left Navigation */}
            <button
              onClick={showPreviousImage}
              className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 text-black bg-white p-2 md:p-3 rounded-full shadow-md hover:bg-gray-100 z-10"
            >
              <FaChevronLeft size={20} className="md:text-lg" />
            </button>

            {/* Image */}
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src={relatedImages[currentIndex].imageSrc}
                alt="Enlarged Product Image"
                fill
                className="object-contain"
              />
            </div>

            {/* Right Navigation */}
            <button
              onClick={showNextImage}
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 text-black bg-white p-2 md:p-3 rounded-full shadow-md hover:bg-gray-100 z-10"
            >
              <FaChevronRight size={20} className="md:text-lg" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductImage;
