"use client";

import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Navbar from "@/Component/utils/Navbar";
import Footer from "@/Component/utils/Footer";

const FullCalendarComponent = () => {
  const [events, setEvents] = useState([
    { title: "Health Checkup", start: "2025-02-25" },
    { title: "Insurance Renewal", start: "2025-03-05" },
  ]);

  return (
   <>
   <Navbar/>
     <div className="max-w-4xl mx-auto p-4 mb-5 bg-gray-800 text-white shadow-lg rounded-lg mt-6">
      <h1 className="text-3xl font-bold text-center text-gray-100 mb-4">Holidays</h1>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        events={events}
        
        height="auto"
      />
    </div>
    <Footer/>
   </>
  );
};

export default FullCalendarComponent;
