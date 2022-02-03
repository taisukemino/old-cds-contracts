import { Contract, ContractFactory, Signer } from "ethers";
import { ethers } from "hardhat";
import { DAI_TOKEN_ADDRESS } from "../test/utils/constants";
import { ReferenceObligation } from "../typechain/ReferenceObligation";
import { Pool } from "../typechain/Pool";
import { CoveragePool } from "../typechain/CoveragePool";
import { CoveragePayouts } from "../typechain/CoveragePayouts";
import { PremiumPricing } from "../typechain/PremiumPricing";
import { PremiumPayouts } from "../typechain/PremiumPayouts";

let deployer: Signer;
let account1: Signer;
let account2: Signer;

let referenceObligationInstance: ReferenceObligation;
let poolInstance: Pool;
let coveragePoolInstance: CoveragePool;
let coveragePayoutsInstance: CoveragePayouts;
let premiumPricingInstance: PremiumPricing;
let premiumPayoutsInstance: PremiumPayouts;

(async () => {
  [deployer, account1, account2] = await ethers.getSigners();
})().catch((err) => {
  console.error(err);
});

const contractFactory: Function = async (contractName: string) => {
  const _contractFactory: ContractFactory = await ethers.getContractFactory(
    contractName,
    deployer
  );
  console.log("Deploying " + contractName + "...");
  return _contractFactory;
};

const deployContracts: Function = async () => {
  try {
    const _referenceObligationFactory = await contractFactory(
      "ReferenceObligation"
    );
    const loanAddresses = [
      "0x0000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000"
    ];
    const loans = [
      {
        Protocol: "Goldfinch",
        ExpirationTimestamp: "1648929100",
        PrincipalAmountInUSD: 1000000,
        InterestAmountInUSD: 150000,
        CollateralAmountInUSD: 0,
        RepaidAmountInUSD: 250000,
        IsDefaulted: false
      },
      {
        Protocol: "Goldfinch",
        ExpirationTimestamp: "1640029100",
        PrincipalAmountInUSD: 1000000,
        InterestAmountInUSD: 150000,
        CollateralAmountInUSD: 0,
        RepaidAmountInUSD: 250000,
        IsDefaulted: false
      },
      {
        Protocol: "Goldfinch",
        ExpirationTimestamp: "1642929100",
        PrincipalAmountInUSD: 1000000,
        InterestAmountInUSD: 150000,
        CollateralAmountInUSD: 0,
        RepaidAmountInUSD: 250000,
        IsDefaulted: false
      }
    ];
    referenceObligationInstance = await _referenceObligationFactory.deploy(
      "Goldfinch",
      1648929100,
      false,
      loanAddresses,
      loans
    );
    await referenceObligationInstance.deployed();
    console.log(
      "ReferenceObligation" + " deployed to:",
      referenceObligationInstance.address
    );

    const _poolFactory = await contractFactory("Pool");
    poolInstance = await _poolFactory.deploy(
      referenceObligationInstance.address
    );
    await referenceObligationInstance.deployed();
    console.log("Pool" + " deployed to:", poolInstance.address);

    const _coveragePoolFactory = await contractFactory("CoveragePool");
    coveragePoolInstance = await _coveragePoolFactory.deploy(
      "lpToken",
      "LPT",
      DAI_TOKEN_ADDRESS,
      referenceObligationInstance.address
    );
    await coveragePoolInstance.deployed();
    console.log("CoveragePool" + " deployed to:", coveragePoolInstance.address);

    const _coveragePayoutsInstance = await contractFactory("CoveragePayouts");
    coveragePayoutsInstance = await _coveragePayoutsInstance.deploy(
      "20",
      coveragePoolInstance.address
    );
    await coveragePayoutsInstance.deployed();
    console.log(
      "CoveragePayouts" + " deployed to:",
      coveragePayoutsInstance.address
    );

    const _premiumPricingInstance = await contractFactory("PremiumPricing");
    premiumPricingInstance = await _premiumPricingInstance.deploy(
      "0",
      "0",
      "0",
      coveragePoolInstance.address,
      referenceObligationInstance.address
    );
    await premiumPricingInstance.deployed();
    console.log(
      "PremiumPricing" + " deployed to:",
      premiumPricingInstance.address
    );

    const _premiumPayoutsInstance = await contractFactory("PremiumPayouts");
    premiumPayoutsInstance = await _premiumPayoutsInstance.deploy(
      DAI_TOKEN_ADDRESS,
      referenceObligationInstance.address,
      coveragePoolInstance.address
    );
    await premiumPayoutsInstance.deployed();
    console.log(
      "PremiumPayouts" + " deployed to:",
      premiumPayoutsInstance.address
    );
  } catch (e) {
    console.log(e);
  }
};

export {
  deployer,
  account1,
  account2,
  deployContracts,
  referenceObligationInstance,
  poolInstance,
  coveragePoolInstance,
  coveragePayoutsInstance,
  premiumPricingInstance,
  premiumPayoutsInstance
};
