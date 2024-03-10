import * as dotenv from 'dotenv';
import axios from 'axios';

export const getWithdrawals = async () => {
  dotenv.config();
  const gameshiftApiKey = process.env.GAMESHIFT_API_KEY;
  if (!gameshiftApiKey) throw new Error('gameshiftApiKey not found.');

  const referenceId = '132bc999-b3ef-4de5-8265-3c72b7c69cd4';
  const url = `https://api.gameshift.dev/v2/users/${referenceId}/withdrawals`;

  // const params = {
  //   page: 1,
  //   perPage: 100,
  // };

  const headers = {
    accept: 'application/json',
    'x-api-key': gameshiftApiKey,
  };

  const res = await axios.get(url, {
    // params,
    headers,
  });
  console.log(res.data);
};

getWithdrawals();

/*
% ts-node src/<THIS_FILE>

{
  data: [
    {
      id: '1805c7ec-8221-44ab-9640-8d1fbbdec763',
      referenceId: '132bc999-b3ef-4de5-8265-3c72b7c69cd4',
      status: 'Pending',
      initiatorWalletAddress: 'AUf9whyJe3eKB6A5kqk6eFHNW7gsyqLygnwNAjDYoXDF',
      amount: null,
      currency: 'USDC',
      created: '2024-03-10T15:36:58.113Z'
    }
  ],
  meta: { page: 1, perPage: 50, totalPages: 1, totalResults: 1 }
}
*/
