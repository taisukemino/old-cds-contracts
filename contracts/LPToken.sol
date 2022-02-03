// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "openzeppelin-contracts/token/ERC20/ERC20.sol";

/// @notice A contract for a liquidity token. This token keeps track of the amount of liquidity provided by a liquidity provider. The amount of token is also used to distribute premium and investment returns.
contract LPToken is ERC20 {
  /*** events ***/
  event LPTokenInitialized(string _name, string _symbol);

  /*** constructor ***/
  constructor(string memory _name, string memory _symbol)
    ERC20(_name, _symbol)
  {
    emit LPTokenInitialized(_name, _symbol);
  }

  /*** state-changing functions ***/
  function mint(address _to, uint256 _amount) internal {
    _mint(_to, _amount);
  }

  function burn(address _from, uint256 _amount) internal {
    _burn(_from, _amount);
  }
}
