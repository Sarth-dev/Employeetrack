"use client";
import Footer from "@/Component/utils/Footer";
import Navbar from "@/Component/utils/Navbar";
import { useState } from "react";
import ReactPaginate from "react-paginate";

export default function AttendanceTable() {
  const [attendanceData] = useState([
    {
      name: "Lorem Ipsum",
      email: "support@yourdomain.com",
      date: "Nov 8th, 2025",
      login: "08:00 AM",
      logout: "06:00 PM",
      status: "Present",
    },
    {
      name: "Lorem Ipsum",
      email: "support@yourdomain.com",
      date: "Nov 8th, 2025",
      login: "08:00 AM",
      logout: "06:00 PM",
      status: "Absent",
    },
    {
      name: "Lorem Ipsum",
      email: "support@yourdomain.com",
      date: "Nov 8th, 2025",
      login: "08:00 AM",
      logout: "06:00 PM",
      status: "Present",
    },
    {
      name: "Lorem Ipsum",
      email: "support@yourdomain.com",
      date: "Nov 8th, 2025",
      login: "08:00 AM",
      logout: "06:00 PM",
      status: "Present",
    },
    {
      name: "Lorem Ipsum",
      email: "support@yourdomain.com",
      date: "Nov 8th, 2025",
      login: "08:00 AM",
      logout: "06:00 PM",
      status: "Present",
    },
    {
      name: "Lorem Ipsum",
      email: "support@yourdomain.com",
      date: "Nov 8th, 2025",
      login: "08:00 AM",
      logout: "06:00 PM",
      status: "Present",
    },
    {
      name: "Lorem Ipsum",
      email: "support@yourdomain.com",
      date: "Nov 8th, 2025",
      login: "08:00 AM",
      logout: "06:00 PM",
      status: "Absent",
    },
    {
      name: "Lorem Ipsum",
      email: "support@yourdomain.com",
      date: "Nov 8th, 2025",
      login: "08:00 AM",
      logout: "06:00 PM",
      status: "Present",
    },
    {
      name: "Lorem Ipsum",
      email: "support@yourdomain.com",
      date: "Nov 8th, 2025",
      login: "08:00 AM",
      logout: "06:00 PM",
      status: "Present",
    },
    {
      name: "Lorem Ipsum",
      email: "support@yourdomain.com",
      date: "Nov 8th, 2025",
      login: "08:00 AM",
      logout: "06:00 PM",
      status: "Present",
    },
  ]);

  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 5;
  const pagesVisited = pageNumber * itemsPerPage;
  const pageCount = Math.ceil(attendanceData.length / itemsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
    <Navbar/>
      <div className="max-w-5xl mx-auto mb-5 p-6 bg-gray-800 shadow-lg rounded-lg mt-5">
      <h1 className="text-3xl font-bold mb-2">Attendance</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border  border-gray-200 rounded-lg">
          <thead className="bg-gray-600">
            <tr>
              <th className="p-3 text-left">
                <input type="checkbox" />
              </th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email Address</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Login</th>
              <th className="p-3 text-left">Logout</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData
              .slice(pagesVisited, pagesVisited + itemsPerPage)
              .map((item, index) => (
                <tr key={index} className="border-t  hover:bg-gray-700">
                  <td className="p-3">
                    <input type="checkbox" />
                  </td>
                  <td className="p-3">{item.name}</td>
                  <td className="p-3">{item.email}</td>
                  <td className="p-3">{item.date}</td>
                  <td className="p-3">{item.login}</td>
                  <td className="p-3">{item.logout}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-white text-sm ${
                        item.status === "Present"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex  justify-left">
        <ReactPaginate
          previousLabel={"←"}
          nextLabel={"→"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"flex space-x-2 bg-gray-900 p-2 rounded-lg"}
          pageClassName={
            "px-3 py-1 bg-gray-700 border rounded-lg cursor-pointer hover:bg-gray-200"
          }
          activeClassName={"bg-purple-500 text-white"}
          previousClassName={"px-3 py-1 bg-gray-600 rounded-lg cursor-pointer"}
          nextClassName={"px-3 py-1 bg-gray-600 rounded-lg cursor-pointer"}
        />
      </div>
    </div>
    <Footer/>
    </>
  );
}
