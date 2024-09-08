import Deadpool from "../src/assets/Deadpool.png";
import "../Styles/NoResult.css";

const NoResult = ({ searchElement, type }) => {
  return (
    <div className="no-result">
      <p>
        Es-tu sûr ? Je n'ai pas de <span>{searchElement}</span>
        {type === "character"
          ? " dans mes amis !"
          : " dans mon répertoire de comics trop cool !"}
      </p>
      <img src={Deadpool} alt="deadpool" />
    </div>
  );
};

export default NoResult;
