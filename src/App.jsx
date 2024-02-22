// import { useState } from "react";

import Header from "./components/HomePage/Header";
import Content from "./components/HomePage/content";
import Footer from "./components/HomePage/reactPaths/footer";

// import HomePage from "./components/HomePage/HomePage";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
      {/* <BrowserRouter>
        <Routes>
          <Route index element= {<HomePage/>}/>
          <Route path="/home" element= {<HomePage/>}/>
        </Routes>
      </BrowserRouter> */}
    </>
  );
}
