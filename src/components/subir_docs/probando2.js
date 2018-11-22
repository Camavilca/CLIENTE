import React, { Component } from 'react';
import axios from 'axios';

class uploadMyFile extends Component {
    //**UPLOAD FILE */
    state = {
        archivo:null
    }
    fileSelectedHandler = event => {
        this.setState({
            archivo: event.target.files[0]
        })
    }
    handleSubmit = () => {
        const data = new FormData();
        data.append('archivo', this.state.archivo , this.state.archivo.name);
        axios.post('https://llama-camavilca.c9users.io/v1/documento',data)
            .then(response =>{
                console.log(response);
            })
            .catch(err =>{

            })
    }

    render() {
        return (
            <div className="card">
                <div className="card-header bg-info">
                    ingreso de tareas
                </div>
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input
                            type="file"
                            className="form-control"
                            onChange={this.fileSelectedHandler}
                            placeholder="Description"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Guardar
                     </button>
                </form>
            </div>
        )
    }
}
export default uploadMyFile;
