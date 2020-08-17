import preval from 'babel-plugin-preval/macro';

const files: Array<string> = preval`
  const path = require('path')
  const fs = require('fs')
  const DIR = path.join(process.cwd(), "./pages/digests/");
  const files = fs
    .readdirSync(DIR)
    .filter(file => file.endsWith(".md") || file.endsWith(".mdx"))
    
  module.exports = files
`;

module.exports = files.map((file) => {
  const {meta = {}, default: page} = require(`./pages/digests`);

  const date = file.split('.')[0]

  return {
    pathname: `digests/${date}`,
    type: 'digest',
    date,
    title: meta.title || 'Newsworthy',
    headings: meta.headings || page({}).props.children.filter(child => child.props.originalType === 'h2').map((h2) => {
      return h2.props.children;
    }),
    ...meta,
  };
})
