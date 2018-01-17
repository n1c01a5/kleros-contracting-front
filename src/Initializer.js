import _ from 'lodash'
import React, { PureComponent } from 'react'

import getWeb3 from './utils/getWeb3'
import RequiresMetaMask from './requiresMetaMask'

class Initializer extends PureComponent {
  state = {
    isWeb3Loaded: false,
    isWeb3Unlocked: false
  }

  async componentWillMount() {
    const web3Instance = await getWeb3()

    let accounts = []

    if(!_.isUndefined(web3Instance.accounts)) {
      this.setState({ isWeb3Loaded: true })
      accounts = await web3Instance.accounts()
    }

    if(!_.isEmpty(accounts))
      this.setState({ isWeb3Unlocked: true })
  }

  render() {
    if(!this.state.isWeb3Loaded)
      return <RequiresMetaMask />

    if(!this.state.isWeb3Unlocked)
      return <div>unlock metamask</div>

    return <div>{this.props.children}</div>
  }
}

export default Initializer
