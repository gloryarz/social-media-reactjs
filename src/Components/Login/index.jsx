import React, { Component } from 'react';
import {fbsConfig} from '../../Config/ConfigFB';
import firebase from 'firebase';
import {
  Row,
  Form,
  FormGroup,
  Col,
  ControlLabel,
  FormControl,
  Button,
  Grid
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
      email: '',
      password: ''
    };
  }

  
  handleChange(el) {
    this.setState({ [el.target.name]: el.target.value });
  }

  login(el) {
    el.preventDefault();
    fbsConfig.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });
  }

  signup(el){
    el.preventDefault();
    fbsConfig.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
      }) 
  }

    handleGoogleLogin() {
        const provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider)
            .then((resp) => {console.log(resp)})
            .catch(err => {console.log(err)});
      }
  

  render() {
    return (
      <div className="Login">
        <Grid>
          <Row>
            <Col xs={8} xsOffset={2}>
              <img src={logo} alt="" className="App-logo" />
              <h1>BeeMom</h1>
            </Col>
          </Row>

          <Row>
            <Col xs={10} md={8} lg={6} xsOffset={1} mdOffset={2} lgOffset={3}>
            <Form horizontal>
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                </Col>
                <Col sm={10}>
                  <FormControl value={this.state.email} onChange={this.handleChange} type="email" name="email" id="exampleInputEmail1" placeholder="Email" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                </Col>
                <Col sm={10}>
                  <FormControl value={this.state.password} onChange={this.handleChange} type="password" name="password" id="exampleInputPassword1" placeholder="Password"/>
                </Col>
              </FormGroup>
              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button type="submit" className="pink" onClick={this.login}>
                    Iniciar Sesión
                  </Button>
                </Col>
              </FormGroup>
              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button type="submit" className="pink" onClick={this.signup} >
                    Registrar
                  </Button>
                </Col>
              </FormGroup>
              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button type="button" className="pink"
                  onClick={ this.handleGoogleLogin}>
                    Google
                  </Button>
                </Col>
              </FormGroup>
            </Form>
            </Col>
          </Row>
        </Grid>
 </div>
 
    );
  }
}
export default Login;