import { useEffect, useState } from 'react';

import loadImage from './loadImage';
import { debug } from 'webpack';

const cache = new Map();

export const Status = {
  LOADING: 'loading',
  LOADED: 'loaded',
  FAILED: 'failed',
};

export default function useImage(src) {
  const [status, setStatus] = useState(cache.get(src) || Status.LOADING);

  useEffect(() => {
      if (!src || status === cache.get(src)) {
        return;
      }

      setStatus(Status.LOADING)

      let mounted = true;

      loadImage(src)
        .then((image) => {

          cache.set(src, image);

          // Triggers update
          if (mounted) {
            setStatus(Status.LOADED);
          }

        })
        .catch((error) => {
          cache.delete(src);

          // Triggers update
          if (mounted) {
            setStatus(Status.FAILED);
          }
        });
      return () => {
        mounted = false;
      };
    },
    [src]
  );

  return [status];
}
