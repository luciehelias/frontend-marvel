import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GoHeartFill } from "react-icons/go";

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
        <div>
          <div key={character.id}>
            <h2>{character.name}</h2>
            <p>{character.description}</p>
            <img src={character.thumbnail} alt="" />
          </div>

          <div>
            <p>Ajouter en favoris</p>
            <GoHeartFill className="header-icon" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Character;
