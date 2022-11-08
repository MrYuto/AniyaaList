import { gql } from 'graphql-request';

export const MEDIA_SEARCH_QUERY = gql`
  query MediaSearch($search: String, $type: MediaType, $seasonYear: Int) {
    Media(search: $search, type: $type, seasonYear: $seasonYear) {
      id
      idMal
      bannerImage
      averageScore
      popularity
      format
      source
      episodes
      duration
      description
      genres
      trailer {
        id
        site
      }
      coverImage {
        large
      }
      title {
        romaji
      }
      studios(isMain: true) {
        nodes {
          id
          name
        }
      }
      startDate {
        year
        month
        day
      }
    }
  }
`;
