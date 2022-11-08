import clsx from 'clsx';
import React from 'preact/compat';
import { useState } from 'preact/hooks';
import MediaCoverImagePlayTrailerOverlay from '../MediaCoverImagePlayTrailerOverlay';
import MediaStats from '../MediaStats';
import './style.scss';

interface MediaCoverImageProps {
  src: string;
  alt: string;
  stats: React.ComponentProps<typeof MediaStats>;
  hasTrailer?: boolean;
  onPlayTrailer?: () => void;
}

const MediaCoverImage = (props: MediaCoverImageProps) => {
  const { src, stats, onPlayTrailer, alt, hasTrailer = false } = props;

  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div
      className="MediaCoverImage"
      onMouseEnter={() => setShowOverlay(true)}
      onMouseLeave={() => setShowOverlay(false)}
    >
      <figure className="MediaCoverImage__image-wrapper">
        <img class="MediaCoverImage__image" src={src} alt={alt} />
      </figure>
      {hasTrailer && (
        <div className="MediaCoverImage__play-trailer-overlay">
          <MediaCoverImagePlayTrailerOverlay
            show={showOverlay}
            onPlay={onPlayTrailer}
          />
        </div>
      )}
      <div
        className={clsx(
          'MediaCoverImage__media-stats',
          hasTrailer && showOverlay && 'MediaCoverImage__media-stats--hide'
        )}
      >
        <MediaStats {...stats} />
      </div>
    </div>
  );
};

export default MediaCoverImage;
