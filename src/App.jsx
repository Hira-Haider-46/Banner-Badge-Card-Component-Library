import React from 'react';
import BadgeContainer from './components/BadgeContainer';
import BannerContainer from './components/BannerContainer';
import Card from './components/Card';
import TestimonialWithImage from './components/TestimonialWithImage';
import TestimonialWithoutImage from './components/TestinomialWithoutImage';
import personImg from './assets/person-img.png';
import comasImg from './assets/comas.png';
import logo from './assets/logo.png';
import './App.css';

const badgesData1 = [
  { color: '#1F2937', bgColor: '#F3F4F6', borderRadius: '4px' },
  { color: '#991B1B', bgColor: '#FEE2E2', borderRadius: '4px' },
  { color: '#92400E', bgColor: '#FEF3C7', borderRadius: '4px' },
  { color: '#065F46', bgColor: '#D1FAE5', borderRadius: '4px' },
  { color: '#1E40AF', bgColor: '#DBEAFE', borderRadius: '4px' },
  { color: '#3730A3', bgColor: '#E0E7FF', borderRadius: '4px' },
  { color: '#5B21B6', bgColor: '#EDE9FE', borderRadius: '4px' },
  { color: '#9D174D', bgColor: '#FCE7F3', borderRadius: '4px' }
];

const badgesData2 = [
  { color: '#1F2937', bgColor: '#F3F4F6', borderRadius: '12px' },
  { color: '#991B1B', bgColor: '#FEE2E2', borderRadius: '12px' },
  { color: '#92400E', bgColor: '#FEF3C7', borderRadius: '12px' },
  { color: '#065F46', bgColor: '#D1FAE5', borderRadius: '12px' },
  { color: '#1E40AF', bgColor: '#DBEAFE', borderRadius: '12px' },
  { color: '#3730A3', bgColor: '#E0E7FF', borderRadius: '12px' },
  { color: '#5B21B6', bgColor: '#EDE9FE', borderRadius: '12px' },
  { color: '#9D174D', bgColor: '#FCE7F3', borderRadius: '12px' }
];

function App() {
  return (
    <>
      <BadgeContainer badges={badgesData1} />
      <BadgeContainer badges={badgesData2} />
      <BannerContainer />
      <Card
        title="Easy Deployment"
        description="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."
      />
      <TestimonialWithImage
        imageSrc={personImg}
        comasImg={comasImg}
        testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit."
        name="May Andersons"
        position="Workcation, CTO"
      />
      <TestimonialWithoutImage
        imageSrc={logo}
        testimonial="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis."
        name="May Andersons"
        position="Workcation, CTO"
      />
    </>
  );
}

export default App;