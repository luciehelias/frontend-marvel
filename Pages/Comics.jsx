import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GoHeartFill } from "react-icons/go";
import { FaSearch } from "react-icons/fa";

import "../Styles/Comics.css";

const Comics = () => {
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
          <div key={comic.id}>
            <Link to={`/comic/${comic.id}`}>
              <div className="comic">
                <div className="comic-card">
                  <div>
                    <img src={comic.thumbnail} alt="photo du comic" />
                  </div>
                  <div className="comic-card-infos">
                    <h2>{comic.title}</h2>
                    <p className="comic-description">{comic.description}</p>
                    <div className="comic-favorite">
                      <p>Ajouter en favoris</p>
                      <GoHeartFill className="icon" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Comics;
