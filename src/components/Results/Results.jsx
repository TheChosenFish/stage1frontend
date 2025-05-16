import "../Results/Results.css";
import { useLocation } from "react-router-dom";
import ArticleCard from "../ArticleCard/ArticleCard";
import NoResults from "../NoResults/NoResults";
import { useEffect, useState } from "react";
import Preloader from "../Preloader/Preloader";
import SuccessModal from "../SuccessModal/SuccessModal";

function Results({
  handleSaveArticle,
  savedNews,
  isLoggedIn,
  handleLogin,
  results,
  hasSearched,
  isLoading,
}) {
  const [numberVisibleCards, setNumberVisibleCards] = useState(3);

  const location = useLocation();
  const isSavedNews = location.pathname === "/saved-news";

  const handleShowMore = () => {
    setNumberVisibleCards(numberVisibleCards + 3);
  };

  if (isLoading) {
    return (
      <section className="results">
        <Preloader />
        <p className="results__search-loader">Seaching for news...</p>
      </section>
    );
  }

  if (results.length === 0 && !hasSearched) {
    return null;
  }

  if (results.length === 0 && hasSearched) {
    return <NoResults />;
  }

  return (
    <section
      className="results"
      buttontext="Results"
      title="Results"
      onClick={handleLogin}
    >
      <h1 className="results__title">Search Results</h1>
      <ul className="results-section__list">
        {results.slice(0, numberVisibleCards).map((article) => {
          return (
            <li>
              <ArticleCard
                handleSaveArticle={handleSaveArticle}
                key={article.url}
                article={article}
                isLoggedIn={isLoggedIn}
                savedNews={savedNews}
              />
            </li>
          );
        })}
      </ul>
      <button
        className="results_show-more__button"
        style={{ visibility: `${isSavedNews && "hidden"}` }}
        onClick={() => {
          handleShowMore();
        }}
      >
        Show more
      </button>
    </section>
  );
}
export default Results;
