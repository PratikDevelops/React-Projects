import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar/Navbar.jsx";
import Home from "./Pages/Home/Home.jsx";
import Details from "./Pages/Home/Details/Details.jsx";
import Favourites from "./Pages/Home/Favourites/Favourites.jsx";
// import Accordion from "./Components/Accordion/Accrodion.jsx";
// import LoadProduct from "./Components/Load More Product/LoadProduct.jsx";
// import RandomColor from "./Components/RandomColorGenerator/RandomColor.jsx";
// import Slider from "./Components/Image Slider/Slider";
// import Serach from "./Components/SearchAutoComplete/Serach.jsx";
// import Modal from "./Components/Modal/Modal.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/recipe-item/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
