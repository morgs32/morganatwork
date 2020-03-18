module.exports = {
  'extends': [
    'react-app',
    'prettier',
  ],
  'ignorePatterns': [
    '*/node_modules/'
  ],
  'globals': {
    'jest': true,
    'expect': true,
    'it': true,
    'describe': true,
    'mount': true,
    'shallow': true,
  },
  'env': {
    'browser': true,
    'node': true
  },
  'plugins': [
    'babel',
    'react',
    'prettier',
  ],
  'rules': {
    'jsx-a11y/anchor-is-valid': 0,
    'react/forbid-prop-types': [
      0
    ]
  }
};
