const { ApiPromise, WsProvider, Keyring } = require("@polkadot/api");
const cron = require("node-cron");

async function main() {
  // Connect to Polkadot
  const wsProvider = new WsProvider("wss://rpc.polkadot.io");
  const api = await ApiPromise.create({ provider: wsProvider });

  // Your Polkadot account keypair
  const keyring = new Keyring({ type: "sr25519" });
  const alice = keyring.addFromUri("//Alice");

  // The transaction you want to make
  const transfer = api.tx.balances.transfer("recipientAddress", "amount");

  // Schedule the task to run on the 5th day of every month
  cron.schedule(
    "0 0 5 * *",
    async function () {
      console.log("Running a job at 01:00 at America/Sao_Paulo timezone");

      // Sign and send the transaction
      const hash = await transfer.signAndSend(alice);

      console.log(`Transaction sent with hash ${hash}`);
    },
    {
      scheduled: true,
      timezone: "America/Sao_Paulo", // Specify your timezone
    }
  );
}

main().catch(console.error);
