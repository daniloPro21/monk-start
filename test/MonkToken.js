const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("MonkToken", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployMonkTokenFixture() {


    const MyToken = await ethers.getContractFactory('MonkToken');
    const monk = await MyToken.deploy();
    const [owner, otherAccount] = await ethers.getSigners();


    return { monk, owner, otherAccount };
  }

  describe("Correct Name and symbol", function() {
    it('Should have correct name, symbol, and initial supply', async function () {
      const { monk } = await loadFixture(
        deployMonkTokenFixture
      );

      const name = await monk.name();
      const symbol = await monk.symbol();
      const totalSupply = await monk.totalSupply();
      console.log(totalSupply);
      expect(name).to.equal('Monk');
      expect(symbol).to.equal('MONK');
    });
  
  })


  describe("getContractBalance", function() {
    it("should get balance of contract", async function() {
      const { monk } = await loadFixture(
        deployMonkTokenFixture
      );
      const ownerBalance = await monk.getContractBalance();
      console.log(ownerBalance);
      await expect(ownerBalance).equal(ownerBalance);
    })
  })
});
