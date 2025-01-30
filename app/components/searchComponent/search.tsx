"use client";

import React, { useState, useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';
import Image from 'next/image';
import { supabaseKey } from '@/app/utils/config';
import Link from 'next/link';
// Define Type for Product
interface Product {
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

const Search: React.FC = () => {
  // State for the query string, search results, and loading status
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchResults = async () => {
      if (query.trim() === "") {
        setResults([]); // Clear results if the query is empty
        return;
      }

      setLoading(true); // Set loading to true while fetching data
      try {
        const response = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch from backend: ${response.statusText}`);
        }
        const data = await response.json();
        if (!Array.isArray(data)) {
          throw new Error('Invalid response format');
        }
        setResults(data);  // Update the state with the fetched results
      } catch (error) {
        console.error('Search failed:', error);
        setResults([]);
      } finally {
        setLoading(false);  // Stop loading when done
      }
    };

    // Debounce the search query to avoid frequent requests
    const timer = setTimeout(() => {
      fetchResults();
    }, 500);  // 500ms debounce delay

    // Cleanup timer on query change
    return () => clearTimeout(timer);

  }, [query]);  // Only re-run the effect when the query changes

  return (
    <div className="relative flex justify-center">
      <div className="relative w-[320px] md:w-[400px]">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}  // Update query as user types
          className="border-gray-200 w-full h-[50px] rounded-lg px-4 pr-10 text-black"  // Set text color to black
          placeholder="What are you looking for..."
        />
        <BiSearch className="absolute text-2xl text-slate-500 right-3 top-1/2 transform -translate-y-1/2" />
        {query && (
          <div className="absolute left-0 right-0 bg-white border border-gray-200 mt-1 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
            {loading ? (
              <div className="p-4 text-center text-gray-500">Loading...</div>
            ) : (
              results.length > 0 ? (
                <ul>
                  {results.map((product) => (
                    <li key={product.id} className="p-2 border-b hover:bg-gray-100">
                        <Link href={`/product/${product.id}`} >
                      <div className="flex items-center">
                        <div className="w-24 h-24 mr-2">
                          {product.images.length > 0 && product.images[0].filename ? (
                            <Image
                              alt={'product'}
                              width={100}
                              height={50}
                              src={`${supabaseKey}${product.images[0].filename}`}
                            />
                          ) : (
                            <div className="w-full h-full bg-gray-200 rounded"></div>
                          )}
                        </div>
                        <div>
                          <div className="font-medium text-gray-800">{product.product_name}</div>
                          <div className="text-sm text-gray-600">${product.price}</div>
                        </div>
                      </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="p-4 text-center text-gray-500">No results found</div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;