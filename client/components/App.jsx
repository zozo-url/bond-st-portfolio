import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import Home from './Home'
import Info from './Info'
import Edit from './Edit'
import Unit from './Unit'
const App = () => (
  <Router>
    <div className='app-container'>
      <Route exact path='/' component={Home} />
      <Route path='/info' component={Info} />
      <Route path='/edit' component={Edit} />
      <Route path='/unit' component={Unit} />
    </div>
  </Router>
)

export default App
