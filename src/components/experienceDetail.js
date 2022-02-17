import React from "react";
import PropTypes from "prop-types";
import "../styles/components/ExperienceDetailStyle.css";

function ExperienceDetail({ imageSource, title, description, price, name }) {
  return (
    <div className="exp-detail text-center">
      <figure className="">
        <img src={imageSource} alt="a wallpaper" className="" />
      </figure>
      <div className="">
        <h3 className="">{title}</h3>
        <h4 className="">{price} </h4>
        <p className="">{description}</p>
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
