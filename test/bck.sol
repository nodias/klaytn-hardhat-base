//SPDX-License-Identifier: Unlicense
pragma solidity 0.5.6;

import "./klaytn-contracts/token/KIP7/KIP7.sol";

contract AssetToken is KIP7 {
    constructor(
        uint totalSupply_,
        string memory name_,
        string memory symbol_
    ) public KIP7() {
        _mint(msg.sender, totalSupply_);
    }
}
