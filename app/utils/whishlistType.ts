// context/types.ts
export interface ProductImage {
  id?: number;
  filename: string;
}

export interface Product {
  id: number;
  product_name: string;
  description: string;
  stock: number;
  price: number;
  old_price?: number;
  sale?: boolean;
  category_name?: string;
  discount: number;
  images: { id: number; filename: string }[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartState {
  cart: CartItem[];
}

export type CartAction =
  | { type: 'INIT_CART'; payload: CartItem[] }
  | { type: 'ADD_TO_CART'; payload: Product }
  | { type: 'REMOVE_FROM_CART'; payload: { id: number } }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } };

export interface WishlistState {
  wishlist: Product[];
}

export type WishlistAction =
  | { type: 'INIT_WISHLIST'; payload: Product[] }
  | { type: 'ADD_TO_WISHLIST'; payload: Product }
  | { type: 'REMOVE_FROM_WISHLIST'; payload: { id: number } }
  | { type: 'CLEAR_WISHLIST' };