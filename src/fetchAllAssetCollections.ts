import * as dotenv from 'dotenv';
import axios from 'axios';

export const fetchAllAssetCollections = async () => {
  dotenv.config();
  const gameshiftApiKey = process.env.GAMESHIFT_API_KEY;
  if (!gameshiftApiKey) throw new Error('gameshiftApiKey not found.');

  const url = 'https://api.gameshift.dev/asset-collections';

  // const params = {
  //   page: 1,
  //   perPage: 100,
  // };

  const headers = {
    accept: 'application/json',
    'x-api-key': gameshiftApiKey,
  };

  const res = await axios.get(url, {
    // params,
    headers,
  });
  console.log(res.data);
};

fetchAllAssetCollections();

/*
% ts-node src/<THIS_FILE>

{
  data: [
    {
      id: '14c37a41-8b5d-4982-9e39-593dfce3a13e',
      name: 'Default',
      description: '',
      environment: 'Development',
      imported: false,
      mintAddress: '9TLcFuCyWeHR3tySiMr7PjGmeUHhpFDiaJ4ykUQ2RyDu',
      created: 1708867761146
    },
    {
      id: 'f44e0abc-43e4-4f51-9d04-237e73364ea9',
      name: 'My Collection',
      description: 'My Description of Collection',
      environment: 'Development',
      imageUrl: 'https://cloudflare-ipfs.com/ipfs/QmQXZHrQVAc3eWx7E5HLgZ33z3VtKYj8YyGDe746BqjbmH',
      imported: false,
      mintAddress: '',
      created: 1708837136009
    }
  ],
  meta: { page: 1, perPage: 50, totalPages: 1, totalResults: 2 }
}
*/
