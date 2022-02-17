import { Link } from "react-router-dom";

export default function ExperienceCard({ id, img, title, location }) {
  console.log(ExperienceCard)
  return (
    <div className="card card-block">
      <figure className="position-relative">
          <img src={img} alt=""/>
          <div className="card-featured position-absolute bottom-0">
            <figcaption>{title}</figcaption>
            <figcaption>{location}</figcaption>
            <Link to={`/experience/${id}`}>
              <button className="btn btn-primary">Ver mas</button>
          </Link>
          </div>
      </figure>
    </div>
  );
}
