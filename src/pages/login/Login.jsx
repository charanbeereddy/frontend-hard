// Functional Component implementation
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {
  Button, Col, Container, Form,
  FormGroup, Input, Label, Toast, ToastHeader
} from 'reactstrap';
import { loginUser, useAuthDispatch, useAuthState } from '../../Context';
import './Login.scss';

function LoginComponent(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  const dispatch = useAuthDispatch();
  const { loading } = useAuthState();

  const toggle = () => setShow(!show);
  const onLogin = async (e) => {
    // e.preventDefault();
    // sessionStorage.setItem("user", 'Tester 1');
    // this.props.history.push("/products");
    try {
      let response = await loginUser(dispatch, { user: { email, password } });
      if (!response.user) return;
      const registeredUsers = localStorage.getItem('regUsers') ? JSON.parse(localStorage.getItem('regUsers')) : [];
      if (registeredUsers && registeredUsers.length && registeredUsers.find(itm => itm.email === response.user.email && itm.password === response.user.password)) {
        localStorage.setItem('currentUser', JSON.stringify(response.user));
        props.history.push('/products');
        setShow(false);
      } else {
        setShow(true);
      }
    } catch (error) {
      setShow(true);
    }
  }
  return (
    <Container className="login-form">
      <Form>
        <h2 className="text-center">Log In</h2>
        <Col>
          <FormGroup>
            <Input
              type="email"
              name="email"
              placeholder="Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Button color="primary" size="lg" block onClick={onLogin} disabled={loading}>Log in</Button>
          </FormGroup>
        </Col>
        <Col>
          <Label className="float-left form-check-label">
            <Input type="checkbox" /> Remember me
            </Label>
          <a href="#" className="float-right">Forgot Password?</a>
        </Col>
      </Form>
      <p className="text-center"><Link to={'/sign-up'}>Create an Account</Link></p>
      <Toast isOpen={show}>
        <ToastHeader icon="danger" toggle={toggle}>Invalid Credentials</ToastHeader>
      </Toast>
    </Container>
  );
}

export default LoginComponent;