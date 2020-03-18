import _mapValues from 'lodash/mapValues';
import { css } from 'styled-components';

import breakpoints from './breakpoints';

export const mediaBreakpointUp = {
  xs: null, // This wouldn't make sense
};
export const mediaBreakpointDown = {
  xl: null, // This wouldn't make sense
};

const breakpointNext = (name) => {
  const keysList = Object.keys(breakpoints);
  const index = keysList.indexOf(name);
  if (index === -1 || index === keysList.length - 1) {
    return null;
  }
  return keysList[index + 1];
};

// Minimum breakpoint width. Null for the smallest (first) breakpoint.
//
// >> breakpointMin(sm)
//    576px
function breakpointMin(name) {
  const min = breakpoints[name];
  if (min !== 0) {
    return min;
  }
  return null;
}

// 👇 Got this from bootstrap: https://github.com/twbs/bootstrap/blob/ff29c1224c20b8fcf2d1e7c28426470f1dc3e40d/scss/mixins/_breakpoints.scss#L31
// Maximum breakpoint width. Null for the largest (last) breakpoint.
// The maximum value is calculated as the minimum of the next one less 0.02px
// to work around the limitations of `min-` and `max-` prefixes and viewports with fractional widths.
// See https://www.w3.org/TR/mediaqueries-4/#mq-min-max
// Uses 0.02px rather than 0.01px to work around a current rounding bug in Safari.
// See https://bugs.webkit.org/show_bug.cgi?id=178261
//
// >> breakpointMax(sm)
//    767.98px
const breakpointMax = (name) => {
  const next = breakpointNext(name);
  if (next) {
    return breakpointMin(next) - .02;
  }
  return null;
};

export default _mapValues(breakpoints, (_, breakpointKey) => {
  const minWidth = breakpointMin(breakpointKey);
  if (minWidth) {
    mediaBreakpointUp[breakpointKey] = (...args) => {
      return css`
        @media (min-width: ${minWidth}px) {
          ${css(...args)};
        }
      `;
    };
  }

  const maxWidth = breakpointMax(breakpointKey);
  if (maxWidth) {
    mediaBreakpointDown[breakpointKey] = (...args) => css`
      @media (min-width: ${maxWidth}px) {
        ${css(...args)};
      }
    `;
  }
});

