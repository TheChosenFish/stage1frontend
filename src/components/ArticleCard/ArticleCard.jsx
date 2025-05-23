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

  const date = new Date(article.publishedAt);

  const publishedDate = date.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

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
            className="article-card__delete-article-button"
            onClick={() => {
              handleDeleteArticle(article);
            }}
          />
          <button className="article-card__keyword">{article.keyword}</button>
          <p className="article-card__article-delete-tag">
            {" "}
            Remove from saved{" "}
          </p>
        </div>
      ) : (
        <div className="article-card__button-container">
          <button
            className={`article-card__save-article-button ${
              isSaved ? "article-card__saved" : ""
            }`}
            onClick={() => {
              handleSaveArticle(article);
            }}
          />
          {!isLoggedIn && (
            <p className="article-card__sign-in-button">
              Sign in to save articles{" "}
            </p>
          )}
        </div>
      )}

      <h1 className="article-card__name"></h1>
      <img src={article.urlToImage} className="article-card__image" />
      <div className="article__section">
        <p className="article__date">{publishedDate}</p>
        <h2 className="article__header">{article.title}</h2>
        <p className="article__preview">{article.content}</p>
        <p className="article__name">{article.source.name}</p>
      </div>
    </div>
  );
}

export default ArticleCard;
