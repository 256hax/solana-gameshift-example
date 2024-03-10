// Docs:
//  https://docs.gameshift.dev/docs/arbitrary-transaction-signing
//  https://docs.gameshift.dev/reference/arbitrarytransactionsigningcontroller_signtransaction
import * as dotenv from 'dotenv';
import * as bs58 from 'bs58';
import axios from 'axios';
import {
  Connection,
  PublicKey,
  SystemProgram,
  Transaction,
  LAMPORTS_PER_SOL,
} from '@solana/web3.js';

export const signTransactionForUser = async () => {
  // --------------------------
  // Setup API Key
  // --------------------------
  dotenv.config();
  const gameshiftApiKey = process.env.GAMESHIFT_API_KEY;
  if (!gameshiftApiKey) throw new Error('gameshiftApiKey not found.');

  // --------------------------
  // Setup Transaction
  // --------------------------
  // User Wallet on GameShift
  const payerPublicKey = new PublicKey(
    'AUf9whyJe3eKB6A5kqk6eFHNW7gsyqLygnwNAjDYoXDF'
  );
  const takerPublicKey = new PublicKey(
    'HXtBm8XZbxaTt41uqaKhwUAa6Z1aPyvJdsZVENiWsetg'
  );

  const connection = new Connection(
    'https://api.devnet.solana.com',
    'confirmed'
  );
  const latestBlockhash = await connection.getLatestBlockhash();

  let transaction = new Transaction({
    blockhash: latestBlockhash.blockhash,
    lastValidBlockHeight: latestBlockhash.lastValidBlockHeight,
    feePayer: payerPublicKey,
  });

  transaction.add(
    SystemProgram.transfer({
      fromPubkey: payerPublicKey,
      toPubkey: takerPublicKey,
      lamports: LAMPORTS_PER_SOL * 0.0001,
    })
  );

  // --------------------------
  // Request to GameShift
  // --------------------------
  const url = 'https://api.gameshift.dev/transactions/sign';

  const userReferenceId = '132bc999-b3ef-4de5-8265-3c72b7c69cd4';

  // serializedTransaction:
  //  This is the transaction you are requesting a signature for. The transaction must be serialized into a hex string. In addition, you must serialize just the Message within the transaction. As an example, if you have a transaction you created using @solana/web3.js, you could create the value for this field by calling transaction.serializeMessage().toString(‘hex’).
  //
  // onBehalfOf:
  //  The reference id of the user you are requesting a transaction signature from.
  const data = {
    // serializedTransaction: bs58.encode(transaction.serializeMessage()),
    serializedTransaction: transaction.serializeMessage().toString('hex'),
    onBehalfOf: userReferenceId,
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

signTransactionForUser();

/*
% ts-node src/<THIS_FILE>

{
  url: 'https://app.gameshift.dev/consent?transaction=34d4428f-6552-4747-8569-bb27dbf5e613'
}
*/
