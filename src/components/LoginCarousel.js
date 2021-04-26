import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import bird1 from '../assets/images/semnornisramphastinus1.jpg';
import bird2 from '../assets/images/ixothraupis-guttata2.jpg';
import bird3 from '../assets/images/clarinero3.jpg';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: bird1,
    altText: 'Semnornis ramphastinus',
    caption: 'Juan Jose Arango'
  },
  {
    src: bird2,
    altText: 'Ixothraupis Guttata',
    caption: 'Luis Agudelo'
  },
  {
    src: bird3,
    altText: 'Clarinero',
    caption: 'Carlos Guevara Diaz'
  }
];

const LoginCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default LoginCarousel;