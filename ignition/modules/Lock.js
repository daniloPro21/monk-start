const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const JAN_1ST_2030 = 1893456000;
const ONE_GWEI = 1_000_000_000n;

module.exports = buildModule("LockModule", (m) => {
  const unlockTime = m.getParameter("unlockTime", JAN_1ST_2030);
  const lockedAmount = m.getParameter("lockedAmount", ONE_GWEI);
  const tokenAddress = m.getParameter("tokenAddress", "0x5FbDB2315678afecb367f032d93F642f64180aa3");

  const lock = m.contract("Lock", [unlockTime, tokenAddress], {
    value: lockedAmount,
  });

  return { lock };
});
