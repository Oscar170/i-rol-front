import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Home from './screens/Home'

const App = () => (
  <Router>
    <Route path="/" component={Home} />
  </Router>
)

export default App
