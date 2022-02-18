import { Link } from "react-router-dom";

export default function AdvertiserCard({ id, img, name, assessments }) {
  console.log(AdvertiserCard)
  return (
    <div className="card card-block">
      <figure className="position-relative">
          <img src={img} alt=""/>
          <div className="card-featured position-absolute bottom-0">
            <figcaption>
                {name}
              </figcaption>
              <figcaption>
                {assessments}
              </figcaption>
              <Link to={`/advertiser/${id}`}>
            <button className="btn btn-primary">Ver más</button>
            </Link>
          </div>
      </figure>
    </div>
  );
}