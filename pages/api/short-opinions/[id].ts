import { coda } from 'src/utils/Coda';
import { createResource } from '../short-opinions';
import wrapHandler from '../../../src/utils/wrapHandler';

interface ReqType {
  query: {
    valueFormat?: string;
    id: string;
  }
}

export const shortOpinionAPI = async (req: ReqType) => {
  const {
    query,
  } = req;

  if (query.valueFormat) {
    return coda.get(`docs/dYI4sySQOr/tables/grid-4oxUhO7tjV/rows/${query.id}`, {
      useColumnNames: true,
      valueFormat: query.valueFormat,
      query: 'Published:true'
    });
  }

  const richRow = await coda.get(`docs/dYI4sySQOr/tables/grid-4oxUhO7tjV/rows/${query.id}`, {
    useColumnNames: true,
    valueFormat: 'rich',
    query: 'Published:true'
  });
  const simpleRow = await coda.get(`docs/dYI4sySQOr/tables/grid-4oxUhO7tjV/rows/${query.id}`, {
    useColumnNames: true,
    valueFormat: 'simple',
    query: 'Published:true'
  });

  simpleRow.values.Image = richRow.values.Image;

  return createResource(simpleRow);

}

export default wrapHandler(shortOpinionAPI)
