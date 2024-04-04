import {SimpleStorage} from "../typechain-types"
import {deployments, ethers, getNamedAccounts, network} from "hardhat"
import {assert, expect} from "chai"
import {hasNetwork, networkConfig} from "../network-config";

const chainId = network.config.chainId!

const contractName = "SimpleStorage"

const tests = () => {
  describe(contractName, async () => {
    let contract: SimpleStorage
    let deployer: string

    beforeEach(async () => {
      await deployments.fixture(["all"])

      contract = await ethers.getContract(contractName, deployer)
      deployer = (await getNamedAccounts()).deployer
    })

    it("Default number should be 0", async () => {
      const number = await contract.getNumber()
      assert.equal(number.toString(), "0")
    })

    it("Store & Get", async () => {
      const tx = await contract.setNumber(1)
      await tx.wait(1)
      assert.equal((await contract.getNumber()).toString(), "1")
    })
  })
}


if (!hasNetwork(chainId) || !networkConfig[chainId].virtual) {
  console.warn("The unit test will be skipped")
  describe.skip
} else {
  tests()
}
