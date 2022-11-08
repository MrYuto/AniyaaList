import './style.scss';

const compactNumFormatter = Intl.NumberFormat('en', { notation: 'compact' });

interface MediaStatsProps {
  score?: number;
  popularity?: number;
}

const MediaStats = (props: MediaStatsProps) => {
  const { score, popularity } = props;

  return (
    <section className="MediaStats">
      <ul className="MediaStats__list">
        {score && (
          <li className="MediaStats__item" title="Score">
            <span className="MediaStats__item-icon">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.4389 10.7401C13.2446 10.9284 13.1554 11.2006 13.1996 11.4676L13.8664 15.1576C13.9226 15.4704 13.7906 15.7869 13.5289 15.9676C13.2724 16.1551 12.9311 16.1776 12.6514 16.0276L9.32963 14.2951C9.21413 14.2336 9.08588 14.2006 8.95463 14.1969H8.75138C8.68088 14.2074 8.61188 14.2299 8.54888 14.2644L5.22638 16.0051C5.06213 16.0876 4.87613 16.1169 4.69388 16.0876C4.24988 16.0036 3.95363 15.5806 4.02638 15.1344L4.69388 11.4444C4.73813 11.1751 4.64888 10.9014 4.45463 10.7101L1.74638 8.08512C1.51988 7.86537 1.44113 7.53537 1.54463 7.23762C1.64513 6.94062 1.90163 6.72387 2.21138 6.67512L5.93888 6.13437C6.22238 6.10512 6.47138 5.93262 6.59888 5.67762L8.24138 2.31012C8.28038 2.23512 8.33063 2.16612 8.39138 2.10762L8.45888 2.05512C8.49413 2.01612 8.53463 1.98387 8.57963 1.95762L8.66138 1.92762L8.78888 1.87512H9.10463C9.38663 1.90437 9.63488 2.07312 9.76463 2.32512L11.4289 5.67762C11.5489 5.92287 11.7821 6.09312 12.0514 6.13437L15.7789 6.67512C16.0939 6.72012 16.3571 6.93762 16.4614 7.23762C16.5596 7.53837 16.4749 7.86837 16.2439 8.08512L13.4389 10.7401Z"
                  fill="#DAC71B"
                />
              </svg>
            </span>
            {score + '%'}
          </li>
        )}
        {popularity && (
          <li className="MediaStats__item" title="Popularity">
            <span className="MediaStats__item-icon">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.20986 1.87536C6.68236 1.88973 7.13986 1.97223 7.58311 2.12298H7.62736C7.65736 2.13723 7.67986 2.15298 7.69486 2.16723C7.86061 2.22048 8.01736 2.28048 8.16736 2.36298L8.45236 2.49048C8.56486 2.55048 8.69986 2.66223 8.77486 2.70798C8.84986 2.75223 8.93236 2.79798 8.99986 2.84973C9.83311 2.21298 10.8449 1.86798 11.8874 1.87536C12.3606 1.87536 12.8331 1.94223 13.2824 2.09298C16.0506 2.99298 17.0481 6.03048 16.2149 8.68548C15.7424 10.0422 14.9699 11.2805 13.9581 12.2922C12.5099 13.6947 10.9206 14.9397 9.20986 16.0122L9.02236 16.1255L8.82736 16.0047C7.11061 14.9397 5.51236 13.6947 4.05061 12.2847C3.04561 11.273 2.27236 10.0422 1.79236 8.68548C0.94486 6.03048 1.94236 2.99298 4.74061 2.07723C4.95811 2.00223 5.18236 1.94973 5.40736 1.92048H5.49736C5.70811 1.88973 5.91736 1.87536 6.12736 1.87536H6.20986ZM12.8924 4.24548C12.5849 4.13973 12.2474 4.30548 12.1349 4.62048C12.0299 4.93548 12.1949 5.28048 12.5099 5.39223C12.9906 5.57223 13.3124 6.04548 13.3124 6.56973V6.59298C13.2981 6.76473 13.3499 6.93048 13.4549 7.05798C13.5599 7.18548 13.7174 7.25973 13.8824 7.27548C14.1899 7.26723 14.4524 7.02048 14.4749 6.70473V6.61548C14.4974 5.56473 13.8606 4.61298 12.8924 4.24548Z"
                  fill="#CD2828"
                />
              </svg>
            </span>
            {compactNumFormatter.format(popularity)}
          </li>
        )}
      </ul>
    </section>
  );
};

export default MediaStats;