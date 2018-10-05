import React, { Component } from "react";
import { fbsConfig } from "../../Config/ConfigFB";
import { Nav, Col, Row } from "react-bootstrap";
import './nav.css'

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    fbsConfig.auth().signOut();
  }

  render() {
    return (
      <Nav className="bg">
        <Row>
          <Col xs={8} xsOffset={1}>
            <h4 className="bee">BeeMom</h4>
          </Col>
          <Col xs={2}>
            <p onClick={this.logout} className="exit"><i className="fas fa-sign-out-alt"></i></p>
          </Col>
        </Row>
      </Nav>
    );
  }
}

export default NavBar;
