import axios from "axios";
import { useState, useEffect } from "react";

import "../Styles/Card.css";

import SearchBar from "../Components/SearchBar";
import Card from "../Components/Card";

import Deadpool from "../src/assets/Deadpool.png";

const ComicList = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [comics, setComics] = useState([]);
  const [searchComic, setSearchComic] = useState("");

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
          `http://localhost:3000/comics?${
            searchComic ? `name=${searchComic}&` : ""
          }&limit=${limit}&skip=${skip}`
        );

        setComics(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [searchComic, pageNumber]);

  return isLoading ? (
    <span>En cours de chargement</span>
  ) : (
    <main>
      <h1>Comics</h1>
      <SearchBar setSearchElement={setSearchComic} name="comic" />
      <section className="card-list">
        {comics.length > 0 ? (
          comics.map((comic) => <Card element={comic} name="comic" />)
        ) : (
          <div className="no-result">
            <p>
              Es-tu sûr ? Je n'ai pas de
              <span> {searchComic}</span> dans mon répertoire de comics trop
              cool !
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
        {comics.length > 0 && (
          <button onClick={() => handlePageNumber("next")}>
            Page suivante{" "}
          </button>
        )}
      </div>
    </main>
  );
};

export default ComicList;
