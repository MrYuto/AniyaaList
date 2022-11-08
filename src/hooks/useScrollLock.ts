import { useEffect, useState } from 'preact/hooks';

const useScrollLock = (initialState: boolean | (() => boolean)) => {
  const [lock, setLock] = useState(initialState);

  useEffect(() => {
    document.body.classList.toggle('scroll-lock', lock);
  }, [lock]);

  return [lock, setLock] as const;
};

export default useScrollLock;
