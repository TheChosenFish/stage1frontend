import "../Results/Results.css";
import { useLocation } from "react-router-dom";
import ArticleCard from "../ArticleCard/ArticleCard";

function Results({ isLoggedIn, handleLogin }) {
  const location = useLocation();
  const isSavedNews = location.pathname === "/saved-news";
  return (
    <section
      className="results__container"
      buttonText="Results"
      title="Results"
      onClick={handleLogin}
    >
      <h1 className="results__title">Search Results</h1>
      <ul className="results-section__list">
        <ArticleCard isLoggedIn={isLoggedIn} />
        <ArticleCard isLoggedIn={isLoggedIn} />
        <ArticleCard isLoggedIn={isLoggedIn} />
      </ul>
      <button
        className="show-more__button"
        style={{ visibility: `${isSavedNews && "hidden"}` }}
      >
        Show more
      </button>
    </section>
  );
}
export default Results;
