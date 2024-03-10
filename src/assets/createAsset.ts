import * as dotenv from 'dotenv';
import axios from 'axios';

export const createAsset = async () => {
  dotenv.config();
  const gameshiftApiKey = process.env.GAMESHIFT_API_KEY;
  if (!gameshiftApiKey) throw new Error('gameshiftApiKey not found.');

  const url = 'https://api.gameshift.dev/assets';

  const data = {
    details: {
      royaltyInfo: {
        sellerFeeBasisPoints: 500,
        recipients: [
          {
            // referenceId and address cannot both be defined.
            // referenceId: '47e33b63-ad72-4968-aace-f5ce0e3fb3a8', // The recipient's reference id
            address: 'HXtBm8XZbxaTt41uqaKhwUAa6Z1aPyvJdsZVENiWsetg', // The recipient's on-chain address
            share: 100,
          },
        ],
      },
      attributes: [{ traitType: 'Category', value: 'Animal' }],
      collectionId: 'f44e0abc-43e4-4f51-9d04-237e73364ea9',
      description: 'my description',
      imageUrl:
        'https://fastly.picsum.photos/id/971/200/200.jpg?hmac=xcJY-VNIH_UD01lMlLi4mADmQrLTgoEE2_NYEhL3VQA',
      name: 'My an NFT',
    },
    // The reference id of the user the asset should be assigned to
    destinationUserReferenceId: '132bc999-b3ef-4de5-8265-3c72b7c69cd4',
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
    console.log('%o',e);
  }
};

createAsset();

/*
% ts-node src/<THIS_FILE>

{
  id: '4b3b0f89-4d1d-4094-9ed7-fa7b89969a4a',
  collection: {
    id: 'f44e0abc-43e4-4f51-9d04-237e73364ea9',
    name: 'My Collection',
    description: 'My Description of Collection',
    environment: 'Development',
    imageUrl: 'https://cloudflare-ipfs.com/ipfs/QmQXZHrQVAc3eWx7E5HLgZ33z3VtKYj8YyGDe746BqjbmH',
    imported: false,
    mintAddress: '',
    created: 1708837136009
  },
  created: 1710045521392,
  attributes: [ { value: 'Animal', traitType: 'Category' } ],
  name: 'My an NFT',
  description: 'my description',
  environment: 'Development',
  escrow: false,
  imageUrl: 'https://fastly.picsum.photos/id/971/200/200.jpg?hmac=xcJY-VNIH_UD01lMlLi4mADmQrLTgoEE2_NYEhL3VQA',
  imported: false,
  priceCents: null,
  status: 'Processing',
  mintAddress: '',
  owner: {}
}
*/
