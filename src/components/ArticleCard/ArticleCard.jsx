import { useLocation } from "react-router-dom";
import "../ArticleCard/ArticleCard.css";

function ArticleCard({
  handleSaveArticle,
  handleDeleteArticle,
  article,
  savedNews,
  isLoggedIn,
}) {
  const location = useLocation();

  const isSavedNewsRoute = location.pathname === "/saved-news";
  console.log(isSavedNewsRoute);

  const isSaved = savedNews.some((savedArticle) => {
    if (article.url === savedArticle.url) {
      return true;
    }
  });

  return (
    <div className="article-card">
      {isSavedNewsRoute ? (
        <div className="article-card__delete-container">
          <button
            className="article-card_delete-article__button"
            onClick={() => {
              handleDeleteArticle(article);
            }}
          />
          <p className="article-card_article-delete__tag">
            {" "}
            Remove from saved{" "}
          </p>
        </div>
      ) : (
        <div className="article-card__button-container">
          <button
            className={`article-card_save-article__button ${
              isSaved ? "article-card__saved" : ""
            }`}
            onClick={() => {
              handleSaveArticle(article);
            }}
          />
          {!isLoggedIn && (
            <p className="article-card_sign-in__button">
              Sign in to save articles{" "}
            </p>
          )}
        </div>
      )}

      <h2 className="article-card__name"></h2>
      <img src={article.urlToImage} className="article-card__image" />
      <div className="article__section">
        <p className="article__date">{article.publishedAt}</p>
        <p className="article__header">{article.title}</p>
        <p className="article__preview">{article.content}</p>
        <p className="article__name">{article.source.name}</p>
      </div>
    </div>
  );
}

export default ArticleCard;
