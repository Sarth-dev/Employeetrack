/* eslint-disable @next/next/no-img-element */
import Footer from "@/Component/utils/Footer";
import Navbar from "@/Component/utils/Navbar";
import React from "react";

function Page() {
  return (
    <>
      <div className="min-h-screen bg-slate-300 flex flex-col">
        <Navbar />
        
        <div className="w-full h-full max-w-[97%] mb-4 mt-3 bg-slate-200 p-6 mx-auto rounded-lg shadow-md flex flex-col gap-6">
          
          {/* Employee Info Section */}
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            <div className="w-40 h-40 p-1 border border-gray-400 rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="./images/personal.jpg"
                alt="Employee image"
              />
            </div>

            <div className="w-full md:w-3/4 text-black">
              <h1 className="text-4xl font-bold">Sarthak K.</h1>
              <p className="text-lg mt-2">Position: <span className="font-medium">Employee</span></p>
              <p className="text-lg">Job Title: <span className="font-medium">Web Developer</span></p>
              <p className="text-lg">Report Manager: <span className="font-medium">Valancio Dsouza</span></p>
              <p className="text-lg">DOJ: <span className="font-medium">19/02/2025</span></p>
            </div>
          </div>

          {/* Login/Logout Buttons */}
          <div className="flex gap-4">
            <button className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800 transition">Login</button>
            <button className="bg-red-700 text-white px-5 py-2 rounded-md hover:bg-red-800 transition">Logout</button>
          </div>

          {/* Announcement Section */}
          <section className="announcement text-black">
            <h1 className="text-5xl font-semibold">Product Launch</h1>
            <h4 className="text-gray-600">On 26th Feb 25</h4>
            <p className="mt-4 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos expedita sequi similique et corporis tenetur magni beatae aperiam laudantium ea inventore libero doloremque rerum vero cum sit iusto, aut est eligendi dolore quaerat accusamus provident commodi fugit. 
            </p>
          </section>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Page;
