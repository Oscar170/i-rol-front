import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider, Store } from 'react-redux'
import { HashRouter as Router, Route } from 'react-router-dom'
import reducers from './reducers'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

const state = createStore(combineReducers(reducers))

const wrapApp = (AppComponent: () => JSX.Element, reduxStore: Store<{}>) => (
  <Provider store={reduxStore}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>
)

ReactDOM.render(
  wrapApp(App, state),
  document.getElementById('root') as HTMLElement
)
registerServiceWorker()
