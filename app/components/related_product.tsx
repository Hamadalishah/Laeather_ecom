import React from 'react'
import ProductCard from './product_card';
import { Product } from "../routs/product_rout";

interface RealtedTypes{
  product_data:Product[];
}


export default function Related_Product(prop:RealtedTypes) {
      // Mock data arr  const products = prop.Product_data || []; // Default to empty array if no data is passed
      const products = prop.product_data || []; // Default to empty array if no data is passed
  
  return (
      <div className='w-full'>
        {/* related product */}
        <div className='flex justify-center'>
            <h3 className='font-bold text-xl'>Related Products</h3>
        </div>
          {/* Product Cards */}
      <div className='mt-24 px-4'>
        {/* Grid Layout */}
        <div className="flex flex-wrap  gap-2">
        {products.map((product:Product) => (
         <ProductCard key={product.id} {...product} />

        ))}
        </div>
      </div>
      </div>
    
    
  )
}
