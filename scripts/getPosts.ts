import { shortOpinionsAPI } from '../pages/api/short-opinions';
import fs from 'fs';
import path from 'path';

async function main() {
  const rows = await shortOpinionsAPI();

  fs.writeFileSync(path.resolve(__dirname, '../shortOpinions.json'), JSON.stringify(rows, null, 2));
}

main()
  .catch(e => console.log('e', e));
