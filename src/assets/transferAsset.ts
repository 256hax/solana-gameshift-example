import * as dotenv from 'dotenv';
import axios from 'axios';

export const createAsset = async () => {
  dotenv.config();
  const gameshiftApiKey = process.env.GAMESHIFT_API_KEY;
  if (!gameshiftApiKey) throw new Error('gameshiftApiKey not found.');

  const assetId = '826ea05f-c62c-4e62-9d0e-0eba87ca0eaa'; // Specifies the Asset to transfer
  const url = `https://api.gameshift.dev/assets/${assetId}/transfer`;

  // You must provide *either* a destination *or* a wallet, not both.
  const data = {
    onBehalfOf: '132bc999-b3ef-4de5-8265-3c72b7c69cd4', // Identifies the User tranferring the Asset
    // destinationUserReferenceId: '132bc999-b3ef-4de5-8265-3c72b7c69cd4', // Identifies the User receiving the Asset
    destinationWallet: 'HXtBm8XZbxaTt41uqaKhwUAa6Z1aPyvJdsZVENiWsetg', // Address of the wallet receiving the Asset
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

https://app.gameshift.dev/consent?transaction=86ac9435-8998-4614-ab98-ecedd9a846a5
*/