import * as dotenv from 'dotenv';
import axios from 'axios';

export const createPaymentsForAsset = async () => {
  dotenv.config();
  const gameshiftApiKey = process.env.GAMESHIFT_API_KEY;
  if (!gameshiftApiKey) throw new Error('gameshiftApiKey not found.');

  const assetTemplateId = '2903c40d-49c9-45e0-a206-6bc1b44811e1';
  const url = `https://api.gameshift.dev/asset-templates/${assetTemplateId}/checkout`;

  const data = {
    priceCents: 1, // The price of the item in cents of USD. Note: It's not USDC.
    quantity: 1,
    buyerId: '132bc999-b3ef-4de5-8265-3c72b7c69cd4', // Reference id of the buyer
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

createPaymentsForAsset();

/*
% ts-node src/<THIS_FILE>

{
  url: 'https://app.gameshift.dev/checkout?payment=9ed76a6d-7def-43c8-9f0b-9a3ee0f801f1',
  id: '9ed76a6d-7def-43c8-9f0b-9a3ee0f801f1'
}
*/
