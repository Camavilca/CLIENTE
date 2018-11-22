import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getDocumentos } from '../actions/index'
import DocsPage from '../components/doc/DocsPage'
import Buscar from '../components/buscar/Buscar'


import Nav from '../views/Nav'


import {
  Container,
  Row
} from 'mdbreact'
class Home extends Component {
  componentWillMount() {
    this.props.getDocumentos();
  }

  render() {
    let documen = [];
    if (this.props.documentos.data) {
      documen = this.props.documentos.data.map((currentValue, index, array) => {
        return (
          <DocsPage
            key={index}
            titulo={currentValue.titulo}
            descripcion={currentValue.descripcion}
            archivo={currentValue.archivo}
            id={currentValue.id}
            fechaCreacion={currentValue.fechaCreacion}
          />
        );
      })
    }
    return (
      <div className="">
        <div>
          {/* <Nav/> */}
        </div>
        <div style={{marginLeft:'12rem'}}>
        <section className="text-center">
          <Buscar /> 
          <Row>
            {documen}
          </Row>
        </section>
        </div>
      </div>
    );
  }
}
//Esta funcion convierte el valor de la store que yo quiero
// en propiedades para el componente
function mapStateToProps(state) {
  return {
    documentos: state.getDocumentos
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getDocumentos
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
