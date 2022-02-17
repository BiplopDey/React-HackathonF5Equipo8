import React from 'react';
import ExperienceDetail from './experienceDetail'
import img1 from '../Assets/img/img1.jpg'
/* import img2 from '../Assets/img/img2.jpg'
import img3 from '../Assets/img/img3.jpg' */


const cards = [
  {
    id: 1,
    title: 'Paseo por Bogotá',
    name: 'Fernanda Moya',
    price: 50,
    description: 'Is simplemente el texto de relleno de las  imprentas y archivos de texto.',
    category: 'Runing',
    rating: 100,
    image: img1
  },
/*   {
    id: 1,
    title: 'Paseo por Asturias',
    name: 'Fernanda Moya',
    price: 50,
    description: 'Is simplemente el texto de relleno de las  imprentas y archivos de texto.',
    category: 'Runing',
    rating: 100,
    image: img2
  },
  {
    id: 1,
    title: 'Paseo por Barcelona',
    name: 'Fernanda Moya',
    price: 50,
    description: 'Is simplemente el texto de relleno de las  imprentas y archivos de texto.',
    category: 'Runing',
    rating: 100,
    image: img3
  } */
]





function ExperienceDetails() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, id, name, description, price, category, rating }) => (
          <div className="col-md-4" key={id}>
            <ExperienceDetail 
            imageSource={image}
            description={description}
            name={name} 
            title={title}
            price={price}
            category={category}
            rating={rating}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperienceDetails;