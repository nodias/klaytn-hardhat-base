import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const func: DeployFunction = async function ({ deployments, getNamedAccounts }: HardhatRuntimeEnvironment) {
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();

    await deploy('MyContract0', {
        contract: 'MyContract0',
        from: deployer,
        args: [],
        log: true,
    });
}
export default func;
func.tags = ['00', 'MyContract0'];

