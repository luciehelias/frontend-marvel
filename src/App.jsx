import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState } from "react";
// import Cookies from "js-cookie";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

import Comics from "../Pages/Comics";
import Characters from "../Pages/Characters";
import Character from "../Pages/Character";
import Comic from "../Pages/Comic";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/comic/:id" element={<Comic />}></Route>
        <Route path="/character/:id" element={<Character />}></Route>
        <Route path="/comics" element={<Comics />}></Route>
        <Route path="/characters" element={<Characters />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
