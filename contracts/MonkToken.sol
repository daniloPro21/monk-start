// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MonkToken is ERC20 {

    constructor() ERC20("Monk", "MONK") {
        _mint(msg.sender, 1000000000000000000000 * 10 ** uint(decimals()));
    }

    function getContractBalance() external view returns (uint256) {
        return address(this).balance;
    }
}