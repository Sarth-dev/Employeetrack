"use client";
import Footer from "@/Component/utils/Footer";
import Navbar from "@/Component/utils/Navbar";
import React, { useState } from "react";

function Page() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    personalEmail: "",
    officialEmail: "",
    dob: "",
    contactNumber: "",
    address: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
   <>
   <Navbar/>
     <div className="w-full min-h-screen bg-gradient-to-r from-gray-900 to-gray-700 text-white flex justify-center items-center p-5">
      <div className="w-full max-w-6xl bg-gray-800 shadow-lg rounded-xl p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Personal Details</h1>
        <div className="flex flex-col md:flex-row gap-6">
          
          {/* Form Section */}
          <section className="w-full md:w-1/2 bg-gray-900 p-6 rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-400">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:ring focus:ring-blue-500"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="text-gray-400">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:ring focus:ring-blue-500"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label className="text-gray-400">Personal Email Address</label>
                <input
                  type="email"
                  name="personalEmail"
                  className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:ring focus:ring-blue-500"
                  value={formData.personalEmail}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="text-gray-400">Official Email Address</label>
                <input
                  type="email"
                  name="officialEmail"
                  className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:ring focus:ring-blue-500"
                  value={formData.officialEmail}
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-400">DOB</label>
                  <input
                    type="date"
                    name="dob"
                    className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:ring focus:ring-blue-500"
                    value={formData.dob}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="text-gray-400">Contact Number</label>
                  <input
                    type="tel"
                    name="contactNumber"
                    className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:ring focus:ring-blue-500"
                    value={formData.contactNumber}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label className="text-gray-400">Address</label>
                <input
                  type="text"
                  name="address"
                  className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:ring focus:ring-blue-500"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="text-gray-400">Pincode</label>
                <input
                  type="text"
                  name="pincode"
                  className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:ring focus:ring-blue-500"
                  value={formData.pincode}
                  onChange={handleChange}
                />
              </div>

             
            </form>
          </section>

          {/* Role Details Section */}
          <section className="w-full md:w-1/2 bg-gray-900 p-6 rounded-lg shadow-md flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-4">Employee Details</h2>
            <div className="space-y-3">
              <p className="text-lg">
                <span className="font-semibold">Name:</span> Sarthak K.
              </p>
              <p className="text-lg">
                <span className="font-semibold">Role:</span> Employee
              </p>
              <p className="text-lg">
                <span className="font-semibold">Job Title:</span> Web Developer
              </p>
              <p className="text-lg">
                <span className="font-semibold">Report Manager:</span> Donald Trump
              </p>
              <p className="text-lg">
                <span className="font-semibold">DOJ:</span> 19/02/2025
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
    <Footer/>
   </>
  );
}

export default Page;
