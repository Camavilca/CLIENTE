import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import '../styles/nav.css'
import {
    Fa
} from 'mdbreact'
class Nav extends Component {
    constructor() {
        super();
        this.state = {
            profileImage: '',
            fullName: '',
            isLogout: false
        }
        this.onLogout = this.onLogout.bind(this);
    }
    componentWillMount() {
        let fbData = JSON.parse(localStorage.getItem('fbData'));
        let googleData = JSON.parse(localStorage.getItem('googleData'));

        if (!fbData && !googleData) {
            this.setState({ isLogout: true });
        }
        if (fbData) {
            this.setState({ profileImage: fbData.picture, fullName: fbData.name });
        } else if (googleData) {
            this.setState({ profileImage: googleData.picture, fullName: googleData.name });
        }
    }
    onLogout(e) {
        //TODO Setear todas las variables de mi local storage vacias, y redireccionar a inicio
        localStorage.clear();
        this.setState({ isLogout: true });
    }
    render() {
        if (this.state.isLogout) {
            return (<Redirect to="/" />);
        }
        return (
            <div className="Home">
                <nav className="sidebar-navigation">
                    <ul>
                        <li>
                            <img className="circle Home-avatar" src={this.state.profileImage} />
                        </li>
                        <li>{this.state.fullName}</li>
                        <li>
                            <i onClick={this.onLogout} className="Home-logout fa fa-power-off"></i>
                        </li>
                        <hr className="bg-info mx-2"/>
                        <li className="active home">
                            <a href="/home">
                            <Fa
                                icon="home"/>
                            </a>
                            <span className="tooltip">Inicio</span>
                        </li>
                        <li>
                            <a href="/subirDOcs">
                                <Fa
                                    icon="cloud-upload"
                                />
                            </a>
                            <span className="tooltip">Subir archivo</span>
                        </li>
                        <li>
                            <i className="fa fa-newspaper-o"></i>
                            <span className="tooltip">Contactos</span>
                        </li>
                        <li>
                            <i className="fa fa-print"></i>
                            <span className="tooltip">Fax</span>
                        </li>
                        <li>
                            <i className="fa fa-sliders"></i>
                            <span className="tooltip">Settings</span>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Nav;
