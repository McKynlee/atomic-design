import { ArrowLeft, ArrowRight } from '@carbon/icons-react';
import {ImageProps} from 'next/image';
import React, {PropsWithChildren} from 'react';
import { CarouselProvider, useCarouselContext } from './CarouselProvider';
import { useSwipeable } from 'react-swipeable';

export const CostumeCarousel = (props: PropsWithChildren<{}>) => {
return (
  <CarouselProvider>
    <div>
      {props.children}
      <CarouselSectionRenderer />
      <CarouselControls />
    </div>
  </CarouselProvider>
)
}

const CarouselSectionRenderer = () => {
  const { selected, count, next, previous, sections } = useCarouselContext();

  const handlers = useSwipeable({
    onSwipedRight: previous,
    onSwipedLeft: next,
  })

  return (
    <div {...handlers}>
      {Array.from(sections.values()).map((section, i) => (
        <div key={i} style={{ display: selected === i ? "" : "none"}}>
          {section}
        </div>
      ))}
    </div>
  )
}

const CarouselSection = (props: PropsWithChildren<{ order: number}>) => {
  const { addSection } = useCarouselContext();
  addSection(props.order, props.children)

  return null;
}

CostumeCarousel.Section = CarouselSection;

const CarouselControls = () => {
  const { select, selected, count, next, previous} = useCarouselContext();
  const formatter = new Intl.NumberFormat('en-US', {minimumIntegerDigits: 2});

  return (
    <div>
      <div style={{display: "grid", gridAutoFlow: "column", gap: "12px" }}>
        {Array(count()).fill('').map((_, i) => (
          <div key={i}
          style={{ backgroundColor: "whitesmoke"}}
          />
        ))}
      </div>
      <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <button onClick={previous} aria-label="Previous costume">
            <ArrowLeft />
          </button>
          <div>
            <h2>{`${formatter.format(selected + 1)} / ${formatter.format(count())}`}</h2>
          </div>
          <button onClick={next} aria-label="Next costume">
            <ArrowRight />
          </button>
      </div>
    </div>
  )
}