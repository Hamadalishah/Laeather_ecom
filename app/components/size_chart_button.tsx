"use client"
import Image from 'next/image';

import React, { useState } from 'react';
import { BiSolidTShirt } from 'react-icons/bi';

export default function SizeChartButton() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('sizeGuide'); // Tracks active tab

    const toggleModal = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            document.body.style.overflow = "hidden"; // Disable scroll on background
        } else {
            document.body.style.overflow = "auto"; // Enable scroll on background
        }
    };

    return (
        <>
            {/* Button */}
            <button
                onClick={toggleModal}
                className="bg-[#f6f4ee] border border-[#ededed] w-[160px] md:w-[200px] flex items-center h-[50px] justify-center gap-2 hover:bg-orange-500"
            >
                <BiSolidTShirt className="text-xl" />
                <span className="text-blue-400 text-xl">SIZE CHART</span>
            </button>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white w-[90%] md:w-[70%] rounded-lg p-4 shadow-lg relative max-h-[90%] overflow-y-auto">
                        <button
                            onClick={toggleModal}
                            className="absolute top-2 right-2 text-gray-600 hover:text-black"
                        >
                            <span className='text-[50px] font-extrabold hover:text-red-400'>&times;</span>

                        </button>
                        <h2 className="text-2xl font-bold mb-4 text-center">
                            Mens Leather Jacket
                        </h2>

    {/* Tabs */}
    <div className="flex justify-center mb-4 border-b">
        <button
            onClick={() => setActiveTab('sizeGuide')}
            className={`font-bold text-2xl px-4 py-2 ${activeTab === 'sizeGuide' ? 'border-b-2 border-black' : ''
                }`}
        >
            Size Guide
        </button>
        <button
            onClick={() => setActiveTab('howToMeasure')}
            className={`px-4 py-2 text-2xl ${activeTab === 'howToMeasure' ? 'border-b-2 border-black' : ''
                }`}
        >
            How To Measure
        </button>
    </div>

    {/* Content */}
    {activeTab === 'sizeGuide' ? (
        <div>
            {/* Inches Table */}
            <h3 className="text-xl font-bold mb-2">INCHES</h3>
<table className="w-full text-sm border-collapse mb-4">
    <thead>
        <tr className="text-2xl text-white border border-black uppercase">
            <th className="border bg-black px-2 py-1">Jacket Size</th>
            <th className="border bg-black px-2 py-1">Hieght</th>
            <th className="border bg-black px-2 py-1">Chest</th>
            <th className="border bg-black px-2 py-1">Waist</th>

        </tr>
    </thead>
    <tbody>
        <tr className='border px-2 py-1 text-center text-xl'>
            <td className="border px-2 py-1">XS</td>
            <td className="border px-2 py-1">5 ft 3 in - 5 ft 10 in</td>
            <td className="border px-2 py-1">29 - 30</td>
            <td className="border px-2 py-1">33 - 34</td>

        </tr>
        <tr className='border border-black text-center px-2 py-1 text-xl'>
            <td className="border bg-gray-200 px-2 py-1">S </td>
            <td className="border bg-gray-200 px-2 py-1">5 ft 5 in - 6 ft 0 in</td>
            <td className="border bg-gray-200 px-2 py-1">35 - 36</td>
            <td className="border bg-gray-200 px-2 py-1">31 - 32</td>

        </tr>
        <tr className='border px-2 py-1 text-center text-xl'>
            <td className="border px-2 py-1">M </td>
            <td className="border px-2 py-1">5 ft 5 in - 6 ft 0 in</td>
            <td className="border px-2 py-1">35 - 36</td>
            <td className="border px-2 py-1">31 - 32</td>

        </tr>
        <tr className='border bg-gray-200 text-center px-2 py-1 text-xl'>
            <td className="border px-2 py-1">L </td>
            <td className="border px-2 py-1">5 ft 7 in - 6 ft 2 in</td>
            <td className="border px-2 py-1">35 - 36</td>
            <td className="border px-2 py-1">31 - 32</td>

        </tr>
        <tr className='border px-2 py-1 text-center text-xl'>
            <td className="border px-2 py-1">XL </td>
            <td className="border px-2 py-1">5 ft 9 in - 6 ft 4 in</td>
            <td className="border px-2 py-1">35 - 36</td>
            <td className="border px-2 py-1">31 - 32</td>

        </tr>
        <tr className='border bg-gray-200 text-center px-2 py-1 text-xl'>
            <td className="border px-2 py-1">2XL </td>
            <td className="border px-2 py-1">5 ft 11 in - 6 ft 6 in</td>
            <td className="border px-2 py-1">35 - 36</td>
            <td className="border px-2 py-1">31 - 32</td>

        </tr>
        <tr className='border px-2 py-1 text-center text-xl'>
            <td className="border px-2 py-1">3XL </td>
            <td className="border px-2 py-1">5 ft 11 in - 6 ft 6 in</td>
            <td className="border px-2 py-1">35 - 36</td>
            <td className="border px-2 py-1">31 - 32</td>

        </tr>
        <tr className='border bg-gray-200 text-center px-2 py-1 text-xl'>
            <td className="border px-2 py-1">4XL </td>
            <td className="border px-2 py-1">6 ft 1 in - 6 ft 8 in</td>
            <td className="border px-2 py-1">35 - 36</td>
            <td className="border px-2 py-1">31 - 32</td>

        </tr>
        {/* Add remaining rows */}
    </tbody>
</table>

    {/* Centimeters Table */}
    <h3 className="text-xl font-bold mb-2">CENTIMETER</h3>
    <table className="w-full text-sm border-collapse mb-4">
        <thead>
        <tr className="text-2xl text-white border border-black uppercase">
            <th className="border bg-black px-2 py-1">Jacket Size</th>
            <th className="border bg-black px-2 py-1">Hieght</th>           
            <th className="border bg-black px-2 py-1">Waist</th>
            <th className="border bg-black px-2 py-1">Chest</th>

        </tr>
        </thead>
        <tbody>
        <tr className='border px-2 py-1 text-xl text-center '>
            <td className="border px-2 py-1">XS </td>
            <td className="border px-2 py-1">160 - 178t</td>
            <td className="border px-2 py-1">29 - 30</td>
            <td className="border px-2 py-1">33 - 34</td>

        </tr>
        <tr className='border px-2 py-1 text-center  text-xl'>
            <td className="border px-2 py-1">S </td>
            <td className="border px-2 py-1">165 - 183</td>
            <td className="border px-2 py-1">31 - 32</td>
            <td className="border px-2 py-1">35 - 36</td>
            

        </tr>
        <tr className='border px-2 py-1 text-center text-xl'>
            <td className="border px-2 py-1">M </td>
            <td className="border px-2 py-1">	165 - 183</td>
            <td className="border px-2 py-1">33 - 34	</td>
            <td className="border px-2 py-1">37 - 38</td>

        </tr>
        <tr className='border px-2 py-1 text-center text-xl'>
            <td className="border px-2 py-1">L </td>
            <td className="border px-2 py-1">170 - 188</td>
            <td className="border px-2 py-1">35 - 36</td>
            <td className="border px-2 py-1">39 - 40</td>

        </tr>
        <tr className='border px-2 py-1 text-center text-xl'>
            <td className="border px-2 py-1">XL </td>
            <td className="border px-2 py-1">175 - 193</td>
            <td className="border px-2 py-1">37 - 38</td>
            <td className="border px-2 py-1">41 - 42</td>

        </tr>
        <tr className='border px-2 py-1 text-center text-xl'>
            <td className="border px-2 py-1">2XL </td>
            <td className="border px-2 py-1">180 - 198</td>
            <td className="border px-2 py-1">39 - 40</td>
            <td className="border px-2 py-1">43 - 44</td>

        </tr>
        <tr className='border px-2 py-1 text-center text-xl'>
            <td className="border px-2 py-1">3XL </td>
            <td className="border px-2 py-1">180 - 198</td>
            <td className="border px-2 py-1">41 - 42</td>
            <td className="border px-2 py-1">45 - 46</td>

        </tr>
        <tr className='border px-2 py-1 text-center text-xl'>
            <td className="border px-2 py-1">4XL </td>
            <td className="border px-2 py-1">185 - 203</td>
            <td className="border px-2 py-1">43 - 44</td>
            <td className="border px-2 py-1">46 - 47</td>

        </tr>
            {/* Add remaining rows */}
        </tbody>
    </table>
</div>
    ) : (
        <div>
            <div>
                {/* Inches Table */}
                <h3 className="text-sm font-bold mb-2">INCHES</h3>
                <table className="w-full text-sm border-collapse mb-4">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border px-2 py-1">Jacket Size</th>
                            <th className="border px-2 py-1">US Size</th>
                            <th className="border px-2 py-1">UK Size</th>
                            <th className="border px-2 py-1">Chest</th>
                            <th className="border px-2 py-1">Waist</th>
                            <th className="border px-2 py-1">Sleeves</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-2 py-1">XS (34)</td>
                            <td className="border px-2 py-1">34</td>
                            <td className="border px-2 py-1">34</td>
                            <td className="border px-2 py-1">33 - 34</td>
                            <td className="border px-2 py-1">29 - 30</td>
                            <td className="border px-2 py-1">25</td>
                        </tr>
                        <tr>
                            <td className="border px-2 py-1">S (36)</td>
                            <td className="border px-2 py-1">36</td>
                            <td className="border px-2 py-1">36</td>
                            <td className="border px-2 py-1">35 - 36</td>
                            <td className="border px-2 py-1">31 - 32</td>
                            <td className="border px-2 py-1">25.5</td>
                        </tr>
                        {/* Add remaining rows */}
                    </tbody>
                </table>

                {/* Centimeters Table */}
                <h3 className="text-sm font-bold mb-2">CENTIMETER</h3>
                <table className="w-full text-sm border-collapse mb-4">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border px-2 py-1">Jacket Size</th>
                            <th className="border px-2 py-1">US Size</th>
                            <th className="border px-2 py-1">UK Size</th>
                            <th className="border px-2 py-1">Chest</th>
                            <th className="border px-2 py-1">Waist</th>
                            <th className="border px-2 py-1">Sleeves</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-2 py-1">XS (34)</td>
                            <td className="border px-2 py-1">34</td>
                            <td className="border px-2 py-1">34</td>
                            <td className="border px-2 py-1">86.5 - 89</td>
                            <td className="border px-2 py-1">73.6 - 76.8</td>
                            <td className="border px-2 py-1">63.5</td>
                        </tr>
                        <tr>
                            <td className="border px-2 py-1">S (36)</td>
                            <td className="border px-2 py-1">36</td>
                            <td className="border px-2 py-1">36</td>
                            <td className="border px-2 py-1">91.5 - 94</td>
                            <td className="border px-2 py-1">78.8 - 81.5</td>
                            <td className="border px-2 py-1">64</td>
                        </tr>
                        {/* Add remaining rows */}
                    </tbody>
                </table>
            </div>
            {/* How to Measure */}
            <h3 className="text-sm font-bold mb-4">How to Measure</h3>
            <div className="text-sm mb-4">
                <p>
                    <strong>Shoulder:</strong> Measure from the tip of one
                    shoulder, across your back to the tip of your other
                    shoulder.
                </p>
                <p>
                    <strong>Chest:</strong> Measure the circumference around the
                    fullest part of your chest.
                </p>
                <p>
                    <strong>Waist:</strong> Measure the natural waistline,
                    around the narrowest part.
                </p>
                <p>
                    <strong>Sleeves:</strong> Measure from the shoulder seam to
                    the wrist.
                </p>
            </div>
            <Image
                src="/Blog images/MADE-TO-MEASURE.png" 
                height={330}
                width={550}
                alt="How to Measure"
                className="mt-4"
            />
        </div>
    )}
</div>
</div>
)}
</>
);
}
