import { assert } from "chai";
import { Contract, ContractFactory } from "ethers";
import { ethers, upgrades } from "hardhat";

const upgrade: Function = () => {
  describe("Upgrade", () => {
    it("works before and after upgrading", async function () {
      const Pool: ContractFactory = await ethers.getContractFactory("Pool");
      console.log("Deploying Pool...");
      const pool: Contract = await upgrades.deployProxy(Pool, [
        "0.0",
        "Maple",
        "1640572612",
        false
      ]);
      await pool.deployed();
      console.log("Pool deployed to:", pool.address);

      const newImplName: string = "";
      const NewImpl: ContractFactory = await ethers.getContractFactory(
        newImplName
      );
      console.log(`Upgrading to ${newImplName}...`);
      await upgrades.upgradeProxy("replace with your proxy address", NewImpl);
      console.log(`Pool upgraded to:`, newImplName);
      assert.strictEqual(await pool.retrieve(), 42);
    });
  });
};

export { upgrade };
