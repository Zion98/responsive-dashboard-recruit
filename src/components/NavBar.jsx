import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Containers } from "./styled";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Content from "./Content";
import Applicants from "./Applicants";
import Personal from "./Personal";
import Assessment from "./Assessment";

const NavBar = () => {
  const [slide, setSlide] = useState(false);
 
  return (
    <>
      <Containers>
        <Header slide={slide} setSlide={setSlide} />
        <Sidebar slide={slide} setSlide={setSlide} />
        <Routes>
          <Route path="/dashboard" element={<Content />} />
          <Route path="/applicants" element={<Applicants />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/assess" element={<Assessment />} />
        </Routes>
      </Containers>
    </>
  );
};

export default NavBar;
