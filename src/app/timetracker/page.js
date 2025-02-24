"use client";
import Footer from "@/Component/utils/Footer";
import Navbar from "@/Component/utils/Navbar";
import  { useState}  from "react";

function Page() {
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleLogin = () => {
    setMessage("✅ Login Successful");
    setIsOpen(true);
  };

  const handleLogout = () => {
    setMessage("⛔ Logout Successful");
    setIsOpen(true);
  };

  const handleAttendence = () => {
    window.location.href = "../leavetracker";
  };

  const handleLeave = () => {
    window.location.href = "../leaverequest";
  };

  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 flex flex-col items-center text-white p-6">
        <h1 className="text-4xl font-bold mb-6">Time Tracker</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Login & Logout Buttons */}
          <button
            onClick={handleLogin}
            className="bg-green-500 hover:bg-green-600 transition duration-300 text-white font-semibold px-6 py-3 rounded-xl shadow-lg"
          >
            Login
          </button>

          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 transition duration-300 text-white font-semibold px-6 py-3 rounded-xl shadow-lg"
          >
            Logout
          </button>

          {/* Attendance & Leave Request Buttons */}
          <button
            onClick={handleAttendence}
            className="bg-blue-500 hover:bg-blue-600 transition duration-300 text-white font-semibold px-6 py-3 rounded-xl shadow-lg"
          >
            View Attendance
          </button>

          <button
            onClick={handleLeave}
            className="bg-purple-500 hover:bg-purple-600 transition duration-300 text-white font-semibold px-6 py-3 rounded-xl shadow-lg"
          >
            Leave Request
          </button>
        </div>

        {/* Note Section */}
        <div className="mt-10 bg-white text-gray-800 p-6 rounded-xl shadow-md max-w-2xl text-center">
          <h4 className="text-xl font-semibold mb-3">📌 Note:</h4>
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
            molestias laboriosam fugiat tempora ipsum rerum at praesentium, quis
            adipisci nisi voluptas placeat dolor aut illum debitis harum quos!
          </p>
        </div>
      </div>

      {/* Modal Popup */}
      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-xl shadow-xl text-center max-w-sm">
            <p className="text-lg font-semibold text-gray-800">{message}</p>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Page;
