import { useEffect, useRef, useState } from 'preact/hooks';

export const useTransition = <T extends Element>() => {
  const ref = useRef<T>(null);
  const [start, setStart] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isMounted) {
      setPlaying(start);
    }
  }, [isMounted, start]);

  useEffect(() => {
    if (start) {
      setIsMounted(true);

      return;
    }

    const controller = new AbortController();
    ref.current?.addEventListener(
      'transitionend',
      () => {
        setIsMounted(false);
      },
      {
        once: true,
        signal: controller.signal,
      }
    );

    return controller.abort.bind(controller);
  }, [start]);

  return [playing, setStart, { isMounted, ref }] as const;
};
