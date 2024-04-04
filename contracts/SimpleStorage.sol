// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

contract SimpleStorage {
    uint256 private s_number;

    function setNumber(uint256 _num) public {
        s_number = _num;
    }

    function getNumber() public view returns(uint256) {
        return s_number;
    }
}