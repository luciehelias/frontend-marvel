import { useState, useEffect } from "react";
import axios from "axios";

import Card from "../Components/Card";

const Favorites = ({
  favoriteCharacter,
  handleFavoriteCharacter,
  favoriteComic,
  handleFavoriteComic,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [comics, setComics] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const comicsList = [];
      const charactersList = [];
      for (let i = 0; i < favoriteComic.length; i++) {
        console.log(favoriteComic[i]);
        try {
          const response = await axios.get(
            `https://site--backend-marvel--4fybfkwcyn9l.code.run/comic/${favoriteComic[i]}`
          );
          console.log(response);
          const comicInfo = response.data;
          comicsList.push(comicInfo);
        } catch (error) {
          console.log(error.response);
        }
      }
      for (let i = 0; i < favoriteCharacter.length; i++) {
        console.log(favoriteCharacter[i]);
        try {
          const response = await axios.get(
            `https://site--backend-marvel--4fybfkwcyn9l.code.run/character/${favoriteCharacter[i]}`
          );
          const characterInfo = response.data;
          charactersList.push(characterInfo);
        } catch (error) {
          console.log(error.response);
        }
      }
      setIsLoading(false);
      setComics(comicsList);
      setCharacters(charactersList);
    };
    fetchData();
  }, [favoriteCharacter, favoriteComic]);

  return isLoading ? (
    <span>En cours de chargement</span>
  ) : (
    <main>
      <h1>Vos personnages favoris</h1>
      <section className="card-list">
        {characters.length > 0 ? (
          characters.map((character) => (
            <Card
              element={character}
              name="character"
              key={character._id}
              favoriteCharacter={favoriteCharacter}
              handleFavoriteCharacter={handleFavoriteCharacter}
            />
          ))
        ) : (
          <div className="no-result">
            <p>Pas encore de personnages en favoris</p>
          </div>
        )}
      </section>
      <h1>Vos comics favoris</h1>
      <section className="card-list">
        {comics.length > 0 ? (
          comics.map((comic) => (
            <Card
              element={comic}
              name="comic"
              key={comic._id}
              favoriteComic={favoriteComic}
              handleFavoriteComic={handleFavoriteComic}
            />
          ))
        ) : (
          <div className="no-result">
            <p>Pas encore de comics en favoris</p>
          </div>
        )}
      </section>
    </main>
  );
};

export default Favorites;
