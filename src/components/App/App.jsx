import { useEffect, useState } from "react";
import { deleteArticle, getArticle, saveArticle } from "../../../utils/api";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import "./App.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import { signUp, login } from "../../../utils/auth";
function App() {
  const [results, setResults] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [savedNews, setSavedNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: "John",
    email: "",
    _id: "",
  });

  const handleLogin = () => {
    setActiveModal("Login");
  };

  const handleRegister = () => {
    setActiveModal("Register");
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const closeActiveModal = (event) => {
    setActiveModal("");
  };

  const handleSearch = (query) => {
    setIsLoading(true);
    getArticle(query)
      .then((data) => {
        // console.log(data);
        setResults(data.articles);
      })
      .catch(console.error)
      .finally(() => {
        setHasSearched(true);
        setIsLoading(false);
      });
  };

  //this function should be passed to the ArticleCard component so that twhen we click the bookmark icon it runs
  const handleSaveArticle = (article) => {
    saveArticle(article)
      .then((savedArticle) => {
        //add the article to the savedNews state array
        setSavedNews([...savedNews, savedArticle]);
        console.log(savedArticle);
      })
      .catch(console.error);
  };

  const handleDeleteArticle = (article) => {
    deleteArticle(article)
      .then((deletedArticle) => {
        //create a new array that is the previous savedNews array, but we filter out the article that we want to delete
        const updatedSavedNews = savedNews.filter((currentArticle) => {
          return deletedArticle.url !== currentArticle.url;
        });
        setSavedNews(updatedSavedNews);
        console.log(deletedArticle);
      })
      .catch(console.error);
  };

  // console.log(savedNews);
  // const handleDeleteArticle = (article) => {};

  function closeModal(e) {
    if (
      e.target.classList.contains("modal_opened") ||
      e.target.classList.contains("modal_closed")
    )
      document.removeEventListener("keydown", handleEscKeyPress);
    document.removeEventListener("click", handleOverlay);
  }

  function handleEscKeyPress(evt) {
    if (evt.key === "Escape") {
      const openedModal = document.querySelector(".modal_opened");
      if (openedModal) {
        closeModal(openedModal);
      }
    }
  }

  function handleOverlay(evt) {
    if (evt.target.contains("modal")) {
      closeModal(evt.target);
    }
  }

  const handleRegisterModalSubmit = ({ email, password, name }) => {
    return signUp({ email, password, name })
      .then((data) => {
        handleLoginModalSubmit(email, password);
      })
      .catch((error) => {
        console.error("Cannot Register", error);
      });
  };

  const handleLoginModalSubmit = (email, password) => {
    return login({ email, password })
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        setCurrentUser(data.user);
        setIsLoggedIn(true);
        closeActiveModal();
      })
      .catch(console.error);
  };

  useEffect(() => {
    if (!activeModal) {
      return;
    }
    function handleCloseEsc(e) {
      console.log("handleesc has run");
      if (e.key === "Escape") {
        closeActiveModal();
      }
    }
    document.addEventListener("keydown", handleCloseEsc);
    return () => document.removeEventListener("keydown", handleCloseEsc);
  }, [activeModal]);
  // const handleSearchSubmit

  // useEffect(() => {
  //   getArticle(dates, APIKey)
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch(console.error);
  // }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header
          isLoggedIn={isLoggedIn}
          handleLogin={handleLogin}
          handleSearch={handleSearch}
          currentUser={currentUser}
        />
        <Main
          handleSaveArticle={handleSaveArticle}
          handleDeleteArticle={handleDeleteArticle}
          savedNews={savedNews}
          isLoggedIn={isLoggedIn}
          results={results}
          hasSearched={hasSearched}
          currentUser={currentUser}
          isLoading={isLoading}
        />
        <Footer />
      </div>
      {activeModal === "Login" && (
        <LoginModal
          onLogin={handleLoginModalSubmit}
          handleRegister={handleRegister}
          onClose={closeActiveModal}
        />
      )}
      {activeModal === "Register" && (
        <RegisterModal
          handleLogin={handleLogin}
          onRegister={handleRegisterModalSubmit}
          onClose={closeActiveModal}
        />
      )}
    </CurrentUserContext.Provider>
  );
}

export default App;
