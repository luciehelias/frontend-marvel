import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GoHeartFill } from "react-icons/go";
import { TiHeartOutline } from "react-icons/ti";
import { AiFillThunderbolt } from "react-icons/ai";

import Card from "../Components/Card";
import "../Styles/Character.css";

const Character = ({
  favoriteCharacter,
  handleFavoriteCharacter,
  favoriteComic,
  handleFavoriteComic,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [character, setCharacter] = useState("");
  const [characterComics, setCharacterComics] = useState("");
  const { id } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const characterResponse = await axios.get(
          `https://site--backend-marvel--4fybfkwcyn9l.code.run/character/${id}`
        );
        setCharacter(characterResponse.data);

        const comicsResponse = await axios.get(
          `https://site--backend-marvel--4fybfkwcyn9l.code.run/comics/${id}`
        );

        setCharacterComics(comicsResponse.data);
      } catch (error) {
        console.log(error.response);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    if (favoriteCharacter.includes(character._id)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [favoriteCharacter, character._id]);

  const toggleFavorite = () => {
    handleFavoriteCharacter(character._id);
    setIsFavorite(!isFavorite);
  };

  return isLoading ? (
    <span>En cours de chargement</span>
  ) : (
    <main>
      <h1 className="character-name">{character.name}</h1>
      <section className="character">
        <div key={character._id} className="character-infos">
          <div className="character-infos-image">
            <img
              src={character.thumbnail}
              alt={`l'image de ${character.name}`}
            />
            {isFavorite === true ? (
              <GoHeartFill className="icon" onClick={toggleFavorite} />
            ) : (
              <TiHeartOutline className="icon" onClick={toggleFavorite} />
            )}
          </div>
        </div>
      </section>
      <h2 className="character-comics-title">
        Retrouve moi dans les meilleurs comics ci-dessous
        <AiFillThunderbolt className="thunderbolt" />
      </h2>
      <section className="character-comics-slider">
        {characterComics?.map((comic) => (
          <Card
            element={comic}
            name="comic"
            key={comic.id}
            favoriteComic={favoriteComic}
            handleFavoriteComic={handleFavoriteComic}
          />
        ))}
      </section>
    </main>
  );
};

export default Character;
