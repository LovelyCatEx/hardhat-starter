import {HardhatRuntimeEnvironment} from "hardhat/types";
import {network} from "hardhat";
import {hasNetwork, networkConfig} from "../../network-config"

export default async (hre: HardhatRuntimeEnvironment) => {
  const chainId = network.config.chainId!

  if (!hasNetwork(chainId) || !networkConfig[chainId].virtual) {
    console.warn("Mock deployment is skipped because of the non-virtual property has been set for the current test environment.")
    return
  }

  const { deploy } = hre.deployments
  const { deployer } = await hre.getNamedAccounts()

  // TODO
}