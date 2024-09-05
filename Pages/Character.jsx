import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GoHeartFill } from "react-icons/go";

import Card from "../Components/Card";

const Character = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [character, setCharacter] = useState();
  const [characterComics, setCharacterComics] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/character/${id}`
        );
        setCharacter(response.data);
      } catch (error) {
        console.log(error.response);
      }
    };

    const fetchCharacterComics = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/comics/${id}`);
        setCharacterComics(response.data);
      } catch (error) {
        console.log(error.response);
      }
    };
    setIsLoading(true);
    fetchCharacterComics();
    fetchCharacter();
    setIsLoading(false);
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
          <GoHeartFill className="icon" />
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
