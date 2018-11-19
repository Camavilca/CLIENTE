import React, { Component } from 'react'
// import FormularioDocs from '../components/subir_docs/FormularioDocs'
import FormularioDocs from '../components/subir_docs/probando'

class FormData extends Component{
    
    render(){
        return(
            <div>
                <h2>Formulario para la subida de archivos</h2>
                <FormularioDocs/>
            </div>
        )
    }
}

export default FormData;