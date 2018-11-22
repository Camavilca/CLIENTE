import React, { Component } from 'react';
import { signup, checkUsernameAvailability, checkEmailAvailability } from '../../util/APIUtils';
import './Signup.css';
import { Link } from 'react-router-dom';
import {
    NAME_MIN_LENGTH, NAME_MAX_LENGTH,
    USERNAME_MIN_LENGTH, USERNAME_MAX_LENGTH,
    EMAIL_MAX_LENGTH,
    PASSWORD_MIN_LENGTH, PASSWORD_MAX_LENGTH
} from '../../constants';
import ico from '../../icono.png'

import { Form, Input, Button, notification } from 'antd';
import { Container, Row, Col, Fa, Card, CardBody, ModalFooter } from 'mdbreact';
const FormItem = Form.Item;

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: {
                value: ''
            },
            username: {
                value: ''
            },
            email: {
                value: ''
            },
            password: {
                value: ''
            }
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateUsernameAvailability = this.validateUsernameAvailability.bind(this);
        this.validateEmailAvailability = this.validateEmailAvailability.bind(this);
        this.isFormInvalid = this.isFormInvalid.bind(this);
    }

    handleInputChange(event, validationFun) {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        this.setState({
            [inputName]: {
                value: inputValue,
                ...validationFun(inputValue)
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const signupRequest = {
            name: this.state.name.value,
            email: this.state.email.value,
            username: this.state.username.value,
            password: this.state.password.value
        };
        signup(signupRequest)
            .then(response => {
                notification.success({
                    message: 'Integrador CMS',
                    description: "¡Gracias! Estás registrado con éxito. ¡Por favor inicie sesión para continuar!",
                });
                this.props.history.push("/login");
            }).catch(error => {
                notification.error({
                    message: 'Integrador CMS',
                    description: error.message || '¡Lo siento! Algo salió mal. ¡Inténtalo de nuevo!'
                });
            });
    }

    isFormInvalid() {
        return !(this.state.name.validateStatus === 'success' &&
            this.state.username.validateStatus === 'success' &&
            this.state.email.validateStatus === 'success' &&
            this.state.password.validateStatus === 'success'
        );
    }

    render() {
        return (
            <div className="login-container">
                 <img 
                    src={ico} 
                    className="logo_app"
                    alt="icono de la aplicacion"/>
                <div className="formulario mb-5">
                <Container>
                    <section className="form-elegant">
                        <Row>
                            <Col md="10">
                                <Card>
                                    <CardBody className="mx-5">
                                        <div className="text-center">
                                            <h3 className="text-uppercase text-primary my-5 "><strong>Registrate</strong></h3>
                                        </div>
                                        <div>
                                            <Form onSubmit={this.handleSubmit} className="signup-form">
                                                <FormItem
                                                    validateStatus={this.state.name.validateStatus}
                                                    help={this.state.name.errorMsg}>
                                                    <Input
                                                        name="name"
                                                        autoComplete="off"
                                                        className="form-control mb-5"
                                                        placeholder="Ingrese su nombre completo"
                                                        value={this.state.name.value}
                                                        onChange={(event) => this.handleInputChange(event, this.validateName)} />
                                                </FormItem>
                                                <FormItem 
                                                    hasFeedback
                                                    validateStatus={this.state.username.validateStatus}
                                                    help={this.state.username.errorMsg}>
                                                    <Input
                                                        className="form-control mb-5"
                                                        name="username"
                                                        autoComplete="off"
                                                        placeholder="Ingrese su usuario"
                                                        value={this.state.username.value}
                                                        onBlur={this.validateUsernameAvailability}
                                                        onChange={(event) => this.handleInputChange(event, this.validateUsername)} />
                                                </FormItem>
                                                <FormItem
                                                    hasFeedback
                                                    validateStatus={this.state.email.validateStatus}
                                                    help={this.state.email.errorMsg}>
                                                    <Input
                                                        className="form-control mb-5"
                                                        name="email"
                                                        type="email"
                                                        autoComplete="off"
                                                        placeholder="Ingrese su Correo"
                                                        value={this.state.email.value}
                                                        onBlur={this.validateEmailAvailability}
                                                        onChange={(event) => this.handleInputChange(event, this.validateEmail)} />
                                                </FormItem>
                                                <FormItem
                                                    validateStatus={this.state.password.validateStatus}
                                                    help={this.state.password.errorMsg}>
                                                    <Input
                                                         className="form-control mb-5"
                                                        name="password"
                                                        type="password"
                                                        autoComplete="off"
                                                        placeholder="Ingrese su Contraseña"
                                                        value={this.state.password.value}
                                                        onChange={(event) => this.handleInputChange(event, this.validatePassword)} />
                                                </FormItem>
                                                <FormItem>
                                                    <Button 
                                                        type="primary"
                                                        htmlType="submit"
                                                        className="btn btn-primary btn-block"
                                                        disabled={this.isFormInvalid()}>Registrarme</Button>
                                                </FormItem>
                                            </Form>
                                        </div>
                                    </CardBody>
                                    <ModalFooter className="mx-5 pt-3 mb-1">
                                        <p className="font-small grey-text d-flex justify-content-end">O <a href="/login" className="blue-text ml-1"> Inicia Sesión</a></p>
                                    </ModalFooter>
                                </Card>
                            </Col>
                        </Row>
                    </section>
                </Container>
                </div>
            </div>
        );
    }

    // Validation Functions

    validateName = (name) => {
        if (name.length < NAME_MIN_LENGTH) {
            return {
                validateStatus: 'error',
                errorMsg: `el nombre es muy corto (Minimum ${NAME_MIN_LENGTH} characters needed.)`
            }
        } else if (name.length > NAME_MAX_LENGTH) {
            return {
                validationStatus: 'error',
                errorMsg: `el nombre es muy largo (Maximum ${NAME_MAX_LENGTH} characters allowed.)`
            }
        } else {
            return {
                validateStatus: 'success',
                errorMsg: null,
            };
        }
    }

    validateEmail = (email) => {
        if (!email) {
            return {
                validateStatus: 'error',
                errorMsg: 'El correo electrónico no puede estar vacío'
            }
        }

        const EMAIL_REGEX = RegExp('[^@ ]+@[^@ ]+\\.[^@ ]+');
        if (!EMAIL_REGEX.test(email)) {
            return {
                validateStatus: 'error',
                errorMsg: 'Email no válido'
            }
        }

        if (email.length > EMAIL_MAX_LENGTH) {
            return {
                validateStatus: 'error',
                errorMsg: `El correo electrónico es demasiado largo(Maximum ${EMAIL_MAX_LENGTH} characters allowed)`
            }
        }

        return {
            validateStatus: null,
            errorMsg: null
        }
    }

    validateUsername = (username) => {
        if (username.length < USERNAME_MIN_LENGTH) {
            return {
                validateStatus: 'error',
                errorMsg: `El nombre de usuario es demasiado corto (Minimum ${USERNAME_MIN_LENGTH} characters needed.)`
            }
        } else if (username.length > USERNAME_MAX_LENGTH) {
            return {
                validationStatus: 'error',
                errorMsg: `El nombre de usuario es demasiado largo (Maximum ${USERNAME_MAX_LENGTH} characters allowed.)`
            }
        } else {
            return {
                validateStatus: null,
                errorMsg: null
            }
        }
    }

    validateUsernameAvailability() {
        // First check for client side errors in username
        const usernameValue = this.state.username.value;
        const usernameValidation = this.validateUsername(usernameValue);

        if (usernameValidation.validateStatus === 'error') {
            this.setState({
                username: {
                    value: usernameValue,
                    ...usernameValidation
                }
            });
            return;
        }

        this.setState({
            username: {
                value: usernameValue,
                validateStatus: 'validating',
                errorMsg: null
            }
        });

        checkUsernameAvailability(usernameValue)
            .then(response => {
                if (response.available) {
                    this.setState({
                        username: {
                            value: usernameValue,
                            validateStatus: 'success',
                            errorMsg: null
                        }
                    });
                } else {
                    this.setState({
                        username: {
                            value: usernameValue,
                            validateStatus: 'error',
                            errorMsg: 'Este nombre de usuario ya está en uso'
                        }
                    });
                }
            }).catch(error => {
                // Marking validateStatus as success, Form will be recchecked at server
                this.setState({
                    username: {
                        value: usernameValue,
                        validateStatus: 'success',
                        errorMsg: null
                    }
                });
            });
    }

    validateEmailAvailability() {
        // First check for client side errors in email
        const emailValue = this.state.email.value;
        const emailValidation = this.validateEmail(emailValue);

        if (emailValidation.validateStatus === 'error') {
            this.setState({
                email: {
                    value: emailValue,
                    ...emailValidation
                }
            });
            return;
        }

        this.setState({
            email: {
                value: emailValue,
                validateStatus: 'validating',
                errorMsg: null
            }
        });

        checkEmailAvailability(emailValue)
            .then(response => {
                if (response.available) {
                    this.setState({
                        email: {
                            value: emailValue,
                            validateStatus: 'success',
                            errorMsg: null
                        }
                    });
                } else {
                    this.setState({
                        email: {
                            value: emailValue,
                            validateStatus: 'error',
                            errorMsg: 'Este correo electrónico ya está registrado'
                        }
                    });
                }
            }).catch(error => {
                // Marking validateStatus as success, Form will be recchecked at server
                this.setState({
                    email: {
                        value: emailValue,
                        validateStatus: 'success',
                        errorMsg: null
                    }
                });
            });
    }

    validatePassword = (password) => {
        if (password.length < PASSWORD_MIN_LENGTH) {
            return {
                validateStatus: 'error',
                errorMsg: `La contraseña es demasiado corta (Minimum ${PASSWORD_MIN_LENGTH} characters needed.)`
            }
        } else if (password.length > PASSWORD_MAX_LENGTH) {
            return {
                validationStatus: 'error',
                errorMsg: `La contraseña es demasiado larga (Maximum ${PASSWORD_MAX_LENGTH} characters allowed.)`
            }
        } else {
            return {
                validateStatus: 'success',
                errorMsg: null,
            };
        }
    }

}

export default Signup;