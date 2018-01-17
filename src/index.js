import React from 'react'
import ReactDOM from 'react-dom'

import App from './bootstrap/App'
import registerServiceWorker from './bootstrap/registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

registerServiceWorker()
