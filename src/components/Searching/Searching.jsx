import { useLocation } from "react-router-dom";
import { useState } from "react";
import "./Searching.css";

function Searching({ handleSearch }) {
  const [query, setQuery] = useState("");
  const location = useLocation();
  if (location.pathname === "/saved-news") {
    return null;
  }

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(query);
  };

  return (
    <section className="searching">
      <div className="searching__container">
        <h1 className="searching__header">Whats going on in the world? </h1>
        <p className="searching__search-explain">
          Find the latest news on any topic and save them in your personal
          account
        </p>
        <div className="searching__search-bar-container">
          <form onSubmit={handleSubmit} className="searching__search-bar">
            <input
              type="search-bar"
              className="searching__search-input"
              id="search-bar"
              placeholder="   Search "
              autoComplete="search"
              onChange={handleQueryChange}
              value={query}
            />
            <button type="submit" className="searching__search-button">
              {" "}
              Search
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
export default Searching;
