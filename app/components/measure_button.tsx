"use client"

import { useState } from "react";

export default function MeasureButton() {
  const [showInputs, setShowInputs] = useState(false);

  // Input fields data
  const inputFields = [
    { label: "Neck Size (inches)", options: ["10 IN | 25 CM", "11 IN | 28 CM", "12 IN 30 CM", "13 IN 33 CM", "14 IN 35.5 CM", "15 IN 38 CM", "16 IN 40.64 CM", "17 IN | 43.18 CM", "18 IN 45.72 CM", "19 IN 48.26 CM", "20 IN 50.8 CM", "21 IN 33.34 CM", "22 IN 155:88 CM"] },
    { label: "Shoulder Width", options:["10 IN | 25 CM", "11 IN | 28 CM", "12 IN | 30.5 CM", "13 IN | 33 CM", "14 IN | 35.5 CM", "15 IN | 38 CM", "16 IN | 40.64 CM", "17 IN | 43.18 CM", "18 IN | 45.72 CM", "19 IN | 48.26 CM", "20 IN | 50.8 CM", "21 IN | 53.34 CM", "22 IN | 55.88 CM", "23 IN | 58.42 CM", "24 IN | 60.96 CM"] },
    { label: "Chest / Bust Size", options: [ "22 IN | 55.88 CM", "23 IN | 58.42 CM", "24 IN | 60.96 CM", "25 IN | 63.5 CM", 
      "26 IN | 66.04 CM", "27 IN | 68.58 CM", "28 IN | 71.12 CM", "29 IN | 73.66 CM", 
      "30 IN | 76.2 CM", "31 IN | 78.74 CM", "32 IN | 81.28 CM", "33 IN | 83.82 CM", 
      "34 IN | 86.36 CM", "35 IN | 88.9 CM", "36 IN | 91.44 CM", "37 IN | 93.98 CM", 
      "38 IN | 96.52 CM", "39 IN | 99.06 CM", "40 IN | 101.6 CM", "41 IN | 104.14 CM", 
      "42 IN | 106.68 CM", "43 IN | 109.22 CM", "44 IN | 111.76 CM", "45 IN | 114.3 CM", 
      "46 IN | 116.84 CM", "47 IN | 119.38 CM", "48 IN | 121.92 CM", "49 IN | 124.46 CM", 
      "50 IN | 127 CM", "51 IN | 129.54 CM", "52 IN | 132.08 CM", "53 IN | 134.62 CM", 
      "54 IN | 137.16 CM", "55 IN | 139.7 CM", "56 IN | 142.24 CM", "57 IN | 144.78 CM", 
      "58 IN | 147.32 CM", "59 IN | 149.86 CM", "60 IN | 152.4 CM", "61 IN | 154.94 CM", 
      "62 IN | 157.48 CM"] },
    { label: "Sleeve Length (inches)", options: ["16 IN | 40.64 CM", "17 IN | 43.18 CM", 
  "18 IN | 45.72 CM", "19 IN | 48.26 CM", "20 IN | 50.8 CM", "21 IN | 53.34 CM", 
  "22 IN | 55.88 CM", "23 IN | 58.42 CM", "24 IN | 60.96 CM", "25 IN | 63.5 CM", 
  "26 IN | 66.04 CM", "27 IN | 68.58 CM", "28 IN | 71.12 CM", "29 IN | 73.66 CM", 
  "30 IN | 76.2 CM"] },
  { label: "BICEP (OPTIONAL)", options: [ "10 IN | 25 CM", "11 IN | 28 CM", "12 IN | 30.5 CM", "13 IN | 33 CM", 
    "14 IN | 35.5 CM", "15 IN | 38 CM", "16 IN | 40.64 CM", "17 IN | 43.18 CM", 
    "18 IN | 45.72 CM", "19 IN | 48.26 CM", "20 IN | 50.8 CM", "21 IN | 53.34 CM", 
    "22 IN | 55.88 CM", "23 IN | 58.42 CM", "24 IN | 60.96 CM", "25 IN | 63.5 CM",] },
  { label: "WAIST SIZE (INCHES)", options: ["16 IN | 40.64 CM", "17 IN | 43.18 CM", 
  "18 IN | 45.72 CM", "19 IN | 48.26 CM", "20 IN | 50.8 CM", "21 IN | 53.34 CM", 
  "22 IN | 55.88 CM", "23 IN | 58.42 CM", "24 IN | 60.96 CM", "25 IN | 63.5 CM", 
  "26 IN | 66.04 CM", "27 IN | 68.58 CM", "28 IN | 71.12 CM", "29 IN | 73.66 CM", 
  "30 IN | 76.2 CM", "31 IN | 78.74 CM", "32 IN | 81.28 CM", "33 IN | 83.82 CM", 
  "34 IN | 86.36 CM", "35 IN | 88.9 CM", "36 IN | 91.44 CM", "37 IN | 93.98 CM", 
  "38 IN | 96.52 CM", "39 IN | 99.06 CM", "40 IN | 101.6 CM", "41 IN | 104.14 CM", 
  "42 IN | 106.68 CM", "43 IN | 109.22 CM", "44 IN | 111.76 CM", "45 IN | 114.3 CM", 
  "46 IN | 116.84 CM", "47 IN | 119.38 CM", "48 IN | 121.92 CM", "49 IN | 124.46 CM", 
  "50 IN | 127 CM", "51 IN | 129.54 CM", "52 IN | 132.08 CM", "53 IN | 134.62 CM", 
  "54 IN | 137.16 CM", "55 IN | 139.7 CM", "56 IN | 142.24 CM", "57 IN | 144.78 CM", 
  "58 IN | 147.32 CM", "59 IN | 149.86 CM", "60 IN | 152.4 CM", "61 IN | 154.94 CM", 
  "62 IN | 157.48 CM"] },
  { label: "BACK LENGTH (INCHES)", options: ["12 IN | 30.5 CM", "13 IN | 33 CM", 
  "14 IN | 35.5 CM", "15 IN | 38 CM", "16 IN | 40.64 CM", "17 IN | 43.18 CM", 
  "18 IN | 45.72 CM", "19 IN | 48.26 CM", "20 IN | 50.8 CM", "21 IN | 53.34 CM", 
  "22 IN | 55.88 CM", "23 IN | 58.42 CM", "24 IN | 60.96 CM",] },
  { label: "HIP SIZE (OPTIONAL)", options: ["28 IN | 71.12 CM", "29 IN | 73.66 CM", 
  "30 IN | 76.2 CM", "31 IN | 78.74 CM", "32 IN | 81.28 CM", "33 IN | 83.82 CM", 
  "34 IN | 86.36 CM", "35 IN | 88.9 CM", "36 IN | 91.44 CM", "37 IN | 93.98 CM", 
  "38 IN | 96.52 CM", "39 IN | 99.06 CM", "40 IN | 101.6 CM", "41 IN | 104.14 CM", 
  "42 IN | 106.68 CM", "43 IN | 109.22 CM", "44 IN | 111.76 CM", "45 IN | 114.3 CM", 
  "46 IN | 116.84 CM", "47 IN | 119.38 CM", "48 IN | 121.92 CM", "49 IN | 124.46 CM", 
  "50 IN | 127 CM", "51 IN | 129.54 CM", "52 IN | 132.08 CM", "53 IN | 134.62 CM", 
  "54 IN | 137.16 CM", "55 IN | 139.7 CM", "56 IN | 142.24 CM", "57 IN | 144.78 CM", 
  "58 IN | 147.32 CM", "59 IN | 149.86 CM", "60 IN | 152.4 CM", "61 IN | 154.94 CM", 
  "62 IN | 157.48 CM"] },
  ];

  return (
    <>
      <button
        className="bg-black text-white p-2 rounded-md cursor-pointer uppercase"
        onClick={() => setShowInputs(!showInputs)}
      >
        Made to Measure
      </button>

      {showInputs && (
        <div className="mt-4">
          {inputFields.map((field, index) => (
            <div className="mb-4" key={index}>
              <label className="block text-gray-600 text-xl">{field.label}</label>
              <select className="w-full text-gray-400 text-xl border border-gray-300 h-[40px]">
                <option className="">Please Select</option>
                {field.options.map((option, optionIndex) => (
                  <option key={optionIndex}>{option}</option>
                ))}
              </select>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
