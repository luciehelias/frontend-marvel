import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Cookies from "js-cookie";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

import ComicList from "../Pages/ComicList";
import CharacterList from "../Pages/CharacterList";
import Character from "../Pages/Character";
import Comic from "../Pages/Comic";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/comic/:id" element={<Comic />}></Route>
        <Route path="/character/:id" element={<Character />}></Route>
        <Route path="/comics" element={<ComicList />}></Route>
        <Route path="/characters" element={<CharacterList />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
