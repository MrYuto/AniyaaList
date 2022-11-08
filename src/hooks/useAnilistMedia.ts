import { useCallback, useEffect, useState } from 'preact/hooks';
import { client } from '../api';
import { MEDIA_SEARCH_QUERY } from '../api/queries';
import { AnilistApiTypes, MediaSearchQueryResult } from '../api/types';
import { cleanObjProps } from '../utils';

export type AnilistMedia = MediaSearchQueryResult['Media'];

interface MediaDetails {
  type?: AnilistApiTypes.MediaType | null;
  title?: string | null;
  year?: number | null;
  id?: number | null;
}

const abController: AbortController = new AbortController();

const useAnilistMedia = (details?: MediaDetails | (() => MediaDetails)) => {
  const [mediaDetails, setMediaDetails] = useState(details);
  const [media, setMedia] = useState<AnilistMedia | null>(null);
  const [error, setError] = useState<unknown | null>(null);
  const [loading, setLoading] = useState(false);

  const { id, type, year, title } = mediaDetails ?? {};

  useEffect(() => {
    (async () => {
      try {
        setError(null);
        setLoading(true);

        if (!title) throw new Error('NO_MEDIA_NAME');

        const variables = cleanObjProps({
          search: title,
          seasonYear: year,
          type,
        });

        // @ts-ignore
        const { Media } = await client.request<MediaSearchQueryResult>({
          document: MEDIA_SEARCH_QUERY,
          signal: abController.signal,
          variables,
        });

        setMedia(Media);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [id, type, year, title]);

  const updateMedia = useCallback((details: MediaDetails) => {
    setMediaDetails((mediaDetails) => {
      return { ...mediaDetails, ...details };
    });
  }, []);

  const cancel = useCallback(() => {
    abController.abort();
  }, []);

  return {
    media,
    error,
    loading,
    cancel,
    updateMedia,
  };
};

export default useAnilistMedia;
