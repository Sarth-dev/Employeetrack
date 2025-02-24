import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Footer Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left items-start">
          
          {/* Logo Section */}
          <div className="flex justify-center md:justify-start">
            <img
              className="w-36"
              src="../Images/urja_new_white_logo (1).png"
              alt="UrjaVitality Logo"
            />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Home</a></li>
              <li><a href="#" className="hover:text-gray-400">Leave Tracker</a></li>
              <li><a href="#" className="hover:text-gray-400">Profile</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Time Tracker</a></li>
              <li><a href="#" className="hover:text-gray-400">Documents</a></li>
              <li><a href="#" className="hover:text-gray-400">Health Insurance</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Holidays</a></li>
              <li><a href="#" className="hover:text-gray-400">Attendance</a></li>
            </ul>
          </div>
          
        </div>

        {/* Copyright Section */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-center">
          <p className="text-gray-400 text-sm md:text-base">
            © 2024 UrjaVitality. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
