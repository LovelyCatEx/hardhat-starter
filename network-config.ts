export type NetworkConfig = {
  virtual: boolean
  chainId: number
  name: string
  blockConfirmations: number
}

export type ExtraNetworkConfig = {

}

export const networkConfig: {[key: number]: NetworkConfig & ExtraNetworkConfig} = {
  31337: {
    virtual: true,
    chainId: 31337,
    name: "Local Hardhat Node",
    blockConfirmations: 1
  },
  11155111: {
    virtual: false,
    chainId: 11155111,
    name: "Sepolia Test Net",
    blockConfirmations: 3
  }
}

export function hasNetwork(chainId: number) {
  return networkConfig.hasOwnProperty(chainId)
}