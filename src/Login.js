import React from "react";
import Logo from "./img/Spotify__logo.jpg";
import "./Login.css";
import { loginUrl } from "./spotify";
function Login() {
  return (
    <div className="login">
      <img src={Logo} alt="Spotify" className="login__logo" />
      <a className="login__btn" href={loginUrl}>
        Login with spotify
      </a>
    </div>
  );
}

export default Login;
