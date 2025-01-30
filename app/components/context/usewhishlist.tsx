// context/useWishlist.ts

import { useContext } from 'react';
import { WishlistContext } from './WhishListcontext';
import { Product } from '../../utils/whishlistType';

interface UseWishlistHook {
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (id: number) => void;
}

export const useWishlist = (): UseWishlistHook => {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }

  const { state, dispatch } = context;

  const addToWishlist = (product: Product) => {
    dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
  };

  const removeFromWishlist = (id: number) => {
    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: { id } });
  };

  return { wishlist: state.wishlist, addToWishlist, removeFromWishlist };
};
