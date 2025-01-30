import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
// Type for individual card items
interface InfiniteMovingCardsType {
  id: number;
  img: string;
  title: string; // Mandatory title
  dec: string;
  rating: number;
  pric: number;
}

// Props for InfiniteMovingCards component


// Props for Men_Movingcards component
interface MenMovingCardsProps {
  title:"left" | "right"
}

export default function Men_Movingcards({ title }: MenMovingCardsProps) {
  const product_mens: InfiniteMovingCardsType[] = [
    {
      id: 1,
      img: "/Mens Product/1.jpg",
      title: "Men Urban Style Leather Varsity",
      dec: "Wilsons",
      rating: 2,
      pric: 500,
    },
    {
      id: 2,
      img: "/Mens Product/2.jpg",
      title: "Men Urban Style Leather Varsity",
      dec: "Wilsons",
      rating: 2,
      pric: 500,
    },
    {
      id: 3,
      img: "/Mens Product/3.jpg",
      title: "Men Urban Style Leather Varsity",
      dec: "Wilsons",
      rating: 2,
      pric: 500,
    },
    {
      id: 4,
      img: "/Mens Product/4.jpg",
      title: "Men Urban Style Leather Varsity",
      dec: "Wilsons",
      rating: 2,
      pric: 500,
    },
    {
      id: 5,
      img: "/Mens Product/5.jpg",
      title: "Men Urban Style Leather Varsity",
      dec: "Wilsons",
      rating: 2,
      pric: 500,
    },
    {
      id: 6,
      img: "/Mens Product/6.jpg",
      title: "Men Urban Style Leather Varsity",
      dec: "Wilsons",
      rating: 2,
      pric: 500,
    },
  ];

  return (
    <div>
      <InfiniteMovingCards items={product_mens} direction={title} speed="fast" />
    </div>
  );
}
