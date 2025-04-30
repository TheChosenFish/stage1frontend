import "./Footer.css";
import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  const isSavedNews = location.pathname === "/saved-news";

  return (
    <footer className="footer">
      <p className="footer__content">2024 Supersite Powered by News API</p>
      <div className="footer-1__container">
        <div className="footer-2__container">
          <p className="footer__content2">Home</p>
          <p className="footer__content3">TripleTen</p>
        </div>
        <div className="footer-3__container">
          <img className="footer__content4" alt="fb logo" />
          <img className="footer__content5" alt="gh logo" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
