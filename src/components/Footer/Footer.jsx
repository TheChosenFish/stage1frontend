import "./Footer.css";
import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  const isSavedNews = location.pathname === "/saved-news";

  return (
    <footer className="footer">
      <p className="footer__content">2025 Supersite Powered by News API</p>
      <ul className="footer-links__container">
        <li className="footer-links__words-container">
          <a
            className="footer-links__home"
            alt="home link"
            href="https://google.com/"
          >
            Home
          </a>
          <a
            className="footer-links__TT"
            alt="TT logo"
            href="https://tripleten.com/"
          >
            TripleTen
          </a>
        </li>
        <li className="footer-imgs__container">
          <a
            className="footer-imgs__li-logo"
            alt="Li logo"
            href="https://www.linkedin.com/in/michael-bostick-513b14327/"
          />
          <a
            className="footer-imgs__gh-logo"
            alt="gh logo"
            href="https://github.com/TheChosenFish"
          />
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
