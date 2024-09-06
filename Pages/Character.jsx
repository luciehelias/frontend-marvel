import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GoHeartFill } from "react-icons/go";
import { TiHeartOutline } from "react-icons/ti";
import { AiFillThunderbolt } from "react-icons/ai";

import Card from "../Components/Card";
import "../Styles/Character.css";

const Character = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [character, setCharacter] = useState("");
  const [characterComics, setCharacterComics] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const characterResponse = await axios.get(
          `http://localhost:3000/character/${id}`
        );
        setCharacter(characterResponse.data);

        const comicsResponse = await axios.get(
          `http://localhost:3000/comics/${id}`
        );
        setCharacterComics(comicsResponse.data);
        console.log(comicsResponse.data);
      } catch (error) {
        console.log(error.response);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [id]);

  return isLoading ? (
    <span>En cours de chargement</span>
  ) : (
    <main>
      <h1 className="character-name">{character.name}</h1>
      <section className="character">
        <div key={character.id} className="character-infos">
          <div className="character-infos-image">
            <img
              src={character.thumbnail}
              alt={`l'image de ${character.name}`}
            />
            <TiHeartOutline className="icon" />
            {/* <GoHeartFill className="icon" /> */}
          </div>
        </div>
      </section>
      <h2 className="character-comics-title">
        Retrouve moi dans les meilleurs comics ci-dessous
        <AiFillThunderbolt className="thunderbolt" />
      </h2>
      <section className="character-comics-slider">
        {characterComics.map((comic) => (
          <Card element={comic} name="comic" />
        ))}
      </section>
    </main>
  );
};

export default Character;
