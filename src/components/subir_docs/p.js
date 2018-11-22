import React, { Component } from 'react';
import axios from 'axios'

class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            titulo: '',
            descripcion: '',
            archivo: '',
            /**DATOS PARA VALIDAR LOS FORMULARIO*/
            loading: '',
            message: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const titulo = this.state.titulo
        const descripcion = this.state.descripcion
        const archivo = this.state.archivo

        this.setState({
            loading: true
        })
        const data = {
            titulo,
            descripcion,
            archivo
        }
        axios.post('https://llama-camavilca.c9users.io/v1/documento', data)
            .then(response => {
                this.setState({
                    loading: false,
                    message: response.data
                })
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    loading: false
                })
            })
    }

    handleInputChange(e) {
        const { value, name } = e.target;
        console.log(value, name);
        this.setState({
            [name]: value
        });
        console.log(this.state);
    }

    handleUploadFile(e){
        const contenido = new FormData();
        contenido.append('file', e.target.files[0]);
        contenido.append('name','som value user types');
        contenido.append('descripcion','sone caule user type');
        console.log("ANTESE DE LOG")
        console.log(contenido);
        console.log("DESPUES DEL LOG");
        
        
        axios.post('https://llama-camavilca.c9users.io/v1/documento',contenido).then((response)=>{
            console.log('El archivo es'+response)
        })
    }
    mensageShow() {
        if (this.state.loading) {
            return <p>Loading.........</p>
        } else {
            return <p>{this.state.message}</p>
        }
    }
    render() {
        return (
            <div className="card">
                <div className="card-header bg-info">
                    ingreso de tareas
        </div>
                <form onSubmit={this.handleSubmit} className="card-body">
                    <div className="form-group">
                        <input
                            type="text"
                            name="titulo"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.handleInputChange}
                            placeholder="Title"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="descripcion"
                            className="form-control"
                            value={this.state.description}
                            onChange={this.handleInputChange}
                            placeholder="Description"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="file"
                            name="archivo"
                            className="form-control"
                            onChange={this.handleUploadFile}
                            placeholder="Description"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Guardar
          </button>
                </form>
                {this.mensageShow()}
            </div>
        )
    }

}

export default TodoForm;