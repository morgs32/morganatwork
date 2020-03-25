import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { findDOMNode } from 'react-dom';

interface ConfigType {
  observerTarget: MutableRefObject<HTMLElement | null>;
  observerOptions?: {};
  onEnterViewport?(): void;
  onLeaveViewport?(): void;
}

const useInViewport = (config: ConfigType ) => {
  const {
    onEnterViewport,
    onLeaveViewport,
    observerOptions,
    observerTarget,
  } = config;

  const observer: MutableRefObject<IntersectionObserver | null> = useRef();
  const intersected: MutableRefObject<boolean> = useRef(false);
  
  function stopObserver() {
    if (observerTarget.current && observer.current) {
      observer.current.unobserve(findDOMNode(observerTarget.current));
      observer.current.disconnect();
      observer.current = null;
    }
  }

  function handleIntersection(entries) {
    const entry = entries[0] || {};
    const { isIntersecting, intersectionRatio } = entry;
    const isInViewport = typeof isIntersecting !== 'undefined' ? isIntersecting : intersectionRatio > 0;

    if (!intersected.current && isInViewport) {
      intersected.current = true;
      onEnterViewport && onEnterViewport();
      return;
    }

    if (intersected.current && !isInViewport) {
      intersected.current = false;
      onLeaveViewport && onLeaveViewport();
    }
  }
  
  useEffect(
    () => {
      // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
      if (!observer.current) {
        observer.current = new IntersectionObserver(handleIntersection, observerOptions);
      }
      if (observerTarget.current && observer.current) {
        observer.current.observe(findDOMNode(observerTarget.current));
      }
      
      return () => {
        stopObserver();
      };
    },
    [observerTarget, observerOptions, onEnterViewport, onLeaveViewport]
  );

  return stopObserver;
};

export default useInViewport;
