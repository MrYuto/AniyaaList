import React, { createPortal, useEffect } from 'preact/compat';
import clsx from 'clsx';
import ModalOverlay from '../ModalOverlay';
import './style.scss';
import { useTransition } from '../../hooks/useTransition';
import useScrollLock from '../../hooks/useScrollLock';

interface ModalProps {
  show?: boolean;
  onClose?: () => void;
}

const Modal = (props: React.PropsWithChildren<ModalProps>) => {
  const { children, onClose, show: showModal = false } = props;
  const [_, setScrollLock] = useScrollLock(false);
  const [show, setShow, { isMounted, ref }] = useTransition<HTMLDivElement>();

  useEffect(() => {
    setShow(showModal);
    setScrollLock(showModal);
  }, [showModal]);

  if (!isMounted) return null;

  return createPortal(
    <div className={clsx('Modal', show && 'Modal--show')} ref={ref}>
      <ModalOverlay show={show} onClick={onClose} />
      <div className="Modal__container">{children}</div>
    </div>,
    document.getElementById('anilist-widget-modal-root')!
  );
};

export default Modal;
