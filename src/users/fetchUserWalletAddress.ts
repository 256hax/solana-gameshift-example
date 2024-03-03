import * as dotenv from 'dotenv';
import axios from 'axios';

export const fetchUserWalletAddress = async (referenceId: string) => {
  dotenv.config();
  const gameshiftApiKey = process.env.GAMESHIFT_API_KEY;
  if (!gameshiftApiKey) throw new Error('gameshiftApiKey not found.');

  const url = `https://api.gameshift.dev/users/${referenceId}/wallet-address`;

  const headers = {
    accept: 'application/json',
    'x-api-key': gameshiftApiKey,
  };

  const res = await axios.get(url, {
    headers,
  });
  console.log(res.data);
};

const referenceId = '47e33b63-ad72-4968-aace-f5ce0e3fb3a8'
fetchUserWalletAddress(referenceId);

/*
% ts-node src/<THIS_FILE>

Dub7RWQomW86ctP1NQDdZ5enUExbJt46Fve8be9cWuD8
*/
