import React, { ReactElement, useLayoutEffect, useRef, useState } from 'react';
import useMeasure from '../../hooks/useMeasure';
import { animated, useSpring } from 'react-spring';

interface Props {
  open: boolean,
  children: ReactElement
}
const Accordion: React.FC<Props> = (props) => {

  const {
    open,
    children,
  } = props;

  const ownRef = useRef({
    open,
  })

  const [bounds, setBounds] = useState({
    height: 0,
  })

  const [{ startObserver, stopObserver }] = useMeasure((bounds) => {
    setBounds(bounds);
  });
  const [active, setActive] = useState(false);
  const [animatedProps, setAnimatedProps] = useSpring(() => {
    return {
      height: 0,
      onRest: (p) => {
        if (p && p.height === 0 && !ownRef.current.open) {
          setActive(false)
        }
      }
    };
  });
  useLayoutEffect(() => {
    if (ownRef.current.open !== open) {
      ownRef.current.open = open;
    }
    if (!open) {
      setAnimatedProps({
        height: 0,
      })
    }
    else {
      setAnimatedProps({
        height: bounds.height,
      })
    }

  }, [open, bounds]);

  const displayContents = open || active;
  return (
    <animated.div style={{
      overflow: 'hidden',
      ...animatedProps,
    }}>
      {displayContents && (
        <div
          ref={(el) => {
            if (el) {
              // Just mounted
              setActive(true);
              startObserver(el)
            }
            if (!el) {
              stopObserver();
            }
          }}
        >
          {children}
        </div>

      )}
    </animated.div>
  );
}

export default Accordion
