import React from "react";
import PropTypes from "prop-types";
import "../styles/components/ExperienceDetailStyle.css";

function ExperienceDetail({ imageSource, title, description, price, name }) {
  return (
    <div className="exp-detail card text-center">
      <div className="overflow">
        <img src={imageSource} alt="a wallpaper" className="" />
      </div>
      <div className="card-body text-light">
        <h1 className="card-title text-center text-dark">{title}</h1>
        <h2 className="card-title text-dark">{price} </h2>
        <p className="card-text text-secondary">{name}</p>
        <p className="card-text text-secondary">{description}</p>
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
