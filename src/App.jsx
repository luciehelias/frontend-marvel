import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState } from "react";
// import Cookies from "js-cookie";

import Header from "../Components/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes></Routes>
    </Router>
  );
};

export default App;
