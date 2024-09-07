import "../Styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <p>
        Made at {""}
        <a
          href="https://www.lereacteur.io/"
          target="_blank"
          className="footer-link"
        >
          Le Reacteur
        </a>{" "}
        by {""}
        <a
          href="https://github.com/luciehelias"
          target="_blank"
          className="footer-link"
        >
          Lucie Hélias
        </a>
      </p>
    </footer>
  );
};

export default Footer;
