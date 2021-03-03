// checks if a given value is true or not. If false, terminate program.
const assert = require('assert');
// required for testing solidity
const ganache = require('ganache-cli');
// library for interfacing with Etheureum networks. 
// It isn't camel cased as Web3 is a constructor
const Web3 = require('web3');
// instance of web3 with a ganache provider() as a test network
const web3 = new Web3(ganache.provider());

// Mocha