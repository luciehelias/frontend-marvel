import "../Styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <h1>
        Made at {""}
        <a
          href="https://www.lereacteur.io/"
          target="_blank"
          className="header-link"
        >
          Le Reacteur
        </a>{" "}
        by {""}
        <a
          href="https://github.com/luciehelias"
          target="_blank"
          className="header-link"
        >
          Lucie Hélias
        </a>
      </h1>
    </footer>
  );
};

export default Footer;
