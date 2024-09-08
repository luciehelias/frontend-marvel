import axios from "axios";
import { useState, useEffect } from "react";

import "../Styles/Card.css";

import SearchBar from "../Components/SearchBar";
import Card from "../Components/Card";
import Loading from "../Components/Loading";
import Pagination from "../Components/Pagination";
import NoResult from "../Components/NoResult";

const ComicList = ({ favoriteComic, handleFavoriteComic }) => {
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
          `https://site--backend-marvel--4fybfkwcyn9l.code.run/comics?${
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
    <Loading />
  ) : (
    <main>
      <h1>Comics</h1>
      <SearchBar setSearchElement={setSearchComic} name="comic" />
      <section className="card-list">
        {comics.length > 0 ? (
          comics.map((comic) => (
            <Card
              element={comic}
              name="comic"
              key={comic.id}
              favoriteComic={favoriteComic}
              handleFavoriteComic={handleFavoriteComic}
            />
          ))
        ) : (
          <NoResult searchElement={searchComic} type="comic" />
        )}
      </section>
      <Pagination
        handlePageNumber={handlePageNumber}
        pageNumber={pageNumber}
        arraySize={comics.length}
      />
    </main>
  );
};

export default ComicList;
