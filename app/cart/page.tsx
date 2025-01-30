// app/cart/page.tsx

import React from 'react';
import ShoppingCart from './shopingCart';
import { fetchProducts, Product } from '../routs/product_rout';

const Page: React.FC = async () => {
  // سرور سائیڈ پر پروڈکٹس کو فیچ کریں
  const products: Product[] = await fetchProducts();

  // سیل کے مطابق پروڈکٹس کو فلٹر کریں
  const filteredProducts = products.filter(
    (product) => product.sale === true
  );

  return (
    <>
      <div>
        <ShoppingCart filteredProducts={filteredProducts} />
      </div>
    </>
  );
};

export default Page;
