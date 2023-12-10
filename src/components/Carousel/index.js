// src/components/SimpleSlider.js
import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const SimpleSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      <div style={{ display: 'flex', transition: 'transform 0.5s', transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} style={{ flex: '0 0 100%', width: '100%' }}>
            {slide}
          </div>
        ))}
      </div>
      <IconButton onClick={prevSlide} style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)' }}>
        <NavigateBeforeIcon />
      </IconButton>
      <IconButton onClick={nextSlide} style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }}>
        <NavigateNextIcon />
      </IconButton>
    </div>
  );
};

export default SimpleSlider;
