import { YOUTUBE_EMBED_BASE_URL } from '../../utils/constants';
import Modal from '../Modal';
import './style.scss';

interface YoutubeVideoModalProps {
  show?: boolean;
  videoId: string;
  onClose?: () => void;
}

const YoutubeVideoModal = (props: YoutubeVideoModalProps) => {
  const { videoId, onClose, show = false } = props;

  return (
    <Modal show={show} onClose={onClose}>
      <div className="YoutubeVideoModal">
        <iframe
          id="aniyaa-list-youtube-iframe"
          className="YoutubeVideoModal__iframe"
          src={YOUTUBE_EMBED_BASE_URL + videoId}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </Modal>
  );
};

export default YoutubeVideoModal;
