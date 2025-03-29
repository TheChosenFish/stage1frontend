import "../SavedArticles/SavedArticles.css";
import { useLocation } from "react-router-dom";
import ArticleCard from "../ArticleCard/ArticleCard";

function SavedArticles({ isLoggedIn }) {
  const location = useLocation();
  const isSavedNews = location.pathname === "/saved-news";
  return (
    <section
      className="saved__articles"
      style={{
        backgroundColor: `${isSavedNews && "white"}`,
        //height: `${isSavedNews && "1440px"}`,
      }}
    >
      <p className="saved-articles__header">Saved Articles</p>
      <h1 className="saved-articles__section-header">
        John, you have 3 saved articles
      </h1>
      <h2 className="saved-articles__keywords">
        by keyword: nature, stuff, other
      </h2>
      <div className="saved-articles__container">
        <ArticleCard isLoggedIn={isLoggedIn} />
        <ArticleCard isLoggedIn={isLoggedIn} />
        <ArticleCard isLoggedIn={isLoggedIn} />
        <ArticleCard isLoggedIn={isLoggedIn} />
        <ArticleCard isLoggedIn={isLoggedIn} />
      </div>
    </section>
  );
}
export default SavedArticles;
