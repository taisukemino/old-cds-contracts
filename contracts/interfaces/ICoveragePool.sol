// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface ICoveragePool {
  function addLiquidity(uint256 _liquidityAmount) external;

  function allowance(address owner, address spender)
    external
    view
    returns (uint256);

  function approve(address spender, uint256 amount) external returns (bool);

  function balanceOf(address account) external view returns (uint256);

  function claimCoverage(uint8 _loanId, uint256 _coverTokenAmount) external;

  function coveragePoolTotal() external view returns (uint256);

  function decimals() external view returns (uint8);

  function decreaseAllowance(address spender, uint256 subtractedValue)
    external
    returns (bool);

  function increaseAllowance(address spender, uint256 addedValue)
    external
    returns (bool);

  function name() external view returns (string memory);

  function owner() external view returns (address);

  function paymentToken() external view returns (address);

  function renounceOwnership() external;

  function setReferenceObligation(address _referenceObligationAddress) external;

  function symbol() external view returns (string memory);

  function totalSupply() external view returns (uint256);

  function referenceObligation() external view returns (address);

  function transfer(address recipient, uint256 amount) external returns (bool);

  function transferFrom(
    address sender,
    address recipient,
    uint256 amount
  ) external returns (bool);

  function transferOwnership(address newOwner) external;

  function withdrawCoverage() external;
}
