import * as dotenv from 'dotenv';
import axios from 'axios';

export const fetchUserWalletAddress = async () => {
  dotenv.config();
  const gameshiftApiKey = process.env.GAMESHIFT_API_KEY;
  if (!gameshiftApiKey) throw new Error('gameshiftApiKey not found.');

  const referenceId = '132bc999-b3ef-4de5-8265-3c72b7c69cd4';
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

fetchUserWalletAddress();

/*
% ts-node src/<THIS_FILE>

AUf9whyJe3eKB6A5kqk6eFHNW7gsyqLygnwNAjDYoXDF
*/
