import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GoHeartFill } from "react-icons/go";

const Comic = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [comic, setComic] = useState();
  const { id } = useParams();

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
      <h1>Comic</h1>
      <section>
        <div>
          <div key={comic.id}>
            <h2>{comic.title}</h2>
            <p>{comic.description}</p>
            <img src={comic.thumbnail} alt="" />
          </div>

          <div>
            <p>Ajouter en favoris</p>
            <GoHeartFill className="header-icon" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Comic;
