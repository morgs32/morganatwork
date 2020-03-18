import wrapHandler from 'morganatwork/src/utils/wrapHandler';
import Coda from 'morganatwork/src/utils/Coda';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

const coda = new Coda(process.env.CODA_TOKEN);

export default wrapHandler(async (req) => {
  const rows = await coda.get('docs/dYI4sySQOr/tables/grid-4oxUhO7tjV/rows', {
    useColumnNames: true,
    valueFormat: 'rich'
  })

  const query = createQuery(rows);

  if (req.query.hasOwnProperty('raw')) {
    return rows;
  }

  return query;
})


export const createQuery = (rows) => {
  const query = {
    data: rows.items.map(createResource)
  }

  return query;
}

const render = (str: string | undefined | null) => {
  if (!str) {
    return null;
  }
  return md.render(removeTicks(str).trim());
}

const removeTicks = (str) => str.replace(/```/g, '')

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
      photo: null,
      createdOn: values['Created on'],
      link: values.Link,
      notes: render(values.Notes),
      quote: render(values.Quote),
      title: render(values.Title),
    }
  }
  const photo = values.Photos[0];
  if (photo) {
    resource.attributes.photo = photo
  }
  return resource;
}
