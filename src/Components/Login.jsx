import React from "react";
import { FaGithub, FaGooglePlusG } from "react-icons/fa";
function Login() {
  return (
    <div className="login-full">
      <div className="login-page">
        <div className="login-logo-image">
          <img src="" alt="logo-image" />
        </div>
        <div className="login-options">
          <div className="login-with-google login-with">
            <FaGooglePlusG className="icon-login" /> <p>Login With Google</p>
          </div>
          <div className="login-with-github login-with">
            <FaGithub className="icon-login" /> <p>Login With Github</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
