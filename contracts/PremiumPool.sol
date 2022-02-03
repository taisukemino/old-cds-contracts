// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "openzeppelin-contracts/access/Ownable.sol";
import "openzeppelin-contracts/token/ERC20/IERC20.sol";
import "openzeppelin-contracts/utils/Counters.sol";
import "./interfaces/IReferenceObligation.sol";

/// @notice A contract for a premium pool.
contract PremiumPool is Ownable {
  using Counters for Counters.Counter;

  /*** events ***/
  event PremiumPoolInitialized(
    IERC20 _paymentTokenAddress,
    IReferenceObligation _referenceObligationAddress
  );
  event AccountCreated(address _owner, uint256 _accountId);
  event CoverageBought(address _buyer, uint256 _premiumAmount);
  event PremiumWithdrawn(address _withdrawer, uint256 _premiumAmount);

  /*** struct definition ***/
  struct Account {
    uint256 Id;
    uint8 LoanId;
    uint256 PremiumAmount;
    address Owner;
  }

  /*** variables ***/
  IERC20 public paymentToken;
  IReferenceObligation public referenceObligation;

  uint256 private _premiumPoolTotal;
  Counters.Counter public accountIdCounter;
  mapping(address => uint256) public ownerAddressToAccountId;
  mapping(uint256 => Account) public accountIdToAccount;
  mapping(uint8 => uint256) public loanIdToPremiumPoolAmount;

  /*** constructor ***/
  /// @dev counter starts in 1 as 0 is reserved for empty objects
  constructor(IERC20 _paymentTokenAddress, IReferenceObligation _referenceObligationAddress) {
    paymentToken = _paymentTokenAddress;
    referenceObligation = _referenceObligationAddress;
    accountIdCounter.increment();
    emit PremiumPoolInitialized(_paymentTokenAddress, _referenceObligationAddress);
  }

  /*** modifiers ***/
  modifier accountExists() {
    require(
      ownerAddressToAccountId[msg.sender] != 0,
      "PremiumPool::accountExists: no account created"
    );
    _;
  }

  modifier onlyWhenExpired() {
    require(referenceObligation.checkIsExpired() == true, "not expired");
    _;
  }

  modifier onlyWhenNotExpired() {
    require(referenceObligation.checkIsExpired() == false, "expired");
    _;
  }

  modifier onlyWhenNotDefault(uint8 _loanId) {
    require(referenceObligation.checkIsDefaulted(_loanId) == false, "defaulted");
    _;
  }

  /*** view functions ***/
  function premiumPoolTotal() internal view returns (uint256) {
    return _premiumPoolTotal;
  }

  /*** state-changing functions ***/

  function setReferenceObligation(IReferenceObligation _referenceObligationAddress) external onlyOwner {
    referenceObligation = _referenceObligationAddress;
  }

  function createAccount(uint8 _loanId) external {
    require(
      ownerAddressToAccountId[msg.sender] == 0,
      "PremiumPool::createAccount: account already created"
    );
    uint256 _id = accountIdCounter.current();
    ownerAddressToAccountId[msg.sender] = _id;
    Account memory _account = Account(_id, _loanId, 0, msg.sender);
    accountIdToAccount[_id] = _account;
    accountIdCounter.increment();
    emit AccountCreated(msg.sender, _id);
  }

  /**
   * @dev the paymentToken must be approved first
   */
  function buyCoverage(uint8 _loanId, uint256 _premiumAmount)
    external
    accountExists
    onlyWhenNotExpired
    onlyWhenNotDefault(_loanId)
  {
    uint256 _accountId = ownerAddressToAccountId[msg.sender];
    accountIdToAccount[_accountId].PremiumAmount += _premiumAmount;
    paymentToken.transferFrom(msg.sender, address(this), _premiumAmount);
    loanIdToPremiumPoolAmount[_loanId] += _premiumAmount;
    _premiumPoolTotal += _premiumAmount;
    emit CoverageBought(msg.sender, _premiumAmount);
  }

  /// @notice a liquidity provider can withdraw premium
  function withdrawPremium() external accountExists onlyWhenExpired {
    // uint256 _premiumAmount = getPremiumAmount();
    // paymentToken.transferFrom(address(this), msg.sender, _premiumAmount);
  }
}
