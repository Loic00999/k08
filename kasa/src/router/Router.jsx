import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../pages/Home"
import Housing from "../pages/Housing"
import About from "../pages/About"
import NotFound from "../pages/NotFound"
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function Router() {
    return (
      <>
        <div className="body-container">
          <BrowserRouter>
            <Header></Header>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Housing/:id" element={<Housing />} />
              <Route path="/About" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer></Footer>
          </BrowserRouter>
        </div>
      </>
    );
  }
  
  export default Router;