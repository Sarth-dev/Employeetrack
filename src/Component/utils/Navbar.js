"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons for mobile menu

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/home" },
    { name: "Leave Tracker", path: "/leavetracker" },
    { name: "Profile", path: "/profile" },
    { name: "Time Tracker", path: "/timetracker" },
    { name: "Documents", path: "/documents" },
    { name: "Leave Request", path: "/leaverequest" },
    { name: "Health Insurance", path: "/healthinsurance" },
    { name: "Holidays", path: "/holidays" },
    { name: "Attendence", path: "/attendence" },
  ];

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img className="w-32" src="../Images/urja_new_white_logo (1).png" alt="Urja Logo" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.path}
                className="hover:text-gray-400 transition duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 p-4 space-y-3">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="block text-white text-lg py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
