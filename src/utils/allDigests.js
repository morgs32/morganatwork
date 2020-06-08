// eslint-disable-next-line import/no-unresolved
import pages, { _importMeta, meta as metas } from '../../pages/digests/*.mdx';

module.exports = metas.map((meta = {}, idx) => {

  const regexMatch = /\/digests\/([\w|-]+)/.exec(_importMeta[idx].absolutePath);

  return {
    path: regexMatch[0],
    type: 'digest',
    date: regexMatch[1],
    title: meta.title || 'Newsworthy',
    headings: meta.headings || pages[idx]({}).props.children.filter(child => child.props.originalType === 'h2').map((h2) => {
      return h2.props.children;
    }),
    ...meta,
  };
});
