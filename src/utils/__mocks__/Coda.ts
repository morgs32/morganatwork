export default class MockAPI {
  get() {
    console.warn('Should not be calling coda.get() in tests');
  }

  post() {
    console.warn('Should not be calling coda.get() in tests');
  }
}
