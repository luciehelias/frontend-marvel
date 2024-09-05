import "../Styles/Header.css";
import logo from "../src/assets/logo.svg";
import { GoHeartFill } from "react-icons/go";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="header-connect">
        <button>Connecte-toi</button>
        <div className="header-favorite">
          <p>Favoris</p>
          <GoHeartFill className="icon" />
        </div>
      </div>
      <img src={logo} alt="logo marvel" className="header-logo" />
      <nav>
        <Link to={"/characters"} className="header-link">
          <span>Personnages</span>
        </Link>
        <Link to={"/comics"} className="header-link">
          <span>Comics</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
