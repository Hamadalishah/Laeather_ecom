
import {  FaFacebook, FaInstagramSquare } from "react-icons/fa";
import Image from "next/image";

import ProductImage from "@/app/components/product_zoom";
import Link from "next/link";
import Size_Input from "@/app/components/size_input";
import Measure_Button from "@/app/components/measure_button";
import Slug_AddCart from "@/app/components/slug_addCart";
import { BiSolidBank, BiSolidTShirt } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { AiFillTikTok } from "react-icons/ai";






export default async function Products() {
  // Find the product using slug from the Product_Data
  // const product = Product_Data.find((item) => item.slug === params.slug);

  // If the product is not found
  // if (!product) {
  //   return (
  //     <div className="text-center mt-10">
  //       <h1 className="text-2xl font-bold">Product Not Found</h1>
  //     </div>
  //   );
  // }

  return (
    <div className="w-full h-auto mb-28">
      {/* first content div bg white */}
      <div className="w-full h-[100px]"></div>

      {/* first content div */}
      <div className="w-full h-auto px-[20px] flex flex-col md:flex-row flex-wrap gap-4 md:gap-8">
        {/* Image Div */}
        <div className="flex flex-col gap-2">
          {/* Image Div 1 */}
          <div className="w-full md:w-[950px] h-[400px] md:h-[1000px]">
            <ProductImage/>
          </div>
          {/* Image Div 2 */}
          <div className="w-[200px] h-[200px]">
            <Image
              src="/Mens Product/1.jpg"
              width={500}
              height={300}
              alt={""}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Div */}
        <div className="w-full md:w-[550px] h-auto md:h-[1000px]">
          <div className="font-bold text-2xl mt-4">Crimson Rebel Leather Jacke</div>
          <div className="flex justify-between px-2 my-4 py-5 border-b border-[#e9e9e9]"></div>
          {/* price */}
          <div className="font-bold text-2xl mt-4 flex gap-2"><del>$278.00</del><span className="text-red-400">$255.00</span></div>
          {/* review */}
          <div className="flex"><div>review</div>
          <div><Link href={"/"} >(1 customer review)</Link></div></div>
          {/* sold by */}
          <div className="flex flex-col"><div className="flex text-xl items-center gap-1"><BiSolidBank className="text-2xl text-gray-500" /><span>Sold by Wilsons</span> </div>
          <div><p className="text-2xl text-gray-500">Crimson Rebel Leather Jacket At Discounted Price For Sale is a popular men’s leather jacket that has been designed with the latest fashion trends in mind. It is available at a discounted price.</p></div>
          </div>
          {/* button div */}
          <div className="flex  cursor-pointer  mt-4">
            
              <button className="bg-[#f6f4ee] border border-[#ededed] w-[160px] md:w-[200px] flex items-center h-[50px] justify-center gap-2 hover:bg-orange-500 ">
              <BiSolidTShirt className="text-xl" /><span className="text-blue-400 text-xl">SIZE CHART</span> 
              </button>
            
          </div>

          {/* size div */}
         <div>
         <Size_Input/>
         </div>
         {/* Measure_Button */}
         <div className="mt-4">
         <Measure_Button/>
         </div>
         {/* add to cart button */}
         <div>
            <Slug_AddCart/>
         </div>

          {/* line div */}
          


          {/* text and icon model div */}
          <div className="w-full border-b border-gray-300 py-2 sm:py-3 md:py-6 px-1 md:px-2 flex justify-between items-center">
            <p className="text-[#333] flex items-center gap-2 text-xl sm:text-sm font-bold">
              <span className="text-gray-500 text-2xl">Share:</span>
              <span className=" text-xl flex items-center gap-2"> <FaFacebook className="text-3xl text-blue-600" /> <BsWhatsapp className="text-[#25D366] text-3xl" /> <FaInstagramSquare className="text-[#E1306C] text-3xl" /><AiFillTikTok className="text-black text-3xl"/></span>
            </p>
            <div>
              {/* <Blog_Custom_Model /> */}
            </div>
          </div>
        </div>
      </div>

      {/* buttons div */}
      <div>
        {/* <Blog_Page_Navigation /> */}
      </div>
      
    </div>
  );
}

// import React, { useState } from "react";

// export default function Product_Card_Model() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Functions to open and close modal
//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   return (
//     <>
//       {/* Hover Button */}
//       <div
//         onClick={openModal}
//         className="absolute inset-0 flex items-center justify-center z-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
//       >
//         <div className="bg-black text-white px-4 py-2 rounded-md cursor-pointer pointer-events-auto">
//           Quick View
//         </div>
//       </div>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
//           <div className="bg-white w-11/12 md:w-1/2 lg:w-1/3 p-6 rounded-lg relative">
//             {/* Close Button */}
//             <button
//               onClick={closeModal}
//               className="absolute top-3 right-3 text-gray-700 hover:text-black"
//             >
//               ✖
//             </button>

//             {/* Modal Content */}
//             <h2 className="text-2xl font-bold mb-4">Product Details</h2>
//             <p>This is your modal content.</p>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

















// import NavArrowBar from "@/app/components/navarrowbar";
// import Navbar4 from "@/app/components/navbar4";
// import PageLayout from "@/app/components/sliderNavebar";
// import { FaChevronRight } from "react-icons/fa";
// import Image from "next/image";
// import Blog_Page_Navigation from "@/app/components/blog_page_navigation";
// import Blog_Custom_Model from "@/app/components/blog_custom_model";

// interface Product {
//   id: number;
//   name: string;
//   slug: string;
//   image: string;
//   description: string;
//   price: string;
// }
// Backend se data fetch karne ka function
// async function fetchProduct(slug: string): Promise<Product | null> {
//   const res = await fetch(`http://127.0.0.1:8000/product/${slug}`, {
//     cache: "no-store", // Ensure fresh data
//   });

//   if (!res.ok) return null;
//   return res.json();
// }
