import _ from 'lodash'
import Eth from 'ethjs'

import { Kleros } from 'kleros-api'
import { ERRORS } from '../constants/ERRORS'

export default () => new Promise((resolve, reject) => {
  try {
    let web3Instance

    !_.isUndefined(window.web3) && !_.isUndefined(window.web3.currentProvider)
      ? web3Instance = new Eth(window.web3.currentProvider)
      : web3Instance = new Eth(
          new Eth.providers.HttpProvider(process.env.ETHEREUM_PROVIDER)
        )

    _.isUndefined(web3Instance.currentProvider)
      && reject(new Error({'error': ERRORS.WEB3_NOT_RESOLVED}))

    const klerosInstance = new Kleros(
      web3Instance.currentProvider,
      process.env.STORE_PROVIDER
    )

    resolve(klerosInstance)
  } catch (e) {
    reject(e)
  }
})
