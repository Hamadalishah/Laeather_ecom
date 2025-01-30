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
  
  export const fetchProducts = async (
    page: number,
    limit: number
  ): Promise<{ products: Product[]; totalCount: number }> => {
    try {
      const offset = (page - 1) * limit;
  
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/products?limit=${limit}&offset=${offset}`,
        {
          cache: 'no-store',
        }
      );
  
      if (!response.ok) {
        console.warn(`Failed to fetch products: Status ${response.status}, URL: ${response.url}`);
        return { products: [], totalCount: 0 }; // Return empty results gracefully
      }
  
      const data = await response.json();
  
      return { 
        products: Array.isArray(data.products) ? data.products : [], 
        totalCount: typeof data.totalCount === "number" ? data.totalCount : 0 
      };
    } catch (error) {
      console.error('Error fetching products:', error instanceof Error ? error.message : error);
      return { products: [], totalCount: 0 }; // Return empty results in case of error
    }
  };
  