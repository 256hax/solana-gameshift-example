import * as dotenv from 'dotenv';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export const registerUser = async (email: string) => {
  dotenv.config();
  const gameshiftApiKey = process.env.GAMESHIFT_API_KEY;
  if (!gameshiftApiKey) throw new Error('gameshiftApiKey not found.');

  const url = 'https://api.gameshift.dev/v2/users';

  const data = {
    referenceId: uuidv4(),
    email: email,
  };

  const config = {
    headers: {
      'x-api-key': gameshiftApiKey,
    },
  };

  const res = await axios.post(url, data, config);
  console.log(res.data);
};

const email = 'test@example.com';
registerUser(email);

/*
% ts-node src/<THIS_FILE>

{
  referenceId: '47e33b63-ad72-4968-aace-f5ce0e3fb3a8',
  address: 'Dub7RWQomW86ctP1NQDdZ5enUExbJt46Fve8be9cWuD8',
  email: 'test@example.com'
}
*/