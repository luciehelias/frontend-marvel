import axios from "axios";
import { useState, useEffect } from "react";

import "../Styles/Card.css";

import SearchBar from "../Components/SearchBar";
import Card from "../Components/Card";
import Loading from "../Components/Loading";
import Pagination from "../Components/Pagination";
import NoResult from "../Components/NoResult";

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
          <NoResult searchElement={searchCharacter} type={"character"} />
        )}
      </section>
      <Pagination
        handlePageNumber={handlePageNumber}
        pageNumber={pageNumber}
        arraySize={characters.length}
      />
    </main>
  );
};

export default CharacterList;
