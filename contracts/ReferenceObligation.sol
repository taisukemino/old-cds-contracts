// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "openzeppelin-contracts/access/Ownable.sol";
import "openzeppelin-contracts/utils/Counters.sol";

/// @notice A contract that manages the state of referenceObligation of a swap.
contract ReferenceObligation is Ownable {
  using Counters for Counters.Counter;

  /*** events ***/
  event ReferenceObligationInitialized(
    string _name,
    uint32 _expirationTimestamp,
    bool _isExpired
  );

  /*** struct definition ***/
  struct ReferenceObligation {
    string Name;
    uint32 ExpirationTimestamp;
    bool IsExpired;
  }

  struct Loan {
    string Protocol;
    uint32 ExpirationTimestamp;
    uint256 PrincipalAmountInUSD;
    uint256 InterestAmountInUSD;
    uint256 CollateralAmountInUSD;
    uint256 RepaidAmountInUSD;
    bool IsDefaulted;
  }

  /*** variables ***/
  uint256 internal constant USD_DECIMALS = 1e18;
  ReferenceObligation public referenceObligation;
  Counters.Counter public loanCounter;
  mapping(uint256 => address) public loanIdToLoanAddress;
  mapping(uint256 => Loan) public loanIdToLoan;

  /*** constructor ***/
  constructor(
    string memory _name,
    uint32 _expirationTimestamp,
    bool _isExpired,
    address[] memory loanAddresses,
    Loan[] memory loans
  ) {
    referenceObligation = ReferenceObligation(
      _name,
      _expirationTimestamp,
      _isExpired
    );

    for (uint256 i = 0; i < loans.length; i++) {
      loanIdToLoanAddress[i] = loanAddresses[i];
      loanIdToLoan[i] = loans[i];
      loanCounter.increment();
    }

    // you need to make mapping of loans as well
    emit ReferenceObligationInitialized(
      _name,
      _expirationTimestamp,
      _isExpired
    );
  }

  /*** view functions ***/

  function checkIsExpired() public view returns (bool) {
    return referenceObligation.IsExpired;
  }

  function checkIsDefaulted(uint8 _loanId) public view returns (bool) {
    return loanIdToLoan[_loanId].IsDefaulted;
  }

  function getMaxLoss(uint8 _loanId) public pure returns (uint256) {}

  /*** state-changing functions ***/

  function setIsExpired(bool _isExpired) public onlyOwner {
    referenceObligation.IsExpired = _isExpired;
  }

  function setIsDefaulted(uint8 _loanId, bool _isDefaulted) public onlyOwner {
    loanIdToLoan[_loanId].IsDefaulted = _isDefaulted;
  }
}
