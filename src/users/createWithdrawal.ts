import * as dotenv from 'dotenv';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export const createWithdrawal = async () => {
  dotenv.config();
  const gameshiftApiKey = process.env.GAMESHIFT_API_KEY;
  if (!gameshiftApiKey) throw new Error('gameshiftApiKey not found.');

  const referenceId = '132bc999-b3ef-4de5-8265-3c72b7c69cd4';
  const url = `https://api.gameshift.dev/v2/users/${referenceId}/withdrawals`;

  const data = {};

  const config = {
    headers: {
      accept: 'application/json',
      'x-api-key': gameshiftApiKey,
    },
  };

  const res = await axios.post(url, data, config);
  console.log(res.data);
};

createWithdrawal();

/*
% ts-node src/<THIS_FILE>

{
  url: 'https://app.gameshift.dev/withdraw?id=1805c7ec-8221-44ab-9640-8d1fbbdec763',
  id: '1805c7ec-8221-44ab-9640-8d1fbbdec763'
}
*/
