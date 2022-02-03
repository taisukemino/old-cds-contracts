import { coveragePayouts } from "./contracts/CoveragePayouts.test";
import { coveragePool } from "./contracts/CoveragePool.test";
import { lpToken } from "./contracts/LPToken.test";
import { pool } from "./contracts/Pool.test";
import { premiumPayouts } from "./contracts/PremiumPayouts.test";
import { premiumPool } from "./contracts/PremiumPool.test";
import { premiumPricing } from "./contracts/PremiumPricing.test";
import { referenceObligation } from "./contracts/ReferenceObligation.test";
import {
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
} from "../utils/deploy";

describe("start testing", () => {
  it("deploy contracts", async () => {
    await deployContracts();
  });

  it("run all the tests", () => {
    referenceObligation(deployer, account1, referenceObligationInstance);
    pool(deployer, account1, poolInstance, referenceObligationInstance);
    coveragePool(deployer, coveragePoolInstance, referenceObligationInstance);
    coveragePayouts(deployer, coveragePayoutsInstance);
    premiumPricing(deployer, premiumPricingInstance);
    premiumPayouts();
    lpToken(deployer, account1, coveragePoolInstance);
    premiumPool(deployer, premiumPayoutsInstance, referenceObligationInstance);
  });
});
