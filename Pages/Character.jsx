import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GoHeartFill } from "react-icons/go";
import { TiHeartOutline } from "react-icons/ti";

import Card from "../Components/Card";

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
      <h1>Personnage</h1>
      <section>
        <div key={character.id}>
          <div>
            <img src={character.thumbnail} alt="" />
          </div>
          <div>
            <h2>{character.name}</h2>
            <p>{character.description}</p>
          </div>
        </div>
        <div>
          <p>Ajouter en favoris</p>
          {/* <GoHeartFill className="icon" /> */}
          <TiHeartOutline className="icon" />
        </div>
      </section>
      <section>
        {characterComics.map((comic) => (
          <Card element={comic} name="comic" />
        ))}
      </section>
    </main>
  );
};

export default Character;
