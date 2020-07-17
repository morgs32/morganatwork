const path = require('path')
const fs = require('fs')
const DIR = path.join(process.cwd(), './pages/posts/');
const files = fs
  .readdirSync(DIR)
  .filter(file => file.endsWith('.md') || file.endsWith('.mdx'))


module.exports = files.map((file) => {
  const { meta } = require(`../../pages/posts/${file}`);

  return {
    pathname: `posts/${file.split('.')[0]}`,
    type: 'post',
    ...meta,
  };
});
