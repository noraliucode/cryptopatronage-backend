# CryptoPatronage Payment Scheduler 

This service is a simple backend Node.js application that automates the task of sending transactions on the Polkadot/Kusama network. It uses `node-cron` to schedule the transactions and `@polkadot/api` to interact with the Polkadot network.

## Requirements

- Node.js version 14.0 or later
- Polkadot account

## Installation

Before running this application, you need to install its dependencies. Navigate to the project's root directory and run:

```
yarn install
```

## Usage

To run your code, use:

```
node index.js
```

## Features

- Schedules transactions to be sent on the 5th day of every month at 00:00.
- The timezone for the scheduler is set to America/Sao_Paulo, but you can modify this to your preferred timezone.

## Disclaimer

This is a simplistic example and might need adjustments based on your needs. Cryptocurrency transactions can lead to a financial loss if not handled correctly. Please use this code as a starting point and ensure to understand each line before using it.

## License

[MIT](LICENSE)
