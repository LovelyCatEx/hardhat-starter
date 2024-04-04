import {run} from "hardhat"

export const verify = async (contractAddress: string, args: any[]) => {
    console.log(`Waiting for verification of contract, address: ${contractAddress}`)

    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args
        })
    } catch (e: any) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log(`${contractAddress} has been verified!`)
        } else {
            console.log(`An error occurred when verifying contract ${contractAddress}`, e)
        }
    }
}