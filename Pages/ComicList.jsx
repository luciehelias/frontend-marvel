import axios from "axios";
import { useState, useEffect } from "react";

import "../Styles/Card.css";

import SearchBar from "../Components/SearchBar";
import Card from "../Components/Card";

const ComicList = () => {
  const [isLoading, setIsLoading] = useState(false);
  // REMETTRE LE USESTATE à TRUE
  const [comics, setComics] = useState("");
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
      try {
        const response = await axios.get(
          `{http://localhost:3000/comics?${
            searchCharacter ? `?name=${searchCharacter}` : ""
          }?limit=${limit}?skip=${skip}`
        );
        setComics(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    // fetchData();
    // DECOMMENTER
  }, [searchComic]);

  return isLoading ? (
    <span>En cours de chargement</span>
  ) : (
    <main>
      <h1>Comics</h1>
      <SearchBar setSearchElement={setSearchComic} name="comic" />
      <section>
        {comics.length ? (
          comics.map((comic) => (
            <Card element={comic} name="comic" />

            // {/* TO DELETE IF CARD WORKS */}
            // <div key={comic.id}>
            //   <Link to={`/comic/${comic.id}`}>
            //     <div className="comic">
            //       <div className="comic-card">
            //         <div>
            //           <img src={comic.thumbnail} alt="photo du comic" />
            //         </div>
            //         <div className="comic-card-infos">
            //           <h2>{comic.title}</h2>
            //           <p className="comic-description">{comic.description}</p>
            //           <div className="comic-favorite">
            //             <p>Ajouter en favoris</p>
            //             <GoHeartFill className="icon" />
            //           </div>
            //         </div>
            //       </div>
            //     </div>
            //   </Link>
            // </div>
          ))
        ) : (
          <p>Aucun comic ne correspond à votre recherche.</p>
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

export default ComicList;
