import { expect } from "chai";
import { Signer } from "ethers";
import { BigNumber } from "@ethersproject/bignumber";
import { DAI_TOKEN_DECIMALS } from "../utils/constants";
import { Pool } from "../../typechain/Pool";
import { ReferenceObligation } from "../../typechain/ReferenceObligation";

const pool: Function = (
  deployer: Signer,
  account1: Signer,
  pool: Pool,
  referenceObligation: ReferenceObligation
) => {
  describe("Pool", () => {
    it("...should set the correct initial values", async () => {});

    it("...should expire the referenceObligation", async () => {
      await referenceObligation.setIsExpired(true);
      const _checkIsExpired: boolean =
        await referenceObligation.checkIsExpired();
      expect(_checkIsExpired.toString()).to.eq("true");
    });

    // it("...should allow contract calls if a swap is expired", async () => {
    //   await pool.withdrawMax(BigNumber.from(50).mul(DAI_TOKEN_DECIMALS));
    //   const _checkIsExpired: boolean =
    //     await referenceObligation.checkIsExpired();
    //   expect(_checkIsExpired.toString()).to.eq("true");
    // });

    it("...should allow owner to pause contract", async () => {
      await expect(pool.connect(account1).pausePool()).to.be.revertedWith(
        "Ownable: caller is not the owner"
      );
      await expect(pool.connect(deployer).pausePool()).to.emit(pool, "Paused");
      const _paused: boolean = await pool.paused();
      expect(_paused).to.eq(true);
    });

    it("...should allow owner to unpause contract", async () => {
      await expect(pool.connect(account1).unpausePool()).to.be.revertedWith(
        "Ownable: caller is not the owner"
      );
      await expect(pool.connect(deployer).unpausePool()).to.emit(
        pool,
        "Unpaused"
      );
      const _paused: boolean = await pool.paused();
      expect(_paused).to.eq(false);
    });

    it("...should withdraw liquidity and premium", async () => {});
  });
};

export { pool };
