import { DAI_TOKEN_DECIMALS } from "../utils/constants";
import { expect } from "chai";
import { Signer } from "ethers";
import { BigNumber } from "@ethersproject/bignumber";
import { LPToken } from "../../typechain/LPToken";
import { ethers } from "hardhat";

const lpToken: Function = (
  deployer: Signer,
  account1: Signer,
  lpToken: LPToken
) => {
  describe("LPToken", () => {
    let deployerAddress: string;
    let account1Address: string;

    before("get addresses", async () => {
      deployerAddress = await deployer.getAddress();
      account1Address = await account1.getAddress();
    });

    it("...should set the correct initial values", async () => {
      const name: string = await lpToken.name();
      expect(name).to.eq("lpToken");
      const _symbol: string = await lpToken.symbol();
      expect(_symbol).to.eq("LPT");
    });

    it("...should have the ERC20 standard functions", async () => {
      const totalSupply = await lpToken.totalSupply();
      expect(totalSupply).to.eq(
        50000000000000000000,
        "Total supply should be 50000000000000000000"
      );
      const balance = await lpToken.balanceOf(deployerAddress);
      expect(balance).to.eq(0, "Balance should be 0");
    });

    it("...should allow to approve tokens", async () => {
      const amount = ethers.utils.parseEther("100");
      await lpToken.approve(account1Address, amount);
      const allowance = await lpToken.allowance(
        deployerAddress,
        account1Address
      );
      expect(allowance).to.eq(amount);
    });

    // write a mock contract to call the internal mint function
    it("...shouldn't allow users to mint", async () => {
      // const amount = ethers.utils.parseEther("1000000");
      // await expect(lpToken.mint(deployerAddress, amount)).to.be.revertedWith(
      //   "LPToken::onlyVault: caller is not a vault"
      // );
    });

    // write a mock contract to call the internal burn function
    it("...shouldn't allow users to burn", async () => {
      // const amount = ethers.utils.parseEther("1000000");
      // await expect(lpToken.burn(account1Address, amount)).to.be.revertedWith(
      //   "LPToken::onlyVault: caller is not a vault"
      // );
    });
  });
};

export { lpToken };
