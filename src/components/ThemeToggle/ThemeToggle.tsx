import React from 'react';
import PropTypes from 'prop-types';

ThemeToggle.propTypes = {};
ThemeToggle.defaultProps = {};

export default function ThemeToggle(props) {
  return (
    <div>
      <Toggle
        icons={{
          checked: (
            <img
              src={moon}
              width="16"
              height="16"
              role="presentation"
              style={{ pointerEvents: 'none' }}
            />
          ),
          unchecked: (
            <img
              src={sun}
              width="16"
              height="16"
              role="presentation"
              style={{ pointerEvents: 'none' }}
            />
          ),
        }}
        checked={this.state.theme === 'dark'}
        onChange={e =>
          window.__setPreferredTheme(
            e.target.checked ? 'dark' : 'light'
          )
        }
      />
    </div>
  );
}

