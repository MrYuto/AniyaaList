import { MediaInfoParserPatterns } from '../types';

export const HIDE_TIMEOUT_ON_ERROR = 5 * 1000;
export const ROOT_ID = 'anilist-widget-root';
export const MODAL_ROOT_ID = 'anilist-widget-modal-root';
export const ANILIST_API_URL = 'https://graphql.anilist.co/';
export const ANILIST_SEARCH_BASE_URL = 'https://anilist.co/search/';
export const YOUTUBE_EMBED_BASE_URL = 'https://www.youtube-nocookie.com/embed/';
export const BODY_TEXT_THREE_LINE_TEXT_LENGTH = 3 * 60;

export const MEDIA_INFO_PATTERNS: MediaInfoParserPatterns = {
  default: {
    title: {
      patterns: [
        {
          type: 'REPLACE',
          pattern: /\./g,
          replace: ' ',
        },
        /(\[|\()[\w\-\!\+\s]+(\]|\))/g,
        {
          type: 'MATCH',
          pattern: /^[\w\s\-\:\']+/,
        },
        /\s\-\s.+$/,
        /(S\d{2,})(E\d{2,}).+$/,
      ],
    },
    year: {
      valueAsNumber: true,
      patterns: [
        {
          type: 'MATCH',
          pattern: /(?<=\()\d{4}(?=\))/,
        },
      ],
    },
    season: {
      valueAsNumber: true,
      patterns: [
        {
          type: 'MATCH',
          pattern: /(?<=(Season\s?|S))\d+/,
        },
      ],
    },
    episode: {
      valueAsNumber: true,
      patterns: [
        {
          type: 'REPLACE',
          pattern: /\./g,
          replace: ' ',
        },
        {
          type: 'MATCH',
          pattern: /(?<=(Episode\s|Ep\s?|E|(\s-\s)))\d{2,}(?=\s[^a-z])/,
        },
      ],
    },
  },
};

export namespace NyaaSelectors {
  export const BODY_CONTAINER = 'body > .container';
  export const CATEGORY_LINK =
    '.container div.panel-body a[href^="/?c"]:first-of-type';
}
