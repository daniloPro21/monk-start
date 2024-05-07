const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const ONE_GWEI = 1_000_000_000n;

module.exports = buildModule("MonkTokenModule", (m) => {
  const MonkToken = m.contract("MonkToken");

  return { MonkToken };
});