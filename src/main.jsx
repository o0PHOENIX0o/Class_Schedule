// import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';

import Schedule from './Pages/Schedule.jsx';
import Syllabus from './Pages/Syllabus.jsx';
import TimeTable from './Pages/TimeTable.jsx';
import About from './Pages/About.jsx';

// import { useMediaQuery } from "react-responsive";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Schedule />} />
          <Route path="/home" element={<Schedule />} />

         <Route path="/syllabus" element={<Syllabus />} />
 
          <Route path="/timetable" element={<TimeTable />} />

          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
  );
};

createRoot(document.getElementById('root')).render(<App />);
