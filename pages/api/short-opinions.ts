import wrapHandler from 'src/utils/wrapHandler';
import { coda } from 'src/utils/Coda';
import MarkdownIt from 'markdown-it';
import makeSlug from '../../src/utils/makeSlug';
import _keyBy from 'lodash/keyBy';

const md = new MarkdownIt();


interface ReqType {
  query: {
    valueFormat?: string;
  }
}

const defaultReq: ReqType = {
  query: {}
};

export const shortOpinionsAPI = async (req: ReqType = defaultReq) => {
  const {
    query,
  } = req;

  if (query.valueFormat) {
    return coda.get('docs/dYI4sySQOr/tables/grid-4oxUhO7tjV/rows', {
      useColumnNames: true,
      valueFormat: query.valueFormat,
      query: 'Published:true'
    });
  }

  const simpleRows = await coda.get('docs/dYI4sySQOr/tables/grid-4oxUhO7tjV/rows', {
    useColumnNames: true,
    valueFormat: 'simple',
    query: 'Published:true'
  });
  const richRows = await coda.get('docs/dYI4sySQOr/tables/grid-4oxUhO7tjV/rows', {
    useColumnNames: true,
    valueFormat: 'rich',
    query: 'Published:true'
  })
  const richHash = _keyBy(richRows.items, 'id');

  simpleRows.items = simpleRows.items.map((row) => {
    const richRow = richHash[row.id];
    return {
      ...row,
      values: {
        ...row.values,
        Image: richRow.values.Image,
      }
    }
  })


  return createQuery(simpleRows);
};

export default wrapHandler(shortOpinionsAPI);


export const createQuery = (rows) => {
  const query = {
    data: rows.items.map(createResource)
  };

  return query;
};

const render = (str: string | undefined | null) => {
  if (!str) {
    return null;
  }
  return md.render(removeTicks(str).trim());
};

const removeTicks = (str) => str.replace(/```/g, '');

export const createResource = (item) => {

  console.log('item', item);

  const {
    id,
    type,
    name,
    values,
  } = item;

  const resource = {
    id,
    type,
    attributes: {
      image: null,
      slug: makeSlug(name),
      imageDescription: render(values['Image description']),
      createdOn: values['Created on'],
      publishedOn: values['Published on'],
      link: values.Link,
      notes: render(values.Notes),
      quote: render(values.Quote),
      title: render(values.Title),
    }
  };

  const image = values.Image[0];
  if (image) {
    resource.attributes.image = image;
  }
  return resource;
};
