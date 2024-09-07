import axios from "axios";
import { useState, useEffect } from "react";

import "../Styles/Card.css";

import SearchBar from "../Components/SearchBar";
import Card from "../Components/Card";
import Loading from "../Components/Loading";

import Deadpool from "../src/assets/Deadpool.png";

const CharacterList = ({ favoriteCharacter, handleFavoriteCharacter }) => {
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
          `https://site--backend-marvel--4fybfkwcyn9l.code.run/characters?${
            searchCharacter ? `name=${searchCharacter}&` : ""
          }&limit=${limit}&skip=${skip}`
        );
        setCharacters(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [searchCharacter, pageNumber]);

  return isLoading ? (
    <Loading />
  ) : (
    <main>
      <h1>Personnages</h1>
      <SearchBar setSearchElement={setSearchCharacter} name="personnage" />
      <section className="card-list">
        {characters.length > 0 ? (
          characters.map((character) => (
            <Card
              element={character}
              name="character"
              key={character.id}
              favoriteCharacter={favoriteCharacter}
              handleFavoriteCharacter={handleFavoriteCharacter}
            />
          ))
        ) : (
          <div className="no-result">
            <p>
              Es-tu sûr ? Je n'ai pas de <span>{searchCharacter}</span> dans mes
              amis !
            </p>
            <img src={Deadpool} alt="deadpool" />
          </div>
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
        {characters.length > 0 && (
          <button onClick={() => handlePageNumber("next")}>
            Page suivante{" "}
          </button>
        )}
      </div>
    </main>
  );
};

export default CharacterList;
