import { render } from 'preact';
import { getNyaaPageInfo } from './utils';
import { MODAL_ROOT_ID, NyaaSelectors, ROOT_ID } from './utils/constants';
import { App } from './app';
import './sass/styles.scss';

(() => {
  const pageInfo = getNyaaPageInfo();
  const container = document.querySelector(NyaaSelectors.BODY_CONTAINER)!;
  const root = document.createElement('div');
  const modalRoot = document.createElement('div');

  root.id = ROOT_ID;
  modalRoot.id = MODAL_ROOT_ID;
  root.append(modalRoot);
  container.prepend(root);

  render(<App pageInfo={pageInfo} />, root);
})();
