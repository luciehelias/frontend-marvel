import axios from "axios";
import { useState, useEffect } from "react";

const Comics = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [comics, setComics] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/comics?skip=");
        setComics(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement</span>
  ) : (
    <main>
      <h1>Comics</h1>
      <section>
        {comics.map((comic) => (
          <div key={comic.id}>
            <h2>{comic.title}</h2>
            <p>{comic.description}</p>
            <img src={comic.thumbnail} alt="" />
          </div>
        ))}
      </section>
    </main>
  );
};

export default Comics;
