import { expect } from "chai";
import { Contract, Signer } from "ethers";
import { ethers } from "hardhat";
import { BigNumber } from "@ethersproject/bignumber";
import {
  DAI_TOKEN_ADDRESS,
  DAI_TOKEN_DECIMALS,
  DAI_TOKEN_ABI
} from "../utils/constants";
import { CoveragePool } from "../../typechain/CoveragePool";
import { ReferenceObligation } from "../../typechain/ReferenceObligation";

const coveragePool: Function = (
  deployer: Signer,
  coveragePool: CoveragePool,
  referenceObligation: ReferenceObligation
) => {
  describe("CoveragePool", () => {
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
      const name: string = await coveragePool.name();
      expect(name).to.eq("lpToken");
      const _symbol: string = await coveragePool.symbol();
      expect(_symbol).to.eq("LPT");
      const _paymentTokenAddress: string = await coveragePool.paymentToken();
      expect(_paymentTokenAddress).to.eq(DAI_TOKEN_ADDRESS);
    });

    it("...should approve 100 DAI to be transferred by the CoveragePool contract", async () => {
      await daiToken.approve(
        coveragePool.address,
        BigNumber.from(100).mul(DAI_TOKEN_DECIMALS)
      );
      const _allowanceAmount: number = await daiToken.allowance(
        deployerAddress,
        coveragePool.address
      );
      await expect(_allowanceAmount.toString()).to.eq(
        BigNumber.from(100).mul(DAI_TOKEN_DECIMALS).toString()
      );
    });

    it("...should expire the referenceObligation", async () => {
      await referenceObligation.setIsExpired(true);
      const _checkIsExpired: boolean = await referenceObligation.checkIsExpired();
      expect(_checkIsExpired.toString()).to.eq("true");
    });

    it("...shouldn't allow contract calls if a swap is expired", async () => {
      await expect(
        coveragePool.addLiquidity(BigNumber.from(50).mul(DAI_TOKEN_DECIMALS))
      ).to.be.revertedWith("expired");
    });

    it("...shouldn't allow contract calls if a loan is NOT defaulted", async () => {});

    it("...should roll back the expired referenceObligation value", async () => {
      await referenceObligation.setIsExpired(false);
      const _checkIsExpired: boolean = await referenceObligation.checkIsExpired();
      expect(_checkIsExpired.toString()).to.eq("false");
    });

    it("...should add liquidity", async () => {
      await coveragePool.addLiquidity(
        BigNumber.from(50).mul(DAI_TOKEN_DECIMALS)
      );
      const _coveragePoolTotal: BigNumber =
        await coveragePool.coveragePoolTotal();
      expect(_coveragePoolTotal).to.eq(
        BigNumber.from(50).mul(DAI_TOKEN_DECIMALS)
      );
    });

    it("...should claim coverage", async () => {});

    it("...should withdraw coverage", async () => {});
  });
};

export { coveragePool };
