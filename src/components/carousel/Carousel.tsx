import React, { useState } from 'react';
import { RiArrowLeftCircleLine, RiArrowRightCircleLine } from '@remixicon/react';
import {
  ArrowButton,
  CarouselWrapper,
  Slide,
  SlidesContainer,
} from '@/components/carousel/Carousel.styles.ts';
import { useInfiniteSlides } from '@/hooks/useInfiniteSlides.ts';
import CardSite from '@/components/cardSite/CardSite.tsx';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { slides, loading, loadMore } = useInfiniteSlides();
  const totalSlides = slides.length;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const nextSlide = async () => {
    if (currentIndex === totalSlides - 1) {
      const results = await loadMore();
      results ? setCurrentIndex((prev) => (prev === results - 1 ? results - 1 : prev + 1)) : null;
    } else {
      setCurrentIndex((prev) => (prev === totalSlides - 1 ? totalSlides - 1 : prev + 1));
    }
  };

  return (
    <CarouselWrapper>
      {loading ? 'Loading' : ''}
      <SlidesContainer $currentIndex={currentIndex}>
        {slides.map((slide, index) => (
          <Slide key={index}>
            <CardSite {...slide} />
          </Slide>
        ))}
      </SlidesContainer>
      {currentIndex > 0 && (
        <ArrowButton $left onClick={prevSlide}>
          <RiArrowLeftCircleLine size='32' />
        </ArrowButton>
      )}
      {currentIndex < totalSlides && (
        <ArrowButton onClick={nextSlide}>
          <RiArrowRightCircleLine size='32' />
        </ArrowButton>
      )}
    </CarouselWrapper>
  );
};

export default Carousel;
