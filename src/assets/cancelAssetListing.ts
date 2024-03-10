import * as dotenv from 'dotenv';
import axios from 'axios';

export const listAssetForSale = async () => {
  dotenv.config();
  const gameshiftApiKey = process.env.GAMESHIFT_API_KEY;
  if (!gameshiftApiKey) throw new Error('gameshiftApiKey not found.');

  const assetId = '4b3b0f89-4d1d-4094-9ed7-fa7b89969a4a';
  const url = `https://api.gameshift.dev/assets/${assetId}/cancel-sale`;

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
  url: 'https://app.gameshift.dev/consent?transaction=90efb96a-479d-45ca-b52a-049a536c036c',
  id: '90efb96a-479d-45ca-b52a-049a536c036c'
}
*/
