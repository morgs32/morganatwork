// eslint-disable-next-line import/no-unresolved
import { _importMeta, meta as metas } from '../../pages/posts/*.mdx';

module.exports = metas.map((meta, idx) => {
  return {
    pathname: /\/posts\/[\w|-]+/.exec(_importMeta[idx].absolutePath)[0],
    ...meta,
  };
});
