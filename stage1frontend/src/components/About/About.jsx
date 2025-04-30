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
        <p className="about__author-para">
          {" "}
          Michael Bostick is a junior level full stack engineer with a
          background in audio sciences. While familiar with development
          technologies such as Javascript, React, and Express, Michael Remains
          eager to learn more and build his skill set. While at triple ten
          Michael learned techniques that helped problem solve errors in code,
          write complex and specific code for components, and build entire
          websites like this one! Michael can aid companies with front and
          backend code.
        </p>
      </div>
    </section>
  );
}
export default About;
