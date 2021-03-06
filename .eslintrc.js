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
  'settings': {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      'typescript': {
        'alwaysTryTypes': true
      },
    }
  },
  'rules': {
    'jsx-a11y/anchor-is-valid': 0,
    'import/no-unresolved': [
      'error',
      {
        ignore: [
          'cms',
          'src'
        ]
      }
    ],
    'react/forbid-prop-types': [
      0
    ]
  }
};
