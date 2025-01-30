"use client"
import { useState } from "react";
import Related_Product from "./related_product";
import Blog_Detail from "./blog_detail";
import Blog_Review from "./blog_review";
import { Product } from "../routs/product_rout";

interface Blog_Page_Types{
  products:Product[];
  detail_image:string;
  dic:string;
  title:string;
}

 

export default function Blog_Page_Navigation(prop:Blog_Page_Types) {
    const [activePage, setActivePage] = useState("related-products");
     // Render content based on activePage
  const renderContent = () => {
    if (activePage === "related-products") {
      return <div><Related_Product product_data={prop.products} /></div>;
    }
    if (activePage === "details") {
      return <div><Blog_Detail image={prop.detail_image} dic={prop.dic} name={prop.title}/></div>;
    }
    if (activePage === "reviews") {
      return <div className=""><Blog_Review/></div>;
    }
  };
  return (
    <div className="flex flex-col justify-center items-center mt-4 md:mt-8">
    {/* Buttons for navigation */}
    <div className="flex gap-2 flex-wrap justify-center">
      <button
        onClick={() => setActivePage("related-products")}
        className={`px-4 py-3 ${
          activePage === "related-products" ? "bg-[#fc7e8d] text-white" : "bg-gray-100 text-gray-700"
        }`}
      >
        Related Products
      </button>
      <button
        onClick={() => setActivePage("details")}
        className={`px-4 py-3 ${
          activePage === "details" ? "bg-[#fc7e8d] text-white" : "bg-gray-100 text-gray-700"
        }`}
      >
        Details
      </button>
      <button
        onClick={() => setActivePage("reviews")}
        className={`px-4 py-3 ${
          activePage === "reviews" ? "bg-[#fc7e8d] text-white" : "bg-gray-100 text-gray-700"
        }`}
      >
        Reviews
      </button>
    </div>

    {/* Render content dynamically */}
    <div className="mt-8">{renderContent()}</div>
  </div>
  )
}