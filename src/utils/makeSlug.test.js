import makeSlug from './makeSlug';


describe('makeSlug', () => {
  it('works', () => {

    expect(makeSlug('What the hell. Really')).toMatchSnapshot();
  })
})
