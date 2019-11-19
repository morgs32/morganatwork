import micro from 'micro';

const wrapHandler = fn => async (req, res) => micro.run(req, res, fn);

export default wrapHandler;
