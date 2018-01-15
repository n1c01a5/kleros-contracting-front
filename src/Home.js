import React, { PureComponent } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { requestBalance } from './actions'
import { requestApiData } from './actions'

class Home extends PureComponent {
  componentDidMount() {
    this.props.requestBalance()
  }

  render() {
    const { balance } = this.props
    return balance
      ? <h1>
          {balance}
        </h1>
      : <h1>loading...</h1>;
  }
}

const mapStateToProps = state => ({ balance: state.balance })

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestBalance }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
