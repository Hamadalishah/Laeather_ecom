import { NextResponse } from 'next/server';

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
export async function GET(request: Request) {
    const url = new URL(request.url);
    const query = url.searchParams.get('query');
  
    // Ensure that the query parameter is provided
    if (!query) {
      return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 });
    }
  
    try {
      const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8004';
      if (!backendUrl) {
        console.error('Backend URL is not set');
        return NextResponse.json({ error: 'Backend URL is not set' }, { status: 500 });
      }
  
      // Fetch data from backend search endpoint
      const response = await fetch(`${backendUrl}/search?query=${encodeURIComponent(query)}&limit=10`);
  
      if (!response.ok) {
        throw new Error(`Failed to fetch from backend: ${response.statusText}`);
      }
  
      // Parse the response into the Product array
      const data: Product[] = await response.json();
      return NextResponse.json(data);
    } catch (error) {
      console.error('Search API Error:', error);
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
  }