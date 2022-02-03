import { expect } from "chai";
import { BigNumber, Signer } from "ethers";
import { ReferenceObligation } from "../../typechain/ReferenceObligation";

const referenceObligation: Function = (
  deployer: Signer,
  account1: Signer,
  referenceObligation: ReferenceObligation
) => {
  describe("ReferenceObligation", () => {
    it("...should set the correct initial values", async () => {
      const _referenceObligation: [string, number, boolean] =
        await referenceObligation.referenceObligation();
      const _name: string = await _referenceObligation[0].toString();
      expect(_name).to.eq("Goldfinch");
      const _expirationTimestamp: string =
        await _referenceObligation[1].toString();
      expect(_expirationTimestamp).to.eq("1648929100");
      const _isExpired: boolean = await _referenceObligation[2];
      expect(_isExpired).to.eq(false);

      const loanIdCounter: string = await (
        await referenceObligation.loanIdCounter()
      ).toString();
      expect(loanIdCounter).to.eq("3");
      const firstLoan = await (
        await referenceObligation.loanIdToLoan(0)
      ).toString();
      console.log("firstLoan ==>", firstLoan);
    });

    it("...calculate the max loss", async () => {});

    it("...should expire the referenceObligation", async () => {
      await referenceObligation.setIsExpired(true);
      const _checkIsExpired: boolean =
        await referenceObligation.checkIsExpired();
      expect(_checkIsExpired).to.eq(true);
    });

    it("...should default the first loan", async () => {
      await referenceObligation.setIsDefaulted(0, true);
      const _checkIsDefaulted: boolean =
        await referenceObligation.checkIsDefaulted(0);
      expect(_checkIsDefaulted).to.eq(true);
    });
  });
};

export { referenceObligation };
