import axios from "axios";
import { useState, useEffect } from "react";

import "../Styles/Card.css";

import SearchBar from "../Components/SearchBar";
import Card from "../Components/Card";

const CharacterList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [searchCharacter, setSearchCharacter] = useState("");
  const limit = 100;
  const [pageNumber, setPageNumber] = useState(1);

  const handlePageNumber = (sens) => {
    if (sens === "next") {
      setPageNumber(pageNumber + 1);
    } else if (sens === "previous") {
      if (pageNumber > 1) {
        setPageNumber(pageNumber - 1);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const skip = (pageNumber - 1) * limit;

      try {
        const response = await axios.get(
          `http://localhost:3000/characters?${
            searchCharacter ? `name=${searchCharacter}&` : ""
          }&limit=${limit}&skip=${skip}`
        );
        console.log(response);
        setCharacters(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [searchCharacter, pageNumber]);

  return isLoading ? (
    <span>En cours de chargement</span>
  ) : (
    <main>
      {/* TO DELETE IF SEARCH BAR WORKS */}
      {/* <div className="character-search-bar">
        <FaSearch className="search-icon" />
        <input
        type="text"
        placeholder="Recherche des articles"
        onChange={(e) => setSearchCharacter(e.target.value)}
        />
      </div> */}
      <h1>Personnages</h1>
      <SearchBar setSearchElement={setSearchCharacter} name="personnage" />
      <section>
        {characters.length > 0 ? (
          characters.map((character) => (
            <Card element={character} name="character" />
          ))
        ) : (
          <p>Aucun personnage ne correspond à votre recherche.</p>
        )}
      </section>
      <div className="pagination">
        {pageNumber > 1 && (
          <>
            <button onClick={() => handlePageNumber("previous")}>
              Page précedente
            </button>
            <p>{`Page ${pageNumber}`}</p>
          </>
        )}
        <button onClick={() => handlePageNumber("next")}>Page suivante </button>
      </div>
    </main>
  );
};

export default CharacterList;
