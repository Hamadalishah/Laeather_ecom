
import { fetchProducts, Product } from '../../routs/product_rout';
import {  FaFacebook, FaInstagramSquare } from "react-icons/fa";
import Image from "next/image";
import Blog_Page_Navigation from "@/app/components/blog_page_navigation";
import ProductImage from "@/app/components/product_zoom";
import Link from "next/link";
import Size_Input from "@/app/components/size_input";
import Measure_Button from "@/app/components/measure_button";
import Slug_AddCart from "@/app/components/slug_addCart";
import { BiSolidBank } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { AiFillTikTok } from "react-icons/ai";
import { supabaseKey } from "@/app/utils/config";
import Size_Chart_Button from '@/app/components/size_chart_button';



export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {

  const resolvedParams = await params; // Resolving the promise
  const productId = Number(resolvedParams.id); // Convert string ID to number
  
  const products: Product[] = await fetchProducts();
      
  

  const product = products.filter((item) => item.id === productId);
  const relatedProducts = products.filter((item) => item.category_name == product[0].category_name);
  const src_image = `${supabaseKey}${product[0].images[1].filename}`;
  if (product.length === 0) {
    return (
      <div>
        <h1>Product not found</h1>
        <p>Please check the product ID and try again.</p>
      </div>
    );
  }

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
            <ProductImage images = {product[0].images} />
          </div>
          {/* Image Div 2 */}
          <div className="w-[200px] h-[200px]">
            <Image
              src={ `${supabaseKey}${product[0].images[1].filename}`}
              width={500}
              height={300}
              alt={""}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Div */}
        <div className="w-full md:w-[550px] h-auto md:h-[1000px]">
          <div className="font-bold text-2xl mt-4">{product[0].product_name}</div>
          <div className="flex justify-between px-2 my-4 py-5 border-b border-[#e9e9e9]"></div>
          {/* price */}
          <div className="font-bold text-2xl mt-4 flex gap-2"><del>{products[0].old_price}</del><span className="text-red-400">{products[0].price}</span></div>
          {/* review */}
          <div className="flex"><div>review</div>
          <div><Link href={"/"} >(1 customer review)</Link></div></div>
          {/* sold by */}
          <div className="flex flex-col"><div className="flex text-xl items-center gap-1"><BiSolidBank className="text-2xl text-gray-500" /><span>Sold by Wilsons</span> </div>
          <div><p className="text-2xl text-gray-500">{products[0].description}</p></div>
          </div>
          {/* button div */}
          <div className="flex  cursor-pointer  mt-4">
            
            <Size_Chart_Button/>
            
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
            {/* <Slug_AddCart price={products[0].price} name={product[0].product_name} image={src_image}/> */}
            <Slug_AddCart product={{
              id: products[0].id,           // Assuming props.id exists
              name: product[0].product_name, // Assuming props.product_name exists
              price: products[0].price,       // Assuming props.price exists
              images:`${supabaseKey}${product[0].images[1].filename}` ,       // Assuming props.image exists
            }}/>
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
        <Blog_Page_Navigation title={product[0].product_name} products={relatedProducts} detail_image={src_image} dic={products[0].description} />
      </div>
      
    </div>
  );
}