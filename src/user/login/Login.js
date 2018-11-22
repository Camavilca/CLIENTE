import React, { Component } from 'react';
import { login } from '../../util/APIUtils';
import './Login.css';
import { Link } from 'react-router-dom';
import { ACCESS_TOKEN } from '../../constants';
import ico from '../../icono.png'

/**
 * ----------------------------
 * import de login con apis
 * ------------------------------
 */
import LoginConFaGo from '../../components/user/google-facebook'
import { Container, Row, Col, Fa, Card, CardBody, ModalFooter } from 'mdbreact';

/**fins */


import { Form, Input, Button, Icon, notification } from 'antd';
const FormItem = Form.Item;

class Login extends Component {
    render() {
        const AntWrappedLoginForm = Form.create()(LoginForm)
        return (
            <div className="login-container">
                {/* <h2 className="text-center text-uppercase text-secondary">Inicio de Sesion</h2> */}
                <img 
                    src={ico} 
                    className="logo_app"
                    alt="icono de la aplicacion"/>
                <div className="login-content mb-5">
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
            <Container className="login_estilo">
                <section className="form-elegant formulario">
                    <Row>
                        <Col md="10">
                            <Card>
                                <CardBody className="mx-5">
                                    <div className="text-center">
                                        <h3 className="text-uppercase text-primary my-5 "><strong>Inicio de Sesion</strong></h3>
                                    </div>
                                    <div>
                                        <Form onSubmit={this.handleSubmit} className="login-form">
                                            <FormItem>
                                                {getFieldDecorator('usernameOrEmail', {
                                                    rules: [{ required: true, message: 'Por favor ingrese su nombre de usuario o correo electrónico!' }],
                                                })(
                                                    <Input
                                                        name="usernameOrEmail"
                                                        className="form-control mb-5"
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
                                                        className="form-control mb-5"
                                                        placeholder="Ingrese su contraseña" />
                                                )}
                                            </FormItem>
                                            <FormItem>
                                                <Button
                                                    gradient="blue" 
                                                    rounded 
                                                    htmlType="submit"
                                                    className="my-5 btn btn-primary btn-block z-depth-1a">
                                                    Inicia Sesion
                                                </Button>
                                            </FormItem>
                                        </Form>
                                        <LoginConFaGo />
                                    </div>
                                </CardBody>
                                <ModalFooter className="mx-5 pt-3 mb-1">
                                    <p className="font-small grey-text d-flex justify-content-end">O <a href="/signup" className="blue-text ml-1"> Registrate</a></p>
                                </ModalFooter>
                            </Card>
                        </Col>
                    </Row>
                </section>
            </Container>
        );
    }
}


export default Login;