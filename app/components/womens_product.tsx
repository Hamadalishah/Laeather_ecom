
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"
interface InfiniteMovingCardsType {
  id: number;
  img: string;
  title: string; // Mandatory title
  dec: string;
  rating: number;
  pric: number;
}


// Props for Men_Movingcards component
interface MenMovingCardsProps {
  title:"left" | "right"
}
export default function Womens_Products({ title }: MenMovingCardsProps) {

const womens_products: InfiniteMovingCardsType[]=[
  {
    id:1,
    img: "/Womens Product/1.jpg",
    title: "Men Urban Style Leather Varsity",
    dec:"Wilsons",
    rating:2,
    pric:500
  },
  {
    id:2,
    img: "/Womens Product/2.jpg",
    title: "Men Urban Style Leather Varsity",
    dec:"Wilsons",
    rating:2,
    pric:500
  },
  {
    id:3,
    img: "/Womens Product/3.jpg",
    title: "Men Urban Style Leather Varsity",
    dec:"Wilsons",
    rating:2,
    pric:500
  },
  {id:4,
    img: "/Womens Product/4.jpg",
    title: "public/Womens Product/5.jpg",
    dec:"Wilsons",
    rating:2,
    pric:500
  },
  {id:5,
    img: "/Womens Product/5.jpg",
    title: "Men Urban Style Leather Varsity",
    dec:"Wilsons",
    rating:2,
    pric:500
  },
  {
    id:6,
    img: "/Womens Product/6.jpg",
    title: "Men Urban Style Leather Varsity",
    dec:"Wilsons",
    rating:2,
    pric:500
  },
]
  return (
    <>
    
    <div className="">
      <InfiniteMovingCards
        items={womens_products}
        direction={title}
        speed="fast"
      />
    </div>
    
    </>
  )
}
