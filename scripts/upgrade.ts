import { ContractFactory } from "ethers";
import { ethers, upgrades } from "hardhat";

async function main() {
  const newImplName: string = "";
  const NewImpl: ContractFactory = await ethers.getContractFactory(newImplName);
  console.log(`Upgrading to ${newImplName}...`);
  await upgrades.upgradeProxy("replace with your proxy address", NewImpl);
  console.log(`Pool upgraded to:`, newImplName);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
