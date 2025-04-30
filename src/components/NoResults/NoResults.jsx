import "../NoResults/NoResults.css";

function NoResults() {
  return (
    <section className="no-results__container">
      <img src="../../" className="no-results__img" />
      <h1 className="no-results__header">Nothing Found</h1>
      <h2 className="no-results__text">
        Sorry, but nothing matched your search terms
      </h2>
    </section>
  );
}

export default NoResults;
