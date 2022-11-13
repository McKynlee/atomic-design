import Image from 'next/future/image';
import { forwardRef } from 'react';

export interface ThumbnailProps {
  src: string;
  alt: string;
  onClick?(): void;
}

const Thumbnail: React.FC<ThumbnailProps> = forwardRef<HTMLDivElement, ThumbnailProps>(
  (props, ref) => {
  const {src, alt, onClick} = props;

  return(
    <div style={{ position: "relative", scrollSnapAlign: "center"}} ref={ref}
    onClick={onClick}
    >
      <Image fill src={src} alt={alt}/>
    </div>
  )
})

Thumbnail.displayName = 'Thumbnail';

export default Thumbnail;