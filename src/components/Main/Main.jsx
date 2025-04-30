import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import About from "../About/About";
import SavedArticles from "../SavedArticles/SavedArticles";
import Results from "../Results/Results";

function Main({
  handleSaveArticle,
  handleDeleteArticle,
  savedNews,
  isLoggedIn,
  results,
  hasSearched,
  currentUser,
  isLoading,
}) {
  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Results
                handleSaveArticle={handleSaveArticle}
                results={results}
                isLoggedIn={isLoggedIn}
                savedNews={savedNews}
                hasSearched={hasSearched}
                isLoading={isLoading}
              />
              <About />
            </>
          }
        />
        <Route
          path="/saved-news"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <SavedArticles
                handleSaveArticle={handleSaveArticle}
                handleDeleteArticle={handleDeleteArticle}
                savedNews={savedNews}
                results={results}
                currentUser={currentUser}
              />
            </ProtectedRoute>
          }
        />
      </Routes>
    </main>
  );
}

export default Main;
