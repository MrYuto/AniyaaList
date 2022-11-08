import clsx from 'clsx';
import { useEffect, useMemo, useState } from 'preact/hooks';
import DotLoader from 'react-spinners/DotLoader';
import { getMediaTypeFromCategory, parseMediaInfoFromNyaaTitle } from './utils';
import { HIDE_TIMEOUT_ON_ERROR } from './utils/constants';
import { NyaaPageInfo } from './types';
import useAnilistMedia from './hooks/useAnilistMedia';
import Media from './components/Media';
import './app.scss';

interface AppProps {
  pageInfo: NyaaPageInfo;
}

export function App({ pageInfo }: AppProps) {
  const { category, title } = pageInfo;

  const { mediaInfo, hasType, type } = useMemo(() => {
    const mediaInfo = parseMediaInfoFromNyaaTitle(pageInfo.title);
    const type = getMediaTypeFromCategory(category);
    const hasType = !!type;

    if (!hasType) console.info(`${category} Category is not supported.`);

    return { mediaInfo, hasType, type };
  }, [category, title]);

  const { media, loading, error, cancel } = useAnilistMedia({
    type,
    ...mediaInfo,
  });

  const [show, setShow] = useState(hasType);

  useEffect(() => {
    if (!hasType) {
      cancel();
    }
  }, [hasType]);

  useEffect(() => {
    if (!error || !show) return;

    let timeoutId = setTimeout(() => {
      setShow(false);
    }, HIDE_TIMEOUT_ON_ERROR);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [error, show]);

  if (!show) return null;

  return (
    <article
      className={clsx(
        'AnilistWidget',
        loading && 'AnilistWidget--loading',
        !!error && 'AnilistWidget--error'
      )}
    >
      {loading && <DotLoader color="#1c6ce3" size={32} />}
      {error && 'Oops! Something Went Wrong'}
      {media && <Media type={type!} {...media} />}
    </article>
  );
}
