// Class Component implementation
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Button, Col, Container, Form,
    FormGroup, Input, Label, Row, Toast, ToastHeader
} from 'reactstrap';
import './SignUp.scss';

class SignUpComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            regForm: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''
            },
            show: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.onRegister = this.onRegister.bind(this);
    }
    handleChange(e) {
        const regForm = this.state.regForm;
        regForm[e.target.name] = e.target.value;
        this.setState({ regForm })
    }
    onRegister() {
        const registeredUsers = localStorage.getItem('regUsers') ? JSON.parse(localStorage.getItem('regUsers')) : [];
        if (this.state.regForm.email && this.state.regForm.password) {
            registeredUsers.push(this.state.regForm)
            localStorage.setItem('regUsers', JSON.stringify(registeredUsers));
            this.setState({ show: true })
        }
    }
    render() {
        const { regForm } = this.state;
        return (
            <Container className="signup-form">
                <Form>
                    <h2>Register</h2>
                    <p class="hint-text">Create your account. It's free and only takes a minute.</p>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    value={regForm.firstName}
                                    onChange={(e) => this.handleChange(e)}
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    value={regForm.lastName}
                                    onChange={(e) => this.handleChange(e)}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={regForm.email}
                            onChange={(e) => this.handleChange(e)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={regForm.password}
                            onChange={(e) => this.handleChange(e)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={regForm.confirmPassword}
                            onChange={(e) => this.handleChange(e)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>
                            <Input type="checkbox" /> I accept the
                            <a href="#">Terms of Use</a> &amp; &nbsp;
                            <a href="#">Privacy Policy</a>
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" size="lg" block onClick={this.onRegister}>Register Now</Button>
                    </FormGroup>
                </Form>
                <div class="text-center">
                    Already have an account? <Link to={'/login'}>Sign in</Link>
                </div>
                <Toast isOpen={this.state.show}>
                    <ToastHeader icon="success" toggle={() => this.setState({ show: !this.state.show })}>Registered Successfully!</ToastHeader>
                </Toast>
            </Container>
        );
    }
}

export default SignUpComponent;