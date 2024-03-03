// Docs: https://docs.gameshift.dev/reference/assetcontroller_transfer
import * as dotenv from 'dotenv';
import axios from 'axios';

export const createAsset = async () => {
  dotenv.config();
  const gameshiftApiKey = process.env.GAMESHIFT_API_KEY;
  if (!gameshiftApiKey) throw new Error('gameshiftApiKey not found.');

  const assetId = 'bb80f3f7-4b70-46a1-befa-4e3c6b686243'; // Specifies the Asset to transfer
  const url = `https://api.gameshift.dev/assets/${assetId}/transfer`;

  // You must provide *either* a destination *or* a wallet, not both.
  const data = {
    onBehalfOf: '47e33b63-ad72-4968-aace-f5ce0e3fb3a8', // Identifies the User tranferring the Asset
    // destinationUserReferenceId: '132bc999-b3ef-4de5-8265-3c72b7c69cd4', // Identifies the User receiving the Asset
    destinationWallet: 'AUf9whyJe3eKB6A5kqk6eFHNW7gsyqLygnwNAjDYoXDF', // Address of the wallet receiving the Asset
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

createAsset();

/*
% ts-node src/<THIS_FILE>

https://app.gameshift.dev/consent?transaction=944e6fe0-2d85-4160-b84b-e723428cc51e
*/