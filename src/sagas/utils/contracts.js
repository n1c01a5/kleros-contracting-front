import unit from 'ethjs-unit'

import getWeb3 from '../../utils/getWeb3'
import kleros from '../../utils/kleros'

export const fetchContracts = async () => {
  try {
    const web3Instance = await getWeb3()

    const accounts = await web3Instance.accounts()

    const klerosInstance = await kleros()

    return await klerosInstance
      .arbitrator
      .getContractsForUser(accounts[0].toLowerCase())
  } catch (e) {
    console.log(e)
  }
}

// TODO fix this fn
export const fetchContract = async () => {
  try {
    const web3Instance = await getWeb3()

    const accounts = await web3Instance.accounts()
    
    const klerosInstance = await kleros()

    return await klerosInstance
      .arbitrator
      .getContract(accounts[0].toLowerCase())
  } catch (e) {
    console.log(e)
  }
}
