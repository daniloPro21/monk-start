// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
import { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Lock {
    uint public unlockTime;
    address payable public owner;
        // Address of the ERC20 token contract
    address public tokenAddress;

    // Event to log token transfers
    event TokensTransferred(address indexed from, address indexed to, uint256 amount);


    event Withdrawal(uint amount, uint when);


    constructor(uint _unlockTime, address _tokenAddress) payable {
        require(
            block.timestamp < _unlockTime,
            "Unlock time should be in the future"
        );

        unlockTime = _unlockTime;
        tokenAddress = _tokenAddress;
        owner = payable(msg.sender);
    }

    function withdraw() public {
        // Uncomment this line, and the import of "hardhat/console.sol", to print a log in your terminal
        // console.log("Unlock time is %o and block timestamp is %o", unlockTime, block.timestamp);

        require(block.timestamp >= unlockTime, "You can't withdraw yet");
        require(msg.sender == owner, "You aren't the owner");

        emit Withdrawal(address(this).balance, block.timestamp);

        owner.transfer(address(this).balance);
    }

     // Function to get the contract balance
    function getContractBalance() external view returns (uint256) {
        return address(this).balance;
    }

    // Function to transfer ERC20 tokens to a user
    function transferTokens(address _to, uint256 _amount)  public {
        // Create an instance of the ERC20 token contract
        ERC20 token = ERC20(tokenAddress);
        
        // Get the balance of this contract
        uint256 contractBalance = token.balanceOf(address(this));
        
        // Ensure the contract has enough tokens to transfer
        require(contractBalance >= _amount, "Insufficient balance in contract");

        // Transfer tokens from this contract to the recipient
        token.transfer(_to, _amount);

        // Emit event for the transfer
        emit TokensTransferred(address(this), _to, _amount);
    }
}
