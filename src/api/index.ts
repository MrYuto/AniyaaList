import { GraphQLClient } from 'graphql-request';
import { ANILIST_API_URL } from '../utils/constants';

export const client = new GraphQLClient(ANILIST_API_URL);
