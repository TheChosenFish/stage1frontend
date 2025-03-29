import "../About/About.css";
import AboutImage from "../../assets/IMG_6422.png";

function About({}) {
  return (
    <section className="about__section">
      <img
        className="about__image"
        alt="about author avatar"
        src={AboutImage}
      ></img>
      <div className="about__author-section">
        <h1 className="about__author-header">About the Author</h1>
        <p className="about__author-para"> stuff about author</p>
      </div>
    </section>
  );
}
export default About;
