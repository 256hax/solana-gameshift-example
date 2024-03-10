import * as dotenv from 'dotenv';
import axios from 'axios';

export const buyAsset = async () => {
  dotenv.config();
  const gameshiftApiKey = process.env.GAMESHIFT_API_KEY;
  if (!gameshiftApiKey) throw new Error('gameshiftApiKey not found.');

  const assetId = '4b3b0f89-4d1d-4094-9ed7-fa7b89969a4a';
  const url = `https://api.gameshift.dev/assets/${assetId}/buy`;

  const data = {
    buyerId: '132bc999-b3ef-4de5-8265-3c72b7c69cd4'
  };

  const config = {
    headers: {
      accept: 'application/json',
      'x-api-key': gameshiftApiKey,
    },
  };

  try {
    const res = await axios.post(url, data, config);
    console.log(res.data);
  } catch (e) {
    console.log('%o', e);
  }
};

buyAsset();

/*
% ts-node src/<THIS_FILE>

{
  url: 'https://app.gameshift.dev/checkout?payment=261d72e4-d0cb-4a12-8762-c89598227153',
  id: '261d72e4-d0cb-4a12-8762-c89598227153'
}
*/