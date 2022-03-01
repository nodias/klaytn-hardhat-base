import { Contract } from "ethers";
import { ethers } from "hardhat";

async function main() {
    const myContract = await ethers.getContractFactory("GatherSYL");

    const signers = await ethers.getSigners();
    const accounts = signers.map(s => s.address);

    const deployed = await myContract.deploy();
    console.log('MyContracts set : ' + deployed.address)
};

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });