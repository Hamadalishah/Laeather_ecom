

import Image from 'next/image';

interface Fornt_Back_Card_Types {
  id: number;          // Unique ID for each card
  frontImage: string;  // Front side image URL
  backImage: string;   // Back side image URL
  p1: string;
  title: string;       // Product title
  price: number;       // Product price
  deltprice: number;
}

const Fornt_back_image_card: React.FC = () => {
  const Fornt_back_card_data: Fornt_Back_Card_Types[] = [
    {
      id: 1,
      frontImage: "/Mens Product/3.jpg",
      backImage: "/Mens Product/4.jpg",
      p1: "B3 Bomber Jackets",
      title: "Maverick Women'Shearling",
      price: 1000,
      deltprice: 1500,
    },
    {
      id: 2,
      frontImage: "/Mens Product/3.jpg",
      backImage: "/Mens Product/4.jpg",
      p1: "B3 Bomber Jackets",
      title: "Maverick Women'Shearling",
      price: 1000,
      deltprice: 1500,
    },
    {
      id: 3,
      frontImage: "/Mens Product/3.jpg",
      backImage: "/Mens Product/4.jpg",
      p1: "B3 Bomber Jackets",
      title: "Maverick Women'Shearling",
      price: 1000,
      deltprice: 1500,
    },
    {
      id: 4,
      frontImage: "/Mens Product/3.jpg",
      backImage: "/Mens Product/4.jpg",
      p1: "B3 Bomber Jackets",
      title: "Maverick Women'Shearling",
      price: 1000,
      deltprice: 1500,
    },
    {
      id: 5,
      frontImage: "/Mens Product/3.jpg",
      backImage: "/Mens Product/4.jpg",
      p1: "B3 Bomber Jackets",
      title: "Maverick Women'Shearling",
      price: 1000,
      deltprice: 1500,
    },
    {
      id: 6,
      frontImage: "/Mens Product/3.jpg",
      backImage: "/Mens Product/4.jpg",
      p1: "B3 Bomber Jackets",
      title: "Maverick Women'Shearling",
      price: 1000,
      deltprice: 1500,
    },
    // Add more cards here
  ];

  return (
    <div className="inline-flex gap-4">
      {Fornt_back_card_data.map(({ id, frontImage, p1, deltprice, backImage, title, price }) => (
        <div key={id} className="w-[250px] h-[400px] bg-white rounded-lg shadow-md overflow-hidden group">
          <div className="relative w-full h-[200px]">
            {/* Front Image */}
            <Image
             width={200}
             height={200}
              src={frontImage}
              alt={title}
              layout="intrinsic" // Change to intrinsic to maintain aspect ratio
              objectFit="cover"
              className="transition-opacity duration-300 ease-in-out group-hover:opacity-0"
            />
            {/* Back Image */}
            <Image
            width={200}
            height={200}
              src={backImage}
              alt={title}
              layout="intrinsic" // Change to intrinsic to maintain aspect ratio
              objectFit="cover"
              className="absolute inset-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-xl font-semibold">{p1}</p>
            <p>rating</p>
            <p className="text-lg text-red-500 flex">
              <span><del>{deltprice}</del></span>${price.toFixed(2)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Fornt_back_image_card;















// import Image from 'next/image';

// export default function HomeCards() {
//     const cardDataArray: any = [
//         {
//             img: "/images/home card images/card1.png",
//             title: "Jung Seung-hwan - CEO of Egg Seoul",
//             dic: "Conversation makes a witty person, writing makes an accurate person, and reading makes a complete person",
//             name: "Gimpo Marina Bay",
//             date: "First meeting: Wednesday, August 14th, 7:40 PM",
//         },
        
//         {
//             img: "/images/home card images/card2.png",
//             title: "Jung Seung-hwan - CEO of Egg Seoul",
//             dic: "Conversation makes a witty person, writing makes an accurate person, and reading makes a complete person",
//             name: "Gimpo Marina Bay",
//             date: "First meeting: Wednesday, August 14th, 7:40 PM",
//         },
//         {
//             img: "/images/home card images/card3.png",
//             title: "Jung Seung-hwan - CEO of Egg Seoul",
//             dic: "Conversation makes a witty person, writing makes an accurate person, and reading makes a complete person",
//             name: "Gimpo Marina Bay",
//             date: "First meeting: Wednesday, August 14th, 7:40 PM",
//         },
//         {
//             img: "/images/home card images/card4.png",
//             title: "Jung Seung-hwan - CEO of Egg Seoul",
//             dic: "Conversation makes a witty person, writing makes an accurate person, and reading makes a complete person",
//             name: "Gimpo Marina Bay",
//             date: "First meeting: Wednesday, August 14th, 7:40 PM",
//         },
        
//         {
//             img: "/images/home card images/card1.png",
//             title: "Jung Seung-hwan - CEO of Egg Seoul",
//             dic: "Conversation makes a witty person, writing makes an accurate person, and reading makes a complete person",
//             name: "Gimpo Marina Bay",
//             date: "First meeting: Wednesday, August 14th, 7:40 PM",
//         },
//         {
//             img: "/images/home card images/card3.png",
//             title: "Jung Seung-hwan - CEO of Egg Seoul",
//             dic: "Conversation makes a witty person, writing makes an accurate person, and reading makes a complete person",
//             name: "Gimpo Marina Bay",
//             date: "First meeting: Wednesday, August 14th, 7:40 PM",
//         },
//     ];

//     return (
//         <>
//             {cardDataArray.map((item:any ,index:any) => (
//                 <div key={index} className="w-[256px] mt-4">
//                     <div className="md:w-[250px] w-[320px] h-[280px] border border-spacing-2 border-black rounded-lg overflow-hidden">
//                         <Image
//                             className="w-full h-full object-cover"
//                             src={item.img}
//                             height={280}
//                             width={280}
//                             alt={`${item.title} image`}
//                         />
//                     </div>
//                     <div className="text-xl mt-2 font-semibold">{item.title}</div>
//                     <div className="mt-1">{item.dic}</div>
//                     <div className="text-[#FF6016] mt-1">{item.name}</div>
//                     <div className="mt-1">{item.date}</div>
//                 </div>
//             ))}
//         </>
//     );
// }