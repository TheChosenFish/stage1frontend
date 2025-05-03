import "../NoResults/NoResults.css";
import NoResultsImg from "../../assets/not-found_v1.svg";

function NoResults() {
  return (
    <section className="no-results__container">
      <img src={NoResultsImg} className="no-results__img" />
      <h1 className="no-results__header">Nothing Found</h1>
      <h2 className="no-results__text">
        Sorry, but nothing matched your search terms
      </h2>
    </section>
  );
}

export default NoResults;
