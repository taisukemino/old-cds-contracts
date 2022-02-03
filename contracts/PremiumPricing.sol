// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "openzeppelin-contracts/access/Ownable.sol";
import "./interfaces/ICoveragePool.sol";
import "./interfaces/IReferenceObligation.sol";

/// @notice A contract for premium price calculation.
contract PremiumPricing is Ownable {
  /*** events ***/
  event PremiumPricingInitialized(
    uint256 _minimumCoverage,
    uint256 _curvature,
    uint256 _minimumRiskFactor
  );

  /*** struct definition ***/

  /*** variables ***/
  ICoveragePool public coveragePool;
  IReferenceObligation public referenceObligation;

  uint256 public minimumCoverage;
  uint256 public curvature;
  uint256 public minimumRiskFactor;

  /*** constructor ***/
  constructor(
    uint256 _minimumCoverage,
    uint256 _curvature,
    uint256 _minimumRiskFactor,
    ICoveragePool _coveragePoolAddress,
    IReferenceObligation _referenceObligationAddress
  ) {
    minimumCoverage = _minimumCoverage;
    curvature = _curvature;
    minimumRiskFactor = _minimumRiskFactor;
    coveragePool = _coveragePoolAddress;
    referenceObligation = _referenceObligationAddress;
    emit PremiumPricingInitialized(
      _minimumCoverage,
      _curvature,
      _minimumRiskFactor
    );
  }

  /*** modifiers ***/

  /*** view functions ***/
  /// @notice risk_factor = 1 - (coverage_liquidity / minimumCoverage) ** curvature
  /// @notice risk_factor > minimumRiskFactor
  /// @dev scale by 1e18
  function _calculateRiskFactor() private view returns (uint256) {
    uint256 _coverageLiquidity = coveragePool.coveragePoolTotal();
    require(
      _coverageLiquidity > minimumCoverage,
      "not enough liquidity"
    );
    // is 1e18 enough?
    uint256 _safeFactor = ((_coverageLiquidity * 1e18) / minimumCoverage) **
      curvature;
    uint256 _riskFactor = 1 - _safeFactor;
    require(_riskFactor > minimumRiskFactor, "the risk factor is too small");
    return _riskFactor;
  }

  /// @notice premium = risk_factor * time_to_rollover_period * coverage_amount
  function calculatePremium(uint256 _coverageAmount)
    internal
    view
    returns (uint256)
  {
    // uint256 _riskFactor = _calculateRiskFactor();
    // uint256 _timeToRolloverPeriod = referenceObligation.ExpirationTimestamp -
    //   block.timestamp;
    // uint256 _premium = _riskFactor * _timeToRolloverPeriod * _coverageAmount;
    // return _premium;
  }

  /*** state-changing functions ***/
  function setMinimumCoverage(uint256 _minimumCoverage) external onlyOwner {
    minimumCoverage = _minimumCoverage;
  }

  function setCurvature(uint256 _curvature) external onlyOwner {
    curvature = _curvature;
  }

  function setMinimumRiskFactor(uint256 _minimumRiskFactor) external onlyOwner {
    minimumRiskFactor = _minimumRiskFactor;
  }
}
