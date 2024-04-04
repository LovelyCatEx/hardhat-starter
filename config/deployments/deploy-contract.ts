import {HardhatRuntimeEnvironment} from "hardhat/types";
import {network} from "hardhat";
import {hasNetwork, networkConfig} from "../../network-config";
import {verify} from "../../utils/contract-verify";


export default async ({ getNamedAccounts, deployments }: HardhatRuntimeEnvironment) => {
  const chainId = network.config.chainId!

  if (!hasNetwork(chainId)) {
    console.warn(`Contract deployment is skipped because of the NetworkConfig is not defined for the current chainId ${chainId}.`)
    return
  }

  const { deploy } = deployments
  const { deployer } = await getNamedAccounts()

  const deployConfig = networkConfig[chainId]
  console.log("DeployConfig: ", deployConfig)

  const contractConstructorArgs: any[] = []
  const contractDeploy = await deploy("SimpleStorage", {
    from: deployer,
    args: contractConstructorArgs,
    log: true,
    waitConfirmations: deployConfig.blockConfirmations
  })

  console.log(`Contract address: ${contractDeploy.address}`)

  // Contract Verify
  if (!deployConfig.virtual && process.env.ETHER_SCAN_API_KEY) {
    console.log("Verifying raffle contract...")
    await verify(contractDeploy.address, contractConstructorArgs)
  }
}