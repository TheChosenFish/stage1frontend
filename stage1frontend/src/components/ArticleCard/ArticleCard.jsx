import "../ArticleCard/ArticleCard.css";

function ArticleCard({}) {
  return (
    <div className="article-card">
      <button className="save-article__button" />
      <h2 className="article-card__name">Article Name</h2>
      <img className="article-card__image" />
      <div className="article__section">
        <p className="article__date">November 4, 2010</p>
        <p className="article__header">
          {" "}
          Everyone needs a special 'sit spot' in nature
        </p>
        <p className="article__preview">
          Ever since I read Richards Louv's influential book, "Last Child in the
          woods", the idea of having a special "sit spot" has stuck with me.
          this advice which Louv attributes to nature educator Jon Young, is for
          both adults and children to find
        </p>
      </div>
    </div>
  );
}

export default ArticleCard;
