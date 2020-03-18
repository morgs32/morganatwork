export default function handleAxios(error) {

  if (typeof error.response.data === 'object') {
    const err = new Error(error.response.data.message);
    Object.assign(err, error.response.data);
    throw err;
  }
  if (error.response) {
    throw new Error(`${error.request.method}: ${error.message} (no JSON)`);
  }
  throw new Error(`${error.request.method}: most likely a server timeout or an internet connection error`);


};
