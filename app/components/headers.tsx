"use client";

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper'; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import Slide from './slide';
import { slideData } from '../data/slide_data';
import { SlideData_Types } from '../types/navetype';
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";




export default function Headers() {
  const swiperRef = useRef<SwiperType | null>(null); // Swiper reference
  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext(); // Navigate to next slide
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev(); // Navigate to previous slide
    }
  };

  return (
    <div className="w-full">
      <div className="relative">
   


        {/* Navigation Buttons */}
        <div className="absolute hidden inset-0 items-center px-40 z-10 md:flex justify-between">
          <button onClick={handlePrev} className="focus:outline-none">
            <MdOutlineArrowBackIosNew
              className="text-white text-4xl md:text-5xl lg:text-6xl hover:text-gray-300 transition-colors duration-300"
            />
          </button>
          <button onClick={handleNext} className="focus:outline-none">
            <MdOutlineArrowForwardIos
              className="text-white text-4xl md:text-5xl lg:text-6xl hover:text-gray-300 transition-colors duration-300"
            />
          </button>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper; // Initialize swiper instance
          }}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{
            delay: 3000, // 3 seconds delay
            disableOnInteraction: false, // Keep autoplay even after interaction
          }}
          pagination={{ clickable: true }}
          loop={true}
          navigation={false} // Disable default navigation
          className="mySwiper"
        >
          {slideData.map((item: SlideData_Types) => (
            <SwiperSlide key={item.id}>
              <Slide
                image={item.image}
                title={item.title}
                maintitle={item.maintitle}
                price={item.price}
              />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  );
}
