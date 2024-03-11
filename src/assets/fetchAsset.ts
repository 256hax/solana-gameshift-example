import * as dotenv from 'dotenv';
import axios from 'axios';

export const fetchAsset = async () => {
  dotenv.config();
  const gameshiftApiKey = process.env.GAMESHIFT_API_KEY;
  if (!gameshiftApiKey) throw new Error('gameshiftApiKey not found.');

  const assetId = '4b3b0f89-4d1d-4094-9ed7-fa7b89969a4a';
  const url = `https://api.gameshift.dev/assets/${assetId}`;

  const headers = {
    accept: 'application/json',
    'x-api-key': gameshiftApiKey,
  };

  const res = await axios.get(url, {
    headers,
  });
  console.log('%o', res.data);
};

fetchAsset();

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
  attributes: [ { value: 'Animal', traitType: 'Category' }, [length]: 1 ],
  name: 'My an NFT',
  description: 'my description',
  environment: 'Development',
  escrow: false,
  imageUrl: 'https://fastly.picsum.photos/id/971/200/200.jpg?hmac=xcJY-VNIH_UD01lMlLi4mADmQrLTgoEE2_NYEhL3VQA',
  imported: false,
  priceCents: null,
  status: 'Committed',
  mintAddress: '4BCRbG5m4DYT3Coxz29S3ePmjrCsnPqdKNEphpoK23HW',
  owner: {
    address: 'AUf9whyJe3eKB6A5kqk6eFHNW7gsyqLygnwNAjDYoXDF',
    referenceId: '132bc999-b3ef-4de5-8265-3c72b7c69cd4'
  }
}
*/
