import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route } from 'react-router-dom'
import './styles/index.scss'

import App                from './views/App'
import Select             from './views/Select/index'
import Modal              from './views/Uncontrolled/Modal'
import Draggable          from './views/Uncontrolled/Draggable'


const Routers = () => (
  <Router>
    <React.Fragment>
      <Route exact path="/" component={App} />
      <Route exact path="/select" component={Select} />
      <Route exact path="/uncontrolled" component={Modal} />
      <Route exact path="/uncontrolled/draggable" component={Draggable} />
    </React.Fragment>
  </Router>
)

ReactDOM.render(
  <Routers />,
  document.getElementById('root')
)