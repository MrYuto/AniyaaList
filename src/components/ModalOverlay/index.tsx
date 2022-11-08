import React from 'preact/compat';
import clsx from 'clsx';
import './style.scss';

interface ModalOverlayProps {
  show?: boolean;
  onClick?: React.JSX.MouseEventHandler<HTMLDivElement>;
}

const ModalOverlay = (props: ModalOverlayProps) => {
  const { onClick, show = false } = props;

  return (
    <div
      className={clsx('ModalOverlay', show && 'ModalOverlay--show')}
      onClick={onClick}
    ></div>
  );
};

export default ModalOverlay;
