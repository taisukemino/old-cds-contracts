import {
  DAI_TOKEN_ADDRESS,
  DAI_TOKEN_DECIMALS,
  DAI_TOKEN_ABI
} from "../utils/constants";
import { BigNumber } from "@ethersproject/bignumber";
import { expect } from "chai";
import { Contract, Signer } from "ethers";
import { ethers } from "hardhat";
import { PremiumPool } from "../../typechain/PremiumPool";
import { ReferenceObligation } from "../../typechain/ReferenceObligation";

const premiumPool: Function = (
  deployer: Signer,
  premiumPool: PremiumPool,
  referenceObligation: ReferenceObligation
) => {
  describe("PremiumPool", () => {
    let daiToken: Contract;
    let deployerAddress: string;

    before("instantiate dai token contract", async () => {
      daiToken = await new ethers.Contract(
        DAI_TOKEN_ADDRESS,
        DAI_TOKEN_ABI,
        deployer
      );
    });

    before("get the deployer address", async () => {
      deployerAddress = await deployer.getAddress();
    });

    it("...should set the correct initial values", async () => {
      const _paymentTokenAddress: string = await premiumPool.paymentToken();
      expect(_paymentTokenAddress).to.eq(DAI_TOKEN_ADDRESS);
    });

    it("...should approve 100 DAI to be transferred by the PremiumPool contract", async () => {
      await daiToken.approve(
        premiumPool.address,
        BigNumber.from(100).mul(DAI_TOKEN_DECIMALS)
      );
      const _allowanceAmount: number = await daiToken.allowance(
        deployerAddress,
        premiumPool.address
      );
      await expect(_allowanceAmount.toString()).to.eq(
        BigNumber.from(100).mul(DAI_TOKEN_DECIMALS).toString()
      );
    });

    it("...shouldn't allow contract calls with no user account", async () => {
      expect(
        premiumPool.buyCoverage(6, BigNumber.from(50).mul(DAI_TOKEN_DECIMALS))
      ).to.be.revertedWith("PremiumPool::accountExists: no account created");
    });

    it("...should create a new account", async () => {
      await premiumPool.createAccount(6);
      const _accountId: BigNumber = await premiumPool.ownerAddressToAccountId(
        deployerAddress
      );
      const _account: [BigNumber, number, BigNumber, string] =
        await premiumPool.accountIdToAccount(_accountId);
      const _loanId: number = _account[1];
      expect(_loanId.toString()).to.eq("6");
    });

    it("...should expire the referenceObligation", async () => {
      await referenceObligation.setIsExpired(true);
      const _checkIsExpired: boolean = await referenceObligation.checkIsExpired();
      expect(_checkIsExpired).to.eq(true);
    });

    it("...shouldn't allow contract calls if a swap is expired", async () => {
      // expect(
      //   await premiumPool.buyCoverage(
      //     6,
      //     BigNumber.from(50).mul(DAI_TOKEN_DECIMALS)
      //   )
      // ).to.be.revertedWith("expired");
    });

    it("...should roll back the expired referenceObligation value", async () => {
      await referenceObligation.setIsExpired(false);
      const _checkIsExpired: boolean = await referenceObligation.checkIsExpired();
      expect(_checkIsExpired.toString()).to.eq("false");
    });

    it("...should default the loan", async () => {
      await referenceObligation.setIsDefaulted(6, true);
      const _checkIsDefaulted: boolean = await referenceObligation.checkIsDefaulted(6);
      expect(_checkIsDefaulted.toString()).to.eq("true");
    });

    it("...shouldn't allow contract calls if a loan defaulted", async () => {
      // expect(
      //   await premiumPool.buyCoverage(
      //     6,
      //     BigNumber.from(50).mul(DAI_TOKEN_DECIMALS)
      //   )
      // ).to.be.revertedWith("defaulted");
    });

    it("...should roll back the defaulted loan value", async () => {
      await referenceObligation.setIsDefaulted(6, false);
      const _checkIsDefaulted: boolean = await referenceObligation.checkIsDefaulted(6);
      expect(_checkIsDefaulted.toString()).to.eq("false");
    });

    it("...should not allow to buy more than they own", async () => {});

    it("...should buy coverage", async () => {});

    it("...should withdraw premium", async () => {});
  });
};

export { premiumPool };
