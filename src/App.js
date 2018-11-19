import React, { Component } from 'react';
import { Route, Router } from 'react-router'
import './App.css'
import Home from './views/home/Home'
import PropTypes from 'prop-types'
import DocumentoDetail from './views/home/DocsDetail'
import FormData from './views/home/FormularioData'
import Inicio from './views/home/Inicio'

class App extends Component {
  render() {
    return (
      <Router history={ this.props.history }>
        <div className="App">
          <Route exact path="/" component={ Inicio }/>
          <Route exact path="/home" component={ Home }/>
          <Route path="/detail/:docuId" component={ DocumentoDetail }/>
          <Route path="/subirDocs" component={FormData}/>
        </div>
      </Router>
    );
  }
}
App.propTypes = {
  history: PropTypes.any.isRequired
}

export default App;
