import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import {store} from 'src/redux/store'
import {Main} from './containers/Main'

import './index.scss'

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root'),
)
