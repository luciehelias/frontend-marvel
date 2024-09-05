import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState } from "react";
// import Cookies from "js-cookie";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

import Comics from "../Pages/Comics";
import Characters from "../Pages/Characters";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/comics" element={<Comics />}></Route>
        <Route path="/characters" element={<Characters />}></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
