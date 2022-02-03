// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "openzeppelin-contracts/access/Ownable.sol";
import "openzeppelin-contracts/utils/Pausable.sol";
import "./interfaces/IReferenceObligation.sol";

/// @notice A contract that manages the PremiumPool and CoveragePool contracts.
contract Pool is Pausable, Ownable {
  /*** events ***/
  event PoolInitialized(IReferenceObligation _referenceObligationAddress);

  /*** variables ***/
  IReferenceObligation public referenceObligation;

  /*** constructor ***/
  constructor(IReferenceObligation _referenceObligationAddress) {
    referenceObligation = _referenceObligationAddress;
    emit PoolInitialized(_referenceObligationAddress);
  }

  /*** modifiers ***/
  modifier onlyWhenExpired() {
    require(referenceObligation.checkIsExpired() == true, "not expired");
    _;
  }

  /*** view functions ***/

  /*** state-changing functions ***/

  function setReferenceObligation(IReferenceObligation _referenceObligationAddress) external onlyOwner {
    referenceObligation = _referenceObligationAddress;
  }

  /// @notice allows the owner to pause the contract
  function pausePool() external onlyOwner {
    _pause();
  }

  /// @notice allows the owner to unpause the contract
  function unpausePool() external onlyOwner {
    _unpause();
  }

  /// @notice withdraw liquidity and premium
  function withdrawMax(uint256 _lpTokenAmount) public onlyWhenExpired {
    // withdrawCoverage();
    // withdrawPremium();
  }
}
