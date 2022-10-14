import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem
} from 'reactstrap';
import Image1 from '../../app/assets/The Punishment of Narcissus Entry.jpg';

const items = [
  {
    src: Image1,
    key: 1,
  },
  {
    src: 'src/app/assets/The Black Egg.jpeg',
    key: 2,
  },
  {
    src: 'src/app/assets/Sleep 5 entry.jpg',
    key: 3,
  },
];

function HomeCarousel(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      {slides}
    </Carousel>
  );
}

export default HomeCarousel;