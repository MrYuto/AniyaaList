export enum NyaaCategory {
  Anime = 'ANIME',
  Literature = 'LITERATURE',
}

export interface NyaaPageInfo {
  title: string;
  category: NyaaCategory;
}

export interface MediaInfo {
  year: number | null;
  title: string | null;
  season: number | null;
  episode: number | null;
}

export type MediaInfoItemPatterns = (
  | RegExp
  | {
      type: 'REPLACE' | 'MATCH';
      replace?: string;
      pattern: RegExp;
    }
)[];

export type MediaInfoParserPattern = {
  [k in keyof MediaInfo]: {
    patterns: MediaInfoItemPatterns;
    valueAsNumber?: boolean;
  };
} & { extends?: string };

export type MediaInfoParserPatterns = {
  [key: string]: MediaInfoParserPattern;
  default: MediaInfoParserPattern;
};
