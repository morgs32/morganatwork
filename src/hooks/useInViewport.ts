import { MutableRefObject, useEffect, useRef } from 'react';
import { findDOMNode } from 'react-dom';

interface ConfigType {
  observerOptions?: {};

  onEnterViewport?(entry: IntersectionObserverEntry): void;

  onLeaveViewport?(entry: IntersectionObserverEntry): void;
}

const useInViewport = (config: ConfigType) => {
  const {
    onEnterViewport,
    onLeaveViewport,
    observerOptions,
  } = config;

  const observer: MutableRefObject<IntersectionObserver | null> = useRef();
  const intersected: MutableRefObject<boolean> = useRef(false);

  const ref = useRef();

  function stopObserver() {
    if (ref.current && observer.current) {
      observer.current.unobserve(findDOMNode(ref.current));
      observer.current.disconnect();
      observer.current = null;
    }
  }

  function startObserver() {
    if (ref.current && observer.current) {
      observer.current.observe(findDOMNode(ref.current));
    }
  }

  function handleIntersection(entries) {
    const entry = entries[0] || {};
    const { isIntersecting, intersectionRatio } = entry;
    const isInViewport = typeof isIntersecting !== 'undefined' ? isIntersecting : intersectionRatio > 0;

    if (!intersected.current && isInViewport) {
      intersected.current = true;
      onEnterViewport && onEnterViewport(entry);
      return;
    }

    if (intersected.current && !isInViewport) {
      intersected.current = false;
      onLeaveViewport && onLeaveViewport(entry);
    }
  }

  useEffect(
    () => {
      // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
      if (!observer.current) {
        observer.current = new IntersectionObserver(handleIntersection, observerOptions);
      }
      startObserver();

      return () => {
        stopObserver();
      };
    },
    [observerOptions, onEnterViewport, onLeaveViewport]
  );

  return { stopObserver, startObserver, ref };
};

export default useInViewport;
