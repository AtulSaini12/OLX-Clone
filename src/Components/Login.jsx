import React from "react";
import { FaGithub, FaGooglePlusG } from "react-icons/fa";
function Login() {
  return (
    <div className="login-page">
      <div className="login-logo-image">
        <img src="" alt="logo-image" />
      </div>
      <div className="login-options">
        <div className="login-with-google">
          <FaGooglePlusG /> Login With Google
        </div>
        <div className="login-with-github">
          <FaGithub /> Login With Github
        </div>
      </div>
    </div>
  );
}

export default Login;
