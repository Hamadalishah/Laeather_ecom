import { FaFacebookF,FaTiktok,FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { MdSettingsPhone } from "react-icons/md";
import Footer_Detail from "./footer_detail";
import Image from "next/image";


export default function Footer() {
  return (
    <>
    <div> 
        {/* social media icon start */}
        <div className="w-full h-[120px] items-center py-4 justify-center md:justify-start bg-black text-white flex flex-wrap flex-col lg:flex-row">
            <div className=" w-[40%] mx-2 flex gap-6">
                <div className="md:text-3xl text-xl"><FaFacebookF /></div>
                <div className="md:text-3xl text-xl"><FaLinkedinIn /></div>
                <div className="md:text-3xl text-xl"><FaInstagram /></div>
                <div className="md:text-3xl text-xl"><FaTiktok /></div>
            </div>
            <div className="md:text-2xl text-xl font-semibold mt-4">Get the latest deals and more.</div>
        </div>
        {/* detail section start */}
        <div>
            <div className="flex flex-wrap gap-16 px-4">
                <Footer_Detail/>
            </div>
        </div>
        {/* pyment section start */}
        <div className="w-full gap-4 border border-spacing-1 py-10 justify-center md:justify-between mt-8 px-10 items-center flex flex-wrap flex-col md:flex-row">
            <div className="flex flex-col md:flex-row items-center gap-4">
                <div><Image width={220} height={103} src={"/LEATHER-BABA-LOGO-2.png"} alt="Logo" /></div>
                <div className="flex gap-4 items-center"><span><MdSettingsPhone className="text-orange-500 text-4xl"/></span><p className="text-xl font-bold">Need help? +1(959) 777 1012</p></div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6">
                <div><button className="w-[150px] rounded-3xl h-[50px] bg-black text-white">Send Message</button></div>
                <div>
                    <div className="flex flex-wrap gap-4">
                    <Image className="" src={"/pyament logo/PayPal-Logo-PNG-Free-Download.png"} height={'100'} width={"80"} alt="pypal"/>
                    <Image className="" src={"/pyament logo/PayPal-Logo-PNG-Free-Download.png"} height={'100'} width={"80"} alt="pypal"/>
                    <Image className="" src={"/pyament logo/Visa-Symbol.png"} height={'100'} width={"80"} alt="pypal"/>
                    <Image className="" src={"/pyament logo/Visa-Symbol.png"} height={'100'} width={"80"} alt="pypal"/>
                    </div>
                </div>
            </div>
        </div>
        {/* copy right section start */}
        <div className=" flex flex-col mt-6 items-center text-lg justify-center">
            <p className="bg-blue-50">© Copyright 2023 LeatherBaba  All Rights Reserved.</p>
            <p className="bg-blue-50">Design & Developed By Aljaa</p>
            
              </div>
    </div>
    
    
    
    </>
  )
}
