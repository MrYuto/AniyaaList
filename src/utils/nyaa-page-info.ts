import { NyaaSelectors } from './constants';
import { NyaaPageInfo } from '../types';

export const getNyaaPageInfo = () => {
  const title = document.title.replace(' :: Nyaa', '');

  const category = document
    .querySelector<HTMLAnchorElement>(NyaaSelectors.CATEGORY_LINK)
    ?.innerText.trim()
    .toUpperCase();

  if (!category) {
    throw new Error('CATEGORY_NOT_FOUND');
  }

  return { title, category } as NyaaPageInfo;
};
