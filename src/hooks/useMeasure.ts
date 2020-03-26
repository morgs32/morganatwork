import { useRef } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

interface BoundsType {
  left: number;
  top: number;
  width: number;
  height: number;
}

type ReturnType = [
  {
    stopObserver(),
    startObserver(el: HTMLDivElement)
  }
]

export default function useMeasure(callback: (BoundsType) => void): ReturnType {


  const ownRef = useRef(new ResizeObserver(([entry]) => {
    callback(entry.contentRect);
  }));

  function stopObserver() {
    ownRef.current.disconnect();
  }

  function startObserver(el) {
    if (el) {
      ownRef.current.observe(el);
    }
  }

  return [{ stopObserver, startObserver }];
}
