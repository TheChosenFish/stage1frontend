import "./Footer.css";
import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  const isSavedNews = location.pathname === "/saved-news";

  return (
    <footer className="footer">
      <p className="footer__content">2024 Supersite Powered by News API</p>
      <p className="footer__content2">2024</p>
    </footer>
  );
}

export default Footer;
