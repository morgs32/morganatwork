import { useEffect, useState } from 'react';

import loadImage from './loadImage';

const cache = new Map();

export const Status = {
  LOADING: 'loading',
  LOADED: 'loaded',
  FAILED: 'failed',
};

export default function useImage(src) {
  const promise = cache.get(src);
  const [status, setStatus] = useState(promise ? promise._status : Status.LOADING);

  useEffect(() => {

    let mounted = true;

    if (!src) {
      return;
    }

    let promise = cache.get(src);
    if (!promise) {
      setStatus(Status.LOADING);
      promise = loadImage(src)
        .catch((error) => {
          cache.delete(src);
          throw error;
        });
      cache.set(src, promise);
    }

    promise
      .then(() => {
        if (mounted) {
          setStatus(Status.LOADED);
        }
      })
      .catch(() => {
        if (mounted) {
          setStatus(Status.FAILED);
        }
      });


    return () => {
      mounted = false;
    };
  }, [src]);

  return [status];
}
