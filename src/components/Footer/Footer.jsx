import "./Footer.css";
import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  const isSavedNews = location.pathname === "/saved-news";

  return (
    <footer className="footer">
      <p className="footer__content">2024 Supersite Powered by News API</p>
      <div className="footer-links__container">
        <div className="footer-word-links__container">
          <p className="footer__content-home">Home</p>
          <p className="footer__content-TT">TripleTen</p>
        </div>
        <div className="footer-imgs__container">
          <img className="footer__content-fb-logo" alt="fb logo" />
          <img className="footer__content-gh-logo" alt="gh logo" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
