import * as dotenv from 'dotenv';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export const registerUser = async (email: string) => {
  dotenv.config();
  const gameshiftApiKey = process.env.GAMESHIFT_API_KEY;
  if (!gameshiftApiKey) throw new Error('gameshiftApiKey not found.');

  const url = 'https://api.gameshift.dev/users';

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

referenceId: '132bc999-b3ef-4de5-8265-3c72b7c69cd4',
address: 'AUf9whyJe3eKB6A5kqk6eFHNW7gsyqLygnwNAjDYoXDF',
email: 'test@example.com'
*/