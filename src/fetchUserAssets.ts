import * as dotenv from 'dotenv';
import axios from 'axios';

export const fetchUserAssets = async (referenceId: string) => {
  dotenv.config();
  const gameshiftApiKey = process.env.GAMESHIFT_API_KEY;
  if (!gameshiftApiKey) throw new Error('gameshiftApiKey not found.');

  const url = `https://api.gameshift.dev/users/${referenceId}/assets`;

  const headers = {
    accept: 'application/json',
    'x-api-key': gameshiftApiKey,
  };

  const res = await axios.get(url, {
    headers,
  });
  console.log('%o', res.data);
};

const referenceId = '47e33b63-ad72-4968-aace-f5ce0e3fb3a8'
fetchUserAssets(referenceId);

/*
% ts-node src/<THIS_FILE>

{
  data: [
    {
      id: 'bb80f3f7-4b70-46a1-befa-4e3c6b686243',
      collection: {
        id: '14c37a41-8b5d-4982-9e39-593dfce3a13e',
        name: 'Default',
        description: '',
        environment: 'Development',
        imported: false,
        mintAddress: '9TLcFuCyWeHR3tySiMr7PjGmeUHhpFDiaJ4ykUQ2RyDu',
        created: 1708867761146
      },
      created: 1708867762687,
      attributes: [ { value: 'test', traitType: 'Category' }, [length]: 1 ],
      name: 'My NFT',
      description: 'My NFT description.',
      environment: 'Development',
      escrow: false,
      imageUrl: 'https://fastly.picsum.photos/id/428/200/200.jpg?hmac=t9FYhwylg9uE-Y2lJluz7aIxlV_-R2FJQZV8UpoOu7M',
      imported: false,
      priceCents: null,
      status: 'Committed',
      mintAddress: '97sHAL8Qaa8pDvn1kTGCZbLhAKNPRbs3ZDL4CVcLQuiG',
      owner: {
        address: 'Dub7RWQomW86ctP1NQDdZ5enUExbJt46Fve8be9cWuD8',
        referenceId: '47e33b63-ad72-4968-aace-f5ce0e3fb3a8'
      }
    },
    [length]: 1
  ],
  meta: { page: 1, perPage: 50, totalPages: 1, totalResults: 1 }
}
*/
