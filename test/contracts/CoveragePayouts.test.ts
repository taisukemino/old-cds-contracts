import { expect } from "chai";
import { Signer } from "ethers";
import { BigNumber } from "@ethersproject/bignumber";
import { CoveragePayouts } from "../../typechain/CoveragePayouts";

const coveragePayouts: Function = (
  deployer: Signer,
  coveragePayouts: CoveragePayouts
) => {
  describe("CoveragePayouts", () => {
    it("...should set the correct initial value", async () => {
      const _globalLimitPercentDenominator: number =
        await coveragePayouts.globalLimitPercentDenominator();
      expect(_globalLimitPercentDenominator).to.eq(20);
    });

    it("...the global limit should be smaller than", async () => {
    });

    it("...the local limit should be greater than", async () => {
    });

    it("...the coverage limit should be smaller than", async () => {
    });

    it("...should allow the global limit percent denominator greater than 100", async () => {
      expect(
        coveragePayouts.setGlobalLimitPercentDenominator(BigNumber.from(101))
      ).to.be.revertedWith("the global limit percent denominator is too big");
    });
  });
};

export { coveragePayouts };
