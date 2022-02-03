import { DAI_TOKEN_DECIMALS } from "../utils/constants";
import { expect } from "chai";
import { Signer } from "ethers";
import { BigNumber } from "@ethersproject/bignumber";
import { PremiumPayouts } from "../../typechain/PremiumPayouts";
import { ethers } from "hardhat";

const premiumPayouts: Function = (
  deployer: Signer,
  premiumPayouts: PremiumPayouts
) => {
  describe("PremiumPayouts", () => {
    it("...should set the correct initial values", async () => {});

    it("...premium should be greater than", async () => {
    });
  });
};

export { premiumPayouts };
