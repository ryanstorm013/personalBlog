// import { useState } from "react";

import Header from "./components/HomePage/Header";
import HomePage from "./components/HomePage/HomePage";
import AboutPage from "./components/AboutPage/AboutPage"

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/personalBlog' element={<HomePage/>}/>
        <Route path='/personalBlog/about' element={<AboutPage/>}/>
      </Routes>
      {/* <HomePage/> */}
      
    </>
  );
}
