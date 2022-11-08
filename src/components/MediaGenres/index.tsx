import { getGenreUrl } from '../../utils';
import { AnilistApiTypes } from '../../api/types';
import './style.scss';

interface MediaGenresProps {
  genres: string[];
  mediaType: AnilistApiTypes.MediaType;
}

const MediaGenres = (props: MediaGenresProps) => {
  const { mediaType, genres } = props;

  return (
    <ul className="MediaGenres">
      {genres.map((genre) => (
        <li className="MediaGenres__item">
          <a
            className="MediaGenres__link"
            rel="noopener noreferrer"
            target="_blank"
            href={getGenreUrl(mediaType, genre)}
          >
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MediaGenres;
