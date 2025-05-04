import "./Footer.css";
import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  const isSavedNews = location.pathname === "/saved-news";

  return (
    <footer className="footer">
      <p className="footer__content">2024 Supersite Powered by News API</p>
      <ul className="footer-links__container">
        <li className="footer-word-links__container">
          <p className="footer__content-home">Home</p>
          <p className="footer__content-TT">TripleTen</p>
        </li>
        <li className="footer-imgs__container">
          <a
            className="footer__content-li-logo"
            alt="Li logo"
            href="https://www.linkedin.com/in/michael-bostick-513b14327/"
          />
          <a
            className="footer__content-gh-logo"
            alt="gh logo"
            href="https://github.com/TheChosenFish"
          />
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
