import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import {store} from 'src/redux/store'
import {App} from './containers/App'

import './index.scss'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)