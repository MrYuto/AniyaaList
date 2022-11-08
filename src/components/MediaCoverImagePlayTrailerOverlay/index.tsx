import clsx from 'clsx';
import './style.scss';

interface MediaCoverImagePlayTrailerOverlayProps {
  show?: boolean;
  onPlay?: () => void;
}

const MediaCoverImagePlayTrailerOverlay = (
  props: MediaCoverImagePlayTrailerOverlayProps
) => {
  const { show = false, onPlay } = props;

  return (
    <div
      className={clsx(
        'MediaCoverImagePlayTrailerOverlay',
        show && 'MediaCoverImagePlayTrailerOverlay--show'
      )}
      onClick={onPlay}
    >
      <div className="MediaCoverImagePlayTrailerOverlay__icon">
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32 5.33337C46.6976 5.33337 58.6667 17.2967 58.6667 32.0155C58.6667 46.7034 46.6976 58.6667 32 58.6667C17.3025 58.6667 5.33334 46.7034 5.33334 32.0155C5.33334 17.2967 17.3025 5.33337 32 5.33337ZM28.9627 21.4131C28.3964 21.4131 27.8559 21.5418 27.3411 21.799C26.6976 22.1592 26.1828 22.7252 25.8996 23.3942C25.7194 23.8573 25.4363 25.2465 25.4363 25.2723C25.1532 26.7902 24.9987 29.2601 24.9987 31.9872C24.9987 34.5882 25.1532 36.9526 25.3848 38.4963C25.4106 38.522 25.6937 40.2457 26.0026 40.8375C26.5689 41.918 27.6757 42.587 28.8597 42.587H28.9627C29.7349 42.5612 31.3565 41.8923 31.3565 41.8666C34.085 40.7346 39.4646 37.2099 41.6268 34.8687L41.7812 34.7143C42.0644 34.4313 42.4247 33.9939 42.5019 33.891C42.9138 33.3507 43.1197 32.6818 43.1197 32.0155C43.1197 31.2668 42.888 30.5722 42.4505 30.0062C42.3475 29.9032 41.9614 29.4659 41.601 29.1057C39.4904 26.8417 33.982 23.1369 31.0991 22.0049C30.6615 21.8273 29.5547 21.4389 28.9627 21.4131Z"
            fill="#1C6CE3"
          />
        </svg>
      </div>
    </div>
  );
};

export default MediaCoverImagePlayTrailerOverlay;
