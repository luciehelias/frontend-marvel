import { Link } from "react-router-dom";
import { GoHeartFill } from "react-icons/go";
import { TiHeartOutline } from "react-icons/ti";
import { useState } from "react";

const Card = ({ element, name }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <div key={element.id}>
      <div className="card">
        <div className="card-elements">
          <div className="card-image">
            <Link to={`/${name}/${element.id}`}>
              <img src={element.thumbnail} alt={`photo du ${name}`} />
            </Link>
          </div>
          <div className="card-infos">
            <h2>{name === "character" ? element.name : element.title}</h2>
            <p className="card-description">{element.description}</p>
            <div className="card-favorite">
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
      </div>
    </div>
  );
};

export default Card;
