import React from "react";
import PropTypes from "prop-types";
//import './card.css'

function ExperienceDetail({ imageSource, title, description, price, name }) {
  return (
    <div className="card text-center animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={imageSource} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h3 className="card-title text-center text-dark">{title}</h3>
        <h4 className="card-title text-dark">$ {price} </h4>
        <p className="card-text text-secondary">{name}</p>
        <p className="card-text text-secondary">{description}</p>
        <a
          href="#/"
          target="_blank"
          className="btn btn-outline-secondary border-1"
          rel="noreferrer"
        >
          Ver más
        </a>
      </div>
    </div>
  );
}

ExperienceDetail.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  text: PropTypes.string,
  imageSource: PropTypes.string,
};

export default ExperienceDetail;
