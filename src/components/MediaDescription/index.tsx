import clsx from 'clsx';
import React from 'preact/compat';
import './style.scss';

interface MediaDescriptionProps {
  description?: string;
  showOverlay?: boolean;
}

const MediaDescription = (
  props: React.PropsWithChildren<MediaDescriptionProps>
) => {
  const { showOverlay = false } = props;
  const description = props.description ?? props.children;

  if (typeof description !== 'string') return null;

  return (
    <div
      className={clsx(
        'MediaDescription',
        showOverlay && 'MediaDescription--show-overlay'
      )}
    >
      <p
        className="MediaDescription__content"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
};

export default MediaDescription;
