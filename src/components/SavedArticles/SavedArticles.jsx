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
  savedNewsKeywords,
}) {
  const location = useLocation();
  const isSavedNews = location.pathname === "/saved-news";

  const getKeywordText = () => {
    if (savedNewsKeywords.length === 0) {
      return "";
    }
    if (savedNewsKeywords.length === 1) {
      return `By keywords: ${savedNewsKeywords[0]}`;
    }
    if (savedNewsKeywords.length === 2) {
      return `By keywords: ${savedNewsKeywords[0]}, ${savedNewsKeywords[1]}`;
    }
    if (savedNewsKeywords.length > 2) {
      return `By keywords: ${savedNewsKeywords[0]}, ${
        savedNewsKeywords[1]
      }, and ${savedNewsKeywords.length - 2} other`;
    }
  };

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
      <h2 className="saved-articles__keywords">{getKeywordText()}</h2>
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
