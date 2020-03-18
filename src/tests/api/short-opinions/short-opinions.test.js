import rowsResponse from './rowsResponse';
import { createQuery, createResource } from 'src/pages/api/short-opinions';

jest.mock('src/utils/Coda')

describe('short-opinions', () => {


  describe('createResource', () => {
    it('transforms row into resource', () => {
      expect(createResource(rowsResponse.items[0])).toMatchSnapshot();
    });
  });

  describe('createQuery', () => {
    it('transforms rows into query', () => {
      expect(createQuery(rowsResponse)).toMatchSnapshot();
    })
  })
});
