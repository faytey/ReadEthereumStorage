import { ethers } from "hardhat";
let Web3 = require('web3');
let web3 = new Web3("https://eth-mainnet.g.alchemy.com/v2/lh2i9x_uHZnURi_yOJnAU49bIQWDsJ-w");
// let convertHex = require('convert-hex');

async function main() {
  const OKB = "0x75231F58b43240C9718Dd58B4967c5114342a86c";
  const MATIC = "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0";
  const HEX = "0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39";
  const LINK = "0x514910771AF9Ca656af840dff83E8264EcF986CA";
  const CRONOS = "0xA0b73E1Ff0B80914AB6fe0444E65848C4C34450b";

  console.log(`****** READING FROM OKB ******`);
  const storage1 = await web3.eth.getStorageAt(OKB, 3);
  console.log(storage1);
  const storageNum1 = await web3.utils.toDecimal(storage1);
  console.log(storageNum1);
  
  console.log(`****** READING FROM MATIC ******`);
  const storage2 = await web3.eth.getStorageAt(MATIC, 2);
  console.log(storage2);
  const storageNum2 = await web3.utils.toAscii(storage2);
  console.log(storageNum2);

  console.log(`****** READING FROM HEX ******`);
  const storage3 = await web3.eth.getStorageAt(HEX, 2);
  console.log(storage3);
  const storageNum3 = await web3.utils.toAscii(storage3);
  console.log(storageNum3);

  console.log(`****** READING FROM LINK ******`);
  const storage4 = await web3.eth.getStorageAt(LINK, 0);
  console.log(storage4);
  const storageNum4 = await web3.utils.toAscii(storage4);
  console.log(storageNum4);

  console.log(`****** READING FROM CRONOS ******`);
  const storage5 = await web3.eth.getStorageAt(CRONOS, 1);
  console.log(storage5);
  const storageNum5 = await web3.utils.toAscii(storage5);
  console.log(storageNum5);
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
