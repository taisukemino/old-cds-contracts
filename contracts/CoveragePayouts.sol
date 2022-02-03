// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "openzeppelin-contracts/access/Ownable.sol";
import "./interfaces/ICoveragePool.sol";

/// @notice A contract that calculates and makes payouts to coverage buyers.
contract CoveragePayouts is Ownable {
  /*** events ***/
  event CoveragePayoutsInitialized(uint8 _globalLimitPercentDenominator);

  /*** variables ***/
  ICoveragePool public coveragePool;

  /// @notice the global limit is 1 / globalLimitPercentDenominator
  uint8 public globalLimitPercentDenominator;

  /*** constructor ***/
  constructor(
    uint8 _globalLimitPercentDenominator,
    ICoveragePool _coveragePoolAddress
  ) {
    globalLimitPercentDenominator = _globalLimitPercentDenominator;
    coveragePool = _coveragePoolAddress;

    emit CoveragePayoutsInitialized(_globalLimitPercentDenominator);
  }

  /*** view functions ***/
  /// @dev scale by 1e18
  function _getGlobalLimit() private view returns (uint256) {
    uint256 _coveragePoolTotal = coveragePool.coveragePoolTotal();
    uint256 _globalLimit = (_coveragePoolTotal * 1e18 * 1) /
      globalLimitPercentDenominator;
    return _globalLimit;
  }

  function _getLocalLimit(uint8 _loanId) private view returns (uint256) {
    // uint256 _loanAmount = referenceObligation.loanIdToLoan[_loanId].LoanAmount;
    // uint256 _collateralAmount = referenceObligation.loanIdToLoan[_loanId].CollateralAmountInUSD;
    // uint256 _localLimit = _loanAmount = _collateralAmount;
    // return _localLimit;
  }

  /// @notice the max coverage amount is the lower of the local and global limits.
  function getCoverageLimit(uint8 _loanId) internal view returns (uint256) {
    uint256 _globalLimit = _getGlobalLimit();
    uint256 _localLimit = _getLocalLimit(_loanId);
    if (_globalLimit > _localLimit) {
      return _localLimit;
    } else {
      return _globalLimit;
    }
  }

  /*** state-changing functions ***/
  function setGlobalLimitPercentDenominator(
    uint8 _globalLimitPercentDenominator
  ) external onlyOwner {
    require(
      _globalLimitPercentDenominator < 100,
      "the global limit percent denominator is too big"
    );
    globalLimitPercentDenominator = _globalLimitPercentDenominator;
  }
}
