import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getDocumentosById } from '../actions'
import DocsDetailCover from '../components/doc/DocsDetailCover'
import DocsDetailBody from '../components/doc/DocsDetailBody'

class DocsDetail extends Component {
  componentWillMount() {
    this.props.getDocumentosById(this.props.match.params.docuId)
  }
  render() {
    if (this.props.docsDetail.data) {
      const { titulo, descripcion, archivo, id } = this.props.docsDetail.data;
      return (
        <div>
          <DocsDetailCover titulo={titulo} descripcion={descripcion} id={id} />
          <DocsDetailBody archivo={archivo} />
        </div>
      );
    }
    return (<div></div>);
  }
}

function mapStateToProps(state) {
  return {
    docsDetail: state.getDocumentosById
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getDocumentosById
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DocsDetail);
// export default DocsDetail;
