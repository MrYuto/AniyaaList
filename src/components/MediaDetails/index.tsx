import { AnilistApiTypes } from '../../api/types';
import './style.scss';

interface MediaDetailsProps {
  source?: AnilistApiTypes.MediaSource;
  format: AnilistApiTypes.MediaFormat;
  episodes?: number;
  duration?: number;
  studioName?: string;
  startDate: {
    year: number;
    month: number;
    day: number;
  };
}

const dateFormatter = Intl.DateTimeFormat('en-US', {
  dateStyle: 'medium',
});

const MediaDetails = (props: MediaDetailsProps) => {
  const { studioName, startDate, format, source, episodes, duration } = props;

  return (
    <section className="MediaDetails">
      <div className="MediaDetails__row">
        {studioName && (
          <span className="MediaDetails__item" title="Studio">
            {studioName.toUpperCase()}
          </span>
        )}
        <span className="MediaDetails__item" title="Start date">
          {dateFormatter.format(
            Date.UTC(startDate.year, startDate.month, startDate.day)
          )}
        </span>
      </div>
      <div className="MediaDetails__row">
        <span className="MediaDetails__item" title="Format">
          {format.replace('_', ' ')}
        </span>
        {source && (
          <span className="MediaDetails__item" title="Source">
            {source.replace('_', ' ')}
          </span>
        )}
        {format !== AnilistApiTypes.MediaFormat.Movie && episodes && (
          <span className="MediaDetails__item">
            {episodes + ` ${episodes > 1 ? 'EPs' : 'EP'}`}
          </span>
        )}
        {duration && (
          <span className="MediaDetails__item" title="Duration">
            {duration}M
          </span>
        )}
      </div>
    </section>
  );
};

export default MediaDetails;
