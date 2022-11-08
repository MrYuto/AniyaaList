import { AnilistApiTypes } from '../api/types';
import { MediaInfo, NyaaCategory } from '../types';
import { ANILIST_SEARCH_BASE_URL, MEDIA_INFO_PATTERNS } from './constants';
export * from './nyaa-page-info';

export const cleanObjProps = <T extends {}, K extends keyof T>(object: T) => {
  let result = { ...object };

  (Object.keys(result) as K[]).forEach((key) => {
    const value = result[key];

    if (value === undefined || value === null) {
      delete result[key];
    }
  });

  return result as {
    [K in keyof T]?: Exclude<T[K], null>;
  };
};

export const getGenreUrl = (
  mediaType: AnilistApiTypes.MediaType,
  genre: string
) => {
  const type =
    mediaType === AnilistApiTypes.MediaType.Manga ? 'manga' : 'anime';

  return ANILIST_SEARCH_BASE_URL + `${type}/${genre}`;
};

const createMediaInfoParser = (
  username: string = 'default',
  items: (keyof MediaInfo)[] = ['year', 'title', 'season', 'episode']
) => {
  const parserPattern =
    MEDIA_INFO_PATTERNS[username] ?? MEDIA_INFO_PATTERNS.default;
  const parserSuperPattern = parserPattern.extends
    ? MEDIA_INFO_PATTERNS[parserPattern.extends]
    : null;

  return {
    parse: (title: string) => {
      const mediaInfo = {} as MediaInfo;

      items.forEach((item) => {
        let value = title;
        const itemPatterns = parserPattern[item].patterns;
        const superItemPatterns =
          parserSuperPattern && parserSuperPattern[item].patterns;

        const parseValue = (pattern: typeof itemPatterns[0]) => {
          if (pattern instanceof RegExp) {
            value = value.replace(pattern, '').trim();
          } else if (pattern.type === 'REPLACE') {
            value = value
              .replace(pattern.pattern, pattern.replace ?? '')
              .trim();
          } else if (pattern.type === 'MATCH') {
            value = value.match(pattern.pattern)?.[0].trim() ?? '';
          }
        };

        superItemPatterns?.forEach(parseValue);
        itemPatterns?.forEach(parseValue);

        // @ts-ignore
        mediaInfo[item] = value
          ? parserPattern[item].valueAsNumber
            ? parseInt(value)
            : value
          : null;
      });

      return mediaInfo;
    },
  };
};

export const parseMediaInfoFromNyaaTitle = (
  title: string,
  username?: string
) => {
  return createMediaInfoParser(username).parse(title);
};

export const getMediaTypeFromCategory = (category: NyaaCategory) => {
  let type: AnilistApiTypes.MediaType | null = null;

  switch (category) {
    case NyaaCategory.Anime:
      type = AnilistApiTypes.MediaType.Anime;
      break;
    case NyaaCategory.Literature:
      type = AnilistApiTypes.MediaType.Manga;
      break;
    default:
      break;
  }

  return type;
};
