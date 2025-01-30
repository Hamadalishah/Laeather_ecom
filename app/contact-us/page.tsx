import React from 'react'

export default function Contact_Us() {
  return (
    <div className="relative group flex justify-center items-center w-16 h-16">
    {/* <!-- Icon --> */}
    <div className="text-4xl text-gray-700 hover:text-gray-900">
      hello
      <i className="fas fa-info-circle"></i>
    </div>
  
    {/* <!-- Tooltip Text --> */}
    <div
      className="absolute bottom-12 hidden group-hover:flex justify-center items-center bg-gray-900 text-white text-sm rounded-lg px-2 py-1"
    >
      Hover text here
    </div>
  </div>
  
  )
}
