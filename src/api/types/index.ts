export namespace AnilistApiTypes {
  export enum MediaType {
    Anime = 'ANIME',
    Manga = 'MANGA',
  }

  export enum MediaFormat {
    Tv = 'TV',
    Ona = 'ONA',
    Ova = 'OVA',
    Manga = 'MANGA',
    Movie = 'MOVIE',
    Music = 'MUSIC',
    Novle = 'NOVEL',
    OneShot = 'ONE_SHOT',
    Special = 'SPECIAL',
    TvShort = 'TV_SHORT',
  }

  export enum MediaSource {
    Manga = 'MANGA',
    Other = 'OTHER',
    Original = 'ORIGINAL',
    VideoGame = 'VIDEO_GAME',
    LightNovel = 'LIGHT_NOVEL',
    VisualNovel = 'VISUAL_NOVEL',
  }
}

export interface MediaSearchQueryResult {
  Media: {
    id: number;
    idMal?: number;
    bannerImage?: string;
    averageScore?: number;
    popularity: number;
    format: AnilistApiTypes.MediaFormat;
    source?: AnilistApiTypes.MediaSource;
    episodes?: number;
    duration?: number;
    description: string;
    genres: string[];
    trailer?: {
      id: string;
      site: string;
    };
    coverImage: {
      large: string;
    };
    title: {
      romaji: string;
    };
    studios: {
      nodes: {
        id: number;
        name: string;
      }[];
    };
    startDate: {
      year: number;
      month: number;
      day: number;
    };
  };
}
