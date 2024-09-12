import React from 'react';
import './TestimonialWithImage.css';

function TestimonialWithImage({ imageSrc, testimonial, name, position, comasImg }) {
  return (
    <div className='testimonial'>
      <div className="img">
        <img src={imageSrc} alt='person-img' />
      </div>
      <div className="para">
        <img src={comasImg} alt='coma-img' />
        <p className="quote">“{testimonial}”</p>
        <p className="author">{name}</p>
        <p className="position">{position}</p>
      </div>
    </div>
  );
}

export default TestimonialWithImage;