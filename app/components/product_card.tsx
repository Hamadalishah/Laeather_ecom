import { Product } from "../routs/product_rout";
import { supabaseKey } from "../utils/config";
import Link from 'next/link';
import Product_Card_Model from "./product_card_model";
import Image from "next/image";
import CartButton from "./cart_button";
import WhishlistButton from "./whishlist_button";

const ProductCard: React.FC<Product> = (props) => {
  // Resolve images dynamically or set to null
  const frontImage = props.images?.[0]?.filename
    ? `${supabaseKey}${props.images[0].filename}`
    : null;

  const backImage = props.images?.[1]?.filename
    ? `${supabaseKey}${props.images[1].filename}`
    : null;

  return (
    <div key={props.id} className="p-2 border rounded-md shadow-md w-[300px] h-auto bg-white group">
      {/* Image Section */}
      <div className="relative w-full h-[300px] group">
        {/* Sale Icon */}
        {props.sale && (
          <div className="absolute top-2 left-1 w-[60px] h-[60px] text-white bg-red-500 text-lg font-semibold flex flex-col items-center justify-center z-30 rounded-full">
            Sale <div>{props.discount}%</div>
          </div>
        )}

        {/* Product Images with Link */}
        <Link href={`/product/${props.id}`} className="block w-full h-full">
          {/* Front Image */}
          {frontImage ? (
            <Image
              src={frontImage}
              layout="fill"
              alt={props.product_name}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-0"
            />
          ) : (
            <div className="absolute inset-0 w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
              No Image
            </div>
          )}

          {/* Back Image */}
          {backImage ? (
            <Image
              src={backImage}
              layout="fill"
              alt={props.product_name}
              className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
            />
          ) : null}
        </Link>

        {/* Call Product_Card_Model */}
        <Product_Card_Model id={props.id} image={frontImage || ''} original_price={props.price} product_name={props.product_name} discounted_price={props.old_price} />
      </div>

      {/* Title Section */}
      <div className="mt-4 text-xl font-bold">{props.product_name}</div>

      {/* Price Section */}
      <div className="py-1 flex gap-4 items-center">
        {props.old_price && (
          <div className="text-gray-700 line-through">Old Price: ${props.old_price}</div>
        )}
        <div className="text-red-500 text-xl font-bold">Price: ${props.price}</div>
      </div>

      <div className="flex items-center gap-3">
        {/* Discount Section */}
        {props.sale && props.discount > 0 && (
          <div className="mt-0 font-semibold">
            Save Up To: <span className="text-red-400 text-lg">{props.discount}%</span>
          </div>
        )}

        {/* Icons Section */}
        <div className="mt-0 flex space-x-2">
          <CartButton
            product={{
              id: props.id,
              name: props.product_name,
              price: props.price,
              images: frontImage || '', // Use resolved front image or empty
            }}
          />
          <WhishlistButton product={props} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
