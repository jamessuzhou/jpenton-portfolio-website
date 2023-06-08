import Title from "./Title";
import { featuredTours } from "../data";

const Portfolio = () => {
  return (
    <section className="section" id="tours">
      <Title firstWord="Featured" secondWord="Projects" />

      <div className="section-center featured-center">
        {featuredTours.map((tour) => {
          const { id, image, icon, title, text, link, github } = tour;

          return (
            <article className="tour-card" key={id}>
              <a href={link} target="_blank" rel="noreferrer">
                <div className="tour-img-container">
                  <img src={image} className="tour-img" alt={title} />
                  <i className="tour-date">{icon}</i>
                </div>
                <div className="tour-info">
                  <div className="tour-title">
                    <h4>{title}</h4>
                  </div>
                  <div className="tour-desc">
                    <p>{text}</p>
                  </div>
                </div>
                <div className="tour-footer">
                  <a href={link} target="_blank" rel="noreferrer">
                    Link
                  </a>
                  <a href={github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </div>
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Portfolio;
