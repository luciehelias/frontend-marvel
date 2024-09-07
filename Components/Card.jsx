import { Link } from "react-router-dom";
import { GoHeartFill } from "react-icons/go";
import { TiHeartOutline } from "react-icons/ti";
import { useState, useEffect } from "react";

const Card = ({
  element,
  name,
  favoriteCharacter,
  handleFavoriteCharacter,
  favoriteComic,
  handleFavoriteComic,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (name === "character") {
      if (favoriteCharacter?.includes(element.id || element._id)) {
        setIsFavorite(true);
      } else {
        setIsFavorite(false);
      }
    } else {
      if (favoriteComic?.includes(element.id || element._id)) {
        setIsFavorite(true);
      } else {
        setIsFavorite(false);
      }
    }
  }, [favoriteCharacter, favoriteComic, element.id, element._id, name]);

  const toggleFavorite = () => {
    if (name === "character") {
      handleFavoriteCharacter(element.id || element._id);
    } else {
      handleFavoriteComic(element.id || element._id);
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <div key={element.id}>
      <div className="card">
        <div className="card-elements">
          <div className="card-image">
            <Link to={`/${name}/${element.id || element._id}`}>
              <img src={element.thumbnail} alt={`photo du ${name}`} />
            </Link>
          </div>
          <div className="card-infos">
            <Link to={`/${name}/${element.id || element._id}`}>
              <h2>{name === "character" ? element.name : element.title}</h2>
            </Link>
            <p className="card-description">{element.description}</p>
            <div className="card-favorite">
              <p>Ajouter en favoris</p>
              {isFavorite === true ? (
                <GoHeartFill className="icon" onClick={toggleFavorite} />
              ) : (
                <TiHeartOutline className="icon" onClick={toggleFavorite} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
