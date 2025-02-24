"use client";
import Footer from "@/Component/utils/Footer";
import Navbar from "@/Component/utils/Navbar";
import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import "react-multi-date-picker/styles/backgrounds/bg-dark.css";

export default function LeaveRequestForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDates, setSelectedDates] = useState([]);

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  return (
   <>
   <Navbar/>
     <div className="flex justify-center items-center  min-h-screen bg-gray-500">
      {/* Form Container */}
      <div className="max-w-2xl mx-auto p-6 -mt-8 bg-gray-800 text-white shadow-lg rounded-xl">
        <h1 className="text-3xl font-bold mb-5 text-center">Leave Request</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-2 gap-6">
            {/* Multi-Date Picker */}
            <div className="flex flex-col">
              <label className="text-white font-medium mb-1">Choose Dates</label>
              <DatePicker
                multiple
                value={selectedDates}
                onChange={setSelectedDates}
                format="YYYY-MM-DD"
                className="bg-dark p-3 rounded-md text-white w-full"
              />
            </div>

            {/* Automatically Shows Number of Selected Days */}
            <div className="flex flex-col">
              <label className="text-white font-medium mb-1">No. of Days</label>
              <input
                type="number"
                value={selectedDates.length}
                readOnly
                className="border p-3 rounded-md bg-gray-700 text-white"
              />
            </div>
          </div>

          {/* Reason Input */}
          <div className="flex flex-col">
            <label className="text-white font-medium mb-1">Reason</label>
            <textarea
              name="reason"
              rows="5"
              className="border p-3 rounded-md resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>

      {/* Success Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md transform transition-all scale-100 opacity-100 animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Request Submitted
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-gray-900"
              >
                ✖
              </button>
            </div>
            <p className="text-gray-700">
              Your leave request for <strong>{selectedDates.length}</strong>{" "}
              {selectedDates.length === 1 ? "day" : "days"} has been successfully submitted!
            </p>
            <div className="mt-4">
              <strong className="text-gray-900">Selected Dates:</strong>
              <ul className="mt-2 space-y-1 text-gray-700">
                {selectedDates.length > 0 ? (
                  selectedDates.map((date, index) => (
                    <li key={index} className="text-sm">
                      📅 {date.format("YYYY-MM-DD")}
                    </li>
                  ))
                ) : (
                  <li>No dates selected</li>
                )}
              </ul>
            </div>
            <div className="mt-4 text-center">
              <button
                onClick={() => setIsOpen(false)}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    <Footer/>
   </>
  );
}
