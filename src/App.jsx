import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

import ComicList from "../Pages/ComicList";
import CharacterList from "../Pages/CharacterList";
import Character from "../Pages/Character";
import Comic from "../Pages/Comic";
import { useState } from "react";

const App = () => {
  const [favoriteCharacter, setFavoriteCharacter] = useState(
    Cookies.get("favorite-character") || []
  );
  const [favoriteComic, setFavoriteComic] = useState(
    Cookies.get("favorite-comic") || []
  );

  const handlefavoriteCharacter = (favoriteCharacter) => {
    if (favoriteCharacter) {
      Cookies.set("favorite-character", favoriteCharacter, { expires: 7 });
      setFavoriteCharacter(favoriteCharacter);
    } else {
      Cookies.remove("favorite-character");
      setFavoriteCharacter([]);
    }
  };

  const handlefavoriteComic = (favoriteComic) => {
    if (favoriteComic) {
      Cookies.set("favorite-Comic", favoriteComic, { expires: 7 });
      setFavoriteComic(favoriteComic);
    } else {
      Cookies.remove("favorite-Comic");
      setFavoriteComic([]);
    }
  };

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
