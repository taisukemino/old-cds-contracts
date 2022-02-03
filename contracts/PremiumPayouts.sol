// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./PremiumPool.sol";
import "./interfaces/ILPToken.sol";

/// @notice A contract that calculates and makes payouts to liquidity providers. The payouts include both premium and investment returns.
contract PremiumPayouts is PremiumPool {
  /*** variables ***/
  ILPToken public lpToken;

  /*** constructor ***/
  constructor(
    IERC20 _paymentTokenAddress,
    IReferenceObligation _referenceObligationAddress,
    ILPToken _lpTokenAddress
  ) PremiumPool(_paymentTokenAddress, _referenceObligationAddress) {
    lpToken = _lpTokenAddress;
  }

  /*** view functions ***/
  /// @dev scale by 1e18
  function getPremiumAmount() internal view returns (uint256) {
    uint256 _premiumPoolTotal = premiumPoolTotal();
    uint256 _lpTokenBalance = lpToken.balanceOf(msg.sender);
    uint256 _lpTokenTotal = lpToken.totalSupply();
    uint256 _claimablePremium = (_premiumPoolTotal * _lpTokenBalance * 1e18) /
      _lpTokenTotal;
    return _claimablePremium;
  }
}
