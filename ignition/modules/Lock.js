const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const JAN_1ST_2030 = 1893456000;
const ONE_GWEI = 1_000_000_000n;

module.exports = buildModule("LockModule", (m) => {
  const unlockTime = m.getParameter("unlockTime", JAN_1ST_2030);
  const lockedAmount = m.getParameter("lockedAmount", ONE_GWEI);
  const tokenAddress = m.getParameter("tokenAddress", "0x2e8f5396F5781A98051B9E9d93a1528714a038D8");

  const lock = m.contract("Lock", [unlockTime, tokenAddress], {
    value: lockedAmount,
  });

  return { lock };
});
