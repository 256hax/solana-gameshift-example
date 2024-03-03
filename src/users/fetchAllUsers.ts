import * as dotenv from 'dotenv';
import axios from 'axios';

export const fetchAllUsers = async () => {
  dotenv.config();
  const gameshiftApiKey = process.env.GAMESHIFT_API_KEY;
  if (!gameshiftApiKey) throw new Error('gameshiftApiKey not found.');

  const url = 'https://api.gameshift.dev/v2/users';

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

fetchAllUsers();

/*
% ts-node src/<THIS_FILE>

{
  data: [
    {
      referenceId: '132bc999-b3ef-4de5-8265-3c72b7c69cd4',
      email: 'thisistest@example.com'
    },
    {
      referenceId: '47e33b63-ad72-4968-aace-f5ce0e3fb3a8',
      email: 'test@example.com'
    }
  ],
  meta: { page: 1, perPage: 50, totalPages: 1 }
}
*/
