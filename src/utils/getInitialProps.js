import glob from 'glob';
import fs from 'fs';
import yaml from 'js-yaml';

export const getPosts = () => {
  return glob.sync('pages/articles/**/meta.yml', {})
    .map(filename => yaml.safeLoad(fs.readFileSync(filename, 'utf8')));
};
