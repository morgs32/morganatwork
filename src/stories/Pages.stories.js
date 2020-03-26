import Index from '../pages/index';
import shortOpinions from '../fixtures/api/short-opinions';

export default {
  title: 'Pages',
};

export const Home = () => {
  return (
    <Index shortOpinions={shortOpinions.data} />
  );
};
