

export default function advertiserCard({ id, img, name, assessment }) {
  return (
    <div className="card card-block">
      <figure className="position-relative">
          <img src={img} alt=""/>
          <div className="card-featured position-absolute bottom-0">
            <figcaption>
                <h3>{name}</h3>
                <p>{assessment}</p>
              </figcaption>
            <button className="btn btn-primary">Ver más</button>
          </div>
      </figure>
    </div>
  );
}