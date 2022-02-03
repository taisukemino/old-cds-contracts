import { expect } from "chai";
import { Signer } from "ethers";
import { BigNumber } from "@ethersproject/bignumber";
import { PremiumPricing } from "../../typechain/PremiumPricing";

const premiumPricing: Function = (
  deployer: Signer,
  premiumPricing: PremiumPricing
) => {
  describe("PremiumPricing", () => {
    it("...should set the correct initial values", async () => {
      const _minimumCoverage: BigNumber =
        await premiumPricing.minimumCoverage();
      expect(_minimumCoverage).to.eq("0");
      const _curvature: BigNumber = await premiumPricing.curvature();
      expect(_curvature).to.eq("0");
      const _minimumRiskFactor: BigNumber =
        await premiumPricing.minimumRiskFactor();
      expect(_minimumRiskFactor).to.eq("0");
    });

    it("...the risk factor should be greater than", async () => {});

    it("...the risk factor calculation should fail when it is too small", async () => {});

    it("...the premium should be smaller than", async () => {});
  });
};

export { premiumPricing };
