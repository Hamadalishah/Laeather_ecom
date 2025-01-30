import React from "react";

interface TextSliderTypes{
  text: string[];
}

export default function TextSlider({ text }: TextSliderTypes) {
  return (
    <div className="relative w-full h-[80px] flex items-center bg-orange-600 overflow-hidden">
      {/* Scrolling text container */}
      <div className="whitespace-nowrap animate-marquee">
        <span className="text-white text-lg md:text-xl px-4">{text}</span>
        <span className="text-white text-lg md:text-xl px-4">{text}</span>
        <span className="text-white text-lg md:text-xl px-4">{text}</span>
      </div>
    </div>
  );
}











// "use client"
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/free-mode";
// import { Autoplay } from "swiper/modules";

// export default function TextSlider({ textList }:any) {
//   return (
//     <div className="w-full bg-black text-white">
//       <Swiper
//         spaceBetween={50}
//         slidesPerView={1}
//         loop={true}
//         freeMode={true}
//         autoplay={{
//           delay: 1,
//           disableOnInteraction: false,
//         }}
//         speed={4000} // Controls the scrolling speed
//         modules={[Autoplay]}
//         className="text-slider"
//       >
//         {textList.map((text:any, index:any) => (
//           <SwiperSlide key={index}>
//             <div className="text-center text-lg md:text-xl px-4">{text}</div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }
