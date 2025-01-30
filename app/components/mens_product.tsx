import Image from "next/image";

interface propTypes {
  id:number;
  img: string;   // img prop ki type string hai
  title: string; // title prop ki type string hai
  dec: string;   // description ki type string hai
  rating: number; // rating ki type number hai
  price: number;  // price ki type number hai
}

const Mens_Product: React.FC<propTypes> = ({ id, img, title }) => {
  
  // const generate_rating = (rating: number) => {
  //   switch (rating) {
  //     case 5:
  //       return "★★★★★"; // 5 stars
  //     case 4:
  //       return "★★★★☆"; // 4 stars
  //     case 3:
  //       return "★★★☆☆"; // 3 stars
  //     case 2:
  //       return "★★☆☆☆"; // 2 stars
  //     case 1:
  //       return "★☆☆☆☆"; // 1 star
  //     default:
  //       return "No Rating"; // If rating is not 1-5
  //   }
  // }

  return (
    <>
      <div className='w-full mt-8 gap-6'>
        <div className={`w-[400px] h-[450px] product-${id} border border-gray-200 rounded-lg flex flex-col `}>
          <div className="w-[400px] h-[400px]">
<Image className=" w-full h-full" src={img} width={300} height={150} alt={title}
           />
          </div>
          
          <div className="mt-4 flex justify-center">
            <h2 className="font-semibold text-xl">{title}</h2>
            

          </div>
        </div>
      </div>
    </>
  );
};

export default Mens_Product;
