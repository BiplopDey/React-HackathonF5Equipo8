export default function advertiserCard({ id, img, title }) {
  return (
    <div className="card card-block">
      <figure className="position-relative">
          <img src={img} alt=""/>
          <div className="card-featured position-absolute bottom-0">
            <figcaption>Titulo</figcaption>
            <button className="btn btn-primary">Ver más</button>
          </div>
      </figure>
    </div>
  );
}