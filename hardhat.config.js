require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    hardhat: {
    },
    localhost: {
      url: "http://127.0.0.1:7545",
      account: '0xead7d82a139129575bc12834e5bb5f576097c297dc70bcc63c1d8868b1066878' 
    }
  },
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
};
