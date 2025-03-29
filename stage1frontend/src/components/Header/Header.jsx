import Searching from "../Searching/Searching";
import "./Header.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Header({ handleLogin, isLoggedIn, handleSearch }) {
  const location = useLocation();
  const isSavedNews = location.pathname === "/saved-news";
  const home = location.pathname === "/";
  return (
    <>
      <header
        style={{
          backgroundImage: `${
            home
              ? "../../../images/georgia-de-lotz--UsJoNxLaNo-unsplash.png"
              : "none"
          }`,
          color: `${isSavedNews && "black"}`,
          backgroundColor: `${isSavedNews && "white"}`,
          borderBottomColor: `${isSavedNews && "black"}`,
          borderBottomWidth: `${isSavedNews && "1"}`,
        }}
        className="header header__bg"
      >
        <div className="nav__container">
          <p className="nav__title">News Explorer</p>
          <ul className="header__buttons">
            <Link to="/">
              <button
                className="nav__home"
                style={{
                  color: `${isSavedNews && "black"}`,
                  borderBottom: `${isSavedNews && "none"}`,
                }}
              >
                Home
              </button>
            </Link>
            {isLoggedIn && (
              <Link to="/saved-news">
                <button
                  type="button"
                  className="nav__saved-news"
                  style={{
                    color: `${isSavedNews && "black"}`,
                    borderColor: `${isSavedNews && "black"}`,
                  }}
                >
                  Saved News
                </button>
              </Link>
            )}
            {isLoggedIn && (
              <button
                onClick={handleLogin}
                type="button"
                className="logout__button"
                style={{
                  color: `${isSavedNews && "black"}`,
                  borderColor: `${isSavedNews && "black"}`,
                }}
              >
                John
              </button>
            )}
            {!isLoggedIn && (
              <>
                <button
                  onClick={handleLogin}
                  type="button"
                  className="nav__sign-in"
                >
                  Sign In
                </button>
              </>
            )}
          </ul>
          <button className="menu__button"></button>
        </div>
        <Searching />
      </header>
    </>
  );
}
export default Header;
