import { useEffect, useState } from "react";
import { deleteArticle, getArticle, saveArticle } from "../../../utils/api";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import "./App.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import SuccessModal from "../SuccessModal/SuccessModal";
import { signUp, login } from "../../../utils/auth";
import { useMemo } from "react";
function App() {
  const [results, setResults] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [savedNews, setSavedNews] = useState([]);
  const [keyWord, setKeyWord] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: "John",
    email: "",
    _id: "",
  });

  const savedNewsKeywords = useMemo(() => {
    return savedNews.map((savedArticle) => savedArticle.keyword);
  }, [savedNews]);

  console.log(savedNewsKeywords);

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
    setKeyWord(query);
    getArticle(query)
      .then((data) => {
        setResults(data.articles);
      })
      .catch(console.error)
      .finally(() => {
        setHasSearched(true);
        setIsLoading(false);
      });
  };

  const handleSaveArticle = (article) => {
    const articleWithKeyword = { ...article, keyword: keyWord };
    saveArticle(articleWithKeyword)
      .then((savedArticle) => {
        setSavedNews([...savedNews, savedArticle]);
        console.log(savedArticle);
      })
      .catch(console.error);
  };

  const handleDeleteArticle = (article) => {
    deleteArticle(article)
      .then((deletedArticle) => {
        const updatedSavedNews = savedNews.filter((currentArticle) => {
          return deletedArticle.url !== currentArticle.url;
        });
        setSavedNews(updatedSavedNews);
        console.log(deletedArticle);
      })
      .catch(console.error);
  };

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
        return handleLoginModalSubmit(email, password);
      })
      .then(() => {
        setActiveModal("Success");
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
          savedNewsKeywords={savedNewsKeywords}
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
      {activeModal === "Success" && (
        <SuccessModal handleLogin={handleLogin} onClose={closeActiveModal} />
      )}
    </CurrentUserContext.Provider>
  );
}

export default App;
