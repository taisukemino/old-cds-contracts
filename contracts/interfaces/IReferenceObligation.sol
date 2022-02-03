// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IReferenceObligation {
  function checkIsDefaulted(uint8 _loanId) external view returns (bool);

  function checkIsExpired() external view returns (bool);

  function getMaxLoss(uint8 _loanId) external pure returns (uint256);

  function loanIdCounter() external view returns (uint256 _value);

  function loanIdToLoan(uint256)
    external
    view
    returns (
      string memory Protocol,
      uint32 ExpirationTimestamp,
      uint256 PrincipalAmountInUSD,
      uint256 InterestAmountInUSD,
      uint256 CollateralAmountInUSD,
      uint256 RepaidAmountInUSD,
      bool IsDefaulted
    );

  function loanIdToLoanAddress(uint256) external view returns (address);

  function owner() external view returns (address);

  function referenceObligation()
    external
    view
    returns (
      string memory Name,
      uint32 ExpirationTimestamp,
      bool IsExpired
    );

  function renounceOwnership() external;

  function setIsDefaulted(uint8 _loanId, bool _isDefaulted) external;

  function setIsExpired(bool _isExpired) external;

  function transferOwnership(address newOwner) external;
}
