import wrapHandler from 'src/utils/wrapHandler';
import Coda from 'src/utils/Coda';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

const coda = new Coda(process.env.CODA_TOKEN);

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
  const rows = await coda.get('docs/dYI4sySQOr/tables/grid-4oxUhO7tjV/rows', {
    useColumnNames: true,
    valueFormat: query.valueFormat || 'rich',
    query: 'Published:true'
  });

  const queryJson = createQuery(rows);

  if (query.hasOwnProperty('raw')) {
    return rows;
  }

  return queryJson;
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
  const {
    id,
    type,
    values,
  } = item;

  const resource = {
    id,
    type,
    attributes: {
      image: null,
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
