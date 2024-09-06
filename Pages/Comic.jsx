import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GoHeartFill } from "react-icons/go";
import { TiHeartOutline } from "react-icons/ti";

import "../Styles/Comic.css";

const Comic = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [comic, setComic] = useState();
  const { id } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/comic/${id}`);
        setComic(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <span>En cours de chargement</span>
  ) : (
    <main>
      <h1 className="comic-name">{comic.title}</h1>
      <section className="comic">
        <div key={comic.id} className="comic-infos">
          <div>
            <img src={comic.thumbnail} alt="comic image" />
          </div>
          <div className="comic-details">
            <p>{comic.description}</p>
            <div className="comic-favorite">
              <p>Ajouter en favoris</p>
              {isFavorite === true ? (
                <GoHeartFill
                  className="icon"
                  onClick={() => setIsFavorite(!isFavorite)}
                />
              ) : (
                <TiHeartOutline
                  className="icon"
                  onClick={() => setIsFavorite(!isFavorite)}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Comic;
