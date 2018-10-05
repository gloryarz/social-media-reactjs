import React, { Component } from "react";

const btnLogin = () => {
    alert("log clicked");
  };

const btnSign = () => {
  alert("sign clicked");
};

const btnGoogle = () => {
  alert("google clicked");
};

const btnFb = () => {
  alert("fb clicked");
};

class LoginBtn extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="LoginBtn">
        <section id="buttons">
          <button onClick={btnLogin }>Iniciar Sesión</button>
          <button onClick={btnSign}>Registrar</button>
          <button onClick={btnGoogle}>Iniciar con Google</button>
          <button onClick={btnFb}>Iniciar con Facebook</button>
        </section>
        <LoginForm />
      </div>
    );
  }
}

export default LoginBtn;
