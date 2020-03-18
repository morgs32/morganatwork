import { useLayoutEffect } from 'react';
import { useRouter } from 'next/router';

ScrollToTop.propTypes = {};
ScrollToTop.defaultProps = {};

export default function ScrollToTop(props) {

  const { pathname } = useRouter();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

