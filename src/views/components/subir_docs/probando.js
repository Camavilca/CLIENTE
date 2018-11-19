import React, { Component } from 'react';
import axios from 'axios';
import {
    Container,
    Fa,
    Button,
} from 'mdbreact'
class uploadMyFile extends Component {
    constructor() {
        super();
        this.state = {
            titulo: '',
            descripcion: '',
            archivo: null,
            /**DATOS PARA VALIDAR LOS FORMULARIO*/
            loading: '',
            message: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileSelectedHandler = this.fileSelectedHandler.bind(this)
    }
    //**UPLOAD FILE */
    fileSelectedHandler(event) {
        this.setState({
            archivo: event.target.files[0].name
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        const titulo = this.state.titulo
        const descripcion = this.state.descripcion
        const archivo = this.state.archivo
        this.setState({
            loading: true
        })
        /**empiezo */
        // const fd = new FormData();

        /** fin */
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
                console.log(response);
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
    mensageShow() {
        if (this.state.loading) {
            return <p>
                <Fa icon="spinner" pulse size="3x" fixed/>
                <span className="sr-only">Loading...</span>
            </p>
        } else {
            return <p>{this.state.message}</p>
        }
    }
    render() {
        return (
            <Container>
                <div className="card mx-xl-5 ">
                    <div className="card-body ">
                        <form onSubmit={this.handleSubmit}>
                            <p className="h4 text-center py-4 text-uppercase text-secondary">
                                subir archivos
                        </p>
                            <label
                                htmlFor="defaultFormCardNameEx"
                                className="grey-text font-weight-light">
                                Titulo
                        </label>
                            <input
                                type="text"
                                name="titulo"
                                className="form-control"
                                value={this.state.title}
                                onChange={this.handleInputChange}
                                placeholder="Ingrese el titulo del archivo"
                                required
                            />
                            <br />
                            <label
                                className="grey-text font-weight-light text-left">
                                Descripción</label>
                            <input
                                type="text"
                                name="descripcion"
                                className="form-control"
                                value={this.state.description}
                                onChange={this.handleInputChange}
                                placeholder="Descripcion"
                                required
                            />
                            <input
                                style={{ display: 'none' }}
                                type="file"
                                className="form-control"
                                onChange={this.fileSelectedHandler}
                                required
                                ref={fileInput => this.fileInput = fileInput}
                            />
                            <Button
                                onClick={() => this.fileInput.click()}
                                outline
                                className="my-5"
                               
                            >
                                <Fa
                                    icon="cloud-upload"
                                    size="3x"
                                    className="m-5"
                                >
                                </Fa>
                            </Button>
                            <br />
                            <Button
                                type="submit"
                                className="my-5 align-text-bottom"
                                outline
                                color="primary">
                                Guardar <Fa icon="paper-plane-o">
                                </Fa>
                            </Button>
                        </form>
                        {this.mensageShow()}
                    </div>
                </div>
            </Container>
        )
    }
}
export default uploadMyFile;
