import * as dotenv from 'dotenv';
import axios from 'axios';

export const createPayment = async () => {
  dotenv.config();
  const gameshiftApiKey = process.env.GAMESHIFT_API_KEY;
  if (!gameshiftApiKey) throw new Error('gameshiftApiKey not found.');

  const url = 'https://api.gameshift.dev/payments/checkout';

  const data = {
    title: 'Testing Payment',
    description: 'This is a payment for testing.',
    amountCents: 1, // Price of the item, in cents(USD)
    quantity: 1,
    buyerId: '47e33b63-ad72-4968-aace-f5ce0e3fb3a8',
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

createPayment();

/*
% ts-node src/<THIS_FILE>

{
  url: 'https://app.gameshift.dev/checkout?payment=ffc02955-838b-4299-8925-6fd1f8e28da3',
  id: 'ffc02955-838b-4299-8925-6fd1f8e28da3'
}
*/
