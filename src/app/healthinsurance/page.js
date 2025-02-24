"use client";

import React from "react";
import { Download } from "lucide-react";
import Footer from "@/Component/utils/Footer";
import Navbar from "@/Component/utils/Navbar";

const HealthInsurance = () => {
  // Function to handle file download
  const handleDownload = () => {
    const fileUrl = "/documents/health-insurance-terms.pdf"; // Update with the actual file path
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Health_Insurance_Terms.pdf"; // The file name when downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return <>
  <Navbar/>
        <div className="flex bg-slate-600 flex-col items-center max-w-full mx-auto p-6">
      {/* Header */}
      <h2 className="text-4xl font-bold text-white  px-6 py-3 rounded-lg shadow-lg">
        Health Insurance
      </h2>

      {/* Activation Info */}
      <input
        type="text"
        value="Please Contact Your HR to Activate Health Insurance"
        readOnly
        className="w-full bg-gray-100 text-gray-600 text-center py-3 px-4 mt-6 rounded-lg border border-gray-300 shadow-sm"
      />

      {/* Activation Buttons */}
      <div className="flex gap-4 mt-4">
        <button className="px-6 py-2 rounded-lg font-semibold text-white bg-green-500 hover:bg-green-600 transition-all shadow-md">
          Active
        </button>
        <button className="px-6 py-2 rounded-lg font-semibold text-white bg-red-500 hover:bg-red-600 transition-all shadow-md">
          Inactive
        </button>
      </div>

      {/* Banner Image */}
      <div className="w-full mt-6 overflow-hidden rounded-lg shadow-lg">
        <img
          src="./images/Health-Insurance-161014.webp"
          alt="Health Insurance Banner"
          className="w-full object-cover"
        />
      </div>

      {/* Learn More Section */}
      <p className="text-lg font-semibold mt-6">Want to learn more about Your Health Insurance Policy?</p>
      <a href="#" className="text-blue-500 font-medium hover:underline">
        www.healthinsurance.com
      </a>

      {/* Download Section */}
      <div className="flex items-center justify-between bg-white/90 backdrop-blur-lg rounded-xl p-4 mt-6 shadow-lg border border-gray-200 w-full">
        <p className="text-gray-800 font-medium">
          Health Insurance Terms & Conditions with Urja Vitality
        </p>
        <button onClick={handleDownload} className="text-blue-600 hover:text-blue-700 transition-all">
          <Download size={24} />
        </button>
      </div>
    </div>
    <Footer/>
  </>;
};

export default HealthInsurance;
