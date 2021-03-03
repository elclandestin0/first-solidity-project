# How to run
Run `node compile.js` to compile the `Inbox.sol`. After that, run `node run test` to test the contract.

### Notes
- The `solc` version used in this project is `0.4.17`
- `ganache-cli` is used to test in a local ETH network. `ganache` automatically creates accounts for us to use as soon as the test network boots up. 
- `infura` is a public API that gives us access to a machine connected to the Ethereum Public Networks. Infura is our portal beyond Web3 into our Etheureum Networks. Consider it a test provider. 
- `web3` is a javascript library to interface with the ETH public networks. Every function in `web3` is asynchronous.
- `truffle/hdwallet-provider` is a provider that will help us connect to the Infura node and simultaneously unlock an account that we can use. 