import React from 'react';
import Image from 'next/image';

interface PropsType {
  image: string;
  title: string;
  maintitle: string;
  price: string;
}

const Slider: React.FC<PropsType> = ({ image, title, maintitle, price }) => {
  return (
    <div className='w-full mt-4 h-[600px] relative'>
      {/* Image container */}
      <div className='w-full h-full'>
        <Image src={image} alt="" className="w-full h-full object-cover" />
      </div>

      {/* Text overlay */}
      <div className='absolute inset-0 gap-3 flex flex-col justify-center text-white p-4'>
        <h3 className="text-red-200 text-[20px] md:text-[24px] lg:text-[28px]">{title}</h3>
        <h2 className="text-[22px] md:text-[26px] lg:text-[44px] font-bold leading-[1.2]">
          {maintitle}
        </h2>
        <div>
          <h3 className="text-[20px] md:text-[24px]">
            Free shipping up to <b className="text-[18px] md:text-[20px] lg:text-[30px]">{price}</b>.00
          </h3>
        </div>
        <div className='flex flex-col sm:flex-row gap-4 mt-4'>
          <div className="bg-red-400 text-white text-[14px] md:text-[16px] p-2 px-4 rounded-lg 
              inline-block cursor-pointer hover:bg-black max-w-[150px] w-full">MENS</div>
          <div className="bg-red-400 text-white text-[14px] md:text-[16px] p-2 px-4 rounded-lg 
              inline-block cursor-pointer hover:bg-black max-w-[150px] w-full">WOMEN</div>
        </div>
      </div>
    </div>
  );
};

export default Slider;




    // <div className="outline-none border-none relative">
    //   {/* Image Section */}
    //   <div className="w-full h-[500px] relative">
    //     <Image
    //       className="rounded-xl object-cover object-center"
    //       src={image}
    //       alt="banner"
    //       layout="fill"
    //     />
    //   </div>

    //   {/* Text Section */}
    //   <div className="absolute left-0 right-0 top-[50%] -translate-y-[50%] flex justify-center space-x-4 max-w-[90%] mx-auto bg-[#ffffffa2] p-4 rounded-lg sm:bg-transparent sm:p-0">
    //     <div className="max-w-[250px] sm:max-w-[350px] text-center">
    //       <h3 className="text-accent text-[24px] lg:text-[28px]">{title}</h3>
    //       <h2 className="text-black text-[26px] md:text-[30px] lg:text-[44px] font-bold leading-[1.2]">
    //         {maintitle}
    //       </h2>
    //       <h3 className="text-[24px] text-gray-500">
    //         starting at <b className="text-[20px] md:text-[24px] lg:text-[30px]">{price}</b>.00
    //       </h3>
    //       <div className="bg-red-200 text-white text-[14px] md:text-[16px] p-2 px-4 rounded-lg 
    //                       inline-block cursor-pointer hover:bg-black">
    //         Shop Now
    //       </div>
    //     </div>
    //   </div>
    // </div>
//   );
// };

// export default Slide;
