import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import About from "../About/About";
import SavedArticles from "../SavedArticles/SavedArticles";
import Results from "../Results/Results";

function Main({ isLoggedIn, isFound }) {
  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Results isLoggedIn={isLoggedIn} isFound={isFound} />
              <About />
            </>
          }
        />
        <Route
          path="/saved-news"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <SavedArticles />
            </ProtectedRoute>
          }
        />
      </Routes>
    </main>
  );
}

export default Main;
