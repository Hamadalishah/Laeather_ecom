// app/shop/page.tsx
import ProductCard from '../components/product_card';
import { fetchProducts } from '../routs/shop_rout'; // Verify path
import ProductHeader from './component/productheader'; // Verify folder structure
import Link from 'next/link';

// ====================
// 1. Configuration
// ====================
export const dynamic = 'force-dynamic';

// ====================
// 2. Type Definitions
// ====================
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
interface PaginationProps {
  currentPage: number;
  totalPages: number;
}


const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
  const getPageRange = () => {
    const visiblePages = 5;
    const start = Math.max(1, currentPage - Math.floor(visiblePages/2));
    const end = Math.min(totalPages, start + visiblePages - 1);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  return (
    <div className="flex justify-center my-8 gap-2">
      <Link
        href={`?page=${Math.max(1, currentPage - 1)}`}
        className={`px-4 py-2 rounded ${
          currentPage === 1 ? 'invisible' : 'bg-gray-200 hover:bg-gray-300'
        }`}
      >
        ←
      </Link>
      
      {getPageRange().map((page) => (
        <Link
          key={page}
          href={`?page=${page}`}
          className={`px-4 py-2 rounded ${
            currentPage === page
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          {page}
        </Link>
      ))}

      <Link
        href={`?page=${Math.min(totalPages, currentPage + 1)}`}
        className={`px-4 py-2 rounded ${
          currentPage === totalPages ? 'invisible' : 'bg-gray-200 hover:bg-gray-300'
        }`}
      >
        →
      </Link>
    </div>
  );
};

// ====================
// 4. Main Component
// ====================
const ProductPage = async (props: {
  searchParams?: Promise<Record<string, string | string[]>>;
}) => {
  try {
    // Resolve searchParams promise
    const params = await props.searchParams || {};
    const pageParam = params?.page || '1';

    // Validate and sanitize page number
    const currentPage = Math.min(
      Math.max(1, parseInt(Array.isArray(pageParam) ? pageParam[0] : pageParam) || 1),
      1000 // Maximum page limit for safety
    );

    // Fetch data with error boundary
    const { products, totalCount } = await fetchProducts(currentPage, 12);
    const totalPages = Math.ceil(totalCount / 12);

    return (
      <main className="container mx-auto px-4">
        <ProductHeader />

        {products.length === 0 ? (
          <div className="min-h-[50vh] flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                No Products Found
              </h2>
              <p className="text-gray-500">
                Try adjusting your search or filters
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-8">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                />
              ))}
            </div>

            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
              />
            )}
          </>
        )}
      </main>
    );
  } catch (error) {
    console.error('Error loading products:', error);
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="max-w-md text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Server Error (500)
          </h1>
          <p className="text-gray-600 mb-6">
            We&apos;re having trouble loading products. Please try again later.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Refresh Page
          </button>
        </div>
      </div>
    );
  }
};

export default ProductPage;