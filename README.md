# Solana GameShift Example
Solana GameShift example scripts. Out-of-the-Box!

Official site: [GameShift](https://gameshift.solanalabs.com/)

## Setup
### Onboarding to GameShift
Create your Game and get API Key.  
[Onboarding to GameShift](https://docs.gameshift.dev/docs/getting-started).

### Onboard Your Users
Add a sample user.  
[Onboard Your Users](https://docs.gameshift.dev/docs/onboard-your-users)

### Install Packages
```
% cp .env.example .env
```
Then, write you API key of GameShift to .env.

```
% npm i
```

## Run
```
% ts-node src/<Category>/<TS_FILE>
```

e.g.

```
% ts-node src/users/fetchAllUsers.ts
```

Note: Update values at each files (e.g. collectionId, assetId, buyerId, payer PublicKey, etc... )

## Development Environment
[Testing credit card](https://docs.gameshift.dev/docs/developmen-environment)

## Note
GameShift only supports fiat settlement to US-domiciled bank accounts.

```
Enabling Fiat Payments

Fiat payments require the creation of a merchant account. This Merchant account is set up with two steps: the Know Your Business (KYB) process, and setting up a fiat settlement account.

KYB is a required process for our payment processor to maintain compliance with money transmission laws. KYB requires you to provide information about your business including a name and website; information about the business owners (such as name, address, date of birth, and social security number); and your banking details. Currently, GameShift only supports fiat settlement to US-domiciled bank accounts.
```
[GameShift - Enabling Fiat Payments](https://docs.gameshift.dev/docs/getting-started#enabling-fiat-payments)