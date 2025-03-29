import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import "./App.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import { getCurrentUser, signUp, login, getToken } from "../../../utils/auth";
function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    _id: "",
  });
  const [isFound, setIsFound] = useState(false);

  const handleLogin = () => {
    setActiveModal("Login");
  };

  const handleRegister = () => {
    setActiveModal("Register");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleSearch = () => {
    setIsFound("Results");
  };

  function closeModal() {
    modal.classList.remove("modal_opened");
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
    if (evt.target.classList.contains("modal")) {
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

  // const handleSearchSubmit

  useEffect(() => {
    const token = getToken();
    if (token) {
      getCurrentUser()
        .then((data) => {
          setCurrentUser(data);
          setIsLoggedIn(true);
        })
        .catch(console.error);
    }
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header
          isLoggedIn={isLoggedIn}
          handleLogin={handleLogin}
          handleSearch={handleSearch}
        />
        <Main isLoggedIn={isLoggedIn} isFound={isFound} />
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
