import {BrowserRouter, Routes, Route} from "react-router-dom";

import './App.scss';

import Home from "./pages/Home"
import Housing from "./pages/Housing"
import About from "./pages/About"
import NotFound from "./pages/NotFound"

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <div className="body-container">
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Housing />} />
            <Route path="/" element={<About />} />
            <Route path="/" element={<NotFound />} />
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
