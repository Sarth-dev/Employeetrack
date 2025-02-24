"use client";
import Footer from "@/Component/utils/Footer";
import Navbar from "@/Component/utils/Navbar";
import { useState } from "react";
import { FaDownload } from "react-icons/fa";

export default function Page() {
  const [documents] = useState([
    {
      name: "Aadhar Card",
      fileUrl: "/documents/aadhar.pdf",
      imageUrl: "./images/Aadhaar_Logo.svg.png", // Replace with actual image path
    },
    {
      name: "PAN Card",
      fileUrl: "/documents/pan.pdf",
      imageUrl: "./images/PAN Card.jpg", // Replace with actual image path
    },
    {
      name: "Photocopy",
      fileUrl: "/documents/photocopy.pdf",
      imageUrl: "./images/Avatar.avif", // Replace with actual image path
    },
    {
      name: "Education Document",
      fileUrl: "/documents/education.pdf",
      imageUrl: "./images/document.avif", // Replace with actual image path
    },
    {
      name: "Contract",
      fileUrl: "/documents/contract.pdf",
      imageUrl: "./images/contract.avif", // Replace with actual image path
    },
  ]);

  const handleDownload = (fileUrl, fileName) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-full w-3/4 mx-auto p-6 mt-3 mb-5 bg-gray-600 text-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-5">Documents</h1>
        <div className="bg-gray-800 text-white rounded-lg shadow-sm">
          <div className="p-4 border-b font-semibold">Documents</div>
          <div className="divide-y">
            {documents.map((doc, index) => (
              <div key={index} className="flex items-center justify-between p-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={doc.imageUrl}
                    alt={doc.name}
                    className="w-12 h-12 rounded-lg p-1 object-contain"
                  />
                  <span className="text-gray-100">{doc.name}</span>
                </div>
                <button
                  onClick={() => handleDownload(doc.fileUrl, doc.name)}
                  className="text-gray-100 hover:text-gray-300"
                >
                  <FaDownload size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
