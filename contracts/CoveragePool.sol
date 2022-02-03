// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "openzeppelin-contracts/access/Ownable.sol";
import "openzeppelin-contracts/token/ERC20/IERC20.sol";
import "./LPToken.sol";
import "./interfaces/IReferenceObligation.sol";

/// @notice A contract for a coverage pool.
contract CoveragePool is LPToken, Ownable {
  /*** events ***/
  event CoveragePoolInitialized(
    string _name,
    string _symbol,
    IERC20 _paymentTokenAddress,
    IReferenceObligation _referenceObligationAddress
  );
  event LiquidityAdded(address liquidityProvider, uint256 _liquidityAmount);
  event LiquidityWithdrawn(address withdrawer, uint256 _liquidityAmount);
  event CoverageClaimed(address claimer, uint256 _coverageAmount);

  /*** struct definition ***/

  /*** variables ***/
  IERC20 public paymentToken;
  IReferenceObligation public referenceObligation;

  uint256 private _coveragePoolTotal;

  /*** constructor ***/
  constructor(
    string memory _name,
    string memory _symbol,
    IERC20 _paymentTokenAddress,
    IReferenceObligation _referenceObligationAddress
  ) LPToken(_name, _symbol) {
    paymentToken = _paymentTokenAddress;
    referenceObligation = _referenceObligationAddress;
    emit CoveragePoolInitialized(
      _name,
      _symbol,
      _paymentTokenAddress,
      _referenceObligationAddress
    );
  }

  /*** modifiers ***/

  modifier onlyWhenDefault(uint8 _loanId) {
    require(referenceObligation.checkIsDefaulted(_loanId) == true, "not defaulted");
    _;
  }

  modifier onlyWhenNotExpired() {
    require(referenceObligation.checkIsExpired() == false, "expired");
    _;
  }

  /*** view functions ***/
  function coveragePoolTotal() external view returns (uint256) {
    return _coveragePoolTotal;
  }

  /*** state-changing functions ***/

  function setReferenceObligation(IReferenceObligation _referenceObligationAddress) external onlyOwner {
    referenceObligation = _referenceObligationAddress;
  }

  /**
   * @dev the paymentToken must be approved first
   */
  function addLiquidity(uint256 _liquidityAmount) external onlyWhenNotExpired {
    paymentToken.transferFrom(msg.sender, address(this), _liquidityAmount);
    mint(msg.sender, _liquidityAmount);
    _coveragePoolTotal += _liquidityAmount;
    emit LiquidityAdded(msg.sender, _liquidityAmount);
  }

  function claimCoverage(uint8 _loanId, uint256 _coverTokenAmount)
    public
    onlyWhenDefault(_loanId)
  {}

  /// @notice lp can withdraw liquidity when it is expired
  function withdrawCoverage() external {}
}
