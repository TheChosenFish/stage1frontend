import { useLocation } from "react-router-dom";
import Results from "../Results/Results";
import "./Searching.css";

function Searching({ handleSearch }) {
  const location = useLocation();
  if (location.pathname === "/saved-news") {
    return null;
  }
  return (
    <section className="searching__container">
      <h1 className="searching__header">Whats going on in the world? </h1>
      <p className="search__explain">
        Find the latest news on any topic and save them in your personal account
      </p>
      <div className="search__bar">
        <input
          type="search-bar"
          className="search__input"
          id="search-bar"
          placeholder="   Search "
          autoComplete="search"
        />
        <button className="search__button" onClick={handleSearch}>
          {" "}
          Search
        </button>
      </div>
    </section>
  );
}
export default Searching;
