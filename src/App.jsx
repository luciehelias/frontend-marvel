import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

import ComicList from "../Pages/ComicList";
import CharacterList from "../Pages/CharacterList";
import Character from "../Pages/Character";
import Comic from "../Pages/Comic";
import Favorites from "../Pages/Favorites";
import { useState } from "react";

const App = () => {
  const [favoriteCharacter, setFavoriteCharacter] = useState(
    Cookies.get("favorite-character")
      ? JSON.parse(Cookies.get("favorite-character"))
      : []
  );
  const [favoriteComic, setFavoriteComic] = useState(
    Cookies.get("favorite-comic")
      ? JSON.parse(Cookies.get("favorite-comic"))
      : []
  );

  const handleFavoriteCharacter = (id) => {
    let updatedFavorites = [...favoriteCharacter];

    if (favoriteCharacter.includes(id)) {
      updatedFavorites = updatedFavorites.filter(
        (favoriteId) => favoriteId !== id
      );
    } else {
      updatedFavorites.push(id);
    }

    if (updatedFavorites.length === 0) {
      Cookies.remove("favorite-character");
    } else {
      Cookies.set("favorite-character", JSON.stringify(updatedFavorites), {
        expires: 7,
      });
    }

    setFavoriteCharacter(updatedFavorites);
  };

  const handleFavoriteComic = (id) => {
    let updatedFavorites = [...favoriteComic];
    if (favoriteComic.includes(id)) {
      updatedFavorites = updatedFavorites.filter(
        (favoriteId) => favoriteId !== id
      );
    } else {
      updatedFavorites.push(id);
    }

    if (updatedFavorites.length === 0) {
      Cookies.remove("favorite-comic");
    } else {
      Cookies.set("favorite-comic", JSON.stringify(updatedFavorites), {
        expires: 7,
      });
    }
    setFavoriteComic(updatedFavorites);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <ComicList
              favoriteComic={favoriteComic}
              handleFavoriteComic={handleFavoriteComic}
            />
          }
        ></Route>
        <Route
          path="/comic/:id"
          element={
            <Comic
              favoriteComic={favoriteComic}
              handleFavoriteComic={handleFavoriteComic}
            />
          }
        ></Route>
        <Route
          path="/character/:id"
          element={
            <Character
              favoriteCharacter={favoriteCharacter}
              handleFavoriteCharacter={handleFavoriteCharacter}
              favoriteComic={favoriteComic}
              handleFavoriteComic={handleFavoriteComic}
            />
          }
        ></Route>
        <Route
          path="/comics"
          element={
            <ComicList
              favoriteComic={favoriteComic}
              handleFavoriteComic={handleFavoriteComic}
            />
          }
        ></Route>
        <Route
          path="/characters"
          element={
            <CharacterList
              favoriteCharacter={favoriteCharacter}
              handleFavoriteCharacter={handleFavoriteCharacter}
            />
          }
        ></Route>
        <Route
          path="/favorites"
          element={
            <Favorites
              favoriteCharacter={favoriteCharacter}
              handleFavoriteCharacter={handleFavoriteCharacter}
              favoriteComic={favoriteComic}
              handleFavoriteComic={handleFavoriteComic}
            />
          }
        ></Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
