import { Link } from "react-router-dom";
import { GoHeartFill } from "react-icons/go";
import { TiHeartOutline } from "react-icons/ti";

const Card = ({ element, name }) => {
  return (
    <div key={element.id}>
      <Link to={`/${name}/${element.id}`}>
        <div className="card">
          <div className="card-elements">
            <div>
              <img src={element.thumbnail} alt={`photo du ${name}`} />
            </div>
            <div className="card-infos">
              <h2>{name === "character" ? element.name : element.title}</h2>
              <p className="card-description">{element.description}</p>
              <div className="card-favorite">
                <p>Ajouter en favoris</p>
                {/* <GoHeartFill className="icon" /> */}
                <TiHeartOutline className="icon" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
