import * as dotenv from 'dotenv';
import axios from 'axios';

export const listAssetForSale = async () => {
  dotenv.config();
  const gameshiftApiKey = process.env.GAMESHIFT_API_KEY;
  if (!gameshiftApiKey) throw new Error('gameshiftApiKey not found.');

  const assetId = '4b3b0f89-4d1d-4094-9ed7-fa7b89969a4a';
  const url = `https://api.gameshift.dev/assets/${assetId}/sell`;

  const data = {
    amountCents: 1,
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

listAssetForSale();

/*
% ts-node src/<THIS_FILE>

{
  url: 'https://app.gameshift.dev/consent?transaction=e4b2204a-f5da-4881-98e4-5c7c81507648',
  id: 'e4b2204a-f5da-4881-98e4-5c7c81507648'
}
*/
