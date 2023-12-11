import React, { useEffect } from 'react'
import SimpleSlider from '../../components/Carousel'

function Home() {
  const slides = [
    <img key={1} src="/images/01_bullets.jpg" alt="Slide 1" />,
    <img key={2} src="/images/02_bullets.jpg" alt="Slide 2" />,
    <img key={3} src="/images/03_bullets.jpg" alt="Slide 3" />,
  ];

  return (
    <div>
      <SimpleSlider slides={slides} />
    </div>
  );
}

export default Home;
