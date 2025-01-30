import React from 'react'
import Image from 'next/image'


interface Blog_detail_Typse{
  image:string;
  dic:string;
  name:string;
}

export default function Blog_Detail(props:Blog_detail_Typse) {
  return (
    <div className='flex flex-col justify-center items-center '>
      
        {/* title */}
        <div className='text-4xl font-bold'>{props.name}</div>
        {/* text */}
        <div className='text-2xl font-bold'>{props.dic}</div>

        {/* image */}
        <div className='md:w-[896px] md:h-[1400px] w-[350px] h-[400px] bg-gray-300 mt-2'>
          <Image
          src={props.image}
          alt='product'
          width={500}
          height={300}
          className='w-full h-full object-cover'
          />
        </div>
    </div>
  )
}
