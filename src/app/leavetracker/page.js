"use client";

import  { useState }  from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Paper,
  Pagination,
  Chip,
} from "@mui/material";
import Footer from "@/Component/utils/Footer";
import Navbar from "@/Component/utils/Navbar";

const LeaveTracker = () => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  // Sample leave data
  const leaveData = [
    { id: 1, name: "Lorem Ipsum", email: "support@quicktext.aiy.com", from: "Nov 8th, 2025", till: "Nov 11th, 2025", days: 2, reason: "Medical emergency", comments: "leave is approve", status: "Approve" },
    { id: 2, name: "Lorem Ipsum", email: "support@quicktext.aiy.com", from: "Nov 8th, 2025", till: "Nov 11th, 2025", days: 2, reason: "Medical emergency", comments: "leave is denied", status: "Denied" },
    { id: 3, name: "Lorem Ipsum", email: "support@quicktext.aiy.com", from: "Nov 8th, 2025", till: "Nov 11th, 2025", days: 2, reason: "Medical emergency", comments: "Pending", status: "Pending" },
    { id: 4, name: "Lorem Ipsum", email: "support@quicktext.aiy.com", from: "Nov 8th, 2025", till: "Nov 11th, 2025", days: 2, reason: "Medical emergency", comments: "leave is approve", status: "Approve" },
    { id: 5, name: "Lorem Ipsum", email: "support@quicktext.aiy.com", from: "Nov 8th, 2025", till: "Nov 11th, 2025", days: 2, reason: "Medical emergency", comments: "leave is approve", status: "Approve" },
  ];

  // Pagination logic
  const handleChangePage = (event, value) => {
    setPage(value);
  };

  return (
   <>
   <Navbar/>
     <Paper sx={{ width: "100%",backgroundColor :"grey",color: "white" ,overflow: "hidden", padding: 2 }}>
      <h1 className="text-3xl font-semibold">Leave Tracker</h1>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email Address</TableCell>
              <TableCell>Date From</TableCell>
              <TableCell>Date Till</TableCell>
              <TableCell>No. of Days</TableCell>
              <TableCell>Reason for Leave</TableCell>
              <TableCell>Comments</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leaveData.slice((page - 1) * rowsPerPage, page * rowsPerPage).map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.from}</TableCell>
                <TableCell>{row.till}</TableCell>
                <TableCell>{row.days}</TableCell>
                <TableCell>{row.reason}</TableCell>
                <TableCell>{row.comments}</TableCell>
                <TableCell>
                  <Chip
                    label={row.status}
                    color={
                      row.status === "Approve" ? "success" : row.status === "Denied" ? "error" : "warning"
                    }
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <Pagination
        count={Math.ceil(leaveData.length / rowsPerPage)}
        page={page}
        onChange={handleChangePage}
        color="primary"
        sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}
      />
    </Paper>
    <Footer/>
   </>
  );
};

export default LeaveTracker;
