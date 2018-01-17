import React, { PureComponent } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { requestBalance } from '../actions/profile'
import { requestContracts } from '../actions/contracts'

class Home extends PureComponent {
  componentDidMount() {
    const { balance, contracts } = this.props.actions
    balance.requestBalance()
    contracts.requestContracts()
  }

  contract = contract =>
    <div key={contract.address}>
      <h1>
        {contract.address}
      </h1>
    </div>

  render() {
    const { balance = 0, contracts = [] } = this.props
    return (
      <div>
        {
          balance
            ? <h1>
                {balance}
              </h1>
            : <h1>loading...</h1>
        }
        {
          contracts.length
            ? <h1>
                {contracts.map(this.contract)}
              </h1>
            : <h1>loading...</h1>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  balance: state.balance,
  contracts: state.contracts
})

const mapDispatchToProps = dispatch => ({
  actions: {
    balance: bindActionCreators({ requestBalance }, dispatch),
    contracts: bindActionCreators({ requestContracts }, dispatch)
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(Home)
