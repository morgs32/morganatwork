import preval from 'babel-plugin-preval/macro';

const folders: Array<string> = preval`
  const path = require('path')
  const fs = require('fs')
  const DIR = path.join(process.cwd(), "./pages/posts/");
  const files = fs
    .readdirSync(DIR)
  module.exports = files
`;

module.exports = folders.map((folder) => {
  const { default: meta } = require(`../../pages/posts/${folder}/meta`);

  return {
    pathname: `posts/${folder}`,
    type: 'post',
    ...meta,
  };
});
