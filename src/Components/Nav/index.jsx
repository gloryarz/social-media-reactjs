import React, { Component } from "react";
import { fbsConfig } from "../../Config/ConfigFB";
import { Nav, NavItem } from "react-bootstrap";

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
      <Nav>
        <NavItem>
          <p>Home</p>
        </NavItem>
        <NavItem>
          <p>Perfil</p>
        </NavItem>
        <NavItem>
          <p onClick={this.logout}><i class="fas fa-sign-out-alt"></i></p>
        </NavItem>
      </Nav>
    );
  }
}

export default NavBar;
