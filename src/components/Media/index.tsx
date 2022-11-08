import { useState } from 'preact/hooks';
import { BODY_TEXT_THREE_LINE_TEXT_LENGTH } from '../../utils/constants';
import { AnilistApiTypes } from '../../api/types';
import { AnilistMedia } from '../../hooks/useAnilistMedia';
import YoutubeVideoModal from '../YoutubeVideoModal';
import MediaDescription from '../MediaDescription';
import MediaCoverImage from '../MediaCoverImage';
import MediaDetails from '../MediaDetails';
import MediaGenres from '../MediaGenres';
import './style.scss';

type MediaProps = {
  [K in keyof AnilistMedia]: AnilistMedia[K];
} & { type: AnilistApiTypes.MediaType };

const Media = (props: MediaProps) => {
  const {
    type,
    title,
    format,
    genres,
    source,
    studios,
    trailer,
    duration,
    episodes,
    startDate,
    coverImage,
    popularity,
    bannerImage,
    description,
    averageScore,
  } = props;

  const hasTrailer = trailer && trailer.site === 'youtube';
  const [showTrailer, setShowTrailer] = useState(false);

  return (
    <div className="Media">
      {hasTrailer && (
        <YoutubeVideoModal
          show={showTrailer}
          videoId={trailer.id}
          onClose={() => setShowTrailer(false)}
        />
      )}
      {bannerImage && (
        <div
          className="Media__background-image"
          style={{
            backgroundImage: `url('${bannerImage}')`,
          }}
        ></div>
      )}
      <div className="Media__cover-image">
        <MediaCoverImage
          src={coverImage.large}
          alt={title.romaji + ' Cover'}
          stats={{ score: averageScore, popularity }}
          hasTrailer={hasTrailer}
          onPlayTrailer={() => setShowTrailer(true)}
        />
      </div>
      <div className="Media__content">
        <header className="Media__header">
          <h3 className="Media__title">{title.romaji}</h3>
          <MediaDetails
            format={format}
            source={source}
            episodes={episodes}
            duration={duration}
            startDate={startDate}
            studioName={studios.nodes[0]?.name}
          />
        </header>
        <section className="Media__main">
          <MediaDescription
            showOverlay={
              !bannerImage &&
              description.length > BODY_TEXT_THREE_LINE_TEXT_LENGTH
            }
          >
            {description}
          </MediaDescription>
          <MediaGenres genres={genres} mediaType={type} />
        </section>
      </div>
    </div>
  );
};

export default Media;
