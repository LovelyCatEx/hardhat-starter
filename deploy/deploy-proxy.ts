// In general, it is not necessary to edit this file
// Add your deployment scripts in @/config/deploy-proxy.config.ts

import {HardhatRuntimeEnvironment} from "hardhat/types";
import {deployProxy, deployProxyAspects} from "../config"

module.exports = async (hre: HardhatRuntimeEnvironment) => {
  const sortedArray: Array<number> = new Array<number>()

  for (let order in deployProxy) {
    sortedArray.push(Number(order))
  }
  sortedArray.sort((a, b) => a-b)

  for (let functionIndex in sortedArray) {
    deployProxyAspects.hasOwnProperty("pre") ?
        deployProxyAspects["pre"](Number(functionIndex), hre) : ""

    deployProxyAspects.hasOwnProperty("post") ?
        deployProxyAspects["post"](Number(functionIndex), hre) : ""
    await deployProxy[functionIndex](hre)

    deployProxyAspects.hasOwnProperty("after") ?
        deployProxyAspects["after"](Number(functionIndex), hre) : ""
  }
}

module.exports.tags = ["all"]