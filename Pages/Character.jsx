import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GoHeartFill } from "react-icons/go";

import { Link } from "react-router-dom";

const Character = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [character, setCharacter] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/character/${id}`
        );
        setCharacter(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
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
          <GoHeartFill className="icon" />
        </div>
      </section>
    </main>
  );
};

export default Character;
