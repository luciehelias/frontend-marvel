import "../Styles/Header.css";
import logo from "../src/assets/logo.svg";
import { GoHeartFill } from "react-icons/go";

const Header = () => {
  return (
    <header>
      <div className="header-connect">
        <button>Connecte-toi</button>
        <GoHeartFill className="header-icon" />
      </div>
      <img src={logo} alt="logo marvel" className="header-logo" />
      <nav>
        <span>Personnages</span>
        <span>Comics</span>
      </nav>
    </header>
  );
};

export default Header;
