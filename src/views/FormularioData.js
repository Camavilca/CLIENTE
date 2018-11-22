import React, { Component } from 'react'
// import FormularioDocs from '../components/subir_docs/FormularioDocs'
import FormularioDocs from '../components/subir_docs/probando'
import Nav from '../views/Nav'

class FormData extends Component{
    
    render(){
        return(
            <div>
                <Nav/>
                <h2>Formulario para la subida de archivos</h2>
                <div style={{marginLeft:'15rem'}}>
                <FormularioDocs/>
                </div>
            </div>
        )
    }
}

export default FormData;