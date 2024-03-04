import * as dotenv from 'dotenv';
import axios from 'axios';

export const updateAsset = async () => {
  dotenv.config();
  const gameshiftApiKey = process.env.GAMESHIFT_API_KEY;
  if (!gameshiftApiKey) throw new Error('gameshiftApiKey not found.');

  const assetId = '826ea05f-c62c-4e62-9d0e-0eba87ca0eaa';
  const url = `https://api.gameshift.dev/assets/${assetId}`;

  const data = {
    attributes: [{ traitType: 'Category', value: 'Fruits' }],
    imageUrl:
      'https://fastly.picsum.photos/id/625/200/300.jpg?hmac=UsuVBhEWUK8nKZTPbU9D1_ENYqppSfiLsX8SIHskOfw',
  };

  const config = {
    headers: {
      accept: 'application/json',
      'x-api-key': gameshiftApiKey,
    },
  };

  try {
    const res = await axios.put(url, data, config);
    console.log(res.data);
  } catch (e) {
    console.log('%o', e);
  }
};

updateAsset();

/*
% ts-node src/<THIS_FILE>

{
  id: '826ea05f-c62c-4e62-9d0e-0eba87ca0eaa',
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
  created: 1708874379712,
  attributes: [ { value: 'Fruits', traitType: 'Category' } ],
  name: 'My an NFT',
  description: 'my description',
  environment: 'Development',
  escrow: false,
  imageUrl: 'https://fastly.picsum.photos/id/625/200/300.jpg?hmac=UsuVBhEWUK8nKZTPbU9D1_ENYqppSfiLsX8SIHskOfw',
  imported: false,
  priceCents: null,
  status: 'Committed',
  mintAddress: 'Foz4XaMormi8WhoZKpEiLqwCPMp2epguhkZBKFv5Swvi',
  owner: { address: 'AUf9whyJe3eKB6A5kqk6eFHNW7gsyqLygnwNAjDYoXDF' }
}
*/
