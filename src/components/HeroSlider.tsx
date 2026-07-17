'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

export default function HeroSlider() {
  const t = useTranslations('hero');
  // Need to safely parse the slider array from translations
  // next-intl supports arrays but requires mapping
  // Actually, we can get raw array or object
  // For simplicity, we'll hardcode or use the keys if we know them
  
  const words = [
    t('slider.0', { default: 'Nhận diện thương hiệu' }),
    t('slider.1', { default: 'Thiết kế chữ' }),
    t('slider.2', { default: 'Key Visual' })
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  const setSliderIndex = (idx: number) => {
    setOpacity(0);
    setTimeout(() => {
      setCurrentIndex(idx);
      setOpacity(1);
    }, 300);
  };

  const nextWord = () => setSliderIndex((currentIndex + 1) % words.length);
  const prevWord = () => setSliderIndex((currentIndex - 1 + words.length) % words.length);

  useEffect(() => {
    const interval = setInterval(nextWord, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, words.length]);

  return (
    <>
      <div className="hero-slider-container">
        <button className="slider-btn slider-prev" onClick={prevWord} aria-label="Previous">&larr;</button>
        <div className="slider-text-wrapper">
          <h1 className="hero-slider-text tight-text" style={{ opacity }}>
            {words[currentIndex]}
          </h1>
        </div>
        <button className="slider-btn slider-next" onClick={nextWord} aria-label="Next">&rarr;</button>
      </div>
      <div className="slider-dots">
        {words.map((_, idx) => (
          <button
            key={idx}
            className={`slider-dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => setSliderIndex(idx)}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </>
  );
}
