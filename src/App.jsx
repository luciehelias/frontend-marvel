import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState } from "react";
// import Cookies from "js-cookie";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes></Routes>
      <Footer />
    </Router>
  );
};

export default App;
