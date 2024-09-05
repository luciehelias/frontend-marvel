import axios from "axios";
import { useState, useEffect } from "react";

import "../Styles/Card.css";

import SearchBar from "../Components/SearchBar";
import Card from "../Components/Card";

const ComicList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [comics, setComics] = useState();
  const [searchComic, setSearchComic] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `{http://localhost:3000/comics?${
            searchCharacter ? `?name=${searchCharacter}` : ""
          }`
        );
        setComics(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [searchComic]);

  return isLoading ? (
    <span>En cours de chargement</span>
  ) : (
    <main>
      <SearchBar setSearchElement={setSearchComic} name="comic" />
      <h1>Comics</h1>
      <section>
        {comics.map((comic) => (
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
        ))}
      </section>
    </main>
  );
};

export default ComicList;
