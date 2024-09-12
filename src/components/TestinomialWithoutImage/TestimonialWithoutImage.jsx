import React from 'react';
import './TestimonialWithoutImage.css';

function TestimonialWithoutImage({ imageSrc, testimonial, name, position }) {
  return (
    <div className='Testimonial'>
      <img src={imageSrc} alt='logo' />
      <p className="quote1">“{testimonial}”</p>
      <p>
        <span className="author1">{name} /</span>
        <span className="position1">{position}</span>
      </p>
    </div>
  );
}

export default TestimonialWithoutImage;