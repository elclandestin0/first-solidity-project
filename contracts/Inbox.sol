// SPDX-License-Identifier: MIT
pragma solidity ^0.4.17;

contract Inbox {
    string public message;
    
    function Inbox(string memory initialMessage) public {
        message = initialMessage;
    }
    
    // function name(arguments) + function type + return types
    function setMessage(string memory _message) public {
        message = _message;
    }
}