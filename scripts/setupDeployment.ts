import { Contract } from "ethers";
import { ethers } from "hardhat";

async function main() {
    const myContract0 = await ethers.getContractFactory("DSCVote");

    const signers = await ethers.getSigners();
    const accounts = signers.map(s => s.address);

    const deployed = await myContract0.deploy()
    // await setupMyContracts(myContract0, myContract1);
    console.log('MyContracts set : ' + deployed.address)
};

async function setupMyContracts(myContract0: Contract, myContract1: Contract) {
    await myContract0.deploy()
    await myContract1.deploy()
    // set up some connections
    // await myContract0.someMethod(param0, param1, ...);
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });