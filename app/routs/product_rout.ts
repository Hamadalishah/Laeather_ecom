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

  
  export const fetchProducts = async (): Promise<Product[]> => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product`, {
        cache: 'no-store',
      });
  
      if (!response.ok) {
        console.warn('Failed to fetch products: Response status', response.status);
        return []; // Return an empty array to handle gracefully
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      if (error instanceof Error) {
          console.error('Error fetching products:', error.message);
      } else {
          console.error('Unexpected error fetching products:', error);
      }
      return []; // Return an empty array in case of an error
    }
  };
  
 