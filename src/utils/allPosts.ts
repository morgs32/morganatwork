import path from 'path'
import fs from 'fs'

const DIR = path.join(process.cwd(), './pages/posts/');
const files = fs
  .readdirSync(DIR)
  .filter(file => file.endsWith('.md') || file.endsWith('.mdx'))


export default files.map((file) => {
  const { meta } = require(`../../pages/posts/${file}`);

  return {
    pathname: `posts/${file.split('.')[0]}`,
    type: 'post',
    ...meta,
  };
});
