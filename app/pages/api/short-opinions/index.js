import wrapHandler from 'app/src/utils/wrapHandler';
import Coda from 'app/src/utils/Coda';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

const coda = new Coda(process.env.CODA_TOKEN);

export default wrapHandler(async () => {
  const query = coda.get('docs/dYI4sySQOr/tables/grid-4oxUhO7tjV/rows', {
    useColumnNames: true,
    valueFormat: 'rich'
  })
    .then(createQuery)
  return query;
})


export const createQuery = (rows) => {
  const query = {
    data: rows.items.map(createResource)
  }

  return query;
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
      createdOn: values['Created on'],
      link: values.Link,
      notes: md.render(removeTicks(values.Notes).trim()),
      quote: md.render(removeTicks(values.Quote).trim()),
      title: md.render(removeTicks(values.Title).trim()),
    }
  }
  const photo = values.Photos[0];
  if (photo) {
    resource.attributes.photo = photo
  }
  return resource;
}
