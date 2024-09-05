import axios from "axios";
import { useState, useEffect } from "react";

const Characters = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/characters");
        setCharacters(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement</span>
  ) : (
    <main>
      <h1>Comics</h1>
      <section>
        {characters.map((character) => (
          <div key={character.id}>
            <h2>{character.name}</h2>
            <p>{character.description}</p>
            <img src={character.thumbnail} alt="" />
          </div>
        ))}
      </section>
    </main>
  );
};

export default Characters;
