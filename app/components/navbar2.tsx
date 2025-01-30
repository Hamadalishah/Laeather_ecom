import Image from "next/image"
import { BiSearch } from 'react-icons/bi';
import Link from "next/link";
import { APP_LINKS } from "../utils/constant";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { LuClock9 } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import Nav_Menu from "./nav_menu_outline";
import Search from "./searchComponent/search";
export default function Navbar2() {
  return (
    <>
      {/* main div */}
      <div className="w-full h-[100px] bg-black"></div>
      <div className="bg-black w-full flex items-center h-auto md:h-[100px] fixed top-0 z-50">
        <div className=' text-white w-full flex flex-col md:flex-row justify-between items-center px-10'>
          {/* logo */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            <Link href={"/"}>
              <div className="pb-4 sm:pb-0"><Image width={170} height={103} src={"/LEATHER-BABA-LOGO-1.png"} alt="Logo" /></div></Link>
            {/* home icons */}
            {/* Navigation Links */}
            <div className=" gap-4 hidden md:flex">
              {APP_LINKS.map((link, index) => (
                <Link href={link.href} key={index}>
                  <p className="font-medium text-white">{link.name}</p>
                </Link>
              ))}
            </div>
            {/* search bar */}
           <Search/>
          </div>


          {/* cart and track icons */}
          <div className="cursor-pointer">
            <div className=" flex gap-6 items-center ">
              {/* login Icon */}
              <div className="relative group flex flex-col items-center gap-1 text-lg md:text-xl">

                <FaRegUser className="md:text-3xl  hover:text-gray-300" />

                {/* Tooltip */}
                <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 bg-red-500 text-white text-xs md:text-sm rounded-lg px-2 py-1 hidden group-hover:flex">
                  Login
                </div>
              </div>
              
              {/* whish list */}
              <div className="relative group flex flex-col items-center gap-1 text-lg md:text-xl">
                {/*  Icon */}
              
                <div><Link href={"/wishlist"}><FiHeart className="md:text-4xl text-xl  hover:text-gray-300" />
                </Link>
                  {/* Tooltip */}
                  <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 bg-red-500 text-white text-xs md:text-sm rounded-lg px-2 py-1 hidden group-hover:flex">
                    add to whishlist
                  </div>
                </div>
              </div> 
              {/* add to cart */}
              <div className="relative group flex flex-col items-center gap-1 text-lg md:text-xl">
                {/*  Icon */}
                <div><Link href={"/cart"}><MdOutlineShoppingBag className="md:text-4xl text-xl  hover:text-gray-300" />
                </Link>
                  {/* Tooltip */}
                  <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 bg-red-500 text-white text-xs md:text-sm rounded-lg px-2 py-1 hidden group-hover:flex">
                    add cart
                  </div>
                </div>
              </div>
              {/* track oder */}
              <div className="relative group flex flex-col items-center gap-1 text-lg md:text-xl">
                {/*  Icon */}
                <div className="flex items-center md:text-xl md:gap-1  hover:text-gray-300">Track-Oder<LuClock9 className="text-3xl md:text-4xl " />

                  {/* Tooltip */}
                  <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 bg-red-500 text-white text-xs md:text-sm rounded-lg px-2 py-1 hidden group-hover:flex">
                    Track Oder
                  </div>
                </div>
              </div>
  {/* search */}
  <div className="relative group flex flex-col items-center gap-1 text-lg md:text-xl">
                {/*  Icon */}
                <div><BiSearch className="text-xl md:hidden  hover:text-gray-300" />

                  {/* Tooltip */}
                  <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 bg-red-500 text-white text-xs md:text-sm rounded-lg px-2 py-1 hidden group-hover:flex">
                    search product
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="flex md:hidden text-3xl absolute top-4 right-10"><Nav_Menu/></div>
        </div>
      </div>
    </>
  )
}



// {/* <div className='container flex justify-between items-center gap-4 md:gap-10 mx-16 '>
// <div className="pb-4 sm:pb-0"><Image width={170} height={103} src={"/LEATHER-BABA-LOGO-1.png"} alt="Logo" /></div>
// {/* input section start */}
// <div className="w-full flex-wrap sm:[300px] md:w-[70%] relative hidden md:flex">
// <input
// className="border-gray-200  rounded-lg" type="text" placeholder="What are you looking for..." />
// <BiSearch className="absolute text-2xl text-slate-500 right-0 top-0 mr-3 mt-3"/>
// </div>
// {/* input section End */}
// {/* icon section start */}
// <div className="flex gap-6 items-center ">
//   <div className=" hidden md:flex items-center font-bold text-xl"><span className="text-4xl"><LuClock9/></span>Track<span>Oder</span></div>
//   <div className=" relative"> <span className=" text-4xl font-bold "><FiHeart/></span><div className="bg-red-500 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text[12px] grid place-items-center translate-x-1 -translate-y-1">0</div></div>
//   <div className=" relative"> <span className=" text-4xl font-bold "><MdOutlineShoppingBag/></span><div className="bg-red-500 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text[12px] grid place-items-center translate-x-1 -translate-y-1">0</div></div>
//   <div className=" mr-20 md:mr-12"> <span className="hidden md:block">$0.00</span>
//   <a href="" className="text-6xl md:hidden">&#8801;</a>
//   </div>
// </div>
//  {/* icon section end */}
// </div> */}