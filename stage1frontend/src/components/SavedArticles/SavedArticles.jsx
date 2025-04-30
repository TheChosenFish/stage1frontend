import "../SavedArticles/SavedArticles.css";
import { useLocation } from "react-router-dom";
import ArticleCard from "../ArticleCard/ArticleCard";

function SavedArticles({
  handleSaveArticle,
  handleDeleteArticle,
  savedNews,
  isLoggedIn,
  results,
  currentUser,
}) {
  const location = useLocation();
  const isSavedNews = location.pathname === "/saved-news";

  return (
    <section
      className="saved__articles"
      style={{
        backgroundColor: `${isSavedNews && "white"}`,
      }}
    >
      <p className="saved-articles__header">Saved Articles</p>
      <h1 className="saved-articles__section-header">
        {currentUser.name}, you have {savedNews.length} saved articles
      </h1>
      <h2 className="saved-articles__keywords">
        by keyword: nature, stuff, other
      </h2>
      <div className="saved-articles__container">
        {savedNews.map((article) => {
          return (
            <ArticleCard
              style={{
                backgroundColor: `${isSavedNews && "white"}`,
              }}
              key={article.url}
              savedNews={savedNews}
              article={article}
              isLoggedIn={isLoggedIn}
              handleSaveArticle={handleSaveArticle}
              handleDeleteArticle={handleDeleteArticle}
            />
          );
        })}
      </div>
    </section>
  );
}
export default SavedArticles;
