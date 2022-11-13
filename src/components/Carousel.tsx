import { useRef, useState } from "react";
import Thumbnail from "./Thumbnail";

interface ParsedImage {
  id: string;
  alt: string;
  src: string;
  dimensions: {
    width: number;
    height: number;
  }
}

export interface CarouselProps {
  step?: number;
  assets: ParsedImage[];
}

type ScrollStatus = 'start' | 'scrolling' | 'end';
type ScrollDirection = 'right' | 'left';

const Carousel = (props: CarouselProps) => {
  const {assets, step: SLIDER_STEP = 250} = props;
  const [currentCostume, setCurrentCostume] = useState(assets?.[0]);
  const [scrollStatus, setScrollStatus] = useState<ScrollStatus>('start');
  const lastThumbnailRef = useRef<HTMLDivElement>();

  const handleScrollLeft = () => {
    const scrollLeft = Math.max(0, lastThumbnailRef.current.scrollLeft - SLIDER_STEP);
    lastThumbnailRef.current.scrollLeft = scrollLeft;

    if(scrollLeft <= 0) {
      setScrollStatus('start');
    } else {
      setScrollStatus('scrolling');
    }
  };

  const handleScrollRight = () => {
    const scrollLeft = Math.min(
      lastThumbnailRef?.current?.scrollWidth - lastThumbnailRef?.current?.offsetWidth,
      lastThumbnailRef.current.scrollLeft + SLIDER_STEP
    );

    lastThumbnailRef.current.scrollLeft = scrollLeft;

    if(scrollLeft >= lastThumbnailRef?.current?.scrollWidth - lastThumbnailRef?.current?.offsetWidth) {
      setScrollStatus('end');
    } else {
      setScrollStatus('scrolling');
    }
  };

  return (
    <div>
      <Thumbnail src={currentCostume.src} alt={currentCostume.alt} key={currentCostume.id} />
      <CarouselNavigation onClick={handleScrollLeft} scrollStatus={scrollStatus} direction="left" />
      <div ref={lastThumbnailRef}>
{assets.map((asset, i) => (
  <Thumbnail src={asset.src} alt={asset.alt} key={asset.id} onClick={() => setCurrentCostume(asset)} />
))}
      </div>
      <CarouselNavigation onClick={handleScrollRight} scrollStatus={scrollStatus} direction="right" />
    </div>
  )
}

interface CarouselNavigationProps {
  scrollStatus: ScrollStatus;
  direction: ScrollDirection;
  onClick(): void;
}

const CarouselNavigation = (props: CarouselNavigationProps) => {
  const {direction, scrollStatus, onClick} = props;

  return (
    <div style={{position: "sticky", zIndex: "10", aspectRatio: "auto"}}
    onClick={onClick}
    />
  )
}
export default Carousel;