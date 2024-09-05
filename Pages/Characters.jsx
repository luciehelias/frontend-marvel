import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GoHeartFill } from "react-icons/go";
import { FaSearch } from "react-icons/fa";

import "../Styles/Characters.css";

const Characters = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState();
  const [searchCharacter, setSearchCharacter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/characters${
            searchCharacter ? `?name=${searchCharacter}` : ""
          }`
        );
        setCharacters(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [searchCharacter]);

  return isLoading ? (
    <span>En cours de chargement</span>
  ) : (
    <main>
      <div className="character-search-bar">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Recherche des articles"
          onChange={(e) => setSearchCharacter(e.target.value)}
        />
      </div>
      <h1>Characters</h1>
      <section>
        {characters.length > 0 ? (
          characters.map((character) => (
            <div key={character.id}>
              <Link to={`/character/${character.id}`}>
                <div className="character">
                  <div className="character-card">
                    <div>
                      <img
                        src={character.thumbnail}
                        alt="photo du personnage"
                      />
                    </div>
                    <div className="character-infos">
                      <h2>{character.name}</h2>
                      <p className="character-description">
                        {character.description}
                      </p>
                      <div className="character-favorite">
                        <p>Ajouter en favoris</p>
                        <GoHeartFill className="icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p>Aucun personnage ne correspond à votre recherche.</p>
        )}
      </section>
    </main>
  );
};

export default Characters;
