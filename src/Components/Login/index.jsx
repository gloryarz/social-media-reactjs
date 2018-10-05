import React, { Component } from "react";
import { fbsConfig } from "../../Config/ConfigFB";
import firebase from "firebase";
import {
  Row,
  Form,
  Col,
  FormControl,
  Button,
  Grid,
  Image
} from "react-bootstrap";
import logo from "../Login/beeMom.svg";
import "../Login/login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange(el) {
    this.setState({ [el.target.name]: el.target.value });
  }

  login(el) {
    el.preventDefault();
    fbsConfig
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .catch(error => {
        console.log(error);
      });
  }

  signup(el) {
    el.preventDefault();
    fbsConfig
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .then(u => {
        console.log(u);
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleGoogleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(resp => {
        console.log(resp);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="Login">
        <Grid>
          <Row>
            <Col xs={8} xsOffset={2} sm={8} smOffset={4} md={8} mdOffset={5}
            className="logo">
              <Image src={logo} alt="bee" className="bee" responsive></Image>
              <h1>BeeMom</h1>
            </Col>
          </Row>
          <Form horizontal>
                <Col xs={12} md={8} mdOffset={2} lg={6} lgOffset={3}>
                  <FormControl value={this.state.email} onChange={this.handleChange} 
                  type="email" name="email" id="exampleInputEmail1" placeholder="Email" 
                  className="social inputs"/>
                </Col>

                <Col xs={12} md={8} mdOffset={2} lg={6} lgOffset={3}>
                  <FormControl value={this.state.password} onChange={this.handleChange} 
                  type="password" name="password" id="exampleInputPassword1" placeholder="Password"
                  className="social inputs"/>
                </Col>
  
                <Col xs={12} md={8} mdOffset={2} lg={6} lgOffset={3}>
                  <Button type="submit" className="pink" onClick={this.login}>
                    Iniciar Sesión
                  </Button>
                </Col>
  
  
                <Col sm={12} md={8} mdOffset={2} lg={6} lgOffset={3}>
                  <Button type="submit" className="pink" onClick={this.signup} >
                    Registrar
                  </Button>
                </Col>
  
                <Col xs={12} md={8} mdOffset={2} lg={6} lgOffset={3}>
                  <Button type="button" className="social"
                  bsStyle="danger"
                  onClick={ this.handleGoogleLogin}>
                    Iniciar con Google
                  </Button>
                  </Col>

            </Form>
        </Grid>
      </div>
    );
  }
}
export default Login;
