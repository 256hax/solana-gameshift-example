import * as dotenv from 'dotenv';
import axios from 'axios';

export const fetchAllAssetCollections = async () => {
  dotenv.config();
  const gameshiftApiKey = process.env.GAMESHIFT_API_KEY;
  if (!gameshiftApiKey) throw new Error('gameshiftApiKey not found.');

  const url = 'https://api.gameshift.dev/assets';

  const ownerIds = '132bc999-b3ef-4de5-8265-3c72b7c69cd4'; // The IDs of the asset owners
  const params = {
    ownerIds,
    //   page: 1,
    //   perPage: 100,
  };

  const headers = {
    accept: 'application/json',
    'x-api-key': gameshiftApiKey,
  };

  const res = await axios.get(url, {
    params,
    headers,
  });
  console.log('%o', res.data);
};

fetchAllAssetCollections();

/*
% ts-node src/<THIS_FILE>

{
  data: [
    {
      id: '48392a3a-9403-4bfa-88bb-ecdcaf8c5a25',
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
      created: 1710062727630,
      attributes: [ { value: 'test', traitType: 'Category' }, [length]: 1 ],
      name: 'My NFT',
      description: 'My NFT description.',
      environment: 'Development',
      escrow: false,
      imageUrl: 'https://fastly.picsum.photos/id/428/200/200.jpg?hmac=t9FYhwylg9uE-Y2lJluz7aIxlV_-R2FJQZV8UpoOu7M',
      imported: false,
      priceCents: null,
      status: 'Committed',
      mintAddress: 'CodMfwTYi89PKPTJU55xxMXg7RjZiAnYXk17fuGzaEUq',
      owner: {
        address: 'Dub7RWQomW86ctP1NQDdZ5enUExbJt46Fve8be9cWuD8',
        referenceId: '47e33b63-ad72-4968-aace-f5ce0e3fb3a8'
      }
    },
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
      escrow: true,
      imageUrl: 'https://fastly.picsum.photos/id/971/200/200.jpg?hmac=xcJY-VNIH_UD01lMlLi4mADmQrLTgoEE2_NYEhL3VQA',
      imported: false,
      priceCents: 1,
      status: 'Committed',
      mintAddress: '4BCRbG5m4DYT3Coxz29S3ePmjrCsnPqdKNEphpoK23HW',
      owner: {
        address: 'AUf9whyJe3eKB6A5kqk6eFHNW7gsyqLygnwNAjDYoXDF',
        referenceId: '132bc999-b3ef-4de5-8265-3c72b7c69cd4'
      }
    },
    {
      id: '54354aa0-1c67-48e3-a86b-7566fd7162ee',
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
      created: 1710061642735,
      attributes: [ { value: 'test', traitType: 'Category' }, [length]: 1 ],
      name: 'My NFT',
      description: 'My NFT description.',
      environment: 'Development',
      escrow: false,
      imageUrl: 'https://fastly.picsum.photos/id/428/200/200.jpg?hmac=t9FYhwylg9uE-Y2lJluz7aIxlV_-R2FJQZV8UpoOu7M',
      imported: false,
      priceCents: null,
      status: 'Committed',
      mintAddress: 'GMXCTPn9wVp9PAP8ziWp2uLJcAJ1m2RzThdDpkw13QAo',
      owner: {
        address: 'AUf9whyJe3eKB6A5kqk6eFHNW7gsyqLygnwNAjDYoXDF',
        referenceId: '132bc999-b3ef-4de5-8265-3c72b7c69cd4'
      }
    },
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
      attributes: [ { value: 'Fruits', traitType: 'Category' }, [length]: 1 ],
      name: 'My an NFT',
      description: 'my description',
      environment: 'Development',
      escrow: false,
      imageUrl: 'https://fastly.picsum.photos/id/625/200/300.jpg?hmac=UsuVBhEWUK8nKZTPbU9D1_ENYqppSfiLsX8SIHskOfw',
      imported: false,
      priceCents: null,
      status: 'Committed',
      mintAddress: 'Foz4XaMormi8WhoZKpEiLqwCPMp2epguhkZBKFv5Swvi',
      owner: {
        address: 'AUf9whyJe3eKB6A5kqk6eFHNW7gsyqLygnwNAjDYoXDF',
        referenceId: '132bc999-b3ef-4de5-8265-3c72b7c69cd4'
      }
    },
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
    [length]: 5
  ],
  meta: { page: 1, perPage: 50, totalPages: 1, totalResults: 5 }
}
*/
