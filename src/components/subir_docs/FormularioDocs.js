import React, { Component } from 'react'
import axios from 'axios'

class FormularioDocs extends Component {
    constructor() {
        super()
        this.state = {
            /**DATOS PARA EL JSON */
            titulo: "",
            descripcion: "",
            archivo: "",
            /**DATOS PARA VALIDAR */
            loading: false,
            message: ""
        }
    }

    dataChange(ev) {
        this.setState({
            [ev.target.titulo]: ev.target.titulo
        })
    }

    postData(ev) {
        ev.preventDefault()
        const titulo = this.state.titulo
        const descripcion = this.state.descripcion

        this.setState({
            loading: true
        })
        const data = {
            titulo,
            descripcion
        }
        axios.post('https://llama-camavilca.c9users.io/v1/documento',data)
            .then(response => {
                console.log(response);
                this.setState({
                    loading: false,
                    message:response.data
                })
            })
            .catch(err =>{
                console.log(err);
                this.setState({
                    loading:false
                })
            })
    }
    loadOrShowMsg() {
        if (this.state.loading) {
            return <p>loading......</p>
        } else {
            return <p>{this.state.message}</p>
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.postData.bind(this)}>
                    <input type="text" onChange={this.dataChange.bind(this)}  name="titulo" value={this.state.titulo}  placeholder="Ingrese el titulo" />
                    <br />
                    <br />
                    <input type="text" onChange={this.dataChange.bind(this)}  name="titulo" value={this.state.descripcion}  placeholder="Ingrese la descripcion" />
                    <br />
                    <br />
                    <input type="file" name="archivo" value={this.state.archivo} />
                    <br /><br />
                    <input type="submit" />
                </form>
                {this.loadOrShowMsg()}
            </div>
        )
    }
}

export default FormularioDocs;