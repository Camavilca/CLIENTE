import React, { Component } from 'react';
import { login } from '../../util/APIUtils';
import './Login.css';
import { Link } from 'react-router-dom';
import { ACCESS_TOKEN } from '../../constants';


/**
 * ----------------------------
 * import de login con apis
 * ------------------------------
 */
import LoginConFaGo from '../../components/user/google-facebook'

/**fins */


import { Form, Input, Button, Icon, notification } from 'antd';
const FormItem = Form.Item;

class Login extends Component {
    render() {
        const AntWrappedLoginForm = Form.create()(LoginForm)
        return (
            <div className="login-container">
                <h2 className="text-center text-uppercase text-secondary">Inicio de Sesion</h2>
                <div className="login-content my-5">
                    <AntWrappedLoginForm onLogin={this.props.onLogin} />
                </div>
            </div>
        );
    }
}

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const loginRequest = Object.assign({}, values);
                login(loginRequest)
                    .then(response => {
                        localStorage.setItem(ACCESS_TOKEN, response.accessToken);
                        this.props.onLogin();
                    }).catch(error => {
                        if (error.status === 401) {
                            notification.error({
                                message: 'Integrador CMS',
                                description: 'Su nombre de usuario o contraseña es incorrecta. ¡Inténtalo de nuevo!'
                            });
                        } else {
                            notification.error({
                                message: 'Los datos no coinciden',
                                description: error.message || 'Su nombre de usuario o contraseña es incorrecta. Inténtalo de nuevo'
                            });
                        }
                    });
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        {getFieldDecorator('usernameOrEmail', {
                            rules: [{ required: true, message: 'Por favor ingrese su nombre de usuario o correo electrónico!' }],
                        })(
                            <Input
                                name="usernameOrEmail"
                                className="form-control"
                                placeholder="Ingrese su usuario o correo" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Por favor ingrese su contraseña!' }],
                        })(
                            <Input
                                name="password"
                                type="password"
                                className="form-control"
                                placeholder="Ingrese su contraseña" />
                        )}
                    </FormItem>
                    <FormItem>
                        <Button 
                            outline
                            htmlType="submit" 
                            className="btn btn-primary btn-outline">
                            Inicia Sesion
                        </Button>
                        O <Link to="/signup">Registrate ahora</Link>
                    </FormItem>
                </Form>
                <LoginConFaGo />
            </div>
        );
    }
}


export default Login;