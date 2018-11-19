import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    Fa
} from 'mdbreact'
class DocsDetailCover extends Component {
    render() {
        const { titulo, descripcion , id } = this.props;
        return (
            <div>
                <h2>{titulo + "-------" + id }</h2>
                <hr className="bg-info"/>
                <h4>{descripcion}</h4>
                <a href="/home">
                    <Fa
                        icon="angle-left"
                        size="2x"
                    ></Fa>
               </a>
            </div>
        )
    }
}

DocsDetailCover.propTypes = {
    id: PropTypes.number.isRequired,
    titulo: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
}


export default DocsDetailCover;