'use client'

import Link from "next/link"
import { FaFacebookF, FaInstagram, FaPinterestP, FaLinkedinIn, FaYoutube ,FaWhatsapp } from 'react-icons/fa'
import Image from "next/image"

export default function Footer1() {
  return (
    <footer className="bg-[#2A2A2A] text-white py-12 w-full">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Sales Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Sales Support:</h3>
            <div className="space-y-2">
              <p>Email: leather.com.pk</p>
              <p>Phone: ( +92 ) - 309 - 97629120</p>
            </div>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Care:</h3>
            <div className="space-y-2">
              <p>Email: customercare@leather.com.pk</p>
              <p>Phone: ( +92 ) - 301 - 3201050</p>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link href="#" className="hover:underline">Store Locator</Link>
              <Link href="#" className="hover:underline">FAQ&apos;s</Link>
              <Link href="#" className="hover:underline">Return Exchange Policy</Link>
              <Link href="#" className="hover:underline">About Us</Link>
              <Link href="#" className="hover:underline">Terms Conditions</Link>
              <Link href="#" className="hover:underline">Charcoal Sewing</Link>
              <Link href="#" className="hover:underline">Size Guide</Link>
              <Link href="#" className="hover:underline">All Products</Link>
              <Link href="#" className="hover:underline">Fabric Care</Link>
              <Link href="#" className="hover:underline">Blogs</Link>
              <Link href="#" className="hover:underline">BaadMay</Link>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6 mb-8 justify-start">
          <Link href="#" className="hover:opacity-80">
            <FaFacebookF size={24} />
          </Link>
          <Link href="#" className="hover:opacity-80">
            <FaInstagram size={24} />
          </Link>
          <Link href="#" className="hover:opacity-80">
            <FaPinterestP size={24} />
          </Link>
          <Link href="#" className="hover:opacity-80">
            <FaYoutube size={24} />
          </Link>
          <Link href="#" className="hover:opacity-80">
            <FaLinkedinIn size={24} />
          </Link>
          <Link href="#" className="hover:opacity-80">
            <FaWhatsapp size={24} />
          </Link>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm mb-4 md:mb-0 text-center md:text-left">
            © 2025, leather Clothing.
            <span className="ml-2">Powered by IT Brain</span>
          </div>
          <div className="flex items-center space-x-2">
            <Image 
              src="/images/visa.svg" 
              alt="Visa" 
              width={40} 
              height={25} 
              className="h-6 w-auto"
            />
            <Image 
              src="/images/mastercard.svg" 
              alt="Mastercard" 
              width={40} 
              height={25} 
              className="h-6 w-auto"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
          <Link href="#" className="hover:underline">SALE</Link>
          <Link href="#" className="hover:underline">SUITING</Link>
          <Link href="#" className="hover:underline">AFROZ</Link>
          <Link href="#" className="hover:underline">FRAGRANCES</Link>
          <Link href="#" className="hover:underline">MTM</Link>
          <Link href="#" className="hover:underline">ACCESORIES</Link>
        </div>
      </div>
    </footer>
  )
}
