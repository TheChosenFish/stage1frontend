import Searching from "../Searching/Searching";
import "./Header.css";
import Arrow from "../../assets/ArrowLO.svg";
import ArrowBlk from "../../assets/logout-blk.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Header({ handleLogin, isLoggedIn, handleSearch, currentUser }) {
  const [currentPage, setCurrentPage] = useState("/");
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isSavedNews = location.pathname === "/saved-news";
  const home = location.pathname === "/";
  console.log(isSavedNews);

  function getMenuButtonClass() {
    if (isSavedNews && !isMenuOpen) {
      return "menu__button_color_black";
    } else if (isMenuOpen) {
      return "menu__button_type_close";
    } else {
      return "";
    }
  }
  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 515) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        setIsMenuOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header
        className={`header ${
          currentPage === "/saved-news" ? "header_location_saved-news" : ""
        } ${isMenuOpen && "header_mobile-menu-open"}`}
      >
        <div
          className={`header_nav__container ${
            currentPage === "/saved-news"
              ? "header_nav__container_saved-articles"
              : ""
          } ${isMenuOpen && "header_nav__container_mobile-menu-open"} `}
        >
          <p
            className="header_nav__title"
            style={{
              color: `${isSavedNews && !isMenuOpen ? "black" : "white"}`,
            }}
          >
            News Explorer
          </p>
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            type="button"
            className={`header_menu__button ${getMenuButtonClass()}`}
          ></button>
          {isLoggedIn}
          <div
            className={`header-buttons__container ${
              isMenuOpen && "header-buttons__container-visible"
            }`}
          >
            <ul className="header__buttons">
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                }}
              >
                <button
                  className="header_nav__home"
                  style={{
                    textDecoration: "none",
                    color: `${isSavedNews && !isMenuOpen ? "black" : "white"}`,
                    borderBottom: `${
                      home && !isMenuOpen ? "5px solid white" : ""
                    }`,
                  }}
                >
                  Home
                </button>
              </Link>
              {isLoggedIn && (
                <Link
                  to="/saved-news"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <button
                    type="button"
                    className="header_nav__saved-news"
                    style={{
                      color: `${
                        isSavedNews && !isMenuOpen ? "black" : "white"
                      }`,
                      borderBottom: `${
                        isSavedNews && !isMenuOpen ? "5px solid black" : ""
                      }`,
                    }}
                  >
                    Saved News
                  </button>
                </Link>
              )}
              {isLoggedIn && (
                <div className="header_logout__button-container">
                  <button
                    onClick={handleLogin}
                    type="button"
                    className="header_logout__button"
                    style={{
                      //color: `${isSavedNews ? "black" : "white"}`,
                      borderColor: `${
                        isSavedNews && !isMenuOpen ? "black" : "white"
                      }`,
                    }}
                  >
                    <div
                      className="header_button__text"
                      style={{
                        color: `${
                          isSavedNews && !isMenuOpen ? "black" : "white"
                        }`,
                      }}
                    >
                      {currentUser.name}
                    </div>
                    <img
                      className="header_logout__icon"
                      alt="logout-icon"
                      src={isSavedNews ? ArrowBlk : Arrow}
                    ></img>
                  </button>
                </div>
              )}
              {!isLoggedIn && (
                <>
                  <div className="header_nav__container-sign-in">
                    <button
                      onClick={handleLogin}
                      type="button"
                      className="header_nav__sign-in"
                    >
                      Sign In
                    </button>
                  </div>
                </>
              )}
            </ul>
          </div>
        </div>

        <Searching handleSearch={handleSearch} />
      </header>
    </>
  );
}
export default Header;
