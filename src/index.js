import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route } from 'react-router-dom'
import './styles/index.scss'

import App      from './views/App'
import Select   from './views/Select_180513'
import Modal    from './views/Modal_180805'


const Routers = () => (
  <Router>
    <React.Fragment>
      <Route exact path="/" component={App} />
      <Route exact path="/select_180513" component={Select} />
      <Route exact path="/modal_180805" component={Modal} />
    </React.Fragment>
  </Router>
)

ReactDOM.render(
  <Routers />,
  document.getElementById('root')
)