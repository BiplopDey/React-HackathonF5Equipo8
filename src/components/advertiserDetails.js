import React from "react";
//import './card.css'

function AdvertiserDetails({ img, name, assessment }) {
  return (
    <div className="card text-center animate__animated animate__fadeInUp">
      <div className="card-body text-light">
        <img src={img} alt="bla bla bla"/>
        <h3 className="card-title text-center text-dark">{name}</h3>
        <h4 className="card-title text-dark"> {assessment} </h4>
        <h1>Hola soy tu guia </h1>
      </div>
    </div>
  );
}

export default AdvertiserDetails;
