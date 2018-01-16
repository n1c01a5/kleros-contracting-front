import getWeb3 from '../../utils/getWeb3'
import kleros from '../../utils/kleros'

export const fetchContracts = async () => {
  try {
    const web3Instance = await getWeb3()

    const accounts = await web3Instance.accounts()

    const klerosInstance = await kleros()

    const contracts =  await klerosInstance
      .arbitrator
      .getContractsForUser(accounts[0].toLowerCase())

    return contracts
  } catch (e) {
    console.log(e)
  }
}

// TODO fix this fn with the good request/method
export const fetchContract = async (address) => {
  try {
    const klerosInstance = await kleros()

    return await klerosInstance
      .arbitrator
      .getContract(address)
  } catch (e) {
    console.log(e)
  }
}
